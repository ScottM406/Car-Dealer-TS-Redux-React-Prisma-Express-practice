import { Link } from "react-router-dom";

interface Props {
  token: string;
  isSuperUser: boolean;
}

const NavBar: React.FC<Props> = ({ token, isSuperUser }) => {

  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
      {token && isSuperUser && (
        <Link to="/addinventory">Add Inventory</Link>
      )}
    </>
  )
}

export default NavBar;