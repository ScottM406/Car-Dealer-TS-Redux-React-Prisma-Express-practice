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

const OpenShowingRequests: React.FC<Props> = ({ token }) => {
  const [showingRequestList, setShowingRequestList] = useState<Array<ShowingRequest>>([])
  const [employeeList, setEmployeeList] = useState<Array<Employee>>([])
  const [activeShowingRequest, setActiveShowingRequest] = useState<number>();
  const [showingConfirmed, setShowingConfirmed] = useState<boolean | string>("unselected");
  const [timeScheduled, setTimeScheduled] = useState<string>("");
  const [selectedEmployee, setSelectedEmployee] = useState<number>(0)

  useEffect( () => {
    const getEmployees = async () => {
      try {
        const response =  await fetch("http://localhost:3000/users/", {
          headers: {
            'Authorization': `Bearer ${token}`,
          }
        });
        const employeeArray = await response.json();
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
      setShowingRequestList(showingRequestArray.filter((showingRequest: { userID: number | null }) => showingRequest.userID === null));
    }
    getShowingRequests();
  }, [])

  const handleShowingConfirmationBooleanChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setShowingConfirmed(value === "unselected" ? "unselected" : value === 'true')
  }

  const assignShowingRequest = async () => {
    try {
      const response = await fetch(`http://localhost:3000/showing-requests/${activeShowingRequest}`, {
        method: "PUT",
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          showingConfirmed: showingConfirmed, 
          actualTime: timeScheduled,
          userID: selectedEmployee
        })
      })
      if (!response.ok) {
        alert("Something has gone wrong. Please try again.")
      } else {
        alert("Assignment confirmed.")
      }
    } catch (e:any){
      throw new Error(e.message || "Something has gone wrong. Please try again.")
    }
  };
  
  return (
    <div className="view-showing-requests-block">
      {showingRequestList.map((showingRequest) => (
        <section key={showingRequest.id}>
          <h2>ID: {showingRequest.id}</h2>
          <h2>Customer: {showingRequest.firstName} {showingRequest.lastName}</h2>
          <p>Vehicle: {showingRequest.car.carsOnLotID}</p>
          <p>Requested Date and Time: {showingRequest.desiredTime}</p>
          <p>Phone: {showingRequest.phoneNumber}</p>
          <p>Email: {showingRequest.emailAddress}</p>
          <p>Requested Showing Type: {showingRequest.testDriveRequested ? "Showing and Test Drive" : "Showing Only"}</p>
          <button onClick={() => setActiveShowingRequest(Number(showingRequest.id))}>Customer Contacted</button>
          { activeShowingRequest === Number(showingRequest.id) &&
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
          { showingConfirmed && (showingConfirmed !== "unselected") && activeShowingRequest === Number(showingRequest.id) &&
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
              <select
              name="employeeAssignedSelect"
              id={`showing-requests-form-employee-assigned-select-${showingRequest.id}`}
              onChange={(e) => setSelectedEmployee(Number(e.target.value))}
              >
                <option>---</option>
                {employeeList.map((employee) => (
                  <option key={employee.id} value={employee.id}>{employee.firstName} {employee.lastName}</option>
                ))}
              </select>
              <button onClick={assignShowingRequest}>Confirm Assignment</button>
            </div>
          }
          { activeShowingRequest &&  !showingConfirmed && showingConfirmed !== "unselected" &&
            <button>Dismiss Request</button>
          }
        </section>
      ))}
    </div>
  )
}

export default OpenShowingRequests;