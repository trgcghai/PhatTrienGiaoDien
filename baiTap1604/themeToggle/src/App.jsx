import "./App.css";

function App() {
  return (
    <div className="">
      <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-gray-900">
        <div className="container mx-auto py-8 px-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
              Theme Toggle Demo
            </h1>
            <button className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
              ☀️ Light Mode
            </button>
          </div>
          <div className="p-6 rounded-lg shadow-md bg-white dark:bg-gray-800 text-gray-800 dark:text-white">
            <h2 className="text-xl font-semibold mb-4">Content Section</h2>
            <p>
              This content will change appearance based on the selected theme.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
