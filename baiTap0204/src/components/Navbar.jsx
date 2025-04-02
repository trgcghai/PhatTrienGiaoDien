import { faFolder, faMessage } from "@fortawesome/free-regular-svg-icons";
import {
  faChartPie,
  faCode,
  faGripVertical,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const items = [
    {
      title: "Dashboard",
      icon: faGripVertical,
      path: "/",
    },
    {
      title: "Projects",
      icon: faFolder,
      path: "/projects",
    },
    {
      title: "Teams",
      icon: faPeopleGroup,
      path: "/teams",
    },
    {
      title: "Analytics",
      icon: faChartPie,
      path: "/analytics",
    },
    {
      title: "Messages",
      icon: faMessage,
      path: "/messages",
    },
    {
      title: "Intergration",
      icon: faCode,
      path: "/intergration",
    },
  ];

  return (
    <nav className="border-r border-gray-300 h-screen p-4 flex flex-col justify-between">
      <div>
        <img src="/logo.png" className="h-16" />
        <div className="mt-4 space-y-2">
          {items.map((item) => {
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => {
                  return (
                    "w-full rounded-lg block p-2 text-gray-500" +
                    (isActive ? " font-semibold text-white bg-[#F44B87]" : "")
                  );
                }}
              >
                <FontAwesomeIcon icon={item.icon} className="mr-2 w-6" />
                <span>{item.title}</span>
              </NavLink>
            );
          })}
        </div>
      </div>

      <div className="bg-[#F0F6FF] p-2 rounded-lg">
        <p className="text-2xl font-bold text-center">V2.0 is available</p>
        <button className="mt-4 bg-white text-blue-400 border border-blue-400 w-full rounded-lg px-2 py-1">
          Try now
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
