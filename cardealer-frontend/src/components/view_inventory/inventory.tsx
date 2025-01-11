import { getVehicles } from "../../state/vehiclesSlice";
import { AppDispatch, RootState } from "../../state/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Inventory: React.FC = () => {

  const vehicles = useSelector((state: RootState) => state.vehicles)
  const dispatch = useDispatch<AppDispatch>();


  useEffect(() => {
    dispatch(getVehicles());
  }, [])

  console.log(vehicles);

  return (
    <>
    <h2>Vehicles for Sale</h2>
    <p>Clveick on vehicle for more details.</p>
    </>
  )
}

export default Inventory;