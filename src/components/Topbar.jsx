import { LogOut, User } from "lucide-react";

export default function Topbar() {
  return (
    <header className="h-16 w-full bg-card border-b border-gray-700 flex items-center justify-between px-6">
      <h1 className="text-lg font-semibold text-white">Panel Administrativo</h1>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-white">
          <User size={18} />
          <span className="text-sm">felipe@admin.com</span>
        </div>
        <button className="text-red-400 hover:text-red-300 transition" title="Cerrar sesión">
          <LogOut size={20} />
        </button>
      </div>
    </header>
  );
}