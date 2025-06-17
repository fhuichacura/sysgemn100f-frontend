// src/components/layout/Topbar.jsx
import { Bell, User } from "lucide-react";

export default function Topbar() {
  return (
    <header className="h-16 bg-[#1E2533] border-b border-[#2e3749] flex items-center justify-between px-6">
      <div className="text-lg font-semibold text-white">Welcome to SYSGEMN100F</div>
      <div className="flex items-center gap-6">
        <button className="text-gray-400 hover:text-white relative">
          <Bell size={20} />
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="relative group">
          <button className="flex items-center gap-2 text-white hover:text-blue-400">
            <User size={20} /> admin@admin.com
          </button>
          <div className="absolute right-0 mt-2 w-48 bg-[#2b3242] rounded-lg shadow-lg hidden group-hover:block z-10">
            <a href="/profile" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#3a4255]">
              Perfil
            </a>
            <a href="/settings" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#3a4255]">
              Configuración
            </a>
            <button className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-[#3a4255]">
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}