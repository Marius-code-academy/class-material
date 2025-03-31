import { ReactNode, useEffect } from "react";
import { useAuthContext } from "../../Context/AuthContextProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";

type ProtectedRouteProps = {
  children: ReactNode;
};

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated, setIsAuthenticated } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/validateToken", { withCredentials: true })
      .then(() => setIsAuthenticated(true))
      .catch(() => {
        setIsAuthenticated(false);
        navigate("/login");
      });
  }, [navigate, setIsAuthenticated]);

  if (!isAuthenticated) {
    navigate("/login");
    return;
  }

  return children;
}
