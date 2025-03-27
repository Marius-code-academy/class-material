import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type AuthContextProviderProps = {
  children: React.ReactNode;
};

type AuthContext = {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
};

const AuthContext = createContext<AuthContext>({
  isAuthenticated: false,
  setIsAuthenticated: (value: boolean) => {},
});

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/validateToken", { withCredentials: true })
      .then(() => setIsAuthenticated(true))
      .catch(() => {
        setIsAuthenticated(false);
        navigate("/login");
      });
  }, [navigate]);

  return <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;
