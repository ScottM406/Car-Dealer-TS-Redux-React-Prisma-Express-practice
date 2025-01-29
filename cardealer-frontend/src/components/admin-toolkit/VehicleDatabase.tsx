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

  console.log(makes);

  return (
    <div id="database-block">
    <h1>Database - Makes, Models, and Current Inventory</h1>
    {makes.map((make) =>  (
      <section key={make.name}>
        <h2>{make.name}</h2>
        {make.models.map((model) => (
          <div>
          <h3>{model.name}</h3>
          {model.cars_on_lot.map((car) => (
            <h4>Stock #{car.id}: {car.year} {car.modelName} with {car.miles} miles</h4>
          ))}
          </div>
        ))}
      </section>
      ))}
    </div>
  )
}

export default VehicleDatabase;