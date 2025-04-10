import React from "react";
import { useCart } from "../contexts/CartContext";
import EmptyCart from "../components/EmptyCart";
import CartItem from "../components/CartItem";

function Cart() {
  const { cart, clearCart } = useCart();

  if (!cart.length) return <EmptyCart />;

  const total = cart.reduce(
    (acc, item) => item.quantity * item.product.price + acc,
    0
  );

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <ul>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
      <div className="flex justify-between p-4">
        <span>Total :{total.toFixed(2)}</span>
        <button onClick={clearCart}>Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
