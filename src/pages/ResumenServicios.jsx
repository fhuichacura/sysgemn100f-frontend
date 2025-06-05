// src/pages/ResumenServicios.jsx
import { useEffect, useState } from "react";
import { Card, CardContent } from "../components/ui/Card";
import { Link } from "react-router-dom";

const serviciosMock = [
  {
    nombre: "Númina",
    clientes: 4,
    contratos: {
      "Licencia Anual": 2,
      "Mensual": 1,
      "Prueba Gratuita": 1,
    },
    ingresos: 3500,
  },
  {
    nombre: "eLearning",
    clientes: 2,
    contratos: {
      "Suscripción Mensual": 2,
    },
    ingresos: 1200,
  },
  {
    nombre: "Templates Web",
    clientes: 3,
    contratos: {
      "Pago Único": 3,
    },
    ingresos: 900,
  },
  {
    nombre: "Fullstack",
    clientes: 1,
    contratos: {
      "Proyecto Personalizado": 1,
    },
    ingresos: 2000,
  },
];

export default function ResumenServicios() {
  const [resumen, setResumen] = useState({ totalClientes: 0, totalIngresos: 0 });

  useEffect(() => {
    const totalClientes = serviciosMock.reduce((acc, s) => acc + s.clientes, 0);
    const totalIngresos = serviciosMock.reduce((acc, s) => acc + s.ingresos, 0);
    setResumen({ totalClientes, totalIngresos });
  }, []);

  return (
    <div className="text-white">
      <h2 className="text-2xl font-semibold mb-6">Resumen General de Servicios</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="bg-card border border-gray-700">
          <CardContent className="p-4">
            <p className="text-sm text-gray-400">Clientes totales</p>
            <p className="text-2xl font-bold text-primary">{resumen.totalClientes}</p>
          </CardContent>
        </Card>
        <Card className="bg-card border border-gray-700">
          <CardContent className="p-4">
            <p className="text-sm text-gray-400">Servicios activos</p>
            <p className="text-2xl font-bold text-primary">{serviciosMock.length}</p>
          </CardContent>
        </Card>
        <Card className="bg-card border border-gray-700">
          <CardContent className="p-4">
            <p className="text-sm text-gray-400">Ingresos estimados</p>
            <p className="text-2xl font-bold text-green-400">${resumen.totalIngresos}</p>
          </CardContent>
        </Card>
        <Card className="bg-card border border-gray-700">
          <CardContent className="p-4">
            <p className="text-sm text-gray-400">Contratos únicos</p>
            <p className="text-2xl font-bold text-yellow-400">
              {serviciosMock.reduce((acc, s) => acc + Object.keys(s.contratos).length, 0)}
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {serviciosMock.map((servicio, i) => (
          <Card key={i} className="bg-zinc-800 border border-gray-700">
            <CardContent className="p-4 space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-primary">{servicio.nombre}</h3>
                <Link
                  to={`/servicios/${servicio.nombre.toLowerCase()}`}
                  className="text-sm text-blue-400 hover:underline"
                >
                  Ver detalles
                </Link>
              </div>
              <p className="text-gray-400">
                Clientes: <span className="text-white font-medium">{servicio.clientes}</span>
              </p>
              <p className="text-gray-400">
                Ingresos: <span className="text-green-400 font-medium">${servicio.ingresos}</span>
              </p>
              <div>
                <p className="text-sm text-gray-400">Contratos:</p>
                <ul className="ml-4 list-disc text-sm text-gray-300">
                  {Object.entries(servicio.contratos).map(([tipo, cant]) => (
                    <li key={tipo}>
                      {tipo}: {cant}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}