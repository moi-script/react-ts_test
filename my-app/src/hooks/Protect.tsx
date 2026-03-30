import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./Context";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { state } = useAuth();
  const location = useLocation();

  if (state.isLoading) {
    return <div>Loading...</div>; // Or a spinner
  }

  if (!state.isAuthenticated) {
    // Redirect to login, but save the current location so we can come back
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};