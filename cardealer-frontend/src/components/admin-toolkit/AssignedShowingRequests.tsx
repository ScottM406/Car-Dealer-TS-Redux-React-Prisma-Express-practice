import React, { useEffect, useState } from "react";

interface Props {
  token: string;
  isSuperUser: boolean;
}

interface ShowingRequest {
  id: string
  firstName: string;
  lastName: string;
  phoneNumber: string;
  emailAddress: string;
  actualTime: string;
  testDriveRequested: boolean;
  car: { carsOnLotID: number }
  assignedEmployee: { firstName: string, lastName: string }
}

const AssignedShowingRequests: React.FC<Props> = ({ token }) => {
  const [showingRequestList, setShowingRequestList] = useState<Array<ShowingRequest>>([])

  useEffect( () => {
    const getShowingRequests = async () => {
      const response = await fetch("http://localhost:3000/showing-requests", {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const showingRequestArray = await response.json();
      setShowingRequestList(showingRequestArray.filter((showingRequest: { userID: number | null }) => showingRequest.userID !== null));
    }
    getShowingRequests();
  }, [])

  console.log(showingRequestList)
  
  return (
    <div className="view-showing-requests-block">
      {showingRequestList.map((showingRequest) => (
        <section key={showingRequest.id}>
          <h2>ID: {showingRequest.id}</h2>
          <h2>Customer: {showingRequest.firstName} {showingRequest.lastName}</h2>
          <p>Phone: {showingRequest.phoneNumber}</p>
          <p>Email: {showingRequest.emailAddress}</p>
          <p>Vehicle: {showingRequest.car.carsOnLotID}</p>
          <p>Scheduled: {showingRequest.actualTime}</p>
          <p>Requested Showing Type: {showingRequest.testDriveRequested ? "Showing and Test Drive" : "Showing Only"}</p>
          <p className="assigned-showing-requests-assigned-salesman-p">
            Assigned Salesman: {showingRequest.assignedEmployee.firstName} {showingRequest.assignedEmployee.lastName}
          </p>
          <button>Dismiss Request</button>
        </section>
      ))}
    </div>
  )
}

export default AssignedShowingRequests;