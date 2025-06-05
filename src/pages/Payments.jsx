// src/pages/Payments.jsx
import { useState } from "react";
import { CreditCard, PlusCircle } from "lucide-react";

export default function Payments() {
  const [showModal, setShowModal] = useState(false);

  const pagos = [
    {
      cliente: "Empresa A",
      metodo: "PayPal",
      monto: "$340",
      fecha: "2025-06-01",
      estado: "Completado",
    },
    {
      cliente: "Empresa B",
      metodo: "MBWay",
      monto: "$180",
      fecha: "2025-06-02",
      estado: "Pendiente",
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Pagos</h2>
        <button
          onClick={() => setShowModal(true)}
          className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center gap-2"
        >
          <PlusCircle size={20} /> Registrar Pago
        </button>
      </div>

      <div className="bg-card p-4 rounded-xl border border-gray-700">
        <table className="w-full text-sm text-left text-white">
          <thead>
            <tr className="border-b border-gray-600">
              <th className="py-2">Cliente</th>
              <th>Método</th>
              <th>Monto</th>
              <th>Fecha</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {pagos.map((p, i) => (
              <tr key={i} className="border-b border-gray-800">
                <td className="py-2">{p.cliente}</td>
                <td>{p.metodo}</td>
                <td>{p.monto}</td>
                <td>{p.fecha}</td>
                <td className={`font-medium ${p.estado === "Completado" ? "text-green-400" : "text-yellow-400"}`}>{p.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-zinc-800 p-6 rounded-xl w-[500px] border border-gray-700">
            <h3 className="text-xl font-semibold mb-4">Nuevo Pago</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm text-white">Cliente</label>
                <select className="w-full mt-1 p-2 bg-zinc-900 border border-gray-600 rounded">
                  <option>Empresa A</option>
                  <option>Empresa B</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-white">Método de Pago</label>
                <select className="w-full mt-1 p-2 bg-zinc-900 border border-gray-600 rounded">
                  <option>PayPal</option>
                  <option>MBWay</option>
                  <option>Transferencia</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-white">Monto</label>
                <input type="number" placeholder="$" className="w-full mt-1 p-2 bg-zinc-900 border border-gray-600 rounded" />
              </div>
              <div>
                <label className="block text-sm text-white">Fecha</label>
                <input type="date" className="w-full mt-1 p-2 bg-zinc-900 border border-gray-600 rounded" />
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