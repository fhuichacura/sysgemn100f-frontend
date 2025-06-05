import { useState } from "react";

export default function Settings() {
  const [settings, setSettings] = useState({
    companyName: "NUMEROS100FALHAS",
    defaultContractDuration: 12,
    defaultEmail: "contacto@numeros100falhas.com",
    paymentMethods: {
      mbway: true,
      paypal: true,
      transferencia: false,
    },
  });

  const togglePayment = (method) => {
    setSettings((prev) => ({
      ...prev,
      paymentMethods: {
        ...prev.paymentMethods,
        [method]: !prev.paymentMethods[method],
      },
    }));
  };

  return (
    <div className="text-white">
      <h2 className="text-2xl font-semibold mb-6">Configuración General</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card p-6 rounded-xl border border-gray-700">
          <h3 className="text-lg font-semibold mb-4 text-primary">Empresa</h3>
          <p><span className="font-bold">Nombre:</span> {settings.companyName}</p>
          <p><span className="font-bold">Email contacto:</span> {settings.defaultEmail}</p>
        </div>

        <div className="bg-card p-6 rounded-xl border border-gray-700">
          <h3 className="text-lg font-semibold mb-4 text-primary">Contratos</h3>
          <p><span className="font-bold">Duración por defecto:</span> {settings.defaultContractDuration} meses</p>
        </div>

        <div className="bg-card p-6 rounded-xl border border-gray-700 col-span-1 md:col-span-2">
          <h3 className="text-lg font-semibold mb-4 text-primary">Métodos de Pago</h3>
          <div className="flex flex-wrap gap-4">
            {Object.entries(settings.paymentMethods).map(([method, enabled]) => (
              <button
                key={method}
                onClick={() => togglePayment(method)}
                className={`px-4 py-2 rounded border border-gray-600 ${
                  enabled ? "bg-green-700 text-white" : "bg-gray-700 text-gray-400"
                }`}
              >
                {method.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}