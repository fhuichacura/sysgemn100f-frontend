export default function PaymentDetailModal({ isOpen, onClose, payment }) {
  if (!isOpen || !payment) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-card p-6 rounded-xl w-full max-w-md shadow-lg border border-gray-700">
        <h2 className="text-xl font-semibold mb-4 text-primary">Detalle del Pago</h2>
        <div className="space-y-2 text-sm text-white">
          <p><span className="font-bold">Cliente:</span> {payment.client}</p>
          <p><span className="font-bold">Servicio:</span> {payment.service}</p>
          <p><span className="font-bold">Método:</span> {payment.method}</p>
          <p><span className="font-bold">Monto:</span> ${payment.amount}</p>
          <p><span className="font-bold">Fecha:</span> {payment.date}</p>
          <p><span className="font-bold">Estado:</span> {payment.status}</p>
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