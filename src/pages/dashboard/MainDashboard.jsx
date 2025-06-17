// ✅ src/pages/dashboard/MainDashboard.jsx
import DashboardLayout from "../../components/layout/DashboardLayout";
import KpiCard from "../../components/ui/KpiCard";
import { ResponsiveBar } from "@nivo/bar";
import { darkNivoTheme } from "../../styles/nivoTheme";

const data = [
  { month: "Jan", Clients: 10, Contracts: 8, Licenses: 5 },
  { month: "Feb", Clients: 14, Contracts: 9, Licenses: 6 },
  { month: "Mar", Clients: 18, Contracts: 12, Licenses: 7 },
];

const keys = ["Clients", "Contracts", "Licenses"];

export default function MainDashboard() {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">General Overview</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <KpiCard title="Total Clients" value={42} />
        <KpiCard title="Total Contracts" value={31} />
        <KpiCard title="Active Licenses" value={22} />
      </div>

      <div className="bg-[#232b3b] p-6 rounded-lg shadow h-[400px]">
        <h3 className="text-lg font-semibold mb-4">Monthly Activity</h3>
        <ResponsiveBar
          data={data}
          keys={keys}
          indexBy="month"
          margin={{ top: 20, right: 130, bottom: 50, left: 60 }}
          padding={0.3}
          groupMode="grouped"
          theme={darkNivoTheme}
          colors={{ scheme: "nivo" }}
          borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Month",
            legendPosition: "middle",
            legendOffset: 32,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Total",
            legendPosition: "middle",
            legendOffset: -40,
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
          animate={true}
        />
      </div>
    </DashboardLayout>
  );
}