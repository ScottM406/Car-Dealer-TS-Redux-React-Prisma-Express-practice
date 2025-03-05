interface EmployeeAppointment {
  actualTime: string;
  emailAddress: string;
  firstName: string;
  lastName: string;
  id: number;
  phoneNumber: string;
  showingConfirmed: boolean;
  testDriveRequested: boolean;
}

interface UserInfoProps {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  employeeAddress: string | null;
  employeeHireDate: string | null;
  employeeAppointments: Array<EmployeeAppointment>;
  phoneNumber: string | null;
  watchlist: { id: number, userID: number, cars: Array<{ carsOnLotID: number, watchlistID: number }> };
}

const EmployeeDashboard: React.FC<{userInfo: UserInfoProps}> = ({ userInfo }) => {
  return (
    <>
    <div id="employee-dashboard-header-block">
      <h1>Employee Dashboard</h1>
      <h2>Hello, {userInfo.firstName} {userInfo.lastName}</h2>
    </div>
      <h2 id="employee-appointments-header" className="whitesmoke-text">Upcoming Showings</h2>
      <div id="employee-appointments">
        {userInfo.employeeAppointments.map((appointment) => (
          <div>
          <strong>{appointment.firstName} {appointment.lastName}</strong>
          <p>{appointment.phoneNumber}</p>
          <p>{appointment.emailAddress}</p>
          { appointment.testDriveRequested ? <p>Showing & Test Drive</p> : <p>Showing</p> }
          <p>{appointment.actualTime}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default EmployeeDashboard;