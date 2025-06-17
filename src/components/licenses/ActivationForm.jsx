// ActivationForm.jsx
// Formulario para crear o editar una activación de licencia

import { useState } from "react";

export default function ActivationForm({ onSubmit, onCancel, initialData = {} }) {
  const [formData, setFormData] = useState({
    clientName: initialData.clientName || "",
    activationCode: initialData.activationCode || "",
    service: initialData.service || "Numina",
    status: initialData.status || "Pending",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Ejecutar acción padre
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
        <label className="block text-sm mb-1 text-gray-300">Activation Code</label>
        <input
          name="activationCode"
          value={formData.activationCode}
          onChange={handleChange}
          className="w-full p-2 bg-[#2a3243] text-white rounded"
          required
        />
      </div>

      <div>
        <label className="block text-sm mb-1 text-gray-300">Service</label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full p-2 bg-[#2a3243] text-white rounded"
        >
          <option value="Numina">Numina</option>
          <option value="eLearning">eLearning</option>
          <option value="Templates">Templates Web</option>
        </select>
      </div>

      <div>
        <label className="block text-sm mb-1 text-gray-300">Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full p-2 bg-[#2a3243] text-white rounded"
        >
          <option value="Pending">Pending</option>
          <option value="Activated">Activated</option>
          <option value="Expired">Expired</option>
        </select>
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
          Save Activation
        </button>
      </div>
    </form>
  );
}