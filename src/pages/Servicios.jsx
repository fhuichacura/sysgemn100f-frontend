// src/pages/Servicios.jsx
import { useNavigate } from "react-router-dom";

const servicios = [
  { nombre: "Númina", path: "/servicios/numina" },
  { nombre: "eLearning", path: "/servicios/elearning" },
  { nombre: "Templates Web", path: "/servicios/templates" },
  { nombre: "Fullstack Web", path: "/servicios/fullstack" },
];

export default function Servicios() {
  const navigate = useNavigate();

  return (
    <div className="text-white">
      <h2 className="text-2xl font-semibold mb-6">Servicios Disponibles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {servicios.map((s, i) => (
          <div
            key={i}
            onClick={() => navigate(s.path)}
            className="cursor-pointer bg-card hover:bg-zinc-700 p-6 rounded-xl border border-gray-700 shadow flex items-center justify-between transition"
          >
            <p className="text-lg font-medium">{s.nombre}</p>
            <span className="text-sm text-blue-400">Ver detalles →</span>
          </div>
        ))}
      </div>
    </div>
  );
}
