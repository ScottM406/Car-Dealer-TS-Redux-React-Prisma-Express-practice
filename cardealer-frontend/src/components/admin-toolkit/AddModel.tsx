import { FormEvent, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../state/store";
import { getMakes } from "../../state/makesSlice";


const AddModel = () => {
  const [newModelName, setNewModelName] = useState<string>("");
  const [makeOfNewModel, setMakeofNewModel] = useState<string>("");
  
  const makes = useSelector((state: RootState) => state.makes)

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getMakes());
  }, [])

  const resetForm = () => {
    setNewModelName("");
    setMakeofNewModel("");
    alert("Model added successfully");
  }

  const addModelToDatabase = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/models", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          name: newModelName,
          makeName: makeOfNewModel
        })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }

    resetForm();

    } catch(e: any) {
      alert(e.message || "Something has gone wrong. Please try again later.")
    }
  };

  return (
    <div className="add-inventory-block">
      <h1>Add New Model to Database</h1>
      <form onSubmit={addModelToDatabase}>
        <label>Make:</label>
        <select value={makeOfNewModel} onChange={(e) => setMakeofNewModel(e.target.value)}>
          <option>Select Make</option>
          {makes.map((make) => <option key={make.name}>{make.name}</option>)}
        </select>
        <label>Model Name:</label>
        <input
        required 
        value={newModelName}
        onChange={(e) => setNewModelName(e.target.value)}
        />
        <button type="submit">Add Model</button>
      </form>
    </div>
  )
};

export default AddModel;