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
import MyProfile from './../pages/Dashboard/Client/MyProfile';
import MyReviews from './../pages/Dashboard/Client/MyReviews';
import MyProperty from './../pages/Dashboard/Client/MyProperty';
import Wishlist from './../pages/Dashboard/Client/Wishlist';
import MyAddedProperties from "../pages/Dashboard/Agent/MyAddedProperties";
import AddNewPropertie from "../pages/Dashboard/Agent/AddNewPropertie";
import MySoldProperties from "../pages/Dashboard/Agent/MySoldProperties";
import RequestedProperties from "../pages/Dashboard/Agent/RequestedProperties";
import ManageProperties from "../pages/Dashboard/Admin/ManageProperties";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import ManageReviews from "../pages/Dashboard/Admin/ManageReviews";

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
    children:[
      {
        path: "Wishlist",
        element: <PriveteRoute><Wishlist /></PriveteRoute>,
      },
      {
        path: "Property-bought",
        element: <PriveteRoute><MyProperty /></PriveteRoute>,
      },
      {
        path: "My-reviews",
        element: <PriveteRoute><MyReviews /></PriveteRoute>,
      },
      {
        path: "My-Profile",
        element: <PriveteRoute><MyProfile /></PriveteRoute>,
      },
      {
        path: "My-added-properties",
        element: <PriveteRoute><MyAddedProperties /></PriveteRoute>,
      },
      {
        path: "add-new-propertie",
        element: <PriveteRoute><AddNewPropertie /></PriveteRoute>,
      },
      {
        path: "My-sold-properties",
        element: <PriveteRoute><MySoldProperties /></PriveteRoute>,
      },
      {
        path: "Requested-properties",
        element: <PriveteRoute><RequestedProperties /></PriveteRoute>,
      },
      {
        path: "Manage-Properties",
        element: <PriveteRoute><ManageProperties /></PriveteRoute>,
      },
      {
        path: "Manage-Users",
        element: <PriveteRoute><ManageUsers /></PriveteRoute>,
      },
      {
        path: "Manage-reviews",
        element: <PriveteRoute><ManageReviews /></PriveteRoute>,
      },
    ]
  }
]);

export default Router;
