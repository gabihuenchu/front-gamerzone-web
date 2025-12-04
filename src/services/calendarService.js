/**
 * Servicio de Calendario - ZonaGamer API
 * Gestión de eventos del calendario (Solo Admin)
 * @version 1.0.0
 */

import { apiRequest } from './api.js';

const CALENDAR_ENDPOINTS = {
  BASE: '/calendar/eventos',
  PENDING: '/calendar/eventos/pendientes',
  BY_RANGE: '/calendar/eventos/rango',
  UPCOMING: '/calendar/eventos/proximos',
  BY_ID: (id) => `/calendar/eventos/${id}`,
  COMPLETE: (id) => `/calendar/eventos/${id}/complete`,
  SET_PENDING: (id) => `/calendar/eventos/${id}/pending`,
  STATS: '/calendar/stats',
};

/**
 * Tipos de eventos disponibles
 */
const EVENT_TYPES = {
  LAUNCH: 'LAUNCH',
  PROMOTION: 'PROMOTION',
  MAINTENANCE: 'MAINTENANCE',
  MEETING: 'MEETING',
  OTHER: 'OTHER',
};

/**
 * Estados de eventos
 */
const EVENT_STATUS = {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
};

/**
 * Crea un nuevo evento
 * @param {Object} eventData - Datos del evento
 * @param {string} eventData.titulo - Título del evento
 * @param {string} eventData.descripcion - Descripción
 * @param {string} eventData. fechaInicio - Fecha y hora de inicio (ISO format)
 * @param {string} eventData.fechaFin - Fecha y hora de fin (ISO format)
 * @param {string} eventData.ubicacion - Ubicación del evento
 * @param {string} eventData.tipoEvento - Tipo de evento
 * @returns {Promise<Object>} Evento creado
 */
const createEvent = async (eventData) => {
  return apiRequest(CALENDAR_ENDPOINTS.BASE, {
    method: 'POST',
    body: eventData,
  });
};

/**
 * Obtiene todos los eventos
 * @returns {Promise<Array>} Lista de eventos
 */
const getAllEvents = async () => {
  return apiRequest(CALENDAR_ENDPOINTS.BASE);
};

/**
 * Obtiene eventos pendientes
 * @returns {Promise<Array>} Lista de eventos pendientes
 */
const getPendingEvents = async () => {
  return apiRequest(CALENDAR_ENDPOINTS.PENDING);
};

/**
 * Obtiene eventos por rango de fechas
 * @param {string} startDate - Fecha de inicio (ISO format)
 * @param {string} endDate - Fecha de fin (ISO format)
 * @returns {Promise<Array>} Lista de eventos en el rango
 */
const getEventsByDateRange = async (startDate, endDate) => {
  const params = new URLSearchParams({
    inicio: startDate,
    fin: endDate,
  });
  return apiRequest(`${CALENDAR_ENDPOINTS.BY_RANGE}?${params}`);
};

/**
 * Obtiene próximos eventos
 * @param {number} days - Número de días hacia el futuro (default: 7)
 * @returns {Promise<Array>} Lista de próximos eventos
 */
const getUpcomingEvents = async (days = 7) => {
  return apiRequest(`${CALENDAR_ENDPOINTS.UPCOMING}?days=${days}`);
};

/**
 * Obtiene un evento por su ID
 * @param {string} id - ID del evento
 * @returns {Promise<Object>} Datos del evento
 */
const getEventById = async (id) => {
  return apiRequest(CALENDAR_ENDPOINTS.BY_ID(id));
};

/**
 * Actualiza un evento existente
 * @param {string} id - ID del evento
 * @param {Object} eventData - Datos actualizados
 * @returns {Promise<Object>} Evento actualizado
 */
const updateEvent = async (id, eventData) => {
  return apiRequest(CALENDAR_ENDPOINTS.BY_ID(id), {
    method: 'PUT',
    body: eventData,
  });
};

/**
 * Marca un evento como completado
 * @param {string} id - ID del evento
 * @returns {Promise<Object>} Evento actualizado
 */
const markAsCompleted = async (id) => {
  return apiRequest(CALENDAR_ENDPOINTS.COMPLETE(id), {
    method: 'PUT',
  });
};

/**
 * Marca un evento como pendiente
 * @param {string} id - ID del evento
 * @returns {Promise<Object>} Evento actualizado
 */
const markAsPending = async (id) => {
  return apiRequest(CALENDAR_ENDPOINTS.SET_PENDING(id), {
    method: 'PUT',
  });
};

/**
 * Elimina un evento
 * @param {string} id - ID del evento
 * @returns {Promise<null>} Sin contenido
 */
const deleteEvent = async (id) => {
  return apiRequest(CALENDAR_ENDPOINTS.BY_ID(id), {
    method: 'DELETE',
  });
};

/**
 * Obtiene estadísticas del calendario
 * @returns {Promise<Object>} Estadísticas de eventos
 */
const getCalendarStats = async () => {
  return apiRequest(CALENDAR_ENDPOINTS.STATS);
};

/**
 * Obtiene eventos de hoy
 * @returns {Promise<Array>} Lista de eventos de hoy
 */
const getTodayEvents = async () => {
  const today = new Date();
  const startOfDay = new Date(today.setHours(0, 0, 0, 0)).toISOString();
  const endOfDay = new Date(today.setHours(23, 59, 59, 999)).toISOString();
  return getEventsByDateRange(startOfDay, endOfDay);
};

/**
 * Obtiene eventos de esta semana
 * @returns {Promise<Array>} Lista de eventos de esta semana
 */
const getThisWeekEvents = async () => {
  return getUpcomingEvents(7);
};

/**
 * Obtiene eventos de este mes
 * @returns {Promise<Array>} Lista de eventos de este mes
 */
const getThisMonthEvents = async () => {
  return getUpcomingEvents(30);
};

export const CalendarService = {
  createEvent,
  getAllEvents,
  getPendingEvents,
  getEventsByDateRange,
  getUpcomingEvents,
  getEventById,
  updateEvent,
  markAsCompleted,
  markAsPending,
  deleteEvent,
  getCalendarStats,
  getTodayEvents,
  getThisWeekEvents,
  getThisMonthEvents,
  EVENT_TYPES,
  EVENT_STATUS,
};

export default CalendarService;
