// ContractForm.jsx
// Formulario para registrar o editar un contrato de servicio

import { useState } from "react";

export default function ContractForm({ onSubmit, onCancel, initialData = {} }) {
  const [formData, setFormData] = useState({
    clientName: initialData.clientName || "",
    serviceType: initialData.serviceType || "Numina",
    contractType: initialData.contractType || "Mensual",
    startDate: initialData.startDate || "",
    endDate: initialData.endDate || "",
    price: initialData.price || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Envía al handler del dashboard
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm mb-1 text-gray-300">Client</label>
        <input
          name="clientName"
          value={formData.clientName}
          onChange={handleChange}
          className="w-full p-2 bg-[#2a3243] text-white rounded"
          required
        />
      </div>

      <div>
        <label className="block text-sm mb-1 text-gray-300">Service</label>
        <select
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          className="w-full p-2 bg-[#2a3243] text-white rounded"
        >
          <option value="Numina">Numina</option>
          <option value="eLearning">eLearning</option>
          <option value="Templates">Templates Web</option>
        </select>
      </div>

      <div>
        <label className="block text-sm mb-1 text-gray-300">Contract Type</label>
        <select
          name="contractType"
          value={formData.contractType}
          onChange={handleChange}
          className="w-full p-2 bg-[#2a3243] text-white rounded"
        >
          <option value="Mensual">Mensual</option>
          <option value="Anual">Anual</option>
          <option value="Licencia Única">Licencia Única</option>
        </select>
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block text-sm mb-1 text-gray-300">Start Date</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="w-full p-2 bg-[#2a3243] text-white rounded"
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm mb-1 text-gray-300">End Date</label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="w-full p-2 bg-[#2a3243] text-white rounded"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm mb-1 text-gray-300">Price (€)</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="w-full p-2 bg-[#2a3243] text-white rounded"
        />
      </div>

      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 rounded bg-gray-600 hover:bg-gray-500"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-500 text-white"
        >
          Save Contract
        </button>
      </div>
    </form>
  );
}