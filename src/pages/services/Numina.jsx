// src/pages/services/Numina.jsx (o donde quieras usarlo)
import { useState } from "react";
import IntegrationTimelineModal from "../../components/modals/IntegrationTimelineModal";

export default function NuminaPage() {
  const [showModal, setShowModal] = useState(false);

  // Estados simulados del flujo de integración
  const integrationStatus = [
    "completed",  // Cliente registrado
    "completed",  // Servicio contratado
    "completed",  // Validación técnica
    "completed",  // Superusuario creado
    "pending",    // Esperando sincronización
  ];

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-semibold mb-4">Estado de integración con NÚMINA</h1>
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
      >
        Ver estado técnico
      </button>

      {showModal && (
        <IntegrationTimelineModal
          statusList={integrationStatus}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}