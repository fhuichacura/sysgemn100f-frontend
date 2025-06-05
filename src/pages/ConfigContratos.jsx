// src/pages/ConfigContratos.jsx
import { useState } from "react";
import { Card } from "../components/ui/Card";

const modelosIniciales = [
  {
    servicio: "Númina",
    contratos: ["Licencia Anual", "Mensual", "Prueba Gratuita"],
  },
  {
    servicio: "eLearning",
    contratos: ["Suscripción Mensual"],
  },
  {
    servicio: "Templates Web",
    contratos: ["Pago Único"],
  },
  {
    servicio: "Fullstack",
    contratos: ["Proyecto Personalizado"],
  },
];

export default function ConfigContratos() {
  const [modelos, setModelos] = useState(modelosIniciales);

  const agregarContrato = (servicio, nuevo) => {
    if (!nuevo) return;
    setModelos((prev) =>
      prev.map((s) =>
        s.servicio === servicio
          ? { ...s, contratos: [...s.contratos, nuevo] }
          : s
      )
    );
  };

  return (
    <div className="text-white">
      <h2 className="text-2xl font-semibold mb-6">Configuración de Contratos</h2>
      <div className="space-y-6">
        {modelos.map((s) => (
          <Card key={s.servicio} className="border border-gray-700">
            <div className="p-4">
              <h3 className="text-lg text-primary font-bold">{s.servicio}</h3>
              <ul className="list-disc ml-6 text-sm text-gray-300">
                {s.contratos.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
              <form
                className="mt-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  agregarContrato(s.servicio, e.target.contrato.value);
                  e.target.reset();
                }}
              >
                <input
                  name="contrato"
                  className="bg-zinc-900 border border-gray-600 px-2 py-1 rounded text-sm text-white mr-2"
                  placeholder="Nuevo contrato"
                />
                <button
                  type="submit"
                  className="bg-primary px-3 py-1 text-sm rounded text-black"
                >
                  Agregar
                </button>
              </form>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
