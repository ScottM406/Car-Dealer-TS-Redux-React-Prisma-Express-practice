import { Navigate } from "react-router-dom";

interface Props {
  component: React.FC<any>;
  isEmployee: boolean;
  [key: string]: any //Just as in ProtectedAdminRoute, this allows additional props to be passed to protected routes.
}

const ProtectedEmployeeRoute: React.FC<Props> = ({ component: Component, isEmployee, ...props}) => {
  return isEmployee ? <Component {...props}/> : <Navigate to="/login" />
}

export default ProtectedEmployeeRoute;