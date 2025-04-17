import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/slices/authSlice";
import { useEffect } from "react";

const Welcome = () => {
  const { user, isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to login page if not logged in
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  // If not logged in, return null without rendering the component content
  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md rounded-xl bg-white p-4 mt-[100px] shadow-lg border border-gray-200">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Welcome!</h2>
          <p className="text-gray-600 mt-2">We're glad to see you here</p>
        </div>

        <div className="mb-8 rounded-lg bg-green-50 p-6 text-center border border-green-100">
          <div className="flex justify-center mb-4">
            <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center">
              <svg
                className="h-10 w-10 text-green-500"
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
          </div>
          <p className="text-xl text-gray-700">
            Hello, <span className="font-bold">{user?.username}</span>!
          </p>
          <p className="mt-2 text-gray-600">
            You have successfully logged in to your account.
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-200 font-medium"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Welcome;
