import { useState, useEffect, useRef } from "react"
import VehiclePopover, {VehiclePopoverHandle} from "../inventory/VehiclePopover"
import { useNavigate } from "react-router-dom"

interface UserInfo {
  email: string
  watchlist:  { id: number, userID: number }
}

interface AccountProps {
  userInfo: UserInfo | null
  userID: number
  token: string
}

const Account: React.FC<AccountProps> = ({ userInfo, userID, token }) => {
  const [watchlist, setWatchlist] = useState<Array<object> | null>(null);
  const VehiclePopoverRefs = useRef<{[key: number]: VehiclePopoverHandle | null}>({});
  const navigate = useNavigate();

  userInfo?.watchlist && useEffect(() => {
    const getWatchlist = async () => {
      const response = await fetch(`http://localhost:3000/watchlists/${userInfo?.watchlist.id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const responseJSON = await response.json();
      setWatchlist(responseJSON.cars)
    }
    getWatchlist();
  }, [userInfo.email])

  const navigateToSingleVehicle = (id: number) => {
    VehiclePopoverRefs.current[id]?.hidePopover();
    navigate(`../inventory/${id}`);
  }

  return (
    <>
    <section id="account-header-block">
      <h2>Your Account</h2>
      <p>{userInfo?.email}</p>
    </section>
      <h2 id="watchlist-header" className="whitesmoke-text">Watchlist</h2>
      <div id="account-watchlist">
        {watchlist?.map((vehicle: any) => (
          <div key={vehicle.CarsOnLot.id} className="single-vehicle-inventory-container" onClick={() => navigateToSingleVehicle(vehicle.CarsOnLot.id)}>
            <VehiclePopover
            id={vehicle.CarsOnLot.id}
            headline={vehicle.CarsOnLot.headline}
            description={vehicle.CarsOnLot.description}
            images={vehicle.CarsOnLot.images}
            year={vehicle.CarsOnLot.year}
            miles={vehicle.CarsOnLot.miles}
            drivetrain={vehicle.CarsOnLot.drivetrain}
            engine={vehicle.CarsOnLot.engine}
            color={vehicle.CarsOnLot.color}
            MPG_city={vehicle.CarsOnLot.MPG_city}
            MPG_highway={vehicle.CarsOnLot.MPG_highway}
            makeName={vehicle.CarsOnLot.makeName}
            modelName={vehicle.CarsOnLot.modelName}
            features={vehicle.CarsOnLot.features}
            price={vehicle.CarsOnLot.price}
            token={token}
            userID={userID}
            userInfo={userInfo}
            ref={el => VehiclePopoverRefs.current[vehicle.CarsOnLot.id] = el}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default Account