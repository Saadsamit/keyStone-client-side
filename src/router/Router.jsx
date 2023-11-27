import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AllProperties from "../pages/AllProperties";
import PropertiesDetail from "../pages/PropertiesDetail";
import Registration from "../pages/Registration";
import Login from "./../pages/Login";
import ErrorPage from "../pages/ErrorPage";
import IsExistUser from "./IsExistUser";
import PriveteRoute from "./PriveteRoute";
import Dashboard from "../pages/Dashboard";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "All-properties",
        element: <PriveteRoute><AllProperties /></PriveteRoute>,
      },
      {
        path: "Properties-Detail/:id",
        element: <PriveteRoute><PropertiesDetail /></PriveteRoute>,
      },
      {
        path: "Registration",
        element: <IsExistUser><Registration /></IsExistUser>,
        index: true,
      },
      {
        path: "login",
        element: <IsExistUser><Login /></IsExistUser>,
      },
    ],
  },
  {
    path: "/Dashboard",
    element: <PriveteRoute><Dashboard/></PriveteRoute>,
  }
]);

export default Router;
