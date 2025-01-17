import { useEffect } from "react"

const Account: React.FC = () => {

  useEffect(() => {
   const getUserInfo = async () => {
      const response = await fetch("https://localhost:3000/users:");
      const userinfo = await response.json();
    }
  }, [])

  return (
    <h1>TEST</h1>
  )
}

export default Account