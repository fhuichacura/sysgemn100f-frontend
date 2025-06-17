import { Routes, Route } from "react-router-dom";

// Dashboard y módulos
import MainDashboard from "./pages/dashboard/MainDashboard";
import ClientsDashboard from "./pages/clients/ClientsDashboard";
import ContractsDashboard from "./pages/contracts/ContractsDashboard";
import LicensesDashboard from "./pages/licenses/LicensesDashboard";
import UsersDashboard from "./pages/users/UsersDashboard";
import IntegrationsDashboard from "./pages/integrations/IntegrationsDashboard";
import SettingsDashboard from "./pages/settings/SettingsDashboard";

// Servicios
import Numina from "./pages/services/Numina";
import Elearning from "./pages/services/eLearning";
import Templates from "./pages/services/TemplatesWeb";
import Fullstack from "./pages/services/FullStack";

// Vista dinámica de servicios por cliente
import ClientServices from "./pages/clients/ClientServices";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainDashboard />} />
      <Route path="/clients" element={<ClientsDashboard />} />
      <Route path="/clients/:id/services" element={<ClientServices />} /> {/* ✅ NUEVO */}
      <Route path="/contracts" element={<ContractsDashboard />} />
      <Route path="/licenses" element={<LicensesDashboard />} />
      <Route path="/users" element={<UsersDashboard />} />
      <Route path="/integrations" element={<IntegrationsDashboard />} />
      <Route path="/settings" element={<SettingsDashboard />} />

      {/* Servicios */}
      <Route path="/services/numina" element={<Numina />} />
      <Route path="/services/elearning" element={<Elearning />} />
      <Route path="/services/templates" element={<Templates />} />
      <Route path="/services/fullstack" element={<Fullstack />} />
    </Routes>
  );
}