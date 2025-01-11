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

  return (
    <>
    <h2>Vehicles for Sale</h2>
    <p>Click on vehicle for more details.</p>
    {vehicles.map((vehicle) => (
      <div key={vehicle.id}>
      <h3>{vehicle.headline}</h3>
      <h4>${vehicle.price}</h4>
      <img src={vehicle.image} style={{ width: "400px", height: "250px"}}/>
      </div>
    ))}
    </>
  )
}

export default Inventory;