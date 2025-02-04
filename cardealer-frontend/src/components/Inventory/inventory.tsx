import { useNavigate } from "react-router-dom";
import { getVehicles } from "../../state/vehiclesSlice";
import { AppDispatch, RootState } from "../../state/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import VehiclePopover, { VehiclePopoverHandle } from "./VehiclePopover";
import InventoryFilter from "./InventoryFilter";


interface UserInfo {
  email: string
  watchlist: { id: number, userID: number }
}

interface Props {
  token: string
  userID: number
  userInfo: UserInfo | null
}

const Inventory: React.FC<Props> = ({ userInfo, token, userID }) => {
  const [selectedMake, setSelectedMake] = useState<string>("")
  const [selectedModel, setSelectedModel] = useState<string>("")
  const [selectedMinPrice, setSelectedMinPrice] = useState<number>(0);
  const [selectedMaxPrice, setSelectedMaxPrice] = useState<number>(99999999);
  const [selectedMinMiles, setSelectedMinMiles] = useState<number>(0)
  const [selectedMaxMiles, setSelectedMaxMiles] = useState<number>(99999999)
  const [selectedDrivetrain, setSelectedDriveTrain] = useState<string>("")

  const vehicles = useSelector((state: RootState) => state.vehicles)
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const VehiclePopoverRefs = useRef<{[key: number]: VehiclePopoverHandle | null}>({});
  
  useEffect(() => {
    dispatch(getVehicles());
  }, [])

  const filteredVehicles = vehicles
    .filter((vehicle) => selectedMake ? selectedMake === vehicle.makeName : true)
    .filter((vehcile) => selectedModel ? selectedModel === vehcile.modelName : true)
    .filter((vehicle) => vehicle.price ? vehicle.price >= selectedMinPrice &&  vehicle.price <= selectedMaxPrice : true)
    .filter((vehicle) => vehicle.miles ? vehicle.miles >= selectedMinMiles && vehicle.miles <= selectedMaxMiles : true)
    .filter((vehicle) => selectedDrivetrain ? vehicle.drivetrain === selectedDrivetrain : true);

  const navigateToSingleVehicle = (id: number) => {
    VehiclePopoverRefs.current[id]?.hidePopover();
    navigate(`${id}`);
  };

  return (
    <div id="inventory-body">
      <section id="inventory-header-block">
        <h2>Vehicles for Sale</h2>
        <p>Click on vehicle for more details.</p>
      </section>
      <div id="inventory-filter">
        <InventoryFilter
        selectedMake={selectedMake}
        setSelectedMake={setSelectedMake}
        setSelectedModel={setSelectedModel}
        selectedMinPrice={selectedMinPrice}
        setSelectedMinPrice={setSelectedMinPrice}
        selectedMaxPrice={selectedMaxPrice}
        setSelectedMaxPrice={setSelectedMaxPrice}
        setSelectedMinMiles={setSelectedMinMiles}
        selectedMinMiles={selectedMinMiles}
        setSelectedMaxMiles={setSelectedMaxMiles}
        selectedMaxMiles={selectedMaxMiles}
        setSelectedDrivetrain={setSelectedDriveTrain}
        />
      </div>
      <div id="inventory-list">
        {filteredVehicles.map((vehicle) => (
          <div
          key={vehicle.id} 
          className="single-vehicle-inventory-container" 
          onClick={() => navigateToSingleVehicle(vehicle.id)}
          >
            <VehiclePopover
            id={vehicle.id}
            headline={vehicle.headline}
            description={vehicle.description}
            images={vehicle.images}
            year={vehicle.year}
            miles={vehicle.miles}
            drivetrain={vehicle.drivetrain}
            engine={vehicle.engine}
            color={vehicle.color}
            MPG_city={vehicle.MPG_city}
            MPG_highway={vehicle.MPG_highway}
            makeName={vehicle.makeName}
            modelName={vehicle.modelName}
            features={vehicle.features}
            price={vehicle.price}
            token={token}
            userID={userID}
            userInfo={userInfo}
            ref={el => VehiclePopoverRefs.current[vehicle.id] = el}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Inventory;