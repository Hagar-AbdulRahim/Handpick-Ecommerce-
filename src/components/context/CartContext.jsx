import React, { createContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItem');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const increaseQuantity = (id) =>
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  const decreaseQuantity = (id) =>
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  const addToCart = (item) => {
    const exists = cartItems.find((i) => i.id === item.id);

    if (exists) {
      alert('You already added this item before');
      return;
    }

    setCartItems((prevItems) => [
      ...prevItems,
      {
        ...item,
        quantity: 1,
      },
    ]);
  };
  // Remove From Cart
  const removeFromCart = (id) =>
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));

  useEffect(() => {
    localStorage.setItem('cartItem', JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
