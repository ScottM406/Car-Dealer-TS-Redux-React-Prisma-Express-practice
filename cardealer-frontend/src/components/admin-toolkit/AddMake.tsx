import { FormEvent, useState } from "react";

const AddMake = () => {
  const [ newMakeName, setNewMakeName ] = useState<string>("")
  const [ newMakeDescription, setNewMakeDescription ] = useState<string>("")

  const resetForm = () => {
    setNewMakeName("");
    setNewMakeDescription("");
    alert("Make was added successfully.")
  };

  const addMakeToDatabase = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
    const response = await fetch("http://localhost:3000/makes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: newMakeName,
        description: newMakeDescription
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }

    resetForm();

    } catch (error: any) {
      alert(error.message || "Something has gone wrong. Please try again later.")    
    };
  };

  return (
    <div className="add-inventory-block">
      <h2>Add New Make to Database</h2>
      <form onSubmit={addMakeToDatabase}>
        <label htmlFor="add-make-makeName-input">Make Name:</label>
        <input 
        name="makeName"
        id="add-make-makeName-input"
        value={newMakeName}
        onChange={(event) => setNewMakeName(event.target.value)}
        required
        />
        <label htmlFor="add-make-makeDescription-input">Make Description:</label>
        <input
        name="makeDescription"
        id="add-make-makeDescription-input"
        className= "add-inventory-description-input"
        value={newMakeDescription}
        onChange={(event) => setNewMakeDescription(event.target.value)}
        required
        />
        <button type="submit">Add Make</button>
      </form>
    </div>
    
  );
};

export default AddMake