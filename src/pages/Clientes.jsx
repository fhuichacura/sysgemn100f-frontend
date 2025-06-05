// src/pages/Clientes.jsx
import { useState } from "react";
import { PlusCircle } from "lucide-react";

export default function Clientes() {
  const [showModal, setShowModal] = useState(false);
  const [clientes, setClientes] = useState([
    { empresa: "Empresa Alpha", servicio: "Númina", estado: "Activo", desde: "2024-03-01" },
    { empresa: "Beta Design", servicio: "Diseño Web", estado: "Expirado", desde: "2023-11-15" },
    { empresa: "Gamma Cloud", servicio: "Templates", estado: "Activo", desde: "2024-01-10" },
  ]);
  const [form, setForm] = useState({ empresa: "", servicio: "", estado: "Activo", desde: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setClientes([...clientes, form]);
    setForm({ empresa: "", servicio: "", estado: "Activo", desde: "" });
    setShowModal(false);
  };

  return (
    <div className="text-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Clientes</h2>
        <button
          onClick={() => setShowModal(true)}
          className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center gap-2"
        >
          <PlusCircle size={20} /> Crear Cliente
        </button>
      </div>

      <div className="overflow-x-auto bg-card rounded-xl border border-gray-700">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-zinc-800 text-left text-sm text-gray-400">
            <tr>
              <th className="p-4">Empresa</th>
              <th className="p-4">Servicio</th>
              <th className="p-4">Estado</th>
              <th className="p-4">Desde</th>
              <th className="p-4">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {clientes.map((c, idx) => (
              <tr key={idx} className="hover:bg-zinc-800">
                <td className="p-4">{c.empresa}</td>
                <td className="p-4">{c.servicio}</td>
                <td className="p-4">
                  <span className={`text-sm font-medium ${c.estado === "Activo" ? "text-green-400" : "text-red-400"}`}>{c.estado}</span>
                </td>
                <td className="p-4">{c.desde}</td>
                <td className="p-4 space-x-2">
                  <button className="text-blue-400 hover:underline">Ver</button>
                  <button className="text-yellow-400 hover:underline">Editar</button>
                  <button className="text-red-400 hover:underline">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-zinc-800 p-6 rounded-xl w-[500px] border border-gray-700">
            <h3 className="text-xl font-semibold mb-4">Nuevo Cliente</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-white">Empresa</label>
                <input
                  type="text"
                  value={form.empresa}
                  onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                  className="w-full mt-1 p-2 bg-zinc-900 border border-gray-600 rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-white">Servicio</label>
                <select
                  value={form.servicio}
                  onChange={(e) => setForm({ ...form, servicio: e.target.value })}
                  className="w-full mt-1 p-2 bg-zinc-900 border border-gray-600 rounded"
                  required
                >
                  <option value="">Seleccionar...</option>
                  <option>Númina</option>
                  <option>eLearning</option>
                  <option>Templates Web</option>
                  <option>Fullstack Web</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-white">Fecha de Alta</label>
                <input
                  type="date"
                  value={form.desde}
                  onChange={(e) => setForm({ ...form, desde: e.target.value })}
                  className="w-full mt-1 p-2 bg-zinc-900 border border-gray-600 rounded"
                  required
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={form.estado === "Activo"}
                  onChange={(e) => setForm({ ...form, estado: e.target.checked ? "Activo" : "Expirado" })}
                  className="mr-2"
                />
                <span className="text-sm text-white">Cliente activo</span>
              </div>
              <div className="flex justify-end gap-2">
                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 bg-gray-600 text-white rounded">
                  Cancelar
                </button>
                <button type="submit" className="px-4 py-2 bg-primary text-white rounded hover:bg-blue-600">
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
