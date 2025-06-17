// ClientForm.jsx
// Formulario para crear o editar un cliente
// Usa props para manejar submit y edición

import { useState } from "react";

export default function ClientForm({ onSubmit, initialData = {}, onCancel }) {
  const [formData, setFormData] = useState({
    name: initialData.name || "",
    email: initialData.email || "",
    country: initialData.country || "",
    status: initialData.status || "Active",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Ejecutar acción del padre
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm mb-1 text-gray-300">Name</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 bg-[#2a3243] text-white rounded"
          required
        />
      </div>

      <div>
        <label className="block text-sm mb-1 text-gray-300">Email</label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 bg-[#2a3243] text-white rounded"
          required
        />
      </div>

      <div>
        <label className="block text-sm mb-1 text-gray-300">Country</label>
        <input
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="w-full p-2 bg-[#2a3243] text-white rounded"
        />
      </div>

      <div>
        <label className="block text-sm mb-1 text-gray-300">Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full p-2 bg-[#2a3243] text-white rounded"
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
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
          Save
        </button>
      </div>
    </form>
  );
}