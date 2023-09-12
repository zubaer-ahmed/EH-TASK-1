import { Navigate } from "react-router-dom";
import { useAuth } from "@/Hooks/useAuth";

export const ProtectedRoute = ({ children, redirect }) => {
  const { user } = useAuth();
  if (!user) {
    // user is not authenticated
    return redirect || <Navigate to="/login" />;
  }
  return children;
};
