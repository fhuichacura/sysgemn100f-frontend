export default function ContractDetailModal({ isOpen, onClose, contract }) {
  if (!isOpen || !contract) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-card p-6 rounded-xl w-full max-w-md shadow-lg border border-gray-700">
        <h2 className="text-xl font-semibold mb-4 text-primary">Detalle del Contrato</h2>
        <div className="space-y-2 text-sm text-white">
          <p><span className="font-bold">Cliente:</span> {contract.client}</p>
          <p><span className="font-bold">Servicio:</span> {contract.service}</p>
          <p><span className="font-bold">Tipo:</span> {contract.type}</p>
          <p><span className="font-bold">Inicio:</span> {contract.start}</p>
          <p><span className="font-bold">Expiración:</span> {contract.expiration}</p>
          <p><span className="font-bold">Estado:</span> {contract.status}</p>
        </div>
        <div className="mt-6 text-right">
          <button
            className="px-4 py-2 bg-primary text-white rounded hover:bg-blue-600 transition"
            onClick={onClose}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}