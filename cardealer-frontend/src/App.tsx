import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Register from "./components/Register";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import AddInventroy from "./components/AddInventory";

const App = () => {

  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addinventory" element={<AddInventroy />} />
      </Routes>
    </>
  )
}

export default App