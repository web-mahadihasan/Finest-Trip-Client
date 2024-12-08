import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import TopNavbar from "../components/Navbar/TopNavbar";
import { Toaster } from "react-hot-toast";
import Nav from "../components/Navbar/Nav";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const MainLayouts = () => {

    useEffect(() => {
        AOS.init({
             duration: 800,
             once: false,
           })
     }, [])
    return (
        <div>
            <Toaster/>
            <div>
                <TopNavbar/>
            </div>

            {/* Nav bar  */}
            <header className="top-0 sticky z-50">                
                <Nav/>
            </header>

            {/* Main content  */}
            <main>
                <Outlet/>
            </main>

            {/* Footer Content  */}
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default MainLayouts;