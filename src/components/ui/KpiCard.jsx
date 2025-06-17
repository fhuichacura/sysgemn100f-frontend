// ✅ src/components/ui/KpiCard.jsx

export default function KpiCard({ title, value }) {
  return (
    <div className="bg-[#232b3b] text-white p-4 rounded-lg shadow-md">
      <div className="text-sm text-gray-400">{title}</div>
      <div className="text-2xl font-bold mt-1">{value}</div>
    </div>
  );
}