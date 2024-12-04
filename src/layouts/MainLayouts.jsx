import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import TopNavbar from "../components/Navbar/TopNavbar";
import { Toaster } from "react-hot-toast";
import Nav from "../components/Navbar/Nav";

const MainLayouts = () => {
    return (
        <div>
            <Toaster/>
            <div>
                <TopNavbar/>
            </div>
            <header className="top-0 sticky">                
                <Nav/>
            </header>
            <div>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayouts;