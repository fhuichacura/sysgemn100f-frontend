// src/pages/Contracts.jsx
import { useState } from "react";
import { PlusCircle } from "lucide-react";

export default function Contracts() {
  const [showModal, setShowModal] = useState(false);

  const contratos = [
    {
      cliente: "Empresa A",
      tipo: "Licencia",
      servicio: "Númina",
      fechaInicio: "2025-06-01",
      fechaFin: "2026-06-01",
      estado: "Activo",
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Gestión de Contratos</h2>
        <button
          onClick={() => setShowModal(true)}
          className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center gap-2"
        >
          <PlusCircle size={20} /> Nuevo Contrato
        </button>
      </div>

      <div className="bg-card p-4 rounded-xl border border-gray-700">
        <table className="w-full text-sm text-left text-white">
          <thead>
            <tr className="border-b border-gray-600">
              <th className="py-2">Cliente</th>
              <th>Servicio</th>
              <th>Tipo</th>
              <th>Inicio</th>
              <th>Expira</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {contratos.map((c, i) => (
              <tr key={i} className="border-b border-gray-800">
                <td className="py-2">{c.cliente}</td>
                <td>{c.servicio}</td>
                <td>{c.tipo}</td>
                <td>{c.fechaInicio}</td>
                <td>{c.fechaFin}</td>
                <td className={`font-medium ${c.estado === "Activo" ? "text-green-400" : "text-red-400"}`}>{c.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal para nuevo contrato */}
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-zinc-800 p-6 rounded-xl w-[500px] border border-gray-700">
            <h3 className="text-xl font-semibold mb-4">Nuevo Contrato</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm text-white">Cliente</label>
                <select className="w-full mt-1 p-2 bg-zinc-900 border border-gray-600 rounded">
                  <option>Empresa A</option>
                  <option>Empresa B</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-white">Servicio</label>
                <select className="w-full mt-1 p-2 bg-zinc-900 border border-gray-600 rounded">
                  <option>Númina</option>
                  <option>Cursos</option>
                  <option>Templates</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-white">Tipo de Contrato</label>
                <select className="w-full mt-1 p-2 bg-zinc-900 border border-gray-600 rounded">
                  <option>Licencia</option>
                  <option>Suscripción</option>
                </select>
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm text-white">Inicio</label>
                  <input type="date" className="w-full mt-1 p-2 bg-zinc-900 border border-gray-600 rounded" />
                </div>
                <div className="flex-1">
                  <label className="block text-sm text-white">Expira</label>
                  <input type="date" className="w-full mt-1 p-2 bg-zinc-900 border border-gray-600 rounded" />
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <button
                  className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-500"
                  onClick={() => setShowModal(false)}
                  type="button"
                >
                  Cancelar
                </button>
                <button className="px-4 py-2 bg-primary text-white rounded hover:bg-blue-600">Guardar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}