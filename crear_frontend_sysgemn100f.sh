#!/bin/bash

# CONFIGURA ESTOS DATOS PRIMERO
GITHUB_USERNAME="fhuichacura"
GITHUB_TOKEN="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"
REPO_NAME="sysgemn100f-frontend"
DESTINO="/Users/felipehuichacura/Desktop/Proyecto sysgemn100f/$REPO_NAME"

# CREAR PROYECTO CON CRA
echo "🛠️  Creando proyecto CRA en: $DESTINO"
npx create-react-app "$DESTINO"

cd "$DESTINO" || exit

# CREAR ESTRUCTURA DE CARPETAS
echo "📁 Generando estructura de carpetas..."
mkdir -p src/components/charts
mkdir -p src/pages

# CREAR ARCHIVO DE RUTAS
cat <<EOF > src/routes.js
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Clients from "./pages/Clients";
import Contracts from "./pages/Contracts";
import Payments from "./pages/Payments";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/contracts" element={<Contracts />} />
      <Route path="/payments" element={<Payments />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}
EOF

# INICIALIZAR GIT Y SUBIR A GITHUB
echo "🔐 Subiendo a GitHub..."
git init
git add .
git commit -m "Inicio del proyecto frontend sysgemn100f"

# Crear repositorio en GitHub vía API
curl -u "$GITHUB_USERNAME:$GITHUB_TOKEN" https://api.github.com/user/repos -d "{\"name\":\"$REPO_NAME\"}"

# Agregar remoto y hacer push
git remote add origin "https://$GITHUB_TOKEN@github.com/$GITHUB_USERNAME/$REPO_NAME.git"
git branch -M main
git push -u origin main

echo "✅ Proyecto frontend creado y subido correctamente a GitHub."