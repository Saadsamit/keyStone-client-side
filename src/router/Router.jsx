import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
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