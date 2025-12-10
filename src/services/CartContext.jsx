import { createContext, useState, useEffect } from 'react';
import { CartService } from './cartService.js';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState({ items: [], totalItems: 0, totalPrice: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      loadCart();
    }
  }, []);

  const loadCart = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const cartData = await CartService.getCart();
      setCart(cartData);
    } catch (err) {
      console.error('Error al cargar carrito:', err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const addItem = async (productId, quantity = 1) => {
    try {
      setIsLoading(true);
      setError(null);
      const updatedCart = await CartService.addToCart(productId, quantity);
      setCart(updatedCart);
      return updatedCart;
    } catch (err) {
      console.error('Error al agregar item:', err);
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const updateItem = async (productId, quantity) => {
    try {
      setIsLoading(true);
      setError(null);
      const updatedCart = await CartService.updateCartItem(productId, quantity);
      setCart(updatedCart);
      return updatedCart;
    } catch (err) {
      console.error('Error al actualizar item:', err);
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const removeItem = async (productId) => {
    try {
      setIsLoading(true);
      setError(null);
      const updatedCart = await CartService.removeFromCart(productId);
      setCart(updatedCart);
      return updatedCart;
    } catch (err) {
      console.error('Error al eliminar item:', err);
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const clearCartItems = async () => {
    try {
      setIsLoading(true);
      setError(null);
      await CartService.clearCart();
      setCart({ items: [], totalItems: 0, totalPrice: 0 });
    } catch (err) {
      console.error('Error al vaciar carrito:', err);
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const incrementQuantity = async (productId) => {
    const item = cart.items.find(i => i.productId === productId);
    if (item) {
      return updateItem(productId, item.quantity + 1);
    }
  };

  const decrementQuantity = async (productId) => {
    const item = cart.items.find(i => i.productId === productId);
    if (item) {
      if (item.quantity <= 1) {
        return removeItem(productId);
      }
      return updateItem(productId, item.quantity - 1);
    }
  };

  const value = {
    cart,
    isLoading,
    error,
    loadCart,
    addItem,
    updateItem,
    removeItem,
    clearCart: clearCartItems,
    incrementQuantity,
    decrementQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
