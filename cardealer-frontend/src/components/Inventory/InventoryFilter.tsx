import { AppDispatch, RootState } from "../../state/store";
import { useDispatch, useSelector } from "react-redux"; 
import { useState } from "react";
import { getMakes } from "../../state/makesSlice";

const InventoryFilter = () => {
  const [selectedMake, setSelectedMake] = useState("")

  const makes = useSelector((state: RootState) => state.makes)
  const dispatch = useDispatch<AppDispatch>();
  const fileteredModels = makes.find((make) => make.name === selectedMake)?.models || [];

  console.log(selectedMake);
  console.log(fileteredModels)

  return (
    <form>
      <h4>Filter Vehicles</h4>
      <label>Make: </label>
      <select onChange={(e) => setSelectedMake(e.target.value)} onClick={() => dispatch(getMakes())}>
        <option>Select Make</option>
        {makes.map((make) => (
          <option key={make.name}>{make.name}</option>
        ))}
      </select>
      <label>Model</label>
      <select>
        <option>test</option>
      </select>
    </form>
  )
}

export default InventoryFilter

//OLD CODE

  // const createMakesSelector = () => {
  //   useEffect(() => {
  //     dispatch(getMakes());
  //   }, [])

  // }
  
  // console.log(createMakesSelector())