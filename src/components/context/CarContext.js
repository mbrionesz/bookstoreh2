import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Estado para almacenar los libros en el carrito

  const addToCart = (book) => {
    setCart((prevCart) => [...prevCart, book]); // Agrega el libro al carrito
  };

  const removeFromCart = (bookId) => {
    setCart((prevCart) => prevCart.filter(book => book.id !== bookId)); // Elimina un libro del carrito
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
