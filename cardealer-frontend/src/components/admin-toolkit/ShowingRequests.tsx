import { useEffect, useState } from "react";

interface Props {
  token: string
}

interface showingRequest {
  id: string
  firstName: string;
  lastName: string;
  phoneNumber: string;
  emailAddress: string;
  desiredTime: string;
  testDriveRequested: boolean;
  car: { carsOnLotID: number }
}

const ShowingRequests: React.FC<Props> = ({ token }) => {
  const [showingRequestList, setShowingRequestList] = useState<Array<showingRequest>>([])

  useEffect( () => {
    const getShowingRequests = async () => {
      const response = await fetch("http://localhost:3000/showing-requests", {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const showingRequestArray = await response.json();
      console.log(showingRequestArray)
      setShowingRequestList(showingRequestArray);
    }
    getShowingRequests();
  }, [])

  return (
    <div id="view-showing-requests-block">
      {showingRequestList.map((showingRequest) => (
        <section>
        <h2>ID: {showingRequest.id}</h2>
        <h2>Customer: {showingRequest.firstName} {showingRequest.lastName}</h2>
        <p>Vehicle: {showingRequest.car.carsOnLotID}</p>
        <p>Requested Date and Time: {showingRequest.desiredTime}</p>
        <p>Phone: {showingRequest.phoneNumber}</p>
        <p>Email: {showingRequest.emailAddress}</p>
        <p>Requested Showing Type: {showingRequest.testDriveRequested ? "Showing and Test Drive" : "Showing Only"}</p>
        </section>
      ))}
    </div>
  )
}

export default ShowingRequests;