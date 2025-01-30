import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../state/store";
import { useEffect } from "react";
import { getMakes } from "../../state/makesSlice";

const VehicleDatabase = () => {

  const makes = useSelector((state: RootState) => state.makes);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getMakes());
  }, [])

  const makesInAlphabeticalOrder = makes.slice().sort((a, b) => a.name.localeCompare(b.name))

  return (
    <div id="database-block">
    <h1>Database - Makes, Models, and Current Inventory</h1>
    {makesInAlphabeticalOrder.map((make) =>  {
    const modelsInAlphabeticalOrder = make.models.slice().sort((a,b) => a.name.localeCompare(b.name));

    return (
      <section key={make.name}>
        <h2>{make.name}</h2>
        {modelsInAlphabeticalOrder.map((model) => (
          <div key={model.name}>
          <h3>{model.name}</h3>
          {model.cars_on_lot.map((car) => (
            <h4 key={car.id}>Stock #{car.id}: {car.year} {car.modelName} with {car.miles} miles</h4>
          ))}
          </div>
        ))}
      </section>
    )
    })}
    </div>
  )
}

export default VehicleDatabase;