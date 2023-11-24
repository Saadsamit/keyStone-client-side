import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AllProperties from "../pages/AllProperties";
// import Registration from "../pages/Registration";
// import Login from './../pages/Login';


const Router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children:[
       {
        index:true,
        element: <Home/>
       },
       {
        path: 'All-properties',
        element: <AllProperties/>
       }
    ]
    }
        //     {
        //         path: '/',
        //         element: <Registration/>,
        //         index: true,
        //     },
        //     {
        //         path: '/login',
        //         element: <Login/>
        //     }

])

export default Router;