import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { FiShoppingCart } from "react-icons/fi";
import useLogout from "../hooks/useLogout";

function Navbar() {
  const { cart } = useCart();
  const { handleLogout, isLoading } = useLogout();
  return (
    <div className="flex justify-end items-center gap-10 p-4 bg-black text-white">
      <Link to="/">
        <span>Home</span>
      </Link>

      <Link to="/cart">
        <span className="relative">
          <FiShoppingCart size={30} />
          {cart.length !== 0 && (
            <span className="absolute -top-2 -right-2 btnsm">
              {cart.length}
            </span>
          )}
        </span>
      </Link>

      <span onClick={handleLogout} disabled={isLoading} className="btn-teal">
        Logout
      </span>
    </div>
  );
}

export default Navbar;
