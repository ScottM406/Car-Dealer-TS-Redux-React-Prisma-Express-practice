import { useParams } from "react-router-dom";

const SingleVehiclePage = () => {

  const { id } = useParams();

  return (
    <h1>{id}</h1>
  )
}

export default SingleVehiclePage;