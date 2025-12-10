/**
 * Servicio de Usuarios - ZonaGamer API
 * Gestión de usuarios y perfiles
 * @version 1.0.0
 */

import { apiRequest } from './api.js';

const USER_ENDPOINTS = {
  BASE: '/users',
  ME: '/users/me',
  PASSWORD: '/users/me/password',
  BY_ID: (id) => `/users/${id}`,
  PROMOTE: (id) => `/users/${id}/promote`,
  REVOKE: (id) => `/users/${id}/revoke`,
  DEACTIVATE: (id) => `/users/${id}/desactivarUser`,
  ACTIVATE: (id) => `/users/${id}/activarUser`,
  STATS: '/users/stats',
};

/**
 * Obtiene el perfil del usuario actual
 * @returns {Promise<Object>} Datos del perfil
 */
const getMyProfile = async () => {
  return apiRequest(USER_ENDPOINTS.ME);
};

/**
 * Actualiza el perfil del usuario actual
 * @param {Object} profileData - Datos a actualizar
 * @param {string} profileData.nombre - Nombre
 * @param {string} profileData.apellido - Apellido
 * @param {string} profileData.numeroDeTelefono - Teléfono
 * @returns {Promise<Object>} Perfil actualizado
 */
const updateMyProfile = async (profileData) => {
  return apiRequest(USER_ENDPOINTS.ME, {
    method: 'PUT',
    body: profileData,
  });
};

/**
 * Cambia la contraseña del usuario actual
 * @param {Object} passwordData - Datos de contraseña
 * @param {string} passwordData.contraseñaActual - Contraseña actual
 * @param {string} passwordData.nuevaContraseña - Nueva contraseña
 * @returns {Promise<null>} Sin contenido
 */
const changePassword = async (passwordData) => {
  return apiRequest(USER_ENDPOINTS.PASSWORD, {
    method: 'PUT',
    body: passwordData,
  });
};

/**
 * Obtiene todos los usuarios (Solo Admin)
 * @returns {Promise<Array>} Lista de usuarios
 */
const getAllUsers = async () => {
  return apiRequest(USER_ENDPOINTS.BASE);
};

/**
 * Obtiene un usuario por su ID (Solo Admin)
 * @param {string} id - ID del usuario
 * @returns {Promise<Object>} Datos del usuario
 */
const getUserById = async (id) => {
  return apiRequest(USER_ENDPOINTS.BY_ID(id));
};

/**
 * Promueve un usuario a administrador (Solo Admin)
 * @param {string} id - ID del usuario
 * @returns {Promise<null>} Sin contenido
 */
const promoteToAdmin = async (id) => {
  return apiRequest(USER_ENDPOINTS.PROMOTE(id), {
    method: 'PUT',
  });
};

/**
 * Revoca privilegios de administrador (Solo Admin)
 * @param {string} id - ID del usuario
 * @returns {Promise<null>} Sin contenido
 */
const revokeAdmin = async (id) => {
  return apiRequest(USER_ENDPOINTS.REVOKE(id), {
    method: 'PUT',
  });
};

/**
 * Desactiva una cuenta de usuario (Solo Admin)
 * @param {string} id - ID del usuario
 * @returns {Promise<null>} Sin contenido
 */
const deactivateUser = async (id) => {
  return apiRequest(USER_ENDPOINTS.DEACTIVATE(id), {
    method: 'PUT',
  });
};

/**
 * Activa una cuenta de usuario (Solo Admin)
 * @param {string} id - ID del usuario
 * @returns {Promise<null>} Sin contenido
 */
const activateUser = async (id) => {
  return apiRequest(USER_ENDPOINTS.ACTIVATE(id), {
    method: 'PUT',
  });
};

/**
 * Obtiene estadísticas de usuarios (Solo Admin)
 * @returns {Promise<Object>} Estadísticas de usuarios
 */
const getUserStats = async () => {
  return apiRequest(USER_ENDPOINTS.STATS);
};

export const UserService = {
  getMyProfile,
  updateMyProfile,
  changePassword,
  getAllUsers,
  getUserById,
  promoteToAdmin,
  revokeAdmin,
  deactivateUser,
  activateUser,
  getUserStats,
};

export default UserService;
