import { createBrowserRouter } from "react-router-dom";

import SignIn from "../app/pages/sign-in/sign-in";
import Home from "../app/pages/home-1/home-1";
import Dashboard from "../app/pages/dashboard/dashboard";
import Complaints from "../app/pages/complaints/complaints";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/complaint',
        element: <Complaints />
    },
    {
        path: '/sign-in',
        element: <SignIn />,
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
    },
])