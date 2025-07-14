"use client";

import { createContext, useState } from "react";
import { Product, CartContextType, ChildrenProp } from "@/types";

export const CartContext = createContext<CartContextType | undefined>(undefined);
const CartProvider = ({ children }: ChildrenProp) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const removeFromCart = (id: number) => {
    const index = cartItems.findIndex((item) => item.id === id);
    if (index !== -1) {
      const updatedItems = [...cartItems];
      updatedItems.splice(index, 1);
      setCartItems(updatedItems);
    }
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
