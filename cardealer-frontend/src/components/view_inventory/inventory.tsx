import { getVehicles } from "../../state/vehiclesSlice";
import { AppDispatch, RootState } from "../../state/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import VehiclePopover from "./VehiclePopover";

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
      <div className="single-vehicle-inventory-container">
        <VehiclePopover
        key={vehicle.id} 
        id={vehicle.id}
        headline={vehicle.headline}
        description={vehicle.description}
        image={vehicle.image}
        year={vehicle.year}
        miles={vehicle.miles}
        drivetrain={vehicle.drivetrain}
        engine={vehicle.engine}
        color={vehicle.color}
        MPG_city={vehicle.MPG_city}
        MPG_highway={vehicle.MPG_highway}
        modelId={vehicle.modelId}
        features={vehicle.features}
        price={vehicle.price}
        />
      </div>
    ))}
    </>
  )
}

export default Inventory;