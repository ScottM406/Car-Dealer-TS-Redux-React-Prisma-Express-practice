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
  desiredTime: string;
  testDriveRequested: boolean;
  car: { carsOnLotID: number }
}

interface Employee {
  id: number;
  firstName: string;
  lastName: string;
}

const ShowingRequests: React.FC<Props> = ({ token }) => {
  const [showingRequestList, setShowingRequestList] = useState<Array<ShowingRequest>>([])
  const [employeeList, setEmployeeList] = useState<Array<Employee>>([])
  const [customerContactedConfirmationNumber, setCusomerContactedConfirmationNumber] = useState<number>();
  const [showingConfirmed, setShowingConfirmed] = useState<boolean | string>("unselected");
  const [timeScheduled, setTimeScheduled] = useState<string>("");

  useEffect( () => {
    const getEmployees = async () => {
      try {
        const response =  await fetch("http://localhost:3000/users/", {
          headers: {
            'Authorization': `Bearer ${token}`,
          }
        });
        const employeeArray = await response.json();
        console.log(employeeArray)
        setEmployeeList(employeeArray)
      } catch (e: any) {
        throw new Error(e.message || "Could not fetch employees. Please try again later or contact webmaster." )
      }
    }
    getEmployees();
  }, [])

  useEffect( () => {
    const getShowingRequests = async () => {
      const response = await fetch("http://localhost:3000/showing-requests", {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const showingRequestArray = await response.json();
      setShowingRequestList(showingRequestArray);
    }
    getShowingRequests();
  }, [])

  const handleShowingConfirmationBooleanChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setShowingConfirmed(value === "unselected" ? "unselected" : value === 'true')
  }
  
  return (
    <div id="view-showing-requests-block">
      {showingRequestList.map((showingRequest) => (
        <section key={showingRequest.id}>
          <h2>ID: {showingRequest.id}</h2>
          <h2>Customer: {showingRequest.firstName} {showingRequest.lastName}</h2>
          <p>Vehicle: {showingRequest.car.carsOnLotID}</p>
          <p>Requested Date and Time: {showingRequest.desiredTime}</p>
          <p>Phone: {showingRequest.phoneNumber}</p>
          <p>Email: {showingRequest.emailAddress}</p>
          <p>Requested Showing Type: {showingRequest.testDriveRequested ? "Showing and Test Drive" : "Showing Only"}</p>
          <button onClick={() => setCusomerContactedConfirmationNumber(Number(showingRequest.id))}>Customer Contacted</button>
          { customerContactedConfirmationNumber === Number(showingRequest.id) &&
            <div>
            <label htmlFor={`showing-requests-form-showing-confirmed-select-${showingRequest.id}`}>Showing Confirmed:</label>
            <select
            name="showingConfirmedSelect"
            id={`showing-requests-form-showing-confirmed-select-${showingRequest.id}`}
            onChange={handleShowingConfirmationBooleanChange}
            >
              <option value="unselected">---</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            </div>
          }
          { showingConfirmed && (showingConfirmed !== "unselected") && customerContactedConfirmationNumber === Number(showingRequest.id) &&
            <div>
              <label htmlFor={`showing-requests-form-scheduled-time-input-${showingRequest.id}`}>Actual Time Scheduled:</label>
              <input 
              name="actualTimeScheduled"
              id={`showing-requests-form-scheduled-time-input-${showingRequest.id}`}
              required
              value={timeScheduled}
              onChange={(e) => setTimeScheduled(e.target.value)}
              />
              <label htmlFor={`showing-requests-form-employee-assigned-select-${showingRequest.id}`}>Salesman Assigned:</label>
              <select name="employeeAssignedSelect" id={`showing-requests-form-employee-assigned-select-${showingRequest.id}`}>
                <option>---</option>
                {employeeList.map((employee) => (
                  <option key={employee.id}>{employee.firstName} {employee.lastName}</option>
                ))}
              </select>
              <button>Confirm Assignment</button>
            </div>
          }
          { customerContactedConfirmationNumber &&  !showingConfirmed && showingConfirmed !== "unselected" &&
            <button>Dismiss Request</button>
          }
        </section>
      ))}
    </div>
  )
}

export default ShowingRequests;