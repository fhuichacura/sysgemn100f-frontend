// src/components/modals/ActivateNuminaModal.jsx
import { useState } from "react";

export default function ActivateNuminaModal({ onClose, onActivate, setSuperuserEmail }) {
  const [form, setForm] = useState({
    superuser: "",
    email: "",
    domain: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.superuser || !form.email) {
      alert("Todos los campos obligatorios deben estar completos.");
      return;
    }

    // Setea el email para usarlo al crear la licencia
    setSuperuserEmail(form.email);

    // Llama activación (incluyendo timeline y backend)
    onActivate();

    // Cierra modal
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-[#1E2533] text-white p-6 rounded-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Activación técnica de NÚMINA</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">✖</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm">Nombre del Superusuario *</label>
            <input
              name="superuser"
              value={form.superuser}
              onChange={handleChange}
              className="w-full mt-1 p-2 bg-[#2b3242] rounded text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm">Correo electrónico *</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full mt-1 p-2 bg-[#2b3242] rounded text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm">Dominio de acceso (opcional)</label>
            <input
              name="domain"
              placeholder="ej: numina.empresa.com"
              value={form.domain}
              onChange={handleChange}
              className="w-full mt-1 p-2 bg-[#2b3242] rounded text-white"
            />
          </div>

          <button type="submit" className="w-full mt-4 bg-blue-600 hover:bg-blue-700 py-2 rounded">
            Iniciar sincronización
          </button>
        </form>
      </div>
    </div>
  );
}