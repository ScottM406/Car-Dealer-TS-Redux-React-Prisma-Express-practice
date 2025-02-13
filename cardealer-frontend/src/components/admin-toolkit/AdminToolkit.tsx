import { Routes, Route, Link, useLocation } from "react-router-dom";
import React, { useMemo } from "react";
import AddInventory from "./AddInventory";
import AddMake from "./AddMake";
import AddModel from "./AddModel";
import VehicleDatabase from "./VehicleDatabase";
import ShowingRequests from "./ShowingRequests";

interface Props {
  token: string;
  isSuperUser: boolean;
}

const AdminToolkit: React.FC<Props> = ({ token, isSuperUser }) => {
  const location = useLocation();
  const basePath =  useMemo(() => {
    return location.pathname.split('/').slice(0, 2).join('/');
  }, [location.pathname]);

  return (
    <>
      <div id="admin-toolkit-block">
        <h1>Admin Tool Kit</h1>
        <Link to={`${basePath}/addinventory`}>Add Inventory</Link>
        <Link to={`${basePath}/addmake`}>Add Make</Link>
        <Link to={`${basePath}/addmodel`}>Add Model</Link>
        <div>
          <Link to={`${basePath}/vehicledatabase`}>View Vehicle Database</Link>
          <Link to={`${basePath}/showingrequests`}>View Showing Requests</Link>
        </div>
      </div>

      <Routes>
        <Route path="addinventory" element={<AddInventory />} />
        <Route path="addmake" element={<AddMake />} />
        <Route path="addmodel" element={<AddModel />} />
        <Route path="vehicledatabase" element={<VehicleDatabase />} />
        <Route path="showingrequests" element={<ShowingRequests token={token} isSuperUser={isSuperUser}/>}/>
      </Routes>
    </>
  );
};

export default React.memo(AdminToolkit);