import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../components/SingleBook";
import Error from "../Error";
import Singlebook from "../shop/Singlebook";
import DashboardLayout from "../Dashboard/DashboardLayout";
import Dashboard from "../Dashboard/Dashboard";
import Uploadbook from "../Dashboard/Uploadbook";
import Editbook from "../Dashboard/Editbook";
import Managebook from "../Dashboard/Managebook";
import Signup from "../components/signup";
import Login from "../components/Login";
import Logout from "../components/Logout";
import PrivateRoute from "../protectedRoutes/PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <Error/>,
        element: <App/>,

        children: [

            {
                path: "/",
                element: <Home/>

            },

            {
                path: "/shop",
                element: <Shop/>
            },

            {
                path: "/about",
                element: <About/>
            },

            {
                path: "/blog",
                element: <Blog/>
            },
            {
                path: "/Singlebook",
                element: <SingleBook/>
            },
            
            {
                path:'/book/:id',
                element: <Singlebook/>,
                loader:({params}) => fetch(`http://localhost:5001/book/${params.id}`)
            }
        ],

    },
    {
        path:'/admin/dashboard',
        element:<DashboardLayout/>,
        children:[
            {
                path:'/admin/dashboard',
                element:<PrivateRoute> <Dashboard></Dashboard></PrivateRoute>
              
                
            },

            {
                path:'/admin/dashboard/upload',
                element:<Uploadbook/>
            },

            {
                path:'/admin/dashboard/manage',
                element:<Managebook/>
            },
        
            {
                path:'/admin/dashboard/edit/:id',
                element:<Editbook/>,
                loader:({params}) => fetch(`http://localhost:5001/book/${params.id}`)
            }
        ]
    },
    {
        path:'/signup',
        element:<Signup/>
    },

    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/logout",
        element:<Logout/>
    }
]);
export default router;