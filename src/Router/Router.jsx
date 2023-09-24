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
                element: <Home></Home>
            }
        ]
    },
]);


export default router;