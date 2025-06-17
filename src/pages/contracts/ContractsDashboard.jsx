// ✅ src/pages/contracts/ContractsDashboard.jsx
import DashboardLayout from "../../components/layout/DashboardLayout";
import KpiCard from "../../components/ui/KpiCard";
import ContractForm from "../../components/contracts/ContractForm";
import ContractTable from "../../components/contracts/ContractTable";
import { ResponsiveBar } from "@nivo/bar";
import { darkNivoTheme } from "../../styles/nivoTheme";
import { useState } from "react";

const barData = [
  { service: "Numina", value: 20 },
  { service: "Courses", value: 12 },
  { service: "Templates", value: 8 },
];

export default function ContractsDashboard() {
  const [showForm, setShowForm] = useState(false);

  return (
    <DashboardLayout>
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Contracts & Services</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700"
        >
          {showForm ? "Cancel" : "+ New Contract"}
        </button>
      </div>

      {showForm && (
        <div className="mb-6 bg-[#232b3b] p-4 rounded-lg shadow">
          <ContractForm onCancel={() => setShowForm(false)} />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <KpiCard title="Active Contracts" value={56} />
        <KpiCard title="Monthly Revenue" value="$25,000" />
        <KpiCard title="Expiring Soon" value={8} />
      </div>

      <div className="bg-[#232b3b] p-6 rounded-lg shadow h-[300px] mb-8">
        <h3 className="text-lg font-semibold mb-4">Contracts by Service</h3>
        <ResponsiveBar
          data={barData}
          keys={["value"]}
          indexBy="service"
          theme={darkNivoTheme}
          margin={{ top: 20, right: 30, bottom: 50, left: 60 }}
          padding={0.3}
          colors={{ scheme: "nivo" }}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            legend: "Service",
            legendPosition: "middle",
            legendOffset: 32,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            legend: "Contracts",
            legendPosition: "middle",
            legendOffset: -40,
          }}
        />
      </div>

      <div className="bg-[#232b3b] p-4 rounded shadow">
        <h3 className="text-lg font-semibold mb-4">Latest Contracts</h3>
        <ContractTable />
      </div>
    </DashboardLayout>
  );
}