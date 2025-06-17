// ContractTable.jsx
// Muestra una tabla con contratos registrados

export default function ContractTable({ contracts = [], onEdit }) {
  return (
    <div className="bg-[#1E2533] p-5 rounded-2xl shadow border border-[#2e3749]">
      <h3 className="text-white text-lg font-semibold mb-4">Registered Contracts</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-300">
          <thead className="text-xs uppercase bg-[#2A3243] text-gray-400">
            <tr>
              <th className="px-4 py-3">Client</th>
              <th className="px-4 py-3">Service</th>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Start</th>
              <th className="px-4 py-3">End</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contracts.map((c, idx) => (
              <tr key={idx} className="border-b border-[#2a3243] hover:bg-[#2a324388]">
                <td className="px-4 py-2">{c.clientName}</td>
                <td className="px-4 py-2">{c.serviceType}</td>
                <td className="px-4 py-2">{c.contractType}</td>
                <td className="px-4 py-2">{c.startDate}</td>
                <td className="px-4 py-2">{c.endDate}</td>
                <td className="px-4 py-2">€{c.price}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => onEdit(c)}
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