// src/pages/clients/ClientsDashboard.jsx
import DashboardLayout from "../../components/layout/DashboardLayout";
import CreateClientModal from "../../components/modals/CreateClientModal";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ClientsDashboard() {
  const [clients, setClients] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const navigate = useNavigate();

  // Simulación de datos al iniciar
  useEffect(() => {
    setClients([
      { id: 1, name: "Empresa A", industry: "Tecnología", country: "Portugal", email: "admin@empresa-a.com" },
      { id: 2, name: "Empresa B", industry: "Educación", country: "España", email: "admin@empresa-b.com" }
    ]);
  }, []);

  return (
    <DashboardLayout>
      <div className="p-6 text-white">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Clients Overview</h2>
          <button
            onClick={() => setShowCreateModal(true)}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white"
          >
            + Crear Cliente
          </button>
        </div>

        {showCreateModal && (
          <CreateClientModal
            onClose={() => setShowCreateModal(false)}
            onSave={(newClient) => setClients((prev) => [...prev, newClient])}
          />
        )}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-[#1e2533] p-4 rounded">
            <p className="text-sm text-gray-400">Total Clients</p>
            <p className="text-2xl font-semibold">{clients.length}</p>
          </div>
          <div className="bg-[#1e2533] p-4 rounded">
            <p className="text-sm text-gray-400">Países</p>
            <p className="text-2xl font-semibold">{[...new Set(clients.map(c => c.country))].length}</p>
          </div>
          <div className="bg-[#1e2533] p-4 rounded">
            <p className="text-sm text-gray-400">Industrias</p>
            <p className="text-2xl font-semibold">{[...new Set(clients.map(c => c.industry))].length}</p>
          </div>
        </div>

        <table className="min-w-full text-sm text-left text-gray-300">
          <thead className="text-xs uppercase bg-[#1e2533] text-gray-400">
            <tr>
              <th className="px-4 py-3">Nombre</th>
              <th className="px-4 py-3">Industria</th>
              <th className="px-4 py-3">País</th>
              <th className="px-4 py-3">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id} className="border-b border-[#2e3b4e]">
                <td className="px-4 py-2">{client.name}</td>
                <td className="px-4 py-2">{client.industry}</td>
                <td className="px-4 py-2">{client.country}</td>
                <td className="px-4 py-2 space-x-2">
                  <button
                    onClick={() => navigate(`/clients/${client.id}/services`)}
                    className="text-xs bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
                  >
                    Ver Servicios
                  </button>
                  <button
                    className="text-xs bg-gray-600 text-white px-2 py-1 rounded hover:bg-gray-700"
                  >
                    Editar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}
