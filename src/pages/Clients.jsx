import { useState } from "react";
import DarkTable from "../components/tables/DarkTable";
import ClientDetailModal from "../components/modals/ClientDetailModal";

const dummyClients = [
  { id: 1, name: "Empresa Alpha", service: "Númina", status: "Activo", since: "2024-03-01" },
  { id: 2, name: "Beta Design", service: "Diseño Web", status: "Expirado", since: "2023-11-15" },
  { id: 3, name: "Gamma Cloud", service: "Templates", status: "Activo", since: "2024-01-10" },
];

export default function Clients() {
  const [clients] = useState(dummyClients);
  const [selectedClient, setSelectedClient] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (client) => {
    setSelectedClient(client);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedClient(null);
    setIsModalOpen(false);
  };

  const columns = [
    { key: "name", label: "Empresa" },
    { key: "service", label: "Servicio" },
    {
      key: "status",
      label: "Estado",
      render: (value) => (
        <span className={`px-2 py-1 rounded text-xs font-medium ${
          value === "Activo" ? "bg-green-600/20 text-green-400" : "bg-red-600/20 text-red-400"
        }`}>
          {value}
        </span>
      ),
    },
    { key: "since", label: "Desde" },
  ];

  const actions = (row) => (
    <>
      <button className="text-sm text-blue-400 hover:underline mr-3" onClick={() => openModal(row)}>Ver</button>
      <button className="text-sm text-yellow-400 hover:underline mr-3">Editar</button>
      <button className="text-sm text-red-400 hover:underline">Eliminar</button>
    </>
  );

  return (
    <div className="text-white">
      <h2 className="text-2xl font-semibold mb-6">Clientes</h2>
      <DarkTable columns={columns} data={clients} actions={actions} />
      <ClientDetailModal isOpen={isModalOpen} onClose={closeModal} client={selectedClient} />
    </div>
  );
}