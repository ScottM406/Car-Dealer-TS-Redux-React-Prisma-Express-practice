import { useParams } from "react-router-dom";
import { RootState, AppDispatch } from "../../state/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSpecificVehicle } from "../../state/singleVehicleSlice";

const SingleVehiclePage = () => {
  const { id } = useParams();
  const vehicle = useSelector((state: RootState) => state.singleVehicle)
  const dispatch = useDispatch<AppDispatch>();
  
  useEffect(() => {
    dispatch(getSpecificVehicle(id));
  }, [])
  
  useEffect(() => {
    console.log(vehicle)
  }, [])
  
  return (
    <div id="single-vehicle-block">
      <h1>{vehicle.headline}</h1>
      <p>Stock Number: {vehicle.id}</p>
      <img src={vehicle.image} alt="a photo of the vehcile"/>
      <h2>Price: ${vehicle.price}</h2>
      <h3>Odometer: {vehicle.miles} miles</h3>
      <div id="single-vehicle-stats">
        <div>
          <strong>Make:</strong> <p>{vehicle.makeName}</p>
          <strong>Model:</strong> <p>{vehicle.modelName}</p>
          <strong>Engine:</strong> <p>{vehicle.engine}</p>
          <strong>Drivetrain:</strong> <p>{vehicle.drivetrain}</p>
        </div>
        <div>
          <strong>Model Year:</strong><p>{vehicle.year}</p>
          <strong>Color:</strong> <p>{vehicle.color}</p>
          <strong>MPG:</strong> <p>{vehicle.MPG_city} city/{vehicle.MPG_highway} highway</p>
        </div>
      </div>
      <div id="single-vehicle-block-features">
        <strong>Features:</strong> <p>{vehicle.features}</p>
      </div>
    </div>
  )
}

export default SingleVehiclePage;