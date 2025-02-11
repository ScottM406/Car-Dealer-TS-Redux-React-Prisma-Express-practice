import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import NavBar from "./components/NavBar";
import Register from "./components/user/Register.tsx";
import Login from "./components/user/Login.tsx";
import LandingPage from "./components/LandingPage";
import AdminToolkit from "./components/admin-toolkit/AdminToolkit.tsx";
import ProtectedRoute from "./components/ProtectedRoute";
import Inventory from "./components/inventory/inventory.tsx";
import SingleVehiclePage from "./components/inventory/SingleVehiclePage";
import Account from "./components/user/Account";
import Banner from "./components/Banner.tsx";
import ChatBot from "./components/ChatBot.tsx";

interface UserInfo {
  id: number
  email: string
  watchlist: { id: number, userID: number, cars: Array<{ carsOnLotID: number, watchlistID: number }> }
}

const App = () => {
  const [token, setToken] = useState<string>("");
  const [userInfo, setUserInfo] =useState<UserInfo | null>(null)
  const [userID, setUserID] = useState<number>(0)
  const [isSuperUser, setIsSuperUser] = useState<boolean>(false)

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
    userID && getUserInfo();
  }, [token, userID, userInfo])

  return (
    <>
    <NavBar token={token} isSuperUser={isSuperUser}/>
    <Banner />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/inventory/" element={<Inventory userInfo={userInfo} token={token} userID={userID} />} />
        <Route path="inventory/:id" element={<SingleVehiclePage />}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login token={token} setToken={setToken} setUserID={setUserID} setIsSuperUser={setIsSuperUser}/>} />
        <Route path="/admintoolkit/*" element={<ProtectedRoute component={AdminToolkit} isSuperUser={isSuperUser}/>} />
        <Route path="/account" element={<Account userInfo={userInfo} userID={userID} token={token} />} />
      </Routes>
    <ChatBot />
    </>
  )
}

export default App