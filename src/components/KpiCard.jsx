// src/components/KpiCard.jsx
import Card from "./ui/Card";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function KpiCard({ title, value, delta, icon, direction = "up", color = "text-green-400" }) {
  return (
    <Card className="flex flex-col justify-between h-full">
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm text-gray-400">{title}</p>
        {icon && <div className="text-gray-400">{icon}</div>}
      </div>
      <div className="text-2xl font-bold text-white">{value}</div>
      {delta !== undefined && (
        <div className={`flex items-center mt-1 text-sm ${color}`}>
          {direction === "up" ? (
            <ArrowUpRight className="w-4 h-4 mr-1" />
          ) : (
            <ArrowDownRight className="w-4 h-4 mr-1" />
          )}
          {delta}
        </div>
      )}
    </Card>
  );
}