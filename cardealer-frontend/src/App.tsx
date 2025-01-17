import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import 'bootstrap/dist/js/bootstrap.min.js';
import NavBar from "./components/NavBar";
import Register from "./components/Register";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import AddInventory from "./components/Inventory/AddInventory";
import ProtectedRoute from "./components/ProtectedRoute";
import Inventory from "./components/Inventory/Inventory";
import Account from "./components/Account";

const App = () => {
  const [token, setToken] = useState<string>("");
  const [isSuperUser, setIsSuperUser] = useState<boolean>(false)

  return (
    <>
    <NavBar token={token} isSuperUser={isSuperUser}/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/inventory" element={<Inventory/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login token={token} setToken={setToken} setIsSuperUser={setIsSuperUser}/>} />
        <Route path="/addinventory" element={<ProtectedRoute component={AddInventory} isSuperUser={isSuperUser}/>} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </>
  )
}

export default App