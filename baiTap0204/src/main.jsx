import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import TeamPage from "./pages/TeamPage.jsx";
import AnalysisPage from "./pages/AnalysisPage.jsx";
import MessagePage from "./pages/MessagePage.jsx";
import IntegrationPage from "./pages/IntegrationPage.jsx";
import ModalContextProvider from "./context/ModalContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/projects",
        element: <ProjectPage />,
      },
      {
        path: "/teams",
        element: <TeamPage />,
      },
      {
        path: "/analytics",
        element: <AnalysisPage />,
      },
      {
        path: "/messages",
        element: <MessagePage />,
      },
      {
        path: "/intergration",
        element: <IntegrationPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ModalContextProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </ModalContextProvider>
  </StrictMode>
);
