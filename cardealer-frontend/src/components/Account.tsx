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
      <h2>{userInfo?.email}</h2>
      <h2>Watchlist</h2>
      {watchlist?.map((vehicle: any) => (
        <div key={vehicle.CarsOnLot.id}>
          <img src={vehicle.CarsOnLot.image} style={{ width:"400px", height: "250px" }} />
          <h5>{vehicle.CarsOnLot.headline}</h5>
          <h4>${vehicle.CarsOnLot.price}</h4>
        </div>
      ))}
    </>
  )
}

export default Account