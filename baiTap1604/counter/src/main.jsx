import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CounterReducer from "./components/CounterReducer.jsx";
import CounterRedux from "./components/CounterRedux.jsx";
import CounterReduxToolkit from "./components/CounterReduxToolkit.jsx";
import { Provider } from "react-redux";
import { reduxStore } from "./libs/redux/store.js";
import { toolkitStore } from "./libs/reduxToolkit/store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <CounterReducer />,
      },
      {
        path: "/counterRedux",
        element: (
          <Provider store={reduxStore}>
            <CounterRedux />
          </Provider>
        ),
      },
      {
        path: "/counterReduxToolkit",
        element: (
          <Provider store={toolkitStore}>
            <CounterReduxToolkit />
          </Provider>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
