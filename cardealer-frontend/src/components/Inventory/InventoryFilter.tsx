import { AppDispatch, RootState } from "../../state/store";
import { useDispatch, useSelector } from "react-redux"; 
import { getMakes } from "../../state/makesSlice";
import { Dispatch, SetStateAction } from "react";

interface InventoryFilterProps {
  selectedMake: string
  setSelectedMake: Dispatch<SetStateAction<string>>
  selectedModel: string
  setSelectedModel: Dispatch<SetStateAction<string>>
  }

const InventoryFilter: React.FC<InventoryFilterProps> = ({ selectedMake, setSelectedMake, selectedModel, setSelectedModel }) => {

  const makes = useSelector((state: RootState) => state.makes)
  const dispatch = useDispatch<AppDispatch>();
  const fileteredModels = makes.find((make) => make.name === selectedMake)?.models || [];

  console.log(selectedMake);
  console.log(selectedModel)

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
    </form>
  )
}

export default InventoryFilter