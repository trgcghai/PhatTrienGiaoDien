import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../store/slices/authSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple validation
    if (!username.trim() || !password.trim()) {
      setError("Please enter both username and password");
      return;
    }

    // In a real app, you would call an API here
    // For demo purposes, we just check if password is "password"
    if (password === "password") {
      dispatch(login({ username }));
      navigate("/welcome");
    } else {
      setError('Invalid credentials. Try with password: "password"');
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md rounded-xl p-4 mt-[100px] bg-white shadow-lg border border-gray-200">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
          <p className="text-gray-600 mt-2">
            Please enter your details to sign in
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-3">
          <div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-10 rounded-md border border-gray-300 px-3 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition duration-200"
                placeholder="Enter your username"
              />
            </div>
          </div>

          <div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 rounded-md border border-gray-300 px-3 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition duration-200"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200 font-medium"
          >
            Sign In
          </button>
        </form>

        {error && (
          <div className="mt-4 rounded-md bg-red-50 p-4 text-sm text-red-600 border-l-4 border-red-500">
            <div className="flex items-center">
              <svg
                className="h-5 w-5 mr-2 text-red-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              {error}
            </div>
          </div>
        )}

        <div className="mt-4 text-center p-4 bg-blue-50 rounded-lg text-sm text-blue-700 border border-blue-100">
          <p className="font-medium">Demo Credentials</p>
          <p className="mt-1">
            Use any username and "password" as the password
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
