import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </>
  )
}

export default NavBar;