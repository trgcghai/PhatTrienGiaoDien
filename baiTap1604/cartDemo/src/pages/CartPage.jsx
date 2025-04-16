import CartSummary from "../components/CartSummary";

const CartPage = () => {
  return (
    <div className="cart-page">
      <p>Your cart is empty.</p>
      <CartSummary />
    </div>
  );
};

export default CartPage;
