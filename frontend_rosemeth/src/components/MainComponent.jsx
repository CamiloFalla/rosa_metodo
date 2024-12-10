import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import EmployeeDetails from "../pages/EmployeeDetails"; // Importa la página de detalles

export default function MainComponent() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        {isLoggedIn ? (
          <>
            {/* Redirige a Dashboard como predeterminado */}
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/employee/:id" element={<EmployeeDetails />} />
          </>
        ) : (
          <>
            {/* Redirige al Home para no autenticados */}
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </Router>
  );
}