import {
    createBrowserRouter,

} from "react-router-dom";

import Home from "../component/Home/Home";
import HomeMainLayout from "../Layout/HomeMainLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeMainLayout></HomeMainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('campaigns.json')
            }
        ]
    },
]);


export default router;