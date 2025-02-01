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
    <img src={vehicle.image} alt="a photo of the vehcile"/>
    <h2>{vehicle.description}</h2>
    </div>
  )
}

export default SingleVehiclePage;