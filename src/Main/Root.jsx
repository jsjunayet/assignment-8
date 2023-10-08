import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Header/Home";
import About from "../Header/About";
import Login from "../Header/Login";
import SignUp from "../Header/SignUp";

import SingleEvent from "../Header/SingleEvent";
import Private from "../PVt/Private";
import Location from "../Header/Location";
import Private1 from "../PVt/Private1";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/Json/APi.json')
            },
            {
                path: '/Event/:id',
                element: <Private><SingleEvent></SingleEvent></Private>,
                loader: () => fetch('/Json/APi.json')
            },
            {
                path: '/resis',
                element: <Private1><Location></Location></Private1>
            },
            {
                path: '/about',
                element: <Private><About></About></Private>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    }
])
export default router;