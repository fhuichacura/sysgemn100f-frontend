// ClientTable.jsx
// Tabla que recibe lista de clientes y dispara acciones (ver, editar)

export default function ClientTable({ clients = [], onEdit }) {
  return (
    <div className="bg-[#1E2533] p-5 rounded-2xl shadow border border-[#2e3749]">
      <h3 className="text-white text-lg font-semibold mb-4">Registered Clients</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-300">
          <thead className="text-xs uppercase bg-[#2A3243] text-gray-400">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Country</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, idx) => (
              <tr key={idx} className="border-b border-[#2a3243] hover:bg-[#2a324388]">
                <td className="px-4 py-2">{client.name}</td>
                <td className="px-4 py-2">{client.email}</td>
                <td className="px-4 py-2">{client.country}</td>
                <td className="px-4 py-2">{client.status}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => onEdit(client)}
                    className="text-blue-400 hover:underline"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}