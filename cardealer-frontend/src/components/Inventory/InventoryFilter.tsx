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

  console.log(selectedMinPrice);
  console.log(selectedMaxPrice);

  return (
    <form>
      <h4>Filter Vehicles</h4>
      <label>Make:</label>
      <select onChange={(e) => setSelectedMake(e.target.value)} onClick={() => dispatch(getMakes())}>
        <option>Select Make</option>
        {makes.map((make) => (
          <option key={make.name}>{make.name}</option>
        ))}
      </select>
      <label>Model:</label>
      <select onChange={(e) => setSelectedModel(e.target.value)}>
        <option>Select Model</option>
        {fileteredModels.map((model) => (
          <option key={model.name}>{model.name}</option>
        ))}
      </select>
      <label>Price Range:</label>
      <input type="number" value={selectedMinPrice} onChange={(e) => setSelectedMinPrice(Number(e.target.value))} />
      <label>-</label>
      <input type="number" value={selectedMaxPrice} onChange={(e) => setSelectedMaxPrice(Number(e.target.value))} />
    </form>
  )
}

export default InventoryFilter