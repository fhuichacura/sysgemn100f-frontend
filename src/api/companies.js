// src/api/companies.js
import axios from './axios';

// Crear empresa con admin
export const createCompany = async (companyData) => {
  try {
    const response = await axios.post('/admin/company-with-admin', companyData);
    return response.data;
  } catch (error) {
    console.error("Error al crear empresa:", error);
    throw error;
  }
};

// Obtener empresas sin admin
export const getCompanies = async () => {
  try {
    const response = await axios.get('/admin/companies');
    return response.data;
  } catch (error) {
    console.error("Error al obtener empresas:", error);
    throw error;
  }
};

// Obtener empresas con admin (para vista Numina)
export const getCompaniesWithAdmin = async () => {
  try {
    const response = await axios.get('/admin/companies-admin');
    return response.data;
  } catch (error) {
    console.error("Error al obtener empresas con admin:", error);
    throw error;
  }
};

// Activar/desactivar empresa
export const toggleCompanyStatus = async (companyId) => {
  try {
    await axios.patch(`/admin/companies/${companyId}/toggle`);
  } catch (error) {
    console.error("Error al cambiar estado:", error);
    throw error;
  }
};

// Eliminar empresa
export const deleteCompany = async (companyId) => {
  try {
    await axios.delete(`/admin/companies/${companyId}`);
  } catch (error) {
    console.error("Error al eliminar empresa:", error);
    throw error;
  }
};