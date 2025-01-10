import { setAddInventoryInputValue } from "../state/addInventorySlice";
import { AppDispatch, RootState } from "../state/store";
import { useSelector, useDispatch } from "react-redux";

const AddInventory = () => {
  const dispatch = useDispatch<AppDispatch>();
  const addInventoryState = useSelector((state: RootState) => state.addInventory);
  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    dispatch(setAddInventoryInputValue({ field: name as keyof typeof addInventoryState, value }))
  }

  //Tests
  console.log(addInventoryState.headline);
  console.log(addInventoryState.modelID)
  console.log(addInventoryState.MPG_highway)
  

  //TO DO : AFTER CREATING MODELS API, FETCH ALL MODELS AND
  //        REPLACE DROP-DOWN MODEL MENU WITH ACTUAL MODELS
  // const getModelList = async () => {
  //   const response = await fetch("http://localhost:3000/models")
  // }

  return (
    <>
      <h2>Add Vehicle to Inventory</h2>
      <form>
        <label htmlFor="headline">Headline: </label>
        <input 
        type= "text"
        name= "headline"
        placeholder= "headline"
        required
        value={addInventoryState.headline}
        onChange={handleInputChange}
        />
        <label htmlFor="description">Description: </label>
        <input
        type= "text"
        placeholder= "description"
        name= "description"
        required
        value={addInventoryState.description}
        onChange={handleInputChange}
        />
        <label htmlFor="image">Image: </label>
        <input 
        type= "text"
        name= "image"
        placeholder= "image url"
        required
        value={addInventoryState.image}
        onChange={handleInputChange}
        />
        <label htmlFor="year">Model Year: </label>
        <input
        type= "text"
        name= "year"
        placeholder= "model year"
        required
        value={addInventoryState.year}
        onChange={handleInputChange}
        />
        <label htmlFor="miles">Odometer Reading: </label>
        <input 
        type= "text"
        name= "miles"
        placeholder= "odometer reading"
        required
        value={addInventoryState.miles}
        onChange={handleInputChange}
        />
        <label htmlFor="drivetrain">Drivetrain: </label>
        <input
        type= "text"
        name= "drivetrain"
        placeholder= "drivetrain"
        required
        value={addInventoryState.drivetrain}
        onChange={handleInputChange}
        />
        <label htmlFor="engine">Engine: </label>
        <input 
        type= "text"
        name= "engine"
        placeholder= "engine"
        required
        value={addInventoryState.engine}
        onChange={handleInputChange}
        />
        <label htmlFor="color">Color: </label>
        <input
        type= "text"
        name= "color"
        placeholder= "color"
        required
        value={addInventoryState.color}
        onChange={handleInputChange}
        />
        <label>MPG City: </label>
        <input 
        type= "text"
        name= "MPG_city"
        placeholder= "MPG city"
        required
        value={addInventoryState.MPG_city}
        onChange={handleInputChange}
        />
        <label>MPG Highway: </label>
        <input
        type= "text"
        name= "MPG_highway"
        placeholder= "MPG highway"
        required
        value={addInventoryState.MPG_highway}
        onChange={handleInputChange}
        />
        <label htmlFor="model">Model: </label>
        <select name="modelID" onChange={handleInputChange}>
          <option value={1}>Silverado</option>  {/*Remove these options and replace WITH FETCHED MODELS */}
          <option value={2}>Corvette</option>
          <option value={3}>Camaro</option>
          <option value={4}>F-150</option>
          <option value={5}>Mustang</option>
          <option value={6}>RAM 1500 </option>
          <option value={7}>Charger</option>
          <option value={8}>Challenger</option>
        </select>
        <label htmlFor="features">Features: </label>
        <input
        type= "text"
        name= "features"
        placeholder= "features"
        required
        value={addInventoryState.features}
        onChange={handleInputChange}
        />
        <button type="submit">Add Vehicle</button>
      </form>
    </>
  )
}

export default AddInventory;