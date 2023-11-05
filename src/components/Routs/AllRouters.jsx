import { createBrowserRouter } from "react-router-dom";
import MainRoot from "../MainRoot/MainRoot";
import Error from "../Pages/Error";
import DefaultHome from "../Pages/DefaultHome";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainRoot></MainRoot>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<DefaultHome></DefaultHome>
            }
        ]
    }
])

export default router;