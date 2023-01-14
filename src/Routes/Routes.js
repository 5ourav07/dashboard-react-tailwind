import { createBrowserRouter } from "react-router-dom";
import Attendance from "../Pages/Attendance/Attendance";
import Dashboard from "../Components/Dashboard/Dashboard";
import Layout from "../Layouts/Layout";
import NotFound from "../Pages/NotFound/NotFound";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/attendance',
                element: <Attendance></Attendance>
            }
        ]
    },
    {
        path: '/*',
        element: <NotFound></NotFound>
    }
]);