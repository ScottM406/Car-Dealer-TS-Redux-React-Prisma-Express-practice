import { AppDispatch, RootState } from "../../state/store";
import { useDispatch, useSelector } from "react-redux"; 
import { getMakes } from "../../state/makesSlice";
import { Dispatch, SetStateAction } from "react";

interface InventoryFilterProps {
  selectedMake: string
  setSelectedMake: Dispatch<SetStateAction<string>>
  setSelectedModel: Dispatch<SetStateAction<string>>
  selectedMinPrice: number
  setSelectedMinPrice: Dispatch<SetStateAction<number>>
  selectedMaxPrice: number
  setSelectedMaxPrice: Dispatch<SetStateAction<number>>
  selectedMinMiles: number
  setSelectedMinMiles: Dispatch<SetStateAction<number>>
  selectedMaxMiles: number
  setSelectedMaxMiles: Dispatch<SetStateAction<number>>
  setSelectedDrivetrain: Dispatch<SetStateAction<string>>
  }

const InventoryFilter: React.FC<InventoryFilterProps> = ({ selectedMake, setSelectedMake, setSelectedModel, selectedMinPrice, selectedMaxPrice, setSelectedMinPrice, setSelectedMaxPrice, setSelectedMinMiles, selectedMinMiles, setSelectedMaxMiles, selectedMaxMiles, setSelectedDrivetrain }) => {

  const makes = useSelector((state: RootState) => state.makes)
  const dispatch = useDispatch<AppDispatch>();
  const alphabeticalMakes = makes.slice().sort((a, b) => a.name.localeCompare(b.name));
  const fileteredAlphabeticalModels = [...(makes.find((make) => make.name === selectedMake)?.models  || [])].sort((a,b) => a.name.localeCompare(b.name));

  return (
    <form>
      <h4 className="whitesmoke-text">Filter Vehicles</h4>
      <label htmlFor="make" className="whitesmoke-text">Make:</label>
      <select id ="make" name="make" onChange={(e) => setSelectedMake(e.target.value)} onClick={() => dispatch(getMakes())}>
        <option value="">All Makes</option>
        {alphabeticalMakes.map((make) => (
          <option key={make.name} value={make.name}>{make.name}</option>
        ))}
      </select>
      <label htmlFor="model" className="whitesmoke-text">Model:</label>
      <select id="model" name="model" onChange={(e) => setSelectedModel(e.target.value)}>
        <option value="">All Models</option>
        {fileteredAlphabeticalModels.map((model) => (
          <option key={model.name} value={model.name}>{model.name}</option>
        ))}
      </select>
      <label htmlFor="drivetrain" className="whitesmoke-text">Model:</label>
      <select id="drivetrain" name="drivetrain" onChange={(e) => setSelectedDrivetrain(e.target.value)}>
        <option value="">All Drivetrains</option>
        <option value="FWD">FWD</option>
        <option value="RWD">RWD</option>
        <option value="AWD">AWD</option>
        <option value="Four-Wheel Drive">Four-Wheel Drive</option>
      </select>
      <label htmlFor="lowest-price" className="whitesmoke-text">Price Range:</label>
      <input
      id="lowest-price"
      name="lowest-price" 
      type="number" 
      value={selectedMinPrice} 
      onChange={(e) => setSelectedMinPrice(Number(e.target.value))} 
      />
      <label htmlFor="highest-price" className="whitesmoke-text">-</label>
      <input
      id="highest-price"
      name="highest-price" 
      type="number" 
      value={selectedMaxPrice} 
      onChange={(e) => setSelectedMaxPrice(Number(e.target.value))} 
      />
      <label htmlFor="lowest-miles" className="whitesmoke-text">Odometer:</label>
      <input
      id="lowest-miles"
      name="lowest-miles"
      type="number"
      value={selectedMinMiles}
      onChange={(e) => setSelectedMinMiles(Number(e.target.value))} 
      />
      <label htmlFor="highest-miles" className="whitesmoke-text">-</label>
      <input
      id="highest-miles"
      name="highest-miles"
      type="number"
      value={selectedMaxMiles}
      onChange={(e) => setSelectedMaxMiles(Number(e.target.value))} 
      />
    </form>
  )
}

export default InventoryFilter