import { Navigate } from "react-router-dom";
import { useAuthSelector } from "../redux/auth/authSelector";

export interface RouteProps {
  component: React.FC;
  redirectTo: string;
}
const PublicRoute = ({
  component: Component,
  redirectTo = "/",
}: RouteProps) => {
  const { isLogin, isLoginAlready } = useAuthSelector();
  const shouldRedirect = !isLogin && !isLoginAlready;
  return shouldRedirect ? <Navigate to={redirectTo} replace /> : <Component />;
};
export default PublicRoute;
