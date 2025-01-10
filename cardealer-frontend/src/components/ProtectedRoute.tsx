import { Navigate } from "react-router-dom";

interface Props {
  component: React.FC;
  isSuperUser: boolean;
}

const ProtectedRoute: React.FC<Props> = ({ component: Component, isSuperUser }) => {
  return isSuperUser ? <Component /> : <Navigate to="/login" />;
}

export default ProtectedRoute;