import { setAddInventoryInputValue, initialState } from "../state/addInventorySlice";
import { AppDispatch, RootState } from "../state/store";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMakes } from "../state/makesSlice";

const AddInventory = () => {
  const dispatch = useDispatch<AppDispatch>();
  const addInventoryState = useSelector((state: RootState) => state.addInventory);
  const makes = useSelector((state: RootState) => state.makes)
  console.log(makes)

    useEffect(() => {
      dispatch(getMakes());
    }, [])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    dispatch(setAddInventoryInputValue({ field: name as keyof typeof addInventoryState, value }))
  }

  const resetForm = () => {
    Object.keys(initialState).forEach((key, _value) => {
      dispatch(setAddInventoryInputValue({ field: key as keyof typeof initialState, value: initialState[key as keyof typeof initialState] }));
    })
  };

  const addCartoInventory = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const carData = {
      ...addInventoryState,
      features: addInventoryState.features.split(",").map((feature) => feature.trim()) 
    }

    try {
      const response = await fetch("http://localhost:3000/cars-on-lot", {
        method: "POST",
        headers: { "Content-Type" : "application/json" },
        body: JSON.stringify(carData),
        })

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message)
      }

      const responseJSON = await response.json();
      resetForm();
      alert("Car added successfully")
      
    } catch(e: any) {
      alert(e.message || "There was an error. Please try again.");
    }
};

  return (
    <>
      <h2>Add Vehicle to Inventory</h2>
      <form onSubmit={addCartoInventory}>
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
        <label>Make: </label>
        <select>
          <option>Select Make</option>
          {makes.map((make) => (
            <option>{make.name}</option>
          ))}
        </select>
        <label htmlFor="modelId">Model: </label>
        <select name="modelId" onChange={handleInputChange} value={addInventoryState.modelId}>
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
        <label htmlFor="price">Price: </label>
        <input
        type= "text"
        name= "price"
        placeholder= "price"
        required
        value={addInventoryState.price}
        onChange={handleInputChange}
        />
        <button type="submit">Add Vehicle</button>
      </form>
    </>
  )
}

export default AddInventory;