import { setAddInventoryInputValue, initialState } from "../../state/addInventorySlice";
import { AppDispatch, RootState } from "../../state/store";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMakes } from "../../state/makesSlice";

const AddInventory = () => {
  const dispatch = useDispatch<AppDispatch>();
  const addInventoryState = useSelector((state: RootState) => state.addInventory);
  const makes = useSelector((state: RootState) => state.makes)

  useEffect(() => {
    dispatch(getMakes());
  }, [])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = event.target as HTMLInputElement | HTMLSelectElement;
    const { name, value } = event.target;

    if (target instanceof HTMLInputElement && target.files) {
      const existingFiles = addInventoryState.images || []
      const newFiles = Array.from(target.files)
      const allFiles = [...existingFiles, ...newFiles]
      dispatch(setAddInventoryInputValue({ field: name as keyof typeof addInventoryState, value: allFiles }));
    } else {
      dispatch(setAddInventoryInputValue({ field: name as keyof typeof addInventoryState, value }));
    }
  };

  const resetForm = () => {
    Object.keys(initialState).forEach((key, _value) => {
      dispatch(setAddInventoryInputValue({ field: key as keyof typeof initialState, value: initialState[key as keyof typeof initialState] }));
    })
  };

  const filteredModels = makes.find((make) => make.name === addInventoryState.makeName)?.models || [];

  const addCarToInventory = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const carData: FormData = new FormData();
    carData.append("headline", addInventoryState.headline);
    carData.append("year", addInventoryState.year.toString());
    carData.append("miles", addInventoryState.miles.toString());
    carData.append("drivetrain", addInventoryState.drivetrain);
    carData.append("engine", addInventoryState.engine);
    carData.append("color", addInventoryState.color);
    carData.append("MPG_city", addInventoryState.MPG_city.toString());
    carData.append("MPG_highway", addInventoryState.MPG_highway.toString());
    carData.append("makeName", addInventoryState.makeName);
    carData.append("modelName", addInventoryState.modelName);
    carData.append("features", addInventoryState.features);
    carData.append("price", addInventoryState.price.toString());
    carData.append("description", addInventoryState.description);

    for (let i = 0; i < addInventoryState.images.length; i++) {
      carData.append("images", addInventoryState.images[i]);
    }

    try {
      const response = await fetch("http://localhost:3000/cars-on-lot", {
        method: "POST",
        body: carData,
        });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message)
      }

      resetForm();
      alert("Car added successfully")
      
    } catch(e: any) {
      alert(e.message || "There was an error. Please try again.");
    }
};

  return (
    <div className="add-inventory-block">
      <h2>Add Vehicle to Inventory</h2>
      <form action="/upload" onSubmit={addCarToInventory} encType="multipart/form-data">
        <label htmlFor="add-inventory-headline-input">Headline: </label>
        <input
        type= "text"
        name= "headline"
        id="add-inventory-headline-input" 
        required
        value={addInventoryState.headline}
        onChange={handleInputChange}
        />
        <label htmlFor="add-inventory-images-input">Images: </label>
        <input 
        type= "file"
        name= "images"
        id="add-inventory-images-input"
        multiple
        required
        accept="image/*"
        onChange={handleInputChange}
        />
        <label htmlFor="add-inventory-year-input">Model Year: </label>
        <input
        type= "text"
        name= "year"
        id="add-inventory-year-input"
        placeholder= "model year"
        required
        value={addInventoryState.year}
        onChange={handleInputChange}
        />
        <label htmlFor="add-inventory-miles-input">Odometer Reading: </label>
        <input 
        type= "text"
        name= "miles"
        id="add-inventory-miles-input"
        placeholder= "odometer reading"
        required
        value={addInventoryState.miles}
        onChange={handleInputChange}
        />
        <label htmlFor="add-inventory-drivetrain-input">Drivetrain: </label>
        <input
        type= "text"
        name= "drivetrain"
        id="add-inventory-drivetrain-input"
        placeholder= "drivetrain"
        required
        value={addInventoryState.drivetrain}
        onChange={handleInputChange}
        />
        <label htmlFor="add-inventory-engine-input">Engine: </label>
        <input 
        type= "text"
        name= "engine"
        id="add-inventory-engine-input"
        placeholder= "engine"
        required
        value={addInventoryState.engine}
        onChange={handleInputChange}
        />
        <label htmlFor="add-inventory-color-input">Color: </label>
        <input
        type= "text"
        name= "color"
        id="add-inventory-color-input"
        placeholder= "color"
        required
        value={addInventoryState.color}
        onChange={handleInputChange}
        />
        <label htmlFor="add-inventory-MPG-city-input">MPG City: </label>
        <input 
        type= "text"
        name= "MPG_city"
        id="add-inventory-MPG-city-input"
        placeholder= "MPG city"
        required
        value={addInventoryState.MPG_city}
        onChange={handleInputChange}
        />
        <label htmlFor="add-inventory-MPG-highway-input">MPG Highway: </label>
        <input
        type= "text"
        name= "MPG_highway"
        id="add-inventory-MPG-highway-input"
        placeholder= "MPG highway"
        required
        value={addInventoryState.MPG_highway}
        onChange={handleInputChange}
        />
        <label htmlFor="add-inventory-makeName-input">Make: </label>
        <select  id="add-inventory-makeName-input" name="makeName" onChange={handleInputChange} value={addInventoryState.makeName}>
          <option>Select Make</option>
          {makes.map((make) => (
            <option key={make.name}>{make.name}</option>
          ))}
        </select>
        <label htmlFor="add-inventory-modelName-input">Model: </label>
        <select id="add-inventory-modelName-input" name="modelName" onChange={handleInputChange} value={addInventoryState.modelName}>
          <option>Select Model</option>
          {filteredModels.map((model: any) => (
            <option key={model.id}>{model.name}</option>
          ))};
        </select>
        <label htmlFor="add-inventory-features-input">Features: </label>
        <input
        type= "text"
        name= "features"
        id="add-inventory-features-input"
        placeholder= "features"
        required
        value={addInventoryState.features}
        onChange={handleInputChange}
        />
        <label htmlFor="add-inventory-price-input">Price: </label>
        <input
        type= "text"
        name= "price"
        id="add-inventory-price-input"
        placeholder= "price"
        required
        value={addInventoryState.price}
        onChange={handleInputChange}
        />
        <label htmlFor="add-inventory-description-input-1">Description: </label>
        <input
        className="add-inventory-description-input"
        id="add-inventory-description-input-1"
        type= "text"
        name= "description"
        required
        value={addInventoryState.description}
        onChange={handleInputChange}
        />
        <button type="submit">Add Vehicle</button>
      </form>
    </div>
  )
}

export default AddInventory;