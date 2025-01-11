import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import Register from "./components/Register";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import AddInventory from "./components/AddInventory";
import ProtectedRoute from "./components/ProtectedRoute";
import Inventory from "./components/view_inventory/inventory";

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
      </Routes>
    </>
  )
}

export default App