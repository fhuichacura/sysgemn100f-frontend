// ✅ src/pages/clients/ClientServices.jsx
import DashboardLayout from "../../components/layout/DashboardLayout";
import IntegrationTimelineModal from "../../components/modals/IntegrationTimelineModal";
import ActivateNuminaModal from "../../components/modals/ActivateNuminaModal";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const serviceCatalog = [
  { name: "Numina Platform", plans: ["Basic", "Standard", "Premium"], price: "€120/month", integration: true },
  { name: "eLearning Portal", plans: ["Starter", "Premium"], price: "€90/month", integration: false },
  { name: "Templates Web", plans: ["One-time"], price: "€80", integration: false }
];

export default function ClientServices() {
  const { id } = useParams();
  const [services, setServices] = useState([]);
  const [editId, setEditId] = useState(null);
  const [showTimeline, setShowTimeline] = useState(false);
  const [showActivate, setShowActivate] = useState(false);
  const [superuserEmail, setSuperuserEmail] = useState("");
  const [newService, setNewService] = useState({
    name: "",
    plan: "",
    price: "",
    start: "",
    end: "",
    integration: false,
    status: "Pending",
    notes: ""
  });

  useEffect(() => {
    setServices([]);
  }, [id]);

  const handleAddOrEditService = () => {
    if (!newService.name || !newService.plan) return alert("Complete all required fields.");
    if (editId) {
      setServices((prev) => prev.map((s) => (s.id === editId ? { ...s, ...newService } : s)));
      setEditId(null);
    } else {
      setServices((prev) => [...prev, { id: Date.now(), ...newService }]);
    }
    setNewService({ name: "", plan: "", price: "", start: "", end: "", integration: false, status: "Pending", notes: "" });
  };

  const handleEditClick = (srv) => {
    setNewService({ ...srv });
    setEditId(srv.id);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewService((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleServiceSelect = (value) => {
    const selected = serviceCatalog.find((s) => s.name === value);
    setNewService({
      ...newService,
      name: selected.name,
      plan: selected.plans[0],
      price: selected.price,
      integration: selected.integration
    });
  };

  const addLicense = (email) => {
    const licencia = {
      cliente: "Empresa A", // Esto se debe mejorar con estado real del cliente
      servicio: "Numina Platform",
      tipo: newService.plan || "Standard",
      superusuario: email,
      estado: "Activado",
      ingresos: newService.price || "€120/month"
    };
    const prev = JSON.parse(localStorage.getItem("licenses") || "[]");
    localStorage.setItem("licenses", JSON.stringify([...prev, licencia]));
  };

  const handleActivate = () => {
    setShowActivate(false);
    setShowTimeline(true);

    if (newService.name === "Numina Platform") {
      addLicense(superuserEmail);
    }
  };

  return (
    <DashboardLayout>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Servicios Contratados</h2>

        {showTimeline && (
          <IntegrationTimelineModal
            onClose={() => setShowTimeline(false)}
            statusList={["completed", "completed", "completed", "completed", "pending"]}
          />
        )}

        {showActivate && (
          <ActivateNuminaModal
            onClose={() => setShowActivate(false)}
            onActivate={handleActivate}
            setSuperuserEmail={setSuperuserEmail}
          />
        )}

        {/* Formulario */}
        <div className="bg-[#1e2533] p-4 mb-6 rounded">
          <h3 className="text-lg font-semibold mb-2">{editId ? "Editar Servicio" : "+ Agregar Servicio"}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <select name="name" value={newService.name} onChange={(e) => handleServiceSelect(e.target.value)} className="bg-[#232b3b] text-white p-2 rounded">
              <option value="">Selecciona un servicio</option>
              {serviceCatalog.map((s, idx) => (
                <option key={idx} value={s.name}>{s.name}</option>
              ))}
            </select>
            <input name="plan" value={newService.plan} onChange={handleChange} placeholder="Plan" className="bg-[#232b3b] text-white p-2 rounded" />
            <input name="price" value={newService.price} onChange={handleChange} placeholder="Precio" className="bg-[#232b3b] text-white p-2 rounded" />
            <input name="start" value={newService.start} onChange={handleChange} type="date" className="bg-[#232b3b] text-white p-2 rounded" />
            <input name="end" value={newService.end} onChange={handleChange} type="date" className="bg-[#232b3b] text-white p-2 rounded" />
            <input name="notes" value={newService.notes} onChange={handleChange} placeholder="Notas" className="bg-[#232b3b] text-white p-2 rounded" />
          </div>
          <div className="mt-3 flex gap-3 items-center">
            <label className="text-sm text-white">
              <input name="integration" type="checkbox" checked={newService.integration} onChange={handleChange} className="mr-2" />
              Requiere integración
            </label>
            <button onClick={handleAddOrEditService} className="ml-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              {editId ? "Actualizar" : "Guardar Servicio"}
            </button>
          </div>
        </div>

        {/* Tabla */}
        <table className="min-w-full text-sm text-left text-gray-300">
          <thead className="text-xs uppercase bg-[#1e2533] text-gray-400">
            <tr>
              <th className="px-4 py-3">Servicio</th>
              <th className="px-4 py-3">Plan</th>
              <th className="px-4 py-3">Precio</th>
              <th className="px-4 py-3">Inicio</th>
              <th className="px-4 py-3">Fin</th>
              <th className="px-4 py-3">Integración</th>
              <th className="px-4 py-3">Estado</th>
              <th className="px-4 py-3">Notas</th>
              <th className="px-4 py-3">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {services.map((s) => (
              <tr key={s.id} className="border-b border-[#2e3b4e]">
                <td className="px-4 py-2">{s.name}</td>
                <td className="px-4 py-2">{s.plan}</td>
                <td className="px-4 py-2">{s.price}</td>
                <td className="px-4 py-2">{s.start}</td>
                <td className="px-4 py-2">{s.end}</td>
                <td className="px-4 py-2">{s.integration ? "Sí" : "No"}</td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${s.status === "Active" ? "bg-green-600" : s.status === "Pending" ? "bg-yellow-600" : "bg-gray-500"}`}>{s.status}</span>
                </td>
                <td className="px-4 py-2 text-xs italic text-gray-400">{s.notes}</td>
                <td className="px-4 py-2 space-x-2">
                  {s.name === "Numina Platform" && s.status === "Pending" ? (
                    <button onClick={() => setShowActivate(true)} className="text-xs bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700">Activar</button>
                  ) : (
                    <>
                      <button onClick={() => handleEditClick(s)} className="text-xs bg-gray-600 text-white px-2 py-1 rounded hover:bg-gray-700">Editar</button>
                      <button onClick={() => setShowTimeline(true)} className="text-xs bg-purple-600 text-white px-2 py-1 rounded hover:bg-purple-700">Integración</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}