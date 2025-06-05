// src/pages/TenantUsers.jsx
import { useState } from "react";
import { PlusCircle } from "lucide-react";

export default function TenantUsers() {
  const [showModal, setShowModal] = useState(false);
  const [usuarios, setUsuarios] = useState([
    {
      empresa: "Empresa Alpha",
      email: "admin@alpha.com",
      rol: "Administrador",
      activo: true,
    },
    {
      empresa: "Estudio Beta",
      email: "soporte@beta.com",
      rol: "Soporte",
      activo: false,
    },
  ]);
  const [form, setForm] = useState({ empresa: "", email: "", rol: "", activo: true });

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsuarios([...usuarios, form]);
    setForm({ empresa: "", email: "", rol: "", activo: true });
    setShowModal(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Usuarios de Tenant</h2>
        <button
          onClick={() => setShowModal(true)}
          className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center gap-2"
        >
          <PlusCircle size={20} /> Nuevo Usuario
        </button>
      </div>

      <div className="bg-card p-4 rounded-xl border border-gray-700">
        <table className="w-full text-sm text-left text-white">
          <thead>
            <tr className="border-b border-gray-600">
              <th className="py-2">Empresa</th>
              <th>Email</th>
              <th>Rol</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((u, i) => (
              <tr key={i} className="border-b border-gray-800">
                <td className="py-2">{u.empresa}</td>
                <td>{u.email}</td>
                <td>{u.rol}</td>
                <td className={u.activo ? "text-green-400" : "text-red-400"}>{u.activo ? "Activo" : "Inactivo"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-zinc-800 p-6 rounded-xl w-[500px] border border-gray-700">
            <h3 className="text-xl font-semibold mb-4">Registrar nuevo usuario</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-white">Empresa</label>
                <input
                  type="text"
                  value={form.empresa}
                  onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                  className="w-full mt-1 p-2 bg-zinc-900 border border-gray-600 rounded"
                />
              </div>
              <div>
                <label className="block text-sm text-white">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full mt-1 p-2 bg-zinc-900 border border-gray-600 rounded"
                />
              </div>
              <div>
                <label className="block text-sm text-white">Rol</label>
                <select
                  value={form.rol}
                  onChange={(e) => setForm({ ...form, rol: e.target.value })}
                  className="w-full mt-1 p-2 bg-zinc-900 border border-gray-600 rounded"
                >
                  <option value="">Seleccione...</option>
                  <option value="Administrador">Administrador</option>
                  <option value="Soporte">Soporte</option>
                </select>
              </div>
              <div>
                <label className="inline-flex items-center text-sm text-white">
                  <input
                    type="checkbox"
                    checked={form.activo}
                    onChange={(e) => setForm({ ...form, activo: e.target.checked })}
                    className="mr-2"
                  />
                  Usuario activo
                </label>
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-500"
                  onClick={() => setShowModal(false)}
                >
                  Cancelar
                </button>
                <button type="submit" className="px-4 py-2 bg-primary text-white rounded hover:bg-blue-600">
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
