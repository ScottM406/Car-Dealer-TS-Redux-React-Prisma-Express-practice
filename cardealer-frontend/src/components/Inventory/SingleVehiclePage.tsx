import { useParams } from "react-router-dom";

const SingleVehiclePage = () => {

  const { id } = useParams();

  return (
    <div id="single-vehicle-block">
    <h1>{id}</h1>
    </div>
  )
}

export default SingleVehiclePage;