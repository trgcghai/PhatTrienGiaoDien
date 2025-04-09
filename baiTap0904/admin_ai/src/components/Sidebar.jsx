import {
  LayoutDashboard,
  FolderKanban,
  Users,
  BarChart2,
  MessageSquare,
  Cable,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, text: "Dashboard", path: "/" },
    { icon: FolderKanban, text: "Projects", path: "/projects" },
    { icon: Users, text: "Teams", path: "/teams" },
    { icon: BarChart2, text: "Analytics", path: "/analytics" },
    { icon: MessageSquare, text: "Messages", path: "/messages" },
    { icon: Cable, text: "Integrations", path: "/integrations" },
  ];

  return (
    <aside className="bg-white border-r border-gray-300 p-4">
      <div className="flex h-full flex-col justify-between">
        <div>
          {/* Logo */}
          <div className="flex items-center gap-2 pb-8">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500"></div>
            <span className="text-xl font-bold">Logo</span>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1">
            {menuItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg p-3 transition-colors ${
                    isActive
                      ? "bg-pink-500 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`
                }
              >
                <item.icon size={20} />
                <span>{item.text}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Version Banner */}
        <div className="rounded-xl bg-blue-50 p-4">
          <h3 className="mb-2 font-semibold">V2.0 is available</h3>
          <button className="w-full rounded-lg border border-blue-200 bg-white py-2 text-blue-600 transition-colors hover:bg-blue-50">
            Try now
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
