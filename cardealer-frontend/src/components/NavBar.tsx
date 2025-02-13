import { Link } from "react-router-dom";

interface Props {
  token: string;
  isEmployee: boolean;
  isSuperUser: boolean;
}

const NavBar: React.FC<Props> = ({ token, isEmployee, isSuperUser }) => {

  return (
    <div id="navbar">
      <Link to="/">Home</Link>
      <Link to="/inventory">View Inventory</Link>
      {token && !isSuperUser && !isEmployee && <Link to="/account">My Account</Link>}
      {!token && <Link to="/register">Register</Link>}
      {!token && <Link to="/login">Log In</Link>}
      {token && isEmployee && <Link to="employeedashboard">Employee Dashboard</Link>}
      {token && isSuperUser && (
        <Link id="admin-toolkit-link" to="/admintoolkit">Admin Toolkit</Link>
      )}
    </div>
  )
}

export default NavBar;