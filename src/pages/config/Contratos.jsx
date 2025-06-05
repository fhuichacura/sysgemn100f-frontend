// src/pages/config/Contratos.jsx
import { useState } from "react";

const tiposServicios = ["Númina", "eLearning", "Templates Web", "Fullstack"];
const modelosContrato = [
  "Licencia Básica",
  "Licencia Anual",
  "Suscripción Mensual",
  "Suscripción Anual",
  "Prueba Gratuita",
  "Pago Único",
  "Proyecto Personalizado",
];

export default function ConfigContratos() {
  const [config, setConfig] = useState({});

  const toggleModelo = (servicio, modelo) => {
    const actualizado = { ...config };
    if (!actualizado[servicio]) actualizado[servicio] = new Set();
    if (actualizado[servicio].has(modelo)) {
      actualizado[servicio].delete(modelo);
    } else {
      actualizado[servicio].add(modelo);
    }
    setConfig({ ...actualizado });
  };

  return (
    <div className="text-white">
      <h2 className="text-2xl font-semibold mb-6">Configuración de Contratos por Servicio</h2>
      {tiposServicios.map((servicio) => (
        <div key={servicio} className="mb-6">
          <h3 className="text-lg font-bold text-primary mb-2">{servicio}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {modelosContrato.map((modelo) => (
              <button
                key={modelo}
                className={`px-4 py-2 rounded border border-gray-600 transition-colors text-sm ${
                  config[servicio]?.has(modelo) ? "bg-primary text-white" : "bg-zinc-800 text-gray-400"
                }`}
                onClick={() => toggleModelo(servicio, modelo)}
              >
                {modelo}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
