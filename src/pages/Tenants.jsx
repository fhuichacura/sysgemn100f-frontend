// src/pages/Tenants.jsx
export default function Tenants() {
  const tenants = [
    {
      nombre: "Empresa A",
      servicio: "Númina",
      tipo: "Suscripción",
      inicio: "2025-06-01",
      fin: "2026-06-01",
      estado: "Activo"
    },
    {
      nombre: "Empresa B",
      servicio: "Templates",
      tipo: "Licencia",
      inicio: "2025-05-01",
      fin: "2026-05-01",
      estado: "Activo"
    },
  ];

  return (
    <div className="text-white">
      <h2 className="text-2xl font-semibold mb-6">Gestión de Tenants</h2>
      <div className="overflow-x-auto bg-card rounded-xl border border-gray-700">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-zinc-800 text-left text-sm text-gray-400">
            <tr>
              <th className="p-4">Empresa</th>
              <th className="p-4">Servicio</th>
              <th className="p-4">Tipo</th>
              <th className="p-4">Inicio</th>
              <th className="p-4">Expira</th>
              <th className="p-4">Estado</th>
              <th className="p-4">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {tenants.map((tenant, idx) => (
              <tr key={idx} className="hover:bg-zinc-800">
                <td className="p-4">{tenant.nombre}</td>
                <td className="p-4">{tenant.servicio}</td>
                <td className="p-4">{tenant.tipo}</td>
                <td className="p-4">{tenant.inicio}</td>
                <td className="p-4">{tenant.fin}</td>
                <td className="p-4">
                  <span className={`text-sm font-medium ${tenant.estado === "Activo" ? "text-green-400" : "text-yellow-400"}`}>
                    {tenant.estado}
                  </span>
                </td>
                <td className="p-4">
                  <button className="bg-primary text-white px-3 py-1 rounded hover:bg-blue-600 transition">Ver</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}