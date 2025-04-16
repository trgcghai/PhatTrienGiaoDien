import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "./redux/slices/themeSlice";
import "./App.css";

function App() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  console.log("Dark mode:", darkMode);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <div className="container mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1
            className={`text-2xl font-bold ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Theme Toggle Demo
          </h1>
          <button
            onClick={() => dispatch(toggleTheme())}
            className={`px-4 py-2 rounded-md transition-colors ${
              darkMode
                ? "bg-gray-700 text-white hover:bg-gray-600"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {darkMode ? "☀️ Switch to Light Mode" : "🌙 Switch to Dark Mode"}
          </button>
        </div>
        <div
          className={`p-6 rounded-lg shadow-md ${
            darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
          }`}
        >
          <h2 className="text-xl font-semibold mb-4">Content Section</h2>
          <p>
            This content will change appearance based on the selected theme.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
