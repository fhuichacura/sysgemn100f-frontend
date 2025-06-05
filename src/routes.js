// ✅ src/routes.js
import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Clients from "./pages/Clients";
import Contracts from "./pages/Contracts";
import Payments from "./pages/Payments";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Tenants from "./pages/Tenants";

// Nuevas vistas
import ResumenServicios from "./pages/ResumenServicios";
import Numina from "./pages/servicios/Numina";
import Elearning from "./pages/servicios/eLearning";
import Templates from "./pages/servicios/TemplatesWeb";
import Fullstack from "./pages/servicios/FullStack";
import Licencias from "./pages/Licencias";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/tenants" element={<Tenants />} />
      <Route path="/contracts" element={<Contracts />} />
      <Route path="/payments" element={<Payments />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/settings" element={<Settings />} />

      {/* Servicios */}
      <Route path="/resumen-servicios" element={<ResumenServicios />} />
      <Route path="/servicios/numina" element={<Numina />} />
      <Route path="/servicios/elearning" element={<Elearning />} />
      <Route path="/servicios/templates" element={<Templates />} />
      <Route path="/servicios/fullstack" element={<Fullstack />} />

      {/* Configuración extra */}
      <Route path="/licencias" element={<Licencias />} />
    </Routes>
  );
}