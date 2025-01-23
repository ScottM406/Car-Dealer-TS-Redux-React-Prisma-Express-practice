import { useState, useEffect } from "react"

interface AccountProps {
  userID: number
  token: string
}

interface UserInfo {
  email: string
  watchlist:  { id: number, userID: number }
}

const Account: React.FC<AccountProps> = ({ userID, token }) => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
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
      const response = await fetch(`http://localhost:3000/watchlists/${userInfo?.watchlist.id}`)
      const responseJSON = await response.json();
      setWatchlist(responseJSON.cars)
    }
    getWatchlist();
  }, [userInfo])

  return (
    <>
    <section id="account-header-block">
      <h2>Your Account</h2>
      <p>{userInfo?.email}</p>
    </section>
      <h2 id="watchlist-header">Watchlist</h2>
      {watchlist?.map((vehicle: any) => (
        <div className="single-vehicle-inventory-container" key={vehicle.CarsOnLot.id}>
          <img src={vehicle.CarsOnLot.image} style={{ width:"400px", height: "250px" }} />
          <h5>{vehicle.CarsOnLot.headline}</h5>
          <h4>${vehicle.CarsOnLot.price}</h4>
        </div>
      ))}
    </>
  )
}

export default Account