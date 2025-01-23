import { useState, useEffect, SetStateAction, Dispatch } from "react"
import VehiclePopover from "./Inventory/VehiclePopover"

interface UserInfo {
  email: string
  watchlist:  { id: number, userID: number }
}

interface AccountProps {
  userInfo: UserInfo | null
  setUserInfo: Dispatch<SetStateAction<UserInfo | null>>
  userID: number
  token: string
}

const Account: React.FC<AccountProps> = ({ userInfo, setUserInfo, userID, token }) => {
  const [watchlist, setWatchlist] = useState<Array<object> | null>(null);

  useEffect(() => {
    const getUserInfo = async () => {
      const response = await fetch(`http://localhost:3000/users/${userID}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const responseJSON = await response.json();
      setUserInfo(responseJSON);
    }
    getUserInfo();
  }, [])

  useEffect(() => {
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
  }, [userInfo])

  console.log(watchlist)

  return (
    <>
    <section id="account-header-block">
      <h2>Your Account</h2>
      <p>{userInfo?.email}</p>
    </section>
      <h2 id="watchlist-header">Watchlist</h2>
      {watchlist?.map((vehicle: any) => (
        <div key={vehicle.CarsOnLot.id} className="single-vehicle-inventory-container">
          <VehiclePopover
          id={vehicle.CarsOnLot.id}
          headline={vehicle.CarsOnLot.headline}
          description={vehicle.CarsOnLot.description}
          image={vehicle.CarsOnLot.image}
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
          />
        </div>
      ))}
    </>
  )
}

export default Account

