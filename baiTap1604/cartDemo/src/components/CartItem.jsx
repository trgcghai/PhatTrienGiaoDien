import React from "react";
import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/slices/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItem({ id: item.id }));
  };

  const handleQuantityChange = (e) => {
    const quantity = Number(e.target.value);
    if (quantity >= 0) {
      dispatch(updateQuantity({ id: item.id, quantity }));
    }
  };

  return (
    <div className="border p-4 rounded shadow flex items-center justify-between mb-4">
      <div className="flex-1">
        <h2 className="text-lg font-bold">{item.title}</h2>
        <p className="text-gray-700">${item.price.toFixed(2)}</p>
        <p className="text-gray-600">
          Subtotal: ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center">
          <label htmlFor={`quantity-${item.id}`} className="mr-2 text-gray-700">
            Quantity:
          </label>
          <input
            id={`quantity-${item.id}`}
            type="number"
            value={item.quantity}
            onChange={handleQuantityChange}
            min="1"
            className="border rounded w-16 px-2 py-1 text-center"
          />
        </div>

        <button
          onClick={handleRemove}
          className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600 transition-colors"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
