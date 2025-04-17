import { useSelector } from "react-redux";
import CartSummary from "../components/CartSummary";
import CartItem from "../components/CartItem";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className="">
      {cartItems.length === 0 ? (
        <p className="text-center font-bold text-2xl mb-4">
          Your cart is empty.
        </p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <CartSummary />
        </>
      )}
    </div>
  );
};

export default CartPage;
