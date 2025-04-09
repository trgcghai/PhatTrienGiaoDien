import { Search } from "lucide-react";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-pink-500">Chefify</span>
        </div>

        <div className="relative max-w-md w-full mx-4 hidden md:block">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="What would you like to cook?"
            className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 border-0 focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            What to cook
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Recipes
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Ingredients
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Occasions
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            About Us
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#"
            className="text-pink-500 bg-pink-200/50 px-4 py-2 rounded-full font-medium"
          >
            Login
          </a>
          <a
            href="#"
            className="bg-pink-500 text-white px-4 py-2 rounded-full font-medium"
          >
            Subscribe
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
