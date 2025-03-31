import "./App.css";
import DashboardPage from "./components/DashboardPage/DashboardPage";
import LoginPage from "./components/LoginPage/LoginPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AuthContextProvider from "./Context/AuthContextProvider";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <AuthContextProvider>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
        </AuthContextProvider>
      </Routes>
    </Router>
  );
}

export default App;
