#!/bin/bash

# Parámetros configurables
GITHUB_USERNAME="fhuichacura"
REPO_NAME="sysgemn100f-frontend"
BRANCH_NAME="development"
SSH_KEY_PATH="$HOME/.ssh/id_ed25519"  # Ruta de tu clave privada SSH

# === Asegurar que ssh-agent esté activo y clave cargada ===
if ! pgrep ssh-agent > /dev/null; then
  echo "🗝️ Iniciando ssh-agent..."
  eval "$(ssh-agent -s)"
fi

if ! ssh-add -l | grep -q "$(ssh-keygen -lf $SSH_KEY_PATH | awk '{print $2}')" ; then
  echo "🔐 Cargando clave SSH en el agente..."
  ssh-add "$SSH_KEY_PATH"
else
  echo "✅ Clave SSH ya cargada en el agente."
fi

# === Validar que estamos dentro de un repositorio git ===
if ! git rev-parse --is-inside-work-tree > /dev/null 2>&1; then
  echo "❌ No estás dentro de un repositorio Git. Cambia al directorio correcto."
  exit 1
fi

# === Verificar o agregar remote SSH ===
REMOTE_SSH="git@github.com:$GITHUB_USERNAME/$REPO_NAME.git"
if git remote | grep -q origin; then
  CURRENT_REMOTE=$(git remote get-url origin)
  if [[ "$CURRENT_REMOTE" != "$REMOTE_SSH" ]]; then
    echo "⚠️ El remote origin apunta a $CURRENT_REMOTE, cambiando a SSH $REMOTE_SSH"
    git remote set-url origin "$REMOTE_SSH"
  else
    echo "✅ Remote origin SSH ya configurado."
  fi
else
  echo "🔧 Agregando remote origin SSH..."
  git remote add origin "$REMOTE_SSH"
fi

# === Cambiar o crear la rama local ===
if git show-ref --verify --quiet refs/heads/$BRANCH_NAME; then
  echo "🔀 Cambiando a rama $BRANCH_NAME"
  git checkout "$BRANCH_NAME"
else
  echo "🌱 Creando y cambiando a rama $BRANCH_NAME"
  git checkout -b "$BRANCH_NAME"
fi

# === Añadir cambios y hacer commit si existen ===
if ! git diff-index --quiet HEAD --; then
  echo "📝 Cambios detectados, haciendo commit..."
  git add .
  git commit -m "Commit automático en rama $BRANCH_NAME"
else
  echo "ℹ️ No hay cambios para commitear."
fi

# === Hacer push a la rama remota ===
echo "🚀 Haciendo push a origin/$BRANCH_NAME..."
git push -u origin "$BRANCH_NAME"

echo "✅ Push completado en $REPO_NAME / $BRANCH_NAME"