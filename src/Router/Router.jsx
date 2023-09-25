import {
    createBrowserRouter,

} from "react-router-dom";

import Home from "../component/Home/Home";
import MainLayout from "../Layout/MainLayout";
import DonateDetails from "../component/DonateDetails/DonateDetails";
import Donation from "../component/Donation/Donation";
import Statistic from "../component/Statistic/Statistic";
import ErrorPage from "../component/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/campaigns.json'),
        errorElement: <ErrorPage></ErrorPage>
    },
    {
        path: "/statistic",
        element: <Statistic></Statistic>
    },
    {
        path: '/donation',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/donation',
                element: <Donation></Donation>,
                loader: () => fetch('/campaigns.json')
            },
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