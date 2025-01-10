import { Link } from "react-router-dom";

interface Props {
  token: string;
}

const NavBar: React.FC<Props> = ({ token }) => {

  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </>
  )
}

export default NavBar;