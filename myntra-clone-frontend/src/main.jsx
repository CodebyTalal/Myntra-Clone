import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Bag from "./components/Bag.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./components/Home.jsx";
import { Provider } from "react-redux";
import ItemsStore from "./store/redux.js";
import Wishlist from "./components/Wishlist.jsx";
import LoginPage from "./components/LoginPage.jsx";
import CategoryItems from "./components/CategoryItems.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/bag",
        element: <Bag />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/categoryitem",
        element: <CategoryItems />,
      },
    ],
  },
  {
    path: "/login_page",
    element: <LoginPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={ItemsStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
