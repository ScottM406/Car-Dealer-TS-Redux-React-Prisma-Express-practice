import { useEffect, useRef } from 'react';
import { Popover } from 'bootstrap';

interface UserInfo {
  email: string
  watchlist:  { id: number, userID: number, cars: Array<{ carsOnLotID: number, watchlistID: number }> }
}

interface UserProps {
  userInfo: UserInfo | null
  token: string
  userID: number
}

interface VehicleProps {
  id: number;
  headline: string;
  description: string
  image: string
  year: number
  miles: number
  drivetrain: string
  engine: string
  color: string
  MPG_city: number
  MPG_highway: number
  makeName: string
  modelName: string
  features: any
  price: number
}

const VehiclePopover: React.FC<VehicleProps & UserProps> = ({ userInfo, token, id, headline, description, image, year, miles, drivetrain, engine, color, MPG_city, MPG_highway, makeName, modelName, features, price}) => {
  const popoverRef = useRef<HTMLDivElement>(null);
  const watchlistCarIDs = new Set(userInfo?.watchlist.cars?.map(car => car.carsOnLotID));

  useEffect(() => {
    const popover = new Popover(popoverRef.current as Element, {
      trigger: 'manual',
      delay: { show: 750, hide: 0},
      html: true,
      content: `
        <div class="vehicle-popover-container">
          <div class="vehicle-popover-header">
            <strong>${headline}</strong>
            <p>Stock Number: ${id}</p>
          </div>
          <div class="vehicle-popover-body">
            <img src=${image} />
            <p><strong>$${price}</strong></p>
            <p>Year: ${year}</p>
            <p>Odometer: ${miles} miles</p>
            <p>Drivetrain: ${drivetrain}</p>
            <p>Engine: ${engine}</p>
            <p>Color: ${color}</p>
            <p>MPG: ${MPG_city}/${MPG_highway}</p>
            <p>Make: ${makeName}</p>
            <p>Model: ${modelName}</p>
            <p>Features: ${features}</p>
            <p>${description}</p>
          </div>
        </div>
      `
    });

    const showPopover = () => popover.show();
    const hidePopover = () => popover.hide();

    popoverRef.current!.addEventListener('mouseenter', showPopover);
    popoverRef.current!.addEventListener('mouseleave', hidePopover);

    return () => {
      if (popoverRef.current) {
        popoverRef.current!.removeEventListener('mouseover', showPopover);
        popoverRef.current!.removeEventListener('mouseleave', hidePopover);
        popover.dispose();
      }
    };
  }, []);

  const addCarToWatchlist = async () => {

    if (token) {
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

      } catch(e: any) {
        alert(e.message || "Something has gone wrong. Please try again later");
      }
    } else {
    alert("Please log in to add cars to your watchlist")
    };
  };

  const removeCarFromWatchlist = async () => {
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

    } catch (e:any) {
      alert(e.message || "Something has gone wrong. Please try again later");
    }
  };

  return (
    <div ref={popoverRef} data-bs-toggle="popover">
      <img src={image} style={{ width:"95%", height: "250px" }} alt={headline} />
      <h3>{headline}</h3>
      <h4>${price}</h4>
      {watchlistCarIDs.has(id) ?
        <section className="watching-car-label">
          <p>WATCHING</p> 
          <button className='remove-from-watchlist-button' onClick={removeCarFromWatchlist}>X</button>
        </section>
        :<button onClick={addCarToWatchlist}>Add To Watchlist</button>}
    </div>
  )

}

export default VehiclePopover;