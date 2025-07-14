'use client';
import React from 'react';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, i) => (
            <li key={i} style={{ marginBottom: '10px' }}>
              <strong>{item.name}</strong> - ${item.price}
              <button onClick={() => removeFromCart(i)} style={{ marginLeft: '10px' }}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
