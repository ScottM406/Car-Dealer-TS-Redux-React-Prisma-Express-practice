import { Navigate } from "react-router-dom";

interface Props {
  component: React.FC<any>;
  isSuperUser: boolean;
  [key: string]: any; //This allows additional props to be passed to protected routes.
}

const ProtectedAdminRoute: React.FC<Props> = ({ component: Component, isSuperUser, ...props }) => {
  return isSuperUser ? <Component {...props}/> : <Navigate to="/login" />;
}

export default ProtectedAdminRoute;