import { useState, useEffect } from "react"

interface AccountProps {
  userID: number
  token: string
}

interface UserInfo {
  email: string
  watchlist: object[]
  
}

const Account: React.FC<AccountProps> = ({ userID, token }) => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  useEffect(() => {
    const getUserInfo = async () => {
      const response = await fetch(`http://localhost:3000/users/${userID}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const responseJSON = await response.json();
      console.log(responseJSON)
      setUserInfo(responseJSON);
    }
    getUserInfo();
  }, [])

  return (
    <>
      <h1>TEST</h1>
      <h2>{userInfo?.email}</h2>
      {/* {userInfo?.watchlist.map((vehicle) => (

      )} */}
    </>
  )
}

export default Account