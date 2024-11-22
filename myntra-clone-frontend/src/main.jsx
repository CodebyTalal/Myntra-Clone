import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Bag from "./components/BagComponents/Bag.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { ItemsStore, persistor } from "./store/redux.js";
import Wishlist from "./components/WishlistComponents/Wishlist.jsx";
import LoginPage from "./components/LoginPage.jsx";
import CategoryItems from "./components/CategoryComponents/CategoryItems.jsx";
import HomePage from "./components/CategoryComponents/HomePage.jsx";
import { PersistGate } from "redux-persist/integration/react";
import Spinner from "./components/CategoryComponents/Spinner.jsx";
import ResetAllState from "./components/ResetAllState.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
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
        element: <CategoryItems key={location.pathname} />,
      },
      {
        path: "/ResetAllState",
        element: <ResetAllState />,
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
      <PersistGate loading={<Spinner />} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </StrictMode>
);
