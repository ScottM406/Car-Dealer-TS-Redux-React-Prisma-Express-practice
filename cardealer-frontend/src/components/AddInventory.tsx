const AddInventroy = () => {

  return (
    <>
      <h2>Add Vehicle</h2>
      <form>
        <input 
        type= "text"
        placeholder= "headline"
        required
        />
        <input
        type= "text"
        placeholder= "description"
        required 
        />
        <input 
        type= "text"
        placeholder= "image url"
        required
        />
        <input
        type= "text"
        placeholder= "model year"
        required 
        />
        <input 
        type= "text"
        placeholder= "odometer reading"
        required
        />
        <input
        type= "text"
        placeholder= "drivetrain"
        required 
        />
        <input 
        type= "text"
        placeholder= "engine"
        required
        />
        <input
        type= "text"
        placeholder= "color"
        required 
        />
        <input 
        type= "text"
        placeholder= "MPG city"
        required
        />
        <input
        type= "text"
        placeholder= "MPG highway"
        required 
        />
        <label htmlFor="model">model:</label>
        <select id="model" name="cars">
          <option value="test">Volvo</option>  {/*Remove these options and replace with models */}
          <option value="test">Saab</option>
          <option value="test">Fiat</option>
          <option value="test">Audi</option>
        </select>
        <input
        type= "text"
        placeholder= "features"
        required 
        />
      </form>
    </>
  )
}

export default AddInventroy;