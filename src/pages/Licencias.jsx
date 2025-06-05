import { useEffect, useState } from "react";
import { obtenerLicencias, activarLicencia } from "../utils/licencias";

export default function Licencias() {
  const [licencias, setLicencias] = useState([]);
  const [filtro, setFiltro] = useState({ servicio: "", cliente: "" });

  useEffect(() => {
    setLicencias(obtenerLicencias());
  }, []);

  const handleActivar = (codigo) => {
    activarLicencia(codigo);
    setLicencias(obtenerLicencias());
  };

  const servicios = [...new Set(licencias.map((l) => l.servicio))];
  const clientes = [...new Set(licencias.map((l) => l.cliente))];

  const licFiltradas = licencias.filter((l) =>
    (!filtro.servicio || l.servicio === filtro.servicio) &&
    (!filtro.cliente || l.cliente === filtro.cliente)
  );

  return (
    <div className="text-white">
      <h2 className="text-2xl font-semibold mb-4">Licencias Generadas</h2>

      <div className="flex gap-4 mb-6">
        <select
          className="bg-zinc-900 border border-gray-600 rounded px-4 py-2"
          value={filtro.servicio}
          onChange={(e) => setFiltro({ ...filtro, servicio: e.target.value })}
        >
          <option value="">Todos los servicios</option>
          {servicios.map((s, i) => (
            <option key={i} value={s}>{s}</option>
          ))}
        </select>

        <select
          className="bg-zinc-900 border border-gray-600 rounded px-4 py-2"
          value={filtro.cliente}
          onChange={(e) => setFiltro({ ...filtro, cliente: e.target.value })}
        >
          <option value="">Todos los clientes</option>
          {clientes.map((c, i) => (
            <option key={i} value={c}>{c}</option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto bg-card rounded-xl border border-gray-700">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-zinc-800 text-left text-sm text-gray-400">
            <tr>
              <th className="p-4">Código</th>
              <th className="p-4">Servicio</th>
              <th className="p-4">Cliente</th>
              <th className="p-4">Fecha</th>
              <th className="p-4">Estado</th>
              <th className="p-4">Acción</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {licFiltradas.map((lic, idx) => (
              <tr key={idx} className="hover:bg-zinc-800">
                <td className="p-4 text-blue-400">{lic.codigo}</td>
                <td className="p-4">{lic.servicio}</td>
                <td className="p-4">{lic.cliente}</td>
                <td className="p-4">{new Date(lic.fecha).toLocaleDateString()}</td>
                <td className={`p-4 ${lic.activa ? "text-green-400" : "text-red-400"}`}>
                  {lic.activa ? "Activa" : "Inactiva"}
                </td>
                <td className="p-4">
                  {!lic.activa && (
                    <button
                      onClick={() => handleActivar(lic.codigo)}
                      className="px-3 py-1 bg-primary text-white rounded hover:bg-blue-600 text-sm"
                    >
                      Activar
                    </button>
                  )}
                </td>
              </tr>
            ))}
            {licFiltradas.length === 0 && (
              <tr>
                <td colSpan="6" className="p-4 text-center text-gray-500">
                  No se encontraron licencias con los filtros aplicados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}