import { useEffect, useImperativeHandle, useRef, forwardRef } from 'react';
import { Popover, Carousel } from 'bootstrap';

const backendURL = import.meta.env.VITE_BACKEND_URL
console.log(backendURL)

export interface VehiclePopoverHandle {
  hidePopover: () => void;
}
interface UserInfo {
  id: number,
  email: string,
  watchlist: { id: number, userID: number, cars: Array<{ carsOnLotID: number, watchlistID: number }> }
}

interface UserProps {
  userInfo: UserInfo | null;
  token: string;
  userID: number;
}

interface VehicleProps {
  id: number;
  headline: string;
  description: string;
  images: string[];
  year: number;
  miles: number;
  drivetrain: string;
  engine: string;
  color: string;
  MPG_city: number;
  MPG_highway: number;
  makeName: string;
  modelName: string;
  features: any;
  price: number;
}

const VehiclePopover = forwardRef<VehiclePopoverHandle, VehicleProps & UserProps>(({ userInfo, token, id, headline, description, images, year, miles, drivetrain, engine, color, MPG_city, MPG_highway, makeName, modelName, features, price }, ref) => {
  const popoverRef = useRef<HTMLDivElement>(null);
  const watchlistCarIDs = new Set(userInfo?.watchlist?.cars?.map(car => car.carsOnLotID));

  useImperativeHandle(ref, () => ({
    hidePopover() {
      if (popoverRef.current) {
        const popoverInstance = Popover.getInstance(popoverRef.current);
        if (popoverInstance) {
          popoverInstance.hide();
        }
      }
    }
  }));

  useEffect(() => {
    const popover = new Popover(popoverRef.current as Element, {
      trigger: 'manual',
      delay: { show: 750, hide: 0 },
      html: true,
      content: `
        <div class="vehicle-popover-container">
          <div class="vehicle-popover-header">
            <strong>${year} ${makeName} ${modelName}</strong>
            <p>Stock Number: ${id}</p>
          </div>
          <div class="vehicle-popover-body">
            <p><strong>$${price}</strong></p>
            <strong>Odometer:</strong> <p>${miles} mi</p>
            <strong>Drivetrain:</strong> <p>${drivetrain}</p>
            <strong>Engine:</strong> <p>${engine}</p>
            <strong>Color:</strong> <p>${color}</p>
            <strong>MPG:</strong> <p>${MPG_city}/${MPG_highway}</p>
          </div>
        </div>
      `
    });

    const showPopover = () => popover.show();
    const hidePopover = () => popover.hide();

    popoverRef.current?.addEventListener('mouseenter', showPopover);
    popoverRef.current?.addEventListener('mouseleave', hidePopover);

    return () => {
      if (popoverRef.current) {
        popoverRef.current?.removeEventListener('mouseenter', showPopover);
        popoverRef.current?.removeEventListener('mouseleave', hidePopover);
        popover.dispose();
      }
    };
  }, [headline, description, images, year, miles, drivetrain, engine, color, MPG_city, MPG_highway, makeName, modelName, features, price]);

  const addCarToWatchlist = async (event: React.MouseEvent) => {
    event.stopPropagation();

    if (token) {
      if (userInfo?.watchlist?.id) {
        try {
          const response = await fetch(`http://localhost:3000/watchlists/${userInfo?.watchlist.id}`, {
            method: "POST",
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              carID: id
            })
          });

          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message);
          }
        } catch (e: any) {
          alert(e.message || "Something has gone wrong. Please try again later");
        }
      } else {
        try {
          const response = await fetch(`http://localhost:3000/watchlists`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              userID: userInfo?.id,
              carID: id
            })
          });

          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message);
          }
        } catch (e: any) {
          alert(e.message || "Something has gone wrong. Please try again later.");
        }
      }
    } else {
      alert("Please log in to add cars to your watchlist");
    }
  };

  const removeCarFromWatchlist = async (event: React.MouseEvent) => {
    event.stopPropagation();

    try {
      const response = await fetch(`http://localhost:3000/watchlists/${userInfo?.watchlist.id}`, {
        method: "DELETE",
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          carID: id
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
    } catch (e: any) {
      alert(e.message || "Something has gone wrong. Please try again later");
    }
  };

  const stopPropagation = (event: React.MouseEvent) => {
    event.stopPropagation();
  }
  
  return (
    <div ref={popoverRef} data-bs-toggle="popover">
      <div id={`carouselIndicatorFor${id}`} className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators" style={{ listStyle: 'none' }}>
          {images.map((_image: string, index: any) => (
            <li 
            key={index} 
            data-bs-target={`#carouselIndicatorFor${id}`} 
            data-bs-slide-to={index} 
            className={index === 0 ? "active" : ""} 
            onClick={stopPropagation}
            >
            </li>
          ))}
        </ol>
        <div className ="carousel-inner">
          {images.map((image: string, index: number) => (
            <div key={index} className={index === 0 ? "carousel-item active" : "carousel-item"}>
              <img className="d-block w-100" src={`${backendURL}/${image}`} style={{ width: "95%", height: "250px" }} alt={headline} />
            </div>
          ))}
        </div>
        <a className="carousel-control-prev" href={`#carouselIndicatorFor${id}`} role="button" data-bs-slide="prev" onClick={stopPropagation}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a className="carousel-control-next" href={`#carouselIndicatorFor${id}`} role="button" data-bs-slide="next" onClick={stopPropagation}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
      <h3>{headline}</h3>
      <h4>${price}</h4>
      {watchlistCarIDs.has(id) ?
        <section className="watching-car-label">
          <p>WATCHING</p>
          <button className='remove-from-watchlist-button' onClick={removeCarFromWatchlist}>X</button>
        </section>
        : <button onClick={addCarToWatchlist}>Add To Watchlist</button>}
    </div>
  );
});

export default VehiclePopover;