import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-400 text-white p-4">
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/"
              className="hover:underline px-4 py-2 rounded-lg bg-white font-bold text-blue-400"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="hover:underline px-4 py-2 rounded-lg bg-white font-bold text-blue-400"
            >
              Cart
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
