import { Routes, Route, Link } from "react-router-dom"
import AddInventory from "./AddInventory";

const AdminToolkit = () => {

  return (
    <>
      <Routes>
        <Route path="addinventory" element={<AddInventory />} />
      </Routes>

    <div id="admin-toolkit-block">
      <h1>Test</h1>
      <Link to="addinventory">Add Inventory</Link>
    </div>
    </>
  )
}

export default AdminToolkit;