// ✅ src/pages/users/UsersDashboard.jsx
import DashboardLayout from "../../components/layout/DashboardLayout";
import KpiCard from "../../components/ui/KpiCard";
import UserForm from "../../components/users/UserForm";
import UserTable from "../../components/users/UserTable";
import { ResponsivePie } from "@nivo/pie";
import { darkNivoTheme } from "../../styles/nivoTheme";
import { useState } from "react";

const pieData = [
  { id: "Activated", label: "Activated", value: 80, color: "#00C49F" },
  { id: "Pending", label: "Pending", value: 12, color: "#FFD700" },
  { id: "Deactivated", label: "Deactivated", value: 6, color: "#FF4C60" },
];

export default function UsersDashboard() {
  const [showForm, setShowForm] = useState(false);

  return (
    <DashboardLayout>
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Client Users</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700"
        >
          {showForm ? "Cancel" : "+ Create User"}
        </button>
      </div>

      {showForm && (
        <div className="mb-6 bg-[#232b3b] p-4 rounded-lg shadow">
          <UserForm onCancel={() => setShowForm(false)} />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <KpiCard title="Registered Users" value={128} />
        <KpiCard title="Superusers" value={24} />
        <KpiCard title="Pending Emails" value={5} />
      </div>

      <div className="bg-[#232b3b] p-4 rounded shadow h-[300px] mb-8">
        <h3 className="text-lg font-semibold mb-2">Users by Status</h3>
        <ResponsivePie
          data={pieData}
          margin={{ top: 20, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.4}
          padAngle={0.7}
          cornerRadius={3}
          colors={{ datum: "data.color" }}
          borderWidth={1}
          borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
          theme={darkNivoTheme}
          arcLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#ffffff"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabel={(e) => `${e.id}: ${e.value}`}
        />
      </div>

      <div className="bg-[#232b3b] p-4 rounded shadow">
        <h3 className="text-lg font-semibold mb-4">User Registry</h3>
        <UserTable />
      </div>
    </DashboardLayout>
  );
}