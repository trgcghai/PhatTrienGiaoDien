import React from "react";

const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <h2>{item.title}</h2>
      <input type="number" value={item.quantity} min="0" />
      <p>Price: ${item.price.toFixed(2)}</p>
      <button>Remove</button>
    </div>
  );
};

export default CartItem;
