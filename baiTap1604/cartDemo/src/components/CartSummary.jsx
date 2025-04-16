const CartSummary = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-300/30 rounded-lg">
      <h2 className="text-lg font-semibold">Cart Summary</h2>
      <div>
        <p className="text-gray-700">Total Items: 5</p>
        <p className="text-gray-700">Total Price: $150.00</p>
      </div>
    </div>
  );
};

export default CartSummary;
