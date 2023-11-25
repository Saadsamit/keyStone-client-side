import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AllProperties from "../pages/AllProperties";
import PropertiesDetail from "../pages/PropertiesDetail";
import Registration from "../pages/Registration";
import Login from "./../pages/Login";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "All-properties",
        element: <AllProperties />,
      },
      {
        path: "Properties-Detail/:id",
        element: <PropertiesDetail />,
      },
      {
        path: "Registration",
        element: <Registration />,
        index: true,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

export default Router;
