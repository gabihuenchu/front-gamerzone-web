/**
 * ZonaGamer API Services
 * Exportación centralizada de todos los servicios
 * @version 1.0.0
 */

// Configuración base
export * from './api.js';

// Servicios
export { default as AuthService } from './authService.js';
export { default as HealthService } from './healthService.js';
export { default as CategoryService } from './categoryService.js';
export { default as ProductService } from './productService.js';
export { default as CartService } from './cartService.js';
export { default as OrderService } from './orderService.js';
export { default as UserService } from './userService.js';
export { default as CalendarService } from './calendarService.js';

// Re-exportación de servicios con nombres
import AuthService from './authService.js';
import HealthService from './healthService.js';
import CategoryService from './categoryService.js';
import ProductService from './productService.js';
import CartService from './cartService.js';
import OrderService from './orderService.js';
import UserService from './userService.js';
import CalendarService from './calendarService.js';

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
