import { Route, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

interface PrivateRouteProps {
  children:React.ReactNode;
  allowedRoles: string[];
  // path : string
}

  function ProtectedRoute({children, allowedRoles }: PrivateRouteProps) {
    const { isAuthenticated,userRole } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    // if (isAuthenticated) {
    //   // Redirect them to the /login page, but save the current location they were
    //   // trying to go to when they were redirected. This allows us to send them
    //   // along to that page after they login, which is a nicer user experience
    //   // than dropping them off on the home page.
    //   navigate('/login', { state: { from: location }, replace: true });
    //   return null; // Return null while navigating
    // }

    // if(!allowedRoles.includes(userRole)){
    //   navigate('/unauthorized', { state: { from: location }, replace: true });
    //   return null; // Return null while navigating
    // }

    useEffect(() => {
      if (!isAuthenticated) {

        navigate('/login', { state: { from: location }, replace: true });
      } else if (!allowedRoles.includes(userRole)) {
        navigate('/unauthorized', { state: { from: location }, replace: true });
      }
    }, [isAuthenticated, userRole, allowedRoles, navigate, location]);

    // return <Route path={path} element={element} />;
    return children;
  }

export default ProtectedRoute
