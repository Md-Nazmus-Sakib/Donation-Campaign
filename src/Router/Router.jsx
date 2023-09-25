import {
    createBrowserRouter,

} from "react-router-dom";

import Home from "../component/Home/Home";
import MainLayout from "../Layout/MainLayout";
import DonateDetails from "../component/DonateDetails/DonateDetails";
import Donation from "../component/Donation/Donation";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
    },
    {
        path: '/donation',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/donation',
                element: <Donation></Donation>,
                loader: () => fetch('/campaigns.json')
            }
        ]
    },
    {
        path: '/category',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/category/:id',
                element: <DonateDetails></DonateDetails>,
                loader: () => fetch('/campaigns.json')

            },

        ]
    }
]);


export default router;