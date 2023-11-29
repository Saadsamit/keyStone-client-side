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
import MyProfile from './../pages/Dashboard/MyProfile';
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
import ClientRoute from "./ClientRoute";
import AgentRoute from "./AgentRoute";
import AdminRoute from "./AdminRoute";
import UpdatePropertie from "../pages/Dashboard/Agent/UpdataPropertie";
import AdvertiseProperty from "../pages/Dashboard/Admin/AdvertiseProperty";

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
    errorElement: <ErrorPage/>,
    children:[
      {
        path: "Wishlist",
        element: <ClientRoute><Wishlist /></ClientRoute>,
      },
      {
        path: "Property-bought",
        element: <ClientRoute><MyProperty /></ClientRoute>,
      },
      {
        path: "My-reviews",
        element: <ClientRoute><MyReviews /></ClientRoute>,
      },
      {
        path: "My-Profile",
        element: <PriveteRoute><MyProfile /></PriveteRoute>,
      },
      {
        path: "My-added-properties",
        element: <AgentRoute><MyAddedProperties /></AgentRoute>,
      },
      {
        path: "add-new-propertie",
        element: <AgentRoute><AddNewPropertie /></AgentRoute>,
      },
      {
        path: "update-propertie/:id",
        element: <AgentRoute><UpdatePropertie /></AgentRoute>,
      },
      {
        path: "My-sold-properties",
        element: <AgentRoute><MySoldProperties /></AgentRoute>,
      },
      {
        path: "Requested-properties",
        element: <AgentRoute><RequestedProperties /></AgentRoute>,
      },
      {
        path: "Manage-Properties",
        element: <AdminRoute><ManageProperties /></AdminRoute>,
      },
      {
        path: "Manage-Users",
        element: <AdminRoute><ManageUsers /></AdminRoute>,
      },
      {
        path: "Advertise-property",
        element: <AdminRoute><AdvertiseProperty /></AdminRoute>,
      },
      {
        path: "Manage-reviews",
        element: <AdminRoute><ManageReviews /></AdminRoute>,
      },
    ]
  }
]);

export default Router;
