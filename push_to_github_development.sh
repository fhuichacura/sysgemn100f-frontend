#!/bin/bash

# ⚙️ CONFIGURA TUS DATOS AQUÍ
GITHUB_USERNAME="fhuichacura"
REPO_NAME="sysgemn100f-frontend"
BRANCH_NAME="development"

# Verifica token
if [ -z "$GH_TOKEN" ]; then
  echo "❌ No se encontró GH_TOKEN en el entorno."
  echo "➡️  Ejecuta: export GH_TOKEN=tu_token_personal"
  exit 1
fi

# Crea rama development
git checkout -b $BRANCH_NAME 2>/dev/null || git checkout $BRANCH_NAME

# Agrega todo y comitea
git add .
git commit -m "Inicio limpio en rama $BRANCH_NAME"

# Verifica si el repo existe
REPO_EXISTS=$(curl -s -o /dev/null -w "%{http_code}" -H "Authorization: token $GH_TOKEN" \
  https://api.github.com/repos/$GITHUB_USERNAME/$REPO_NAME)

if [ "$REPO_EXISTS" == "404" ]; then
  echo "📦 Repositorio no existe. Creando en GitHub..."
  curl -s -H "Authorization: token $GH_TOKEN" https://api.github.com/user/repos \
    -d "{\"name\":\"$REPO_NAME\"}"
else
  echo "✅ Repositorio ya existe en GitHub."
fi

# Configura y hace push
git remote add origin https://$GH_TOKEN@github.com/$GITHUB_USERNAME/$REPO_NAME.git 2> /dev/null
git push -u origin $BRANCH_NAME

echo "🚀 Rama $BRANCH_NAME subida correctamente a GitHub."