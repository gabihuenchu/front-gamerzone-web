/**
 * ZonaGamer API Services
 * Exportación centralizada de todos los servicios
 * @version 1.0.0
 */

// Configuración base
export * from './api.config.js';

// Servicios
export { default as AuthService } from './auth. service.js';
export { default as HealthService } from './health.service.js';
export { default as CategoryService } from './category.service.js';
export { default as ProductService } from './product.service.js';
export { default as CartService } from './cart.service.js';
export { default as OrderService } from './order.service.js';
export { default as UserService } from './user.service. js';
export { default as CalendarService } from './calendar. service.js';

// Re-exportación de servicios con nombres
import AuthService from './auth. service.js';
import HealthService from './health.service. js';
import CategoryService from './category. service.js';
import ProductService from './product.service.js';
import CartService from './cart.service.js';
import OrderService from './order.service.js';
import UserService from './user.service. js';
import CalendarService from './calendar.service.js';

export const services = {
  auth: AuthService,
  health: HealthService,
  category: CategoryService,
  product: ProductService,
  cart: CartService,
  order: OrderService,
  user: UserService,
  calendar: CalendarService,
};

export default services;