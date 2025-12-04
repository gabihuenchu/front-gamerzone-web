/**
 * Configuración base para las peticiones al API de ZonaGamer
 * @version 1.0. 0
 */

const API_BASE_URL = 'http://3.215.177.243:8080/api';

/**
 * Obtiene el token JWT del almacenamiento local
 * @returns {string|null} Token JWT o null si no existe
 */
const getAuthToken = () => {
  return localStorage.getItem('authToken');
};

/**
 * Guarda el token JWT en el almacenamiento local
 * @param {string} token - Token JWT a guardar
 */
const setAuthToken = (token) => {
  localStorage.setItem('authToken', token);
};

/**
 * Elimina el token JWT del almacenamiento local
 */
const removeAuthToken = () => {
  localStorage.removeItem('authToken');
};

/**
 * Genera los headers para las peticiones HTTP
 * @param {boolean} requiresAuth - Si la petición requiere autenticación
 * @returns {Object} Headers de la petición
 */
const getHeaders = (requiresAuth = true) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  if (requiresAuth) {
    const token = getAuthToken();
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
  }

  return headers;
};

/**
 * Maneja la respuesta de la API
 * @param {Response} response - Respuesta de fetch
 * @returns {Promise<any>} Datos de la respuesta
 * @throws {Error} Si la respuesta no es exitosa
 */
const handleResponse = async (response) => {
  if (response.status === 204) {
    return null;
  }

  const contentType = response.headers.get('content-type');
  let data;

  if (contentType && contentType.includes('application/json')) {
    data = await response.json();
  } else {
    data = await response.text();
  }

  if (!response.ok) {
    const error = new Error(data.message || 'Error en la petición');
    error.status = response.status;
    error.data = data;
    throw error;
  }

  return data;
};

/**
 * Realiza una petición HTTP al API
 * @param {string} endpoint - Endpoint del API
 * @param {Object} options - Opciones de la petición
 * @returns {Promise<any>} Datos de la respuesta
 */
const apiRequest = async (endpoint, options = {}) => {
  const {
    method = 'GET',
    body = null,
    requiresAuth = true,
    customHeaders = {},
  } = options;

  const config = {
    method,
    headers: {
      ... getHeaders(requiresAuth),
      ... customHeaders,
    },
  };

  if (body && method !== 'GET') {
    config. body = JSON.stringify(body);
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
  return handleResponse(response);
};

export {
  API_BASE_URL,
  getAuthToken,
  setAuthToken,
  removeAuthToken,
  getHeaders,
  handleResponse,
  apiRequest,
};