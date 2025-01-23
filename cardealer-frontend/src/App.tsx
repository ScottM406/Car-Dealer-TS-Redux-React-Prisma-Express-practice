import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import 'bootstrap/dist/js/bootstrap.min.js';
import NavBar from "./components/NavBar";
import Register from "./components/Register";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import AddInventory from "./components/inventory/AddInventory.tsx";
import ProtectedRoute from "./components/ProtectedRoute";
import Inventory from "./components/inventory/Inventory.tsx";
import Account from "./components/Account";
import Banner from "./components/Banner.tsx";

interface UserInfo {
  email: string
  watchlist:  { id: number, userID: number }
}

const App = () => {
  const [token, setToken] = useState<string>("");
  const [userInfo, setUserInfo] =useState<UserInfo | null>(null)
  const [userID, setUserID] = useState<number>(0)
  const [isSuperUser, setIsSuperUser] = useState<boolean>(false)

  return (
    <>
    <NavBar token={token} isSuperUser={isSuperUser}/>
    <Banner />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/inventory" element={<Inventory userInfo={userInfo} token={token} userID={userID} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login token={token} setToken={setToken} setUserID={setUserID} setIsSuperUser={setIsSuperUser}/>} />
        <Route path="/addinventory" element={<ProtectedRoute component={AddInventory} isSuperUser={isSuperUser}/>} />
        <Route path="/account" element={<Account userInfo={userInfo} setUserInfo={setUserInfo} userID={userID} token={token} />} />
      </Routes>
    </>
  )
}

export default App