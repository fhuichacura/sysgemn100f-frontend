import axios from './axios';

// Crear SuperUsuario para un tenant
export const createSuperAdmin = async (userData) => {
  const response = await axios.post('/admin/superadmin', userData);
  return response.data;
};

// Opcional: Obtener todos los usuarios (por tenant si lo deseas)
export const fetchUsers = async () => {
  const response = await axios.get('/users');
  return response.data;
};