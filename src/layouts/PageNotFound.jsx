import { Link, useRouteError } from "react-router";
import image from "../assets/404.gif"
import { Button } from "@material-tailwind/react";

const PageNotFound = () => {
    const {error} = useRouteError()
    console.log(error)

    return (
        <div className="flex items-center justify-center w-full h-screen flex-col gap-6">
            <img src={image} alt="" />
            <Link to={"/"}><Button variant="filled" className="bg-primary font-rubik tracking-wider">Back to home</Button></Link>
        </div>
    );
};

export default PageNotFound;