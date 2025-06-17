// src/components/modals/IntegrationTimelineModal.jsx
import { CheckCircle, XCircle, Loader2 } from "lucide-react";

// Lista de pasos del proceso
const steps = [
  "Cliente registrado en ERP",
  "Servicio NÚMINA contratado",
  "Validación de requisitos técnicos",
  "Generación de superusuario",
  "Sincronización con plataforma NÚMINA",
];

// Íconos según estado
const icons = {
  completed: <CheckCircle className="text-green-500" />,
  error: <XCircle className="text-red-500" />,
  pending: <Loader2 className="animate-spin text-yellow-500" />,
};

// Componente modal de línea de tiempo visual
export default function IntegrationTimelineModal({ onClose, statusList = [] }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-[#1E2533] text-white w-full max-w-xl rounded-xl p-6 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Integración técnica con NÚMINA</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-xl">×</button>
        </div>

        <ol className="relative border-l border-gray-700 ml-4 space-y-6">
          {steps.map((step, index) => {
            const status = statusList[index] || "pending";
            return (
              <li key={index} className="ml-4 flex items-start gap-3">
                <div className="mt-1">{icons[status]}</div>
                <span className="text-sm">{step}</span>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}