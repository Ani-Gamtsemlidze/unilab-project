import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../pages/login/authContext/UseContext";

function ProtectedRoute({ children }) {
  const { isInfoEntered } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isInfoEntered) {
      // If the user hasn't entered their information, prevent access to the form page
      navigate("/login");
    }
  }, [isInfoEntered, navigate]);

  return isInfoEntered ? children : null;
}

export default ProtectedRoute;
