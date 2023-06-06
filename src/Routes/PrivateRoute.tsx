import { Navigate } from "react-router-dom";
import { useAuthSelector } from "../redux/auth/authSelector";

export interface RouteProps {
  component: React.FC;
  redirectTo: string;
}
const PrivateRoute = ({
  component: Component,
  redirectTo = "/contacts",
}: RouteProps) => {
  const { isLogin } = useAuthSelector();
  return isLogin ? <Navigate to={redirectTo} replace /> : <Component />;
};
export default PrivateRoute;
