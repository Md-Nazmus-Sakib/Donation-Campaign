import {
    createBrowserRouter,

} from "react-router-dom";

import Home from "../component/Home/Home";
import MainLayout from "../Layout/MainLayout";
import DonateDetails from "../component/DonateDetails/DonateDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,

    },
    {
        path: '/category',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/category/:id',
                element: <DonateDetails></DonateDetails>,
                loader: () => fetch('/campaigns.json')

            }
        ]
    }
]);


export default router;