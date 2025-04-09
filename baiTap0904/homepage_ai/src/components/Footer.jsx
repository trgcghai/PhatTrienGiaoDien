function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-medium mb-4">About Us</h3>
            <p className="text-gray-400 text-sm mb-4">
              Welcome to our website, a wonderful place to explore and learn how
              to cook like a pro.
            </p>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 rounded text-gray-400 bg-white border border-gray-300/50 text-sm w-full"
              />
              <button className="bg-pink-500 text-white px-4 py-2 rounded text-sm whitespace-nowrap">
                Send
              </button>
            </div>
          </div>

          {/* Learn More */}
          <div>
            <h3 className="text-lg font-medium mb-4">Learn More</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Our Cooks
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  See Our Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Recipes */}
          <div>
            <h3 className="text-lg font-medium mb-4">Recipes</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  What to Cook This Week
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Pasta
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Dinner
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Healthy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Vegetarian
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Vegan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Christmas
                </a>
              </li>
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-lg font-medium mb-4">Shop</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Gift Subscription
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Send Us Feedback
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span className="text-xl font-bold text-white">Chefify</span>
          </div>
          <div className="text-sm text-gray-400">
            <span>2023 Chefify Company</span>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
