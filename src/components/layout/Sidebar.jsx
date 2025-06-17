// ✅ src/components/layout/Sidebar.jsx
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  FileText,
  Settings,
  ChevronDown,
  ChevronRight,
  Link,
} from "lucide-react";

// Sidebar del sistema SYSGEMN100F con menús jerárquicos
export default function Sidebar() {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <aside className="w-72 bg-[#1E2533] text-white min-h-screen p-4">
      <h1 className="text-xl font-bold mb-6">SYSGEMN100F</h1>

      {/* DASHBOARD */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex items-center gap-2 px-3 py-2 rounded-lg mb-2 ${
            isActive ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-[#2b3242]"
          }`
        }
      >
        <LayoutDashboard size={18} /> Dashboard
      </NavLink>

      {/* CLIENTES */}
      <button
        onClick={() => toggleMenu("clients")}
        className="flex items-center justify-between w-full text-left px-3 py-2 rounded-lg text-gray-300 hover:bg-[#2b3242]"
      >
        <span className="flex items-center gap-2">
          <Users size={18} /> Clients
        </span>
        {openMenus.clients ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
      </button>
      {openMenus.clients && (
        <div className="ml-6 mb-2">
          <NavLink to="/clients" className="block text-sm py-1 text-gray-400 hover:text-white">
            Overview
          </NavLink>
          <NavLink to="/licenses" className="block text-sm py-1 text-gray-400 hover:text-white">
            Licenses & Activations
          </NavLink>
          <NavLink to="/users" className="block text-sm py-1 text-gray-400 hover:text-white">
            Client Users
          </NavLink>
        </div>
      )}

      {/* CONTRATOS Y SERVICIOS */}
      <button
        onClick={() => toggleMenu("contracts")}
        className="flex items-center justify-between w-full text-left px-3 py-2 rounded-lg text-gray-300 hover:bg-[#2b3242]"
      >
        <span className="flex items-center gap-2">
          <FileText size={18} /> Contracts & Services
        </span>
        {openMenus.contracts ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
      </button>
      {openMenus.contracts && (
        <div className="ml-6 mb-2">
          <NavLink to="/contracts" className="block text-sm py-1 text-gray-400 hover:text-white">
            Contracts
          </NavLink>
          <NavLink to="/services/numina" className="block text-sm py-1 text-gray-400 hover:text-white">
            Service Catalog
          </NavLink>
        </div>
      )}

      {/* SINCRONIZACIÓN */}
      <NavLink
        to="/integrations"
        className={({ isActive }) =>
          `flex items-center gap-2 px-3 py-2 rounded-lg mb-2 ${
            isActive ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-[#2b3242]"
          }`
        }
      >
        <Link size={18} /> Integrations
      </NavLink>

      {/* CONFIGURACIÓN */}
      <button
        onClick={() => toggleMenu("settings")}
        className="flex items-center justify-between w-full text-left px-3 py-2 rounded-lg text-gray-300 hover:bg-[#2b3242]"
      >
        <span className="flex items-center gap-2">
          <Settings size={18} /> Settings
        </span>
        {openMenus.settings ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
      </button>
      {openMenus.settings && (
        <div className="ml-6">
          <NavLink to="/settings" className="block text-sm py-1 text-gray-400 hover:text-white">
            System
          </NavLink>
          <NavLink to="/settings/security" className="block text-sm py-1 text-gray-400 hover:text-white">
            Security
          </NavLink>
        </div>
      )}
    </aside>
  );
}