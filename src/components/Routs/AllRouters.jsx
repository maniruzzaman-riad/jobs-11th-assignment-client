import { createBrowserRouter } from "react-router-dom";
import MainRoot from "../MainRoot/MainRoot";
import Error from "../Pages/Error";
import DefaultHome from "../Pages/DefaultHome";
import Login from "../Allinput/Login";
import Register from "../Allinput/Register";
import AddJobs from "../Allinput/AddJobs";
import AllJobs from "../Pages/AllJobs";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainRoot></MainRoot>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<DefaultHome></DefaultHome>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/add-job',
                element:<AddJobs></AddJobs>
            },
            {
                path:'/all-jobs',
                element:<AllJobs></AllJobs>,
                loader:()=>fetch('http://localhost:5000/api/v1/get-jobs')
            }

        ]
    }
])

export default router;