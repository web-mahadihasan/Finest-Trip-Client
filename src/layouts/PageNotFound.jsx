import { useRouteError } from "react-router";

const PageNotFound = () => {
    const {error} = useRouteError()
    console.log(error)

    return (
        <div>
            <h1>This page is loading error. check console</h1>
        </div>
    );
};

export default PageNotFound;