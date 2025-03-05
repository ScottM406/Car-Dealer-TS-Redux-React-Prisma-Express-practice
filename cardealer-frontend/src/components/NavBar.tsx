import { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  token: string;
  isEmployee: boolean;
  isSuperUser: boolean;
}

const NavBar: React.FC<Props> = ({ token, isEmployee, isSuperUser }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="navbar">
      <div className="container-fluid">
        <h1 className="navbar-brand">Navigation</h1>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link "to="/inventory">Inventory</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" onClick={() => setIsDropdownOpen(!isDropdownOpen)} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded={isDropdownOpen}>
                Account
              </a>
              <ul className={`dropdown-menu ${isDropdownOpen && "show"}`} aria-labelledby="navbarDropdown">
                {!token && <li><Link className="dropdown-item" to="/register">Register</Link></li>}
                {!token && <li><Link className="dropdown-item" to="/login">Log In</Link></li>}
                {token && isEmployee && <li><Link to="/employeedashboard">Employee Dashboard</Link></li>}
                {token && isSuperUser && (
                  <li><Link id="admin-toolkit-link" to="/admintoolkit">Admin Toolkit</Link></li>
                )}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;

// 