import { AppDispatch, RootState } from "../../state/store";
import { useDispatch, useSelector } from "react-redux"; 
import { getMakes } from "../../state/makesSlice";
import { Dispatch, SetStateAction } from "react";

interface InventoryFilterProps {
  selectedMake: string
  setSelectedMake: Dispatch<SetStateAction<string>>
  selectedModel: string
  setSelectedModel: Dispatch<SetStateAction<string>>
  selectedMinPrice: number
  setSelectedMinPrice: Dispatch<SetStateAction<number>>
  selectedMaxPrice: number
  setSelectedMaxPrice: Dispatch<SetStateAction<number>>
  }

const InventoryFilter: React.FC<InventoryFilterProps> = ({ selectedMake, setSelectedMake, selectedModel, setSelectedModel, selectedMinPrice, selectedMaxPrice, setSelectedMinPrice, setSelectedMaxPrice }) => {

  const makes = useSelector((state: RootState) => state.makes)
  const dispatch = useDispatch<AppDispatch>();
  const fileteredModels = makes.find((make) => make.name === selectedMake)?.models || [];

  return (
    <form>
      <h4>Filter Vehicles</h4>
      <label htmlFor="make">Make:</label>
      <select id ="make" name="make" onChange={(e) => setSelectedMake(e.target.value)} onClick={() => dispatch(getMakes())}>
        <option>Select Make</option>
        {makes.map((make) => (
          <option key={make.name}>{make.name}</option>
        ))}
      </select>
      <label htmlFor="model">Model:</label>
      <select id="model" name="model" onChange={(e) => setSelectedModel(e.target.value)}>
        <option>Select Model</option>
        {fileteredModels.map((model) => (
          <option key={model.name}>{model.name}</option>
        ))}
      </select>
      <label htmlFor="lowest-price">Price Range:</label>
      <input
      id="lowest-price"
      name="lowest-price" 
      type="number" 
      value={selectedMinPrice} 
      onChange={(e) => setSelectedMinPrice(Number(e.target.value))} 
      />
      <label htmlFor="highest-price">-</label>
      <input
      id="highest-price"
      name="highest-price" 
      type="number" 
      value={selectedMaxPrice} 
      onChange={(e) => setSelectedMaxPrice(Number(e.target.value))} 
      />
    </form>
  )
}

export default InventoryFilter