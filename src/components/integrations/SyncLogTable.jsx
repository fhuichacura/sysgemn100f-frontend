// SyncLogTable.jsx
// Tabla que muestra los logs de sincronización con sistemas externos

export default function SyncLogTable({ logs = [] }) {
  return (
    <div className="bg-[#1E2533] p-5 rounded-2xl shadow border border-[#2e3749]">
      <h3 className="text-white text-lg font-semibold mb-4">Sync Log</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-300">
          <thead className="text-xs uppercase bg-[#2A3243] text-gray-400">
            <tr>
              <th className="px-4 py-3">Service</th>
              <th className="px-4 py-3">Client</th>
              <th className="px-4 py-3">Action</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Retry</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, idx) => (
              <tr key={idx} className="border-b border-[#2a3243] hover:bg-[#2a324388]">
                <td className="px-4 py-2">{log.service}</td>
                <td className="px-4 py-2">{log.client}</td>
                <td className="px-4 py-2">{log.action}</td>
                <td
                  className={`px-4 py-2 ${
                    log.status === "success"
                      ? "text-green-400"
                      : log.status === "failed"
                      ? "text-red-400"
                      : "text-yellow-400"
                  }`}
                >
                  {log.status}
                </td>
                <td className="px-4 py-2">{log.date}</td>
                <td className="px-4 py-2">
                  {log.status === "failed" && (
                    <button
                      onClick={() => alert("Retrying...")}
                      className="text-blue-400 hover:underline"
                    >
                      Retry
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}