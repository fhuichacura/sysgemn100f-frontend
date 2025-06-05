export default function DarkTable({ columns, data, actions }) {
  return (
    <div className="overflow-x-auto rounded-lg shadow">
      <table className="min-w-full bg-card border border-gray-700">
        <thead>
          <tr className="bg-dark text-left text-sm uppercase tracking-wider">
            {columns.map((col) => (
              <th key={col.key} className="px-4 py-3 border-b border-gray-700">
                {col.label}
              </th>
            ))}
            {actions && <th className="px-4 py-3 border-b border-gray-700 text-center">Acciones</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="hover:bg-primary/10">
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-2 border-b border-gray-700">
                  {col.render ? col.render(row[col.key], row) : row[col.key]}
                </td>
              ))}
              {actions && (
                <td className="px-4 py-2 border-b border-gray-700 text-center">
                  {actions(row)}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}