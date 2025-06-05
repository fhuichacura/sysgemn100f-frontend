export default function ReportFilterBar({ filters, onFilterChange, onExport }) {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <input
        type="date"
        className="bg-card border border-gray-700 text-white p-2 rounded"
        value={filters.startDate}
        onChange={(e) => onFilterChange("startDate", e.target.value)}
      />
      <input
        type="date"
        className="bg-card border border-gray-700 text-white p-2 rounded"
        value={filters.endDate}
        onChange={(e) => onFilterChange("endDate", e.target.value)}
      />
      <select
        className="bg-card border border-gray-700 text-white p-2 rounded"
        value={filters.service}
        onChange={(e) => onFilterChange("service", e.target.value)}
      >
        <option value="">Todos los servicios</option>
        <option value="Númina">Númina</option>
        <option value="Diseño Web">Diseño Web</option>
        <option value="Templates">Templates</option>
      </select>

      <button
        onClick={onExport}
        className="ml-auto px-4 py-2 bg-primary text-white rounded hover:bg-blue-600 transition"
      >
        Exportar PDF
      </button>
    </div>
  );
}