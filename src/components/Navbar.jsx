import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-end items-center gap-10 p-4 bg-blue-950 text-white">
      <Link to="/">
        <span>Home</span>
      </Link>

      <Link to="/cart">
        <span>Cart</span>
      </Link>

      <span className="bg-yellow-400 text-black hover:bg-yellow-500 py-2 px-6 rounded-xl text-lg font-medium transition duration-300">
        Logout
      </span>
    </div>
  );
}

export default Navbar;
