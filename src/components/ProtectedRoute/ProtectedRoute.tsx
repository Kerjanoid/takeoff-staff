import { FC } from "react";
import {
  Navigate,
  Outlet
} from "react-router-dom";

interface ProtectedRouteProps {
  auth: boolean;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({auth}) => {

  if (!auth) {
    return <Navigate to="/sign-in" replace />;
  }

  return <Outlet />
}

export default ProtectedRoute;
