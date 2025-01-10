import { Link } from "react-router-dom";

interface Props {
  token: string;
  isSuperUser: boolean;
}

const NavBar: React.FC<Props> = ({ token, isSuperUser }) => {

  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/inventory">View Inventory</Link>
      {!token && <Link to="/register">Register</Link>}
      {!token && <Link to="/login">Log In</Link>}
      {token && isSuperUser && (
        <div>
        <p>Super User Menu:</p>
        <Link to="/addinventory">Add Inventory</Link>
        </div>
      )}
    </>
  )
}

export default NavBar;