import { useState } from "react";

export default function CreateClientModal({ onClose, onSave }) {
  const [formData, setFormData] = useState({
    name: "",
    industry: "",
    country: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Nombre y correo son obligatorios");
      return;
    }
    const newClient = { id: Date.now(), ...formData };
    onSave(newClient);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-[#1E2533] text-white p-6 rounded-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Nuevo Cliente</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">✖</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm">Nombre de la empresa *</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 p-2 bg-[#2b3242] rounded text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm">Industria</label>
            <input
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="w-full mt-1 p-2 bg-[#2b3242] rounded text-white"
            />
          </div>

          <div>
            <label className="block text-sm">País</label>
            <input
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full mt-1 p-2 bg-[#2b3242] rounded text-white"
            />
          </div>

          <div>
            <label className="block text-sm">Email de contacto *</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 p-2 bg-[#2b3242] rounded text-white"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-blue-600 hover:bg-blue-700 py-2 rounded"
          >
            Guardar Cliente
          </button>
        </form>
      </div>
    </div>
  );
}