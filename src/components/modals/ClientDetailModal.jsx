import React from 'react';

const ClientDetailModal = ({ userId, companyId, onCompanyChange, onClose, onSubmit }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-96 shadow-md">
        <h2 className="text-lg font-bold mb-4">Asignar usuario a empresa</h2>
        <p className="mb-2 text-sm text-gray-600">
          Usuario ID: <strong>{userId}</strong>
        </p>

        <label htmlFor="companyId" className="block text-sm mb-2">
          ID de Empresa:
        </label>
        <input
          type="text"
          id="companyId"
          value={companyId}
          onChange={(e) => onCompanyChange(e.target.value)} // <-- función que viene del padre
          className="w-full border rounded px-3 py-2 dark:bg-gray-700 dark:text-white"
          placeholder="Ingrese el ID de la empresa"
        />

        <div className="mt-4 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Cancelar
          </button>
          <button
            onClick={onSubmit}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Asignar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientDetailModal;