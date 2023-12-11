import { useAuthContext } from "../AuthContext";
import {Navigate} from "react-router-dom"
// Define your HOC
export const RequiredAuth = ({ children }) => {
  const { isAuthenticated } = useAuthContext();

  // Check if the user is authenticated
  if (!isAuthenticated) {
    // Redirect to the login page or any other route for unauthenticated users
    return <Navigate to="/login"/>
  }

  // If authenticated, render the original component with its props
  return children;
};
