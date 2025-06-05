// src/pages/servicios/FullStack.jsx
import { useState } from "react";
import { PlusCircle } from "lucide-react";

export default function FullStack() {
  const [showModal, setShowModal] = useState(false);
  const [clientes, setClientes] = useState([
    {
      empresa: "Agencia Rocket",
      contrato: "Paquete Premium",
      licencia: "FULLSTK-ZXCV5678",
      estado: "Activo",
      inicio: "2024-05-01",
      fin: "2025-05-01",
    },
  ]);
  const [form, setForm] = useState({
    empresa: "",
    contrato: "Starter",
    inicio: "",
    fin: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const licencia = `FULLSTK-${crypto.randomUUID().slice(0, 8).toUpperCase()}`;
    setClientes([
      ...clientes,
      {
        empresa: form.empresa,
        contrato: form.contrato,
        licencia,
        estado: "Activo",
        inicio: form.inicio,
        fin: form.fin,
      },
    ]);
    setShowModal(false);
    setForm({ empresa: "", contrato: "Starter", inicio: "", fin: "" });
  };

  return (
    <div className="text-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Clientes con FullStack</h2>
        <button
          onClick={() => setShowModal(true)}
          className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center gap-2"
        >
          <PlusCircle size={20} /> Registrar Cliente
        </button>
      </div>

      <div className="overflow-x-auto bg-card rounded-xl border border-gray-700">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-zinc-800 text-left text-sm text-gray-400">
            <tr>
              <th className="p-4">Empresa</th>
              <th className="p-4">Tipo de Contrato</th>
              <th className="p-4">Licencia</th>
              <th className="p-4">Inicio</th>
              <th className="p-4">Expira</th>
              <th className="p-4">Estado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {clientes.map((c, idx) => (
              <tr key={idx} className="hover:bg-zinc-800">
                <td className="p-4">{c.empresa}</td>
                <td className="p-4">{c.contrato}</td>
                <td className="p-4 text-blue-400">{c.licencia}</td>
                <td className="p-4">{c.inicio}</td>
                <td className="p-4">{c.fin}</td>
                <td className={`p-4 ${c.estado === "Activo" ? "text-green-400" : "text-red-400"}`}>{c.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-zinc-800 p-6 rounded-xl w-[500px] border border-gray-700">
            <h3 className="text-xl font-semibold mb-4">Registrar cliente con FullStack</h3>
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
                <label className="block text-sm text-white">Tipo de Contrato</label>
                <select
                  value={form.contrato}
                  onChange={(e) => setForm({ ...form, contrato: e.target.value })}
                  className="w-full mt-1 p-2 bg-zinc-900 border border-gray-600 rounded"
                >
                  <option>Starter</option>
                  <option>Pro</option>
                  <option>Premium</option>
                  <option>Personalizado</option>
                </select>
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm text-white">Inicio</label>
                  <input
                    type="date"
                    value={form.inicio}
                    onChange={(e) => setForm({ ...form, inicio: e.target.value })}
                    className="w-full mt-1 p-2 bg-zinc-900 border border-gray-600 rounded"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm text-white">Expira</label>
                  <input
                    type="date"
                    value={form.fin}
                    onChange={(e) => setForm({ ...form, fin: e.target.value })}
                    className="w-full mt-1 p-2 bg-zinc-900 border border-gray-600 rounded"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-500"
                  onClick={() => setShowModal(false)}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-white rounded hover:bg-blue-600"
                >
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
