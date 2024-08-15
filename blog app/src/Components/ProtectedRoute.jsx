/* eslint-disable react/prop-types */
import useAuth from "../hook/useAuth";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user, isVerifying } = useAuth();

  if (isVerifying) return null;
  console.log(user);
  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
