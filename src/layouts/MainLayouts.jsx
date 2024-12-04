import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import TopNavbar from "../components/Navbar/TopNavbar";
import { Toaster } from "react-hot-toast";

const MainLayouts = () => {
    return (
        <div>
            <Toaster/>
            <header>
                <TopNavbar/>
            </header>
            <p className="font-jost">This is main layout</p>
            <div>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayouts;