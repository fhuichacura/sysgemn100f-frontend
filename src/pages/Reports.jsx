// src/pages/Reports.jsx
import { useState } from "react";
import { FileDown } from "lucide-react";

export default function Reports() {
  const [filtroMes, setFiltroMes] = useState("2025-06");

  const descargarReporte = () => {
    alert("Simulación de descarga PDF del reporte de " + filtroMes);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Reportes</h2>
        <button
          onClick={descargarReporte}
          className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center gap-2"
        >
          <FileDown size={20} /> Descargar PDF
        </button>
      </div>

      <div className="bg-card p-4 rounded-xl border border-gray-700 space-y-4">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-white text-sm mb-1">Mes del Reporte</label>
            <input
              type="month"
              value={filtroMes}
              onChange={(e) => setFiltroMes(e.target.value)}
              className="w-full p-2 bg-zinc-900 border border-gray-600 rounded"
            />
          </div>
          <div>
            <label className="block text-white text-sm mb-1">Servicio</label>
            <select className="w-full p-2 bg-zinc-900 border border-gray-600 rounded">
              <option value="">Todos</option>
              <option value="númina">Númina</option>
              <option value="templates">Templates</option>
              <option value="cursos">Cursos</option>
            </select>
          </div>
        </div>

        <div className="text-sm text-gray-400 pt-4">
          Este módulo simula la generación de reportes administrativos. Los filtros seleccionados se reflejarán en el PDF final. Próximamente se integrará generación real con backend.
        </div>
      </div>
    </div>
  );
}