// ActivationTable.jsx
// Tabla visual de activaciones con cliente, código y estado

export default function ActivationTable({ activations = [], onEdit }) {
  return (
    <div className="bg-[#1E2533] p-5 rounded-2xl shadow border border-[#2e3749]">
      <h3 className="text-white text-lg font-semibold mb-4">License Activations</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-300">
          <thead className="text-xs uppercase bg-[#2A3243] text-gray-400">
            <tr>
              <th className="px-4 py-3">Client</th>
              <th className="px-4 py-3">Activation Code</th>
              <th className="px-4 py-3">Service</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {activations.map((a, idx) => (
              <tr key={idx} className="border-b border-[#2a3243] hover:bg-[#2a324388]">
                <td className="px-4 py-2">{a.clientName}</td>
                <td className="px-4 py-2 font-mono">{a.activationCode}</td>
                <td className="px-4 py-2">{a.service}</td>
                <td className="px-4 py-2">{a.status}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => onEdit(a)}
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