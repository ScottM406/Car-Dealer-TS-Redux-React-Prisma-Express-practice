import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Register from "./components/Register";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import AddInventory from "./components/AddInventory";

const App = () => {
  const [token, setToken] = useState<string>("");
  const [isSuperUser, setIsSuperUser] = useState<boolean>(false)
  console.log(isSuperUser);

  return (
    <>
    <NavBar token={token} isSuperUser={isSuperUser}/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login token={token} setToken={setToken} setIsSuperUser={setIsSuperUser}/>} />
        <Route path="/addinventory" element={<AddInventory />} />
      </Routes>
    </>
  )
}

export default App