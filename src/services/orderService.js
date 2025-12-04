/**
 * Servicio de Órdenes - ZonaGamer API
 * Gestión de órdenes de compra
 * @version 1.0.0
 */

import { apiRequest } from './api.js';

const ORDER_ENDPOINTS = {
  BASE: '/orders',
  CHECKOUT: '/orders/checkout',
  MY_ORDERS: '/orders/my-orders',
  BY_ID: (id) => `/orders/${id}`,
  BY_STATUS: (status) => `/orders/status/${status}`,
  UPDATE_STATUS: (id) => `/orders/${id}/status`,
};

/**
 * Estados posibles de una orden
 */
const ORDER_STATUS = {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  SHIPPED: 'SHIPPED',
  DELIVERED: 'DELIVERED',
  CANCELLED: 'CANCELLED',
};

/**
 * Realiza el checkout del carrito
 * @param {Object} checkoutData - Datos del checkout
 * @param {string} checkoutData.direccionEnvio - Dirección de envío
 * @param {string} checkoutData.metodoDePago - Método de pago
 * @param {string} checkoutData. notas - Notas adicionales (opcional)
 * @returns {Promise<Object>} Orden creada
 */
const checkout = async (checkoutData) => {
  return apiRequest(ORDER_ENDPOINTS.CHECKOUT, {
    method: 'POST',
    body: checkoutData,
  });
};

/**
 * Obtiene las órdenes del usuario actual
 * @returns {Promise<Array>} Lista de órdenes del usuario
 */
const getMyOrders = async () => {
  return apiRequest(ORDER_ENDPOINTS.MY_ORDERS);
};

/**
 * Obtiene una orden por su ID
 * @param {string} id - ID de la orden
 * @returns {Promise<Object>} Datos de la orden
 */
const getOrderById = async (id) => {
  return apiRequest(ORDER_ENDPOINTS.BY_ID(id));
};

/**
 * Obtiene todas las órdenes del sistema (Solo Admin)
 * @returns {Promise<Array>} Lista de todas las órdenes
 */
const getAllOrders = async () => {
  return apiRequest(ORDER_ENDPOINTS.BASE);
};

/**
 * Obtiene órdenes por estado (Solo Admin)
 * @param {string} status - Estado de la orden
 * @returns {Promise<Array>} Lista de órdenes con el estado especificado
 */
const getOrdersByStatus = async (status) => {
  return apiRequest(ORDER_ENDPOINTS.BY_STATUS(status));
};

/**
 * Actualiza el estado de una orden (Solo Admin)
 * @param {string} id - ID de la orden
 * @param {string} newStatus - Nuevo estado
 * @returns {Promise<Object>} Orden actualizada
 */
const updateOrderStatus = async (id, newStatus) => {
  return apiRequest(`${ORDER_ENDPOINTS.UPDATE_STATUS(id)}?newStatus=${newStatus}`, {
    method: 'PUT',
  });
};

/**
 * Cancela una orden
 * @param {string} id - ID de la orden
 * @returns {Promise<null>} Sin contenido
 */
const cancelOrder = async (id) => {
  return apiRequest(ORDER_ENDPOINTS.BY_ID(id), {
    method: 'DELETE',
  });
};

/**
 * Obtiene órdenes pendientes (Solo Admin)
 * @returns {Promise<Array>} Lista de órdenes pendientes
 */
const getPendingOrders = async () => {
  return getOrdersByStatus(ORDER_STATUS.PENDING);
};

/**
 * Obtiene órdenes en proceso (Solo Admin)
 * @returns {Promise<Array>} Lista de órdenes en proceso
 */
const getProcessingOrders = async () => {
  return getOrdersByStatus(ORDER_STATUS.PROCESSING);
};

/**
 * Obtiene órdenes enviadas (Solo Admin)
 * @returns {Promise<Array>} Lista de órdenes enviadas
 */
const getShippedOrders = async () => {
  return getOrdersByStatus(ORDER_STATUS.SHIPPED);
};

/**
 * Obtiene órdenes entregadas (Solo Admin)
 * @returns {Promise<Array>} Lista de órdenes entregadas
 */
const getDeliveredOrders = async () => {
  return getOrdersByStatus(ORDER_STATUS.DELIVERED);
};

/**
 * Obtiene órdenes canceladas (Solo Admin)
 * @returns {Promise<Array>} Lista de órdenes canceladas
 */
const getCancelledOrders = async () => {
  return getOrdersByStatus(ORDER_STATUS.CANCELLED);
};

export const OrderService = {
  checkout,
  getMyOrders,
  getOrderById,
  getAllOrders,
  getOrdersByStatus,
  updateOrderStatus,
  cancelOrder,
  getPendingOrders,
  getProcessingOrders,
  getShippedOrders,
  getDeliveredOrders,
  getCancelledOrders,
  ORDER_STATUS,
};

export default OrderService;
