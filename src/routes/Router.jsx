import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/mainLayouts";
import PageNotFound from "../layouts/PageNotFound";
import Home from "../layouts/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AddVisa from "../pages/AddVisa/AddVisa";
import AllVisa from "../pages/AllVisa/AllVisa";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts/>,
        errorElement: <PageNotFound/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/add-visa",
                element: <AddVisa/>
            },
            {
                path: "/all-visa",
                element: <AllVisa/>
            },
            {
                path: "/auth/register",
                element: <Register/>
            },
            {
                path: "/auth/login",
                element: <Login/>
            }
        ]
    }
])

export default Router;