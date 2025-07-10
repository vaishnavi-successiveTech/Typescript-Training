"use client";

import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCart = () => {
  const cart = useContext(CartContext);
   if (!cart) {
    throw new Error("ProductCart must be used within a CartProvider");
  }

  const { cartItems, removeFromCart, totalPrice } = cart;

  return (
    <div>
      <h3>Cart</h3>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id}>
            <p>
              {item.name} - ₹{item.price}
            </p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
      <h4>Total: ₹{totalPrice}</h4>
    </div>
  );
};

export default ProductCart;
