import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="fixed top-0 right-0 left-0 px-4 py-2 h-[60px] flex items-center justify-start bg-white border-b-gray-300/30">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "rounded-lg bg-blue-400 text-white font-bold px-4 py-2"
            : "px-4 py-2 text-blue-400 font-bold"
        }
        to="/"
      >
        Counter with useReducer
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "rounded-lg bg-blue-400 text-white font-bold px-4 py-2"
            : "px-4 py-2 text-blue-400 font-bold"
        }
        to="/counterRedux"
      >
        Counter with Redux
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "rounded-lg bg-blue-400 text-white font-bold px-4 py-2"
            : "px-4 py-2 text-blue-400 font-bold"
        }
        to="/counterReduxToolkit"
      >
        Counter with Redux Toolkit
      </NavLink>
    </div>
  );
};
export default Header;
