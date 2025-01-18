import { useEffect } from "react"

interface AccountProps {
  userID: number
  token: string
}
const Account: React.FC<AccountProps> = ({ userID, token }) => {

  useEffect(() => {
    const getUserInfo = async () => {
      const response = await fetch(`http://localhost:3000/users/${userID}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const userInfo = await response.json();
      console.log(userInfo)
    }
    getUserInfo();
  }, [])

  return (
    <h1>TEST</h1>
  )
}

export default Account