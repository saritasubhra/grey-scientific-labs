import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { FiShoppingCart } from "react-icons/fi";
import useLogout from "../hooks/useLogout";

function Navbar() {
  const { cart } = useCart();
  const { handleLogout, isLoading } = useLogout();
  return (
    <div className="flex justify-end items-center gap-10 p-4 bg-blue-950 text-white">
      <Link to="/">
        <span>Home</span>
      </Link>

      <Link to="/cart">
        <span className="relative">
          <FiShoppingCart size={30} />
          {cart.length !== 0 && (
            <span className="absolute -top-2 -right-2 text-black bg-yellow-500 rounded-full  px-2 py-0.5 text-sm">
              {cart.length}
            </span>
          )}
        </span>
      </Link>

      <span
        onClick={handleLogout}
        disabled={isLoading}
        className="bg-yellow-400 text-black hover:bg-yellow-500 py-2 px-6 rounded-xl text-lg font-medium transition duration-300"
      >
        Logout
      </span>
    </div>
  );
}

export default Navbar;
