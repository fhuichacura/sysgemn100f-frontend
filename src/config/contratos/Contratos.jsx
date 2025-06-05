// src/pages/config/Contratos.jsx
import { useState } from "react";

const servicios = ["Numina", "eLearning", "Templates Web", "Fullstack"];

export default function ContratosConfig() {
  const [config, setConfig] = useState({
    Numina: ["Licencia Básica", "Anual", "Suscripción Mensual"],
    eLearning: ["Mensual", "Por Curso", "Enterprise"],
    "Templates Web": ["Landing Page", "E-commerce", "Portal Corporativo"],
    Fullstack: ["Freelancer", "Agencia", "Corporativo"],
  });

  const [nuevoContrato, setNuevoContrato] = useState({ servicio: "Numina", contrato: "" });

  const agregarContrato = () => {
    const contratos = config[nuevoContrato.servicio] || [];
    if (!nuevoContrato.contrato || contratos.includes(nuevoContrato.contrato)) return;
    setConfig({
      ...config,
      [nuevoContrato.servicio]: [...contratos, nuevoContrato.contrato],
    });
    setNuevoContrato({ ...nuevoContrato, contrato: "" });
  };

  return (
    <div className="text-white">
      <h2 className="text-2xl font-semibold mb-6">Configuración de Contratos</h2>

      <div className="flex gap-4 mb-6">
        <select
          value={nuevoContrato.servicio}
          onChange={(e) => setNuevoContrato({ ...nuevoContrato, servicio: e.target.value })}
          className="bg-zinc-800 border border-gray-600 p-2 rounded"
        >
          {servicios.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Nuevo tipo de contrato"
          value={nuevoContrato.contrato}
          onChange={(e) => setNuevoContrato({ ...nuevoContrato, contrato: e.target.value })}
          className="bg-zinc-800 border border-gray-600 p-2 rounded w-64"
        />
        <button
          onClick={agregarContrato}
          className="bg-primary text-white px-4 rounded hover:bg-blue-600"
        >
          Agregar
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {Object.entries(config).map(([servicio, contratos]) => (
          <div key={servicio} className="bg-card border border-gray-700 p-4 rounded-xl">
            <h3 className="text-lg font-bold text-primary mb-2">{servicio}</h3>
            <ul className="text-sm text-gray-300 list-disc ml-5">
              {contratos.map((c, idx) => (
                <li key={idx}>{c}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}