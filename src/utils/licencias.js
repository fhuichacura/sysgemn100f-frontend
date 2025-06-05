// src/utils/licencias.js
import { v4 as uuidv4 } from 'uuid';

// Simulación de base de datos local
const licenciasDB = [];

// Genera una licencia única
export function generarLicencia(servicio, cliente) {
  const codigo = uuidv4();
  const nuevaLicencia = {
    codigo,
    servicio,
    cliente,
    fecha: new Date().toISOString(),
    activa: false,
  };
  licenciasDB.push(nuevaLicencia);
  return nuevaLicencia;
}

// Activa una licencia por su código
export function activarLicencia(codigo) {
  const licencia = licenciasDB.find((l) => l.codigo === codigo);
  if (licencia) {
    licencia.activa = true;
    return true;
  }
  return false;
}

// Obtener licencias por cliente o servicio
export function obtenerLicencias(filtro = {}) {
  return licenciasDB.filter((l) => {
    return Object.entries(filtro).every(([key, val]) => l[key] === val);
  });
}

// Simulación inicial (opcional)
export function seedLicenciasDemo() {
  generarLicencia("Numina", "Cliente 1");
  generarLicencia("eLearning", "Cliente 2");
}
