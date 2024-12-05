import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/mainLayouts";
import PageNotFound from "../layouts/PageNotFound";
import Home from "../layouts/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AddVisa from "../pages/AddVisa/AddVisa";
import AllVisa from "../pages/AllVisa/AllVisa";
import MyAddedVisa from "../pages/MyAddedVisa/MyAddedVisa";
import MyVisaApplication from "../pages/MyVisaApplication/MyVisaApplication";
import PrivateRoutes from "./PrivateRoutes";
import VisaDetails from "../pages/VisaDetails/VisaDetails";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts/>,
        errorElement: <PageNotFound/>,
        children: [
            {
                path: "/",
                element: <Home/>,
                loader: () =>  fetch("http://localhost:3000/visas")
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
                path: "/my-added-visa",
                element: <PrivateRoutes><MyAddedVisa/></PrivateRoutes>
            },
            {
                path: "/my-visa-application",
                element: <MyVisaApplication/>
            },
            {
                path: "/visa-details/:id",
                element: <VisaDetails/>,
                loader: async ({params}) =>  {
                    const faqRes = await fetch("/faq.json")
                    const faqData = await faqRes.json()

                    const visaDetailsRes = await fetch(`http://localhost:3000/visa-details/${params.id}`);
                    const visaDetailsData = await visaDetailsRes.json()
                    
                    return {visaDetailsData, faqData}
                }
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