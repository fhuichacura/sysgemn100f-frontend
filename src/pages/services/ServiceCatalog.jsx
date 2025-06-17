// ✅ src/pages/services/ServiceCatalog.jsx
import DashboardLayout from "../../components/layout/DashboardLayout";
import { useState } from "react";

const initialServices = [
  {
    id: 1,
    name: "Numina",
    description: "FinOps & Cloud Cost Management",
    plans: [
      { name: "Monthly", price: 200 },
      { name: "Annual", price: 2000 },
    ],
    requiresIntegration: true,
  },
  {
    id: 2,
    name: "eLearning",
    description: "Online course platform",
    plans: [
      { name: "Basic", price: 100 },
      { name: "Pro", price: 300 }],
    requiresIntegration: false,
  },
  {
    id: 3,
    name: "Templates",
    description: "Website templates and tools",
    plans: [
      { name: "One-time", price: 80 },
    ],
    requiresIntegration: false,
  },
];

export default function ServiceCatalog() {
  const [services, setServices] = useState(initialServices);

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Service Catalog</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-[#232b3b] p-4 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-1">{service.name}</h3>
            <p className="text-gray-400 mb-2">{service.description}</p>
            <ul className="text-sm mb-2">
              {service.plans.map((plan, idx) => (
                <li key={idx} className="flex justify-between">
                  <span>{plan.name}</span>
                  <span className="text-blue-400 font-semibold">${plan.price}</span>
                </li>
              ))}
            </ul>
            {service.requiresIntegration && (
              <span className="text-xs bg-blue-600 px-2 py-1 rounded text-white">
                Requires Integration
              </span>
            )}
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}