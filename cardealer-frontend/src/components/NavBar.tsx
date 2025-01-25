import { Link } from "react-router-dom";

interface Props {
  token: string;
  isSuperUser: boolean;
}

const NavBar: React.FC<Props> = ({ token, isSuperUser }) => {

  return (
    <div id="navbar">
      <Link to="/">Home</Link>
      <Link to="/inventory">View Inventory</Link>
      {token && <Link to="/account">My Account</Link>}
      {!token && <Link to="/register">Register</Link>}
      {!token && <Link to="/login">Log In</Link>}
      {token && isSuperUser && (
        <Link id="admin-toolkit-link" to="/admintoolkit">Admin Toolkit</Link>
      )}
    </div>
  )
}

export default NavBar;