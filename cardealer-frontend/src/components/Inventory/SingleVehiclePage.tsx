import { useParams } from "react-router-dom";
import { RootState, AppDispatch } from "../../state/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSpecificVehicle } from "../../state/singleVehicleSlice";
import RequestShowingWidget from "./RequestShowingWidget";

const backendURL = import.meta.env.VITE_BACKEND_URL;

const SingleVehiclePage = () => {
  const { id } = useParams();
  const vehicle = useSelector((state: RootState) => state.singleVehicle)
  const dispatch = useDispatch<AppDispatch>();
  
  useEffect(() => {
    dispatch(getSpecificVehicle(id));
  }, [])
  
  return (
    <div id="single-vehicle-block">
      <h1>{vehicle.headline}</h1>
      <p>Stock Number: {vehicle.id}</p>
      <div id="carouselIndicator" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators" style={{ listStyle: 'none' }}>
          {vehicle.images.map((_image: string, index: number) => (
            <li key={index} data-bs-target="#carouselIndicator" data-bs-slide-to={index} className={index === 0 ? "active" : ""}></li>
          ))}
        </ol>
        <div className ="carousel-inner">
          {vehicle.images.map((image: string, index: number) => (
            <div key={index} className={index === 0 ? "carousel-item active" : "carousel-item"}>
              <img src={`${backendURL}/${image}`} alt={vehicle.headline} />
            </div>
          ))}
        </div>
        <a className="carousel-control-prev" href="#carouselIndicator" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselIndicator" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
    </div>
      <h2>Price: ${vehicle.price}</h2>
      <h3>Odometer: {vehicle.miles} miles</h3>
      <div id="single-vehicle-stats">
        <div>
          <strong>Make:</strong> <p>{vehicle.makeName}</p>
          <strong>Model:</strong> <p>{vehicle.modelName}</p>
          <strong>Engine:</strong> <p>{vehicle.engine}</p>
          <strong>Drivetrain:</strong> <p>{vehicle.drivetrain}</p>
        </div>
        <div>
          <strong>Model Year:</strong><p>{vehicle.year}</p>
          <strong>Color:</strong> <p>{vehicle.color}</p>
          <strong>MPG:</strong> <p>{vehicle.MPG_city} city/{vehicle.MPG_highway} highway</p>
        </div>
      </div>
      <div id="single-vehicle-block-features">
        <strong>Features:</strong> <p>{vehicle.features}</p>
      </div>
      <RequestShowingWidget vehicleID={vehicle.id} vehicleYear={vehicle.year} vehicleMake={vehicle.makeName} vehicleModel={vehicle.modelName} />
    </div>
  )
}

export default SingleVehiclePage;