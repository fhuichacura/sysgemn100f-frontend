// src/components/ui/Card.jsx
export function Card({ children, className = "" }) {
  return (
    <div className={`bg-zinc-800 border border-gray-700 rounded-xl shadow p-4 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return (
    <div className={`p-2 ${className}`}>
      {children}
    </div>
  );
}