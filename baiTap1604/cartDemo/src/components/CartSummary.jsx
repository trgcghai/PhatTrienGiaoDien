import React from "react";
import { useSelector } from "react-redux";

const CartSummary = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    // <div className="">
    //   <h2>Cart Summary</h2>
    //   <p>Total Quantity: {totalQuantity}</p>
    //   <p>Total Price: ${totalPrice}</p>
    // </div>
    <div className="border-t pt-4 mt-4">
      <h2 className="text-lg font-bold">Cart Summary</h2>
      <p className="text-gray-700">Total Quantity: {totalQuantity}</p>
      <p className="text-gray-700">Total Price: ${totalPrice}</p>
    </div>
  );
};

export default CartSummary;
