import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Register from "./components/Register";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import AddInventory from "./components/AddInventory";

const App = () => {
  const [token, setToken] = useState<string>("");

  return (
    <>
    <NavBar token={token}/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login token={token} setToken={setToken}/>} />
        <Route path="/addinventory" element={<AddInventory />} />
      </Routes>
    </>
  )
}

export default App