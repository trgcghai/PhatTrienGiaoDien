import { Bell, HelpCircle, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="grid grid-cols-[1fr_auto] items-center gap-8 bg-white py-3 px-4 border-b border-gray-200">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-pink-500">Dashboard</h1>
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search..."
            className="w-80 rounded-lg bg-gray-100 py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="rounded-lg p-2 text-gray-600 hover:bg-gray-100">
          <Bell size={20} />
        </button>
        <button className="rounded-lg p-2 text-gray-600 hover:bg-gray-100">
          <HelpCircle size={20} />
        </button>
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop"
          alt="Profile"
          className="h-8 w-8 rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;
