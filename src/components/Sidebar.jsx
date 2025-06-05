// src/components/Sidebar.jsx
import {
  LayoutDashboard,
  Users,
  FileText,
  CreditCard,
  FileBarChart2,
  Settings,
  Building2,
  Layers3,
  ChevronDown,
  BadgeCheck,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const servicioBadges = {
  numina: 4,
  elearning: 2,
  templates: 3,
  fullstack: 1,
};

export default function Sidebar() {
  const [openServicios, setOpenServicios] = useState(false);
  const [openConfig, setOpenConfig] = useState(false);

  return (
    <aside className="w-64 h-screen bg-card text-white fixed left-0 top-0 flex flex-col p-4 shadow-xl z-50">
      <h1 className="text-xl font-bold mb-6 text-primary">sysgemn100f</h1>
      <nav className="flex flex-col gap-3 text-sm">
        <NavLink to="/" className={({ isActive }) => navLinkClass(isActive)}>
          <LayoutDashboard size={18} />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/clients" className={({ isActive }) => navLinkClass(isActive)}>
          <Users size={18} />
          <span>Clientes</span>
        </NavLink>

        <NavLink to="/tenants" className={({ isActive }) => navLinkClass(isActive)}>
          <Building2 size={18} />
          <span>Tenants</span>
        </NavLink>

        {/* Servicios Dropdown */}
        <button
          onClick={() => setOpenServicios(!openServicios)}
          className="flex items-center gap-3 px-3 py-2 rounded-md transition-colors hover:bg-primary/20"
        >
          <Layers3 size={18} />
          <span>Servicios</span>
          <ChevronDown
            size={14}
            className={`ml-auto transition-transform ${openServicios ? "rotate-180" : ""}`}
          />
        </button>

        {openServicios && (
          <div className="ml-6 flex flex-col gap-2 text-sm">
            <NavLink to="/resumen-servicios" className={({ isActive }) => navLinkClass(isActive)}>
              📊 Resumen
            </NavLink>
            <BadgeLink to="/servicios/numina" label="Númina" count={servicioBadges.numina} />
            <BadgeLink to="/servicios/elearning" label="eLearning" count={servicioBadges.elearning} />
            <BadgeLink to="/servicios/templates" label="Templates Web" count={servicioBadges.templates} />
            <BadgeLink to="/servicios/fullstack" label="Fullstack" count={servicioBadges.fullstack} />
          </div>
        )}

        <NavLink to="/contracts" className={({ isActive }) => navLinkClass(isActive)}>
          <FileText size={18} />
          <span>Contratos</span>
        </NavLink>

        <NavLink to="/payments" className={({ isActive }) => navLinkClass(isActive)}>
          <CreditCard size={18} />
          <span>Pagos</span>
        </NavLink>

        <NavLink to="/reports" className={({ isActive }) => navLinkClass(isActive)}>
          <FileBarChart2 size={18} />
          <span>Reportes</span>
        </NavLink>

        {/* Configuración Dropdown */}
        <button
          onClick={() => setOpenConfig(!openConfig)}
          className="flex items-center gap-3 px-3 py-2 rounded-md transition-colors hover:bg-primary/20"
        >
          <Settings size={18} />
          <span>Configuración</span>
          <ChevronDown
            size={14}
            className={`ml-auto transition-transform ${openConfig ? "rotate-180" : ""}`}
          />
        </button>

        {openConfig && (
          <div className="ml-6 flex flex-col gap-2 text-sm">
            <NavLink to="/settings" className={({ isActive }) => navLinkClass(isActive)}>
              ⚙️ General
            </NavLink>
            <NavLink to="/licencias" className={({ isActive }) => navLinkClass(isActive)}>
              🔐 Licencias
            </NavLink>
          </div>
        )}
      </nav>
    </aside>
  );
}

function navLinkClass(isActive) {
  return `flex items-center gap-3 px-3 py-2 rounded-md transition-colors hover:bg-primary/20 ${
    isActive ? "bg-primary/30 font-semibold" : ""
  }`;
}

function BadgeLink({ to, label, count }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center justify-between px-3 py-1.5 rounded-md transition-colors hover:bg-primary/20 ${
          isActive ? "bg-primary/30 font-semibold" : ""
        }`
      }
    >
      <span>{label}</span>
      <span className="text-xs bg-blue-600 px-2 py-0.5 rounded-full text-white">{count}</span>
    </NavLink>
  );
}
