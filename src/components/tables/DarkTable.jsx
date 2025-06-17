// DarkTable.jsx
// Tabla reutilizable para mostrar datos en modo oscuro
// Columnas y filas se pasan como props

export default function DarkTable({ title, columns, rows }) {
  return (
    <div className="bg-[#1E2533] p-5 rounded-2xl shadow border border-[#2e3749]">
      <h3 className="text-white text-lg font-semibold mb-4">{title}</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-300">
          <thead className="text-xs uppercase bg-[#2A3243] text-gray-400">
            <tr>
              {columns.map((col) => (
                <th key={col} scope="col" className="px-4 py-3">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx} className="border-b border-[#2a3243] hover:bg-[#2a324388]">
                {row.map((cell, cIdx) => (
                  <td key={cIdx} className="px-4 py-2 whitespace-nowrap">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}