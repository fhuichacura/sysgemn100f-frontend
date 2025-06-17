// IntegrationsDashboard.jsx
import DashboardLayout from "../../layouts/DashboardLayout";
import SyncLogTable from "../../components/integrations/SyncLogTable";
import KpiCard from "../../components/ui/KpiCard";

// Simulación de sincronizaciones por servicio
export default function IntegrationsDashboard() {
  const logs = [
    {
      service: "Numina",
      client: "Empresa A",
      action: "Create superuser",
      status: "success",
      date: "2025-06-15 09:00",
    },
    {
      service: "eLearning",
      client: "Empresa B",
      action: "Sync user roles",
      status: "pending",
      date: "2025-06-15 09:05",
    },
    {
      service: "Numina",
      client: "Empresa C",
      action: "Create tenant",
      status: "failed",
      date: "2025-06-15 09:10",
    },
  ];

  const kpis = [
    { label: "Total Syncs", value: logs.length },
    {
      label: "Success",
      value: logs.filter((l) => l.status === "success").length,
    },
    {
      label: "Failed",
      value: logs.filter((l) => l.status === "failed").length,
    },
  ];

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Integrations</h1>

      <div className="grid grid-cols-3 gap-4 mb-6">
        {kpis.map((kpi) => (
          <KpiCard key={kpi.label} label={kpi.label} value={kpi.value} />
        ))}
      </div>

      <SyncLogTable logs={logs} />
    </DashboardLayout>
  );
}