import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../layouts/Root";

import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import NewsDetail from "../pages/NewsDetail/NewsDetail";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('/news.json')
            },
            {
                path:'/news/:id',
                element: <PrivateRoute><NewsDetail></NewsDetail></PrivateRoute> 

            },
            {
                path:'/login',
                element:<Login></Login>,
            },
            {
                path:'/register',
                element:<Register></Register>,
            }
        ]
    },
]);


export default routes;