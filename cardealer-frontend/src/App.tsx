import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";

const App = () => {

  return (
    <>
      <h1>Welome to Car Dealer!</h1>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
