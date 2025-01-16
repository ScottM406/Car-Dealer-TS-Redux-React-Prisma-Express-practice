import { getVehicles } from "../../state/vehiclesSlice";
import { AppDispatch, RootState } from "../../state/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import VehiclePopover from "./VehiclePopover";
import InventoryFilter from "./InventoryFilter";

const Inventory: React.FC = () => {
  const [selectedMake, setSelectedMake] = useState<string>("")
  const [selectedModel, setSelectedModel] = useState<string>("")

  const vehicles = useSelector((state: RootState) => state.vehicles)
  console.log(vehicles);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getVehicles());
  }, [])

  return (
    <>
    <h2>Vehicles for Sale</h2>
    <p>Click on vehicle for more details.</p>
    <InventoryFilter
    selectedMake={selectedMake}
    setSelectedMake={setSelectedMake}
    selectedModel={selectedModel}
    setSelectedModel={setSelectedModel}
    />

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
        modelName={vehicle.modelName}
        features={vehicle.features}
        price={vehicle.price}
        />

      </div>
    ))}
    </>
  )
}

export default Inventory;