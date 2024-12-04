import { Navigate } from "react-router";
import { useAuth } from "../provider/AuthProvider";

const PrivateRoutes = ({children}) => {
    const {loading, user} = useAuth()
    
    if(loading){
        return <p>Loading....</p>
    }

    if(user && user.email){
        return children;
    }
    return (
        <Navigate to={"/auth/login"}></Navigate>
    );
};

export default PrivateRoutes;