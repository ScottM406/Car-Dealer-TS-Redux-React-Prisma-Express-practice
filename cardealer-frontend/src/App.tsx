import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";

const App = () => {

  return (
    <>
      <h1>Welome to Car Dealer!</h1>
      <Routes>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </>
  )
}

export default App
