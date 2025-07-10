"use client";

import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Product } from "@/types";

const products: Product[] = [
  { id: 1, name: "Apple", price: 30 },
  { id: 2, name: "Banana", price: 10 },
  { id: 3, name: "Mango", price: 50 },
];

const ProductList = () => {
  const cart = useContext(CartContext);

  if (!cart) {
    throw new Error("CartContext must be used within a CartProvider");
  }

  const { addToCart } = cart; 
  return (
    <div>
      <h3>Products</h3>
      {products.map((item) => (
        <div key={item.id}>
          <p>
            {item.name} - ₹{item.price}
          </p>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
