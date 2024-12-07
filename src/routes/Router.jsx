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
                loader: async () =>  {
                    const visaRes = await fetch("http://localhost:3000/visas");
                    const lastedVisa = await visaRes.json()

                    const categoryRes = await fetch("/category.json")
                    const categoryData = await categoryRes.json()

                    const countryRes = await fetch("/availableCountry.json")
                    const countryData = await countryRes.json()

                    const reviewRes = await fetch("/review.json")
                    const reviewData = await reviewRes.json()
                    
                    const blogsRes = await fetch("/blogs.json")
                    const blogsData = await blogsRes.json()

                    return {lastedVisa, categoryData, countryData, reviewData, blogsData}
                }
            },
            {
                path: "/add-visa",
                element: <PrivateRoutes> <AddVisa/> </PrivateRoutes>
            },
            {
                path: "/all-visa",
                element: <AllVisa/>,
                loader: () =>  fetch("http://localhost:3000/visas")
            },
            {
                path: "/my-added-visa",
                element: <PrivateRoutes> <MyAddedVisa/> </PrivateRoutes>,
                loader: () =>  fetch("http://localhost:3000/visas")
            },
            {
                path: "/my-visa-application",
                element: <PrivateRoutes> <MyVisaApplication/> </PrivateRoutes>,
                loader: () =>  fetch("http://localhost:3000/all-application")
            },
            {
                path: "/visa-details/:id",
                element: <PrivateRoutes> <VisaDetails/> </PrivateRoutes>,
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