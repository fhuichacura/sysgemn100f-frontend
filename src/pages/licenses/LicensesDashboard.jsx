// src/pages/licenses/LicensesDashboard.jsx
import DashboardLayout from "../../components/layout/DashboardLayout";
import { useState, useEffect } from "react";

export default function LicensesDashboard() {
  const [licenses, setLicenses] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("licenses");
    if (stored) setLicenses(JSON.parse(stored));
  }, []);

  return (
    <DashboardLayout>
      <div className="p-6 text-white">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Licencias y Activaciones</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-[#1e2533] p-4 rounded">
            <p className="text-sm text-gray-400">Total de licencias</p>
            <p className="text-2xl font-semibold">{licenses.length}</p>
          </div>
          <div className="bg-[#1e2533] p-4 rounded">
            <p className="text-sm text-gray-400">Pendientes activación</p>
            <p className="text-2xl font-semibold">{licenses.filter(l => l.estado === "Pendiente").length}</p>
          </div>
          <div className="bg-[#1e2533] p-4 rounded">
            <p className="text-sm text-gray-400">Licencias activadas</p>
            <p className="text-2xl font-semibold">{licenses.filter(l => l.estado === "Activado").length}</p>
          </div>
        </div>

        <table className="min-w-full text-sm text-left text-gray-300">
          <thead className="text-xs uppercase bg-[#1e2533] text-gray-400">
            <tr>
              <th className="px-4 py-3">Cliente</th>
              <th className="px-4 py-3">Servicio</th>
              <th className="px-4 py-3">Tipo</th>
              <th className="px-4 py-3">Superusuario</th>
              <th className="px-4 py-3">Estado</th>
              <th className="px-4 py-3">Ingreso</th>
            </tr>
          </thead>
          <tbody>
            {licenses.map((l, i) => (
              <tr key={i} className="border-b border-[#2e3b4e]">
                <td className="px-4 py-2">{l.cliente}</td>
                <td className="px-4 py-2">{l.servicio}</td>
                <td className="px-4 py-2">{l.tipo}</td>
                <td className="px-4 py-2">{l.superusuario}</td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${l.estado === "Activado" ? "bg-green-600" : "bg-yellow-600"}`}>{l.estado}</span>
                </td>
                <td className="px-4 py-2">{l.ingresos}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}