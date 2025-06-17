import axios from './axios';

// Crear un nuevo tenant
export async function createTenant(data) {
  const response = await axios.post('/admin/tenants', data);
  return response.data;
}

// Obtener todos los tenants
export async function getTenants() {
  const response = await axios.get('/admin/tenants');
  return response.data;
}

// Actualizar tenant
export async function updateTenant(id, data) {
  const response = await axios.put(`/admin/tenants/${id}`, data);
  return response.data;
}

// Eliminar tenant
export async function deleteTenant(id) {
  const response = await axios.delete(`/admin/tenants/${id}`);
  return response.data;
}