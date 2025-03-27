import { ReactNode } from "react";
import { useAuthContext } from "../../Context/AuthContextProvider";
import { useNavigate } from "react-router-dom";

type ProtectedRouteProps = {
  children: ReactNode;
};

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated } = useAuthContext();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate("/login");
    return;
  }

  return children;
}
