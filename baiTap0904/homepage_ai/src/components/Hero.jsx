function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <img
        src="/hero.png"
        alt="Kitchen scene with person cooking"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl p-6 max-w-md ml-16 border border-gray-300/50 shadow-sm flex flex-col items-center justify-center">
            <div className="bg-yellow-400 text-sm font-medium px-3 py-1 rounded-full w-fit mb-4">
              Recipe of the day
            </div>
            <h2 className="text-2xl font-bold text-pink-500 mb-2">
              Salad Caprese
            </h2>
            <p className="text-gray-700 mb-6">
              Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella,
              herbs, olive oil, and balsamic vinegar create a refreshing dish
              for lunch or appetizer.
            </p>

            <div className="flex flex-col items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-full overflow-hidden">
                <img
                  src="/Avatar.png"
                  alt="Chef avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-gray-600">Salad Caprese</p>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 bg-pink-500 text-white px-4 py-2 rounded-full"
            >
              View now
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
