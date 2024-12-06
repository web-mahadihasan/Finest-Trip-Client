import { Navigate, useLocation } from "react-router";
import { useAuth } from "../provider/AuthProvider";
import Spinner from "../components/Spinner/Spinner";

const PrivateRoutes = ({children}) => {
    const {loading, user} = useAuth()
    const {pathname} = useLocation()
    
    if(loading){
        return <Spinner/>      
    }

    if(user && user.email){
        return children;
    }
    return (
        <Navigate to={"/auth/login"} state={pathname}></Navigate>
    );
};

export default PrivateRoutes;



// const { loading, user } = useAuth();
// const [shouldRedirect, setShouldRedirect] = useState(false);

// useEffect(() => {
//     if (!user || !user.email) {
//         const timer = setTimeout(() => {
//             setShouldRedirect(true);
//         }, 1000);

//         // Cleanup timer
//         return () => clearTimeout(timer);
//     }
// }, [user]);

// if (loading) {
//     return <Spinner />;
// }

// if (shouldRedirect) {
//     return <Navigate to="/auth/login" />;
// }

// if (user && user.email) {
//     return children;
// }

// // Default to showing the spinner while the timer runs
// return <Spinner />;