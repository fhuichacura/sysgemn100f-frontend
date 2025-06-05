import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const dataMensual = [
  { mes: "Ene", ingresos: 1200 },
  { mes: "Feb", ingresos: 980 },
  { mes: "Mar", ingresos: 1500 },
  { mes: "Abr", ingresos: 1100 },
  { mes: "May", ingresos: 1700 },
];

const dataPorServicio = [
  { servicio: "Númina", ingresos: 2500 },
  { servicio: "Templates", ingresos: 900 },
  { servicio: "Cursos", ingresos: 1300 },
  { servicio: "Diseño Web", ingresos: 1100 },
];

export default function Dashboard() {
  return (
    <div className="text-white">
      <h2 className="text-2xl font-semibold mb-6">Resumen General</h2>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-card p-4 rounded-xl shadow border border-gray-700">
          <p className="text-sm text-gray-400">Ingresos del mes</p>
          <p className="text-xl font-bold text-primary mt-1">$1,700</p>
        </div>
        <div className="bg-card p-4 rounded-xl shadow border border-gray-700">
          <p className="text-sm text-gray-400">Contratos activos</p>
          <p className="text-xl font-bold text-primary mt-1">8</p>
        </div>
        <div className="bg-card p-4 rounded-xl shadow border border-gray-700">
          <p className="text-sm text-gray-400">Clientes activos</p>
          <p className="text-xl font-bold text-primary mt-1">6</p>
        </div>
        <div className="bg-card p-4 rounded-xl shadow border border-gray-700">
          <p className="text-sm text-gray-400">Pagos pendientes</p>
          <p className="text-xl font-bold text-yellow-400 mt-1">2</p>
        </div>
      </div>

      {/* Gráfico mensual */}
      <div className="bg-card p-6 rounded-xl shadow border border-gray-700">
        <h3 className="text-lg font-semibold mb-4 text-primary">Ingresos por mes</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={dataMensual}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="mes" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip
              contentStyle={{ backgroundColor: "#1e293b", borderColor: "#475569", color: "#fff" }}
              cursor={{ fill: "#33415540" }}
            />
            <Bar dataKey="ingresos" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Gráfico por servicio */}
      <div className="bg-card mt-10 p-6 rounded-xl shadow border border-gray-700">
        <h3 className="text-lg font-semibold mb-4 text-primary">Ingresos por servicio</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={dataPorServicio} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis type="number" stroke="#94a3b8" />
            <YAxis type="category" dataKey="servicio" stroke="#94a3b8" />
            <Tooltip
              contentStyle={{ backgroundColor: "#1e293b", borderColor: "#475569", color: "#fff" }}
              cursor={{ fill: "#33415540" }}
            />
            <Bar dataKey="ingresos" fill="#10b981" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}