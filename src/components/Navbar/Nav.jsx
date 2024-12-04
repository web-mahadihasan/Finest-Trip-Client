import { Link, NavLink } from "react-router";
import logo from "../../assets/logo1.png"
import { GrAppsRounded } from "react-icons/gr";
import { HiMenuAlt3 } from "react-icons/hi";
import { Button } from "@material-tailwind/react";
import NavUserInfo from "../NavUserInfo/NavUserInfo";
import { useAuth } from "../../provider/AuthProvider";
import { useAppContext } from "../../provider/AppContext";
import MobileMenuSidebar from "../MobileMenuSidebar/MobileMenuSidebar";
import { LuSunMoon } from "react-icons/lu";
import { BsMoon } from "react-icons/bs";

const Nav = () => {
    const {user} = useAuth();
    const {setOpenMenu} = useAppContext();
    const navLinks = [
        { "path": "/", "element": "Home" },
        { "path": "/all-visa", "element": "All Visas" },
        { "path": "/add-visa", "element": "Add Visa" },
        { "path": "/my-added-visas", "element": "Added Visas" },
        { "path": "/my-visa-applications", "element": "Visa Applications" }
      ]
            
    return (
        <div className="w-full border-b border-base-300 shadow-md bg-white z-50">
            <div className="flex py-4 items-center justify-between container mx-auto">
                <div className="flex items-center gap-2">
                    <img src={logo} alt="" className="w-12" />
                    <h3 className="text-2xl md:text-4xl mb-3 font-black tracking-wide text-black font-inter text-center">
                        Finest<span className="text-customGreen">Trip</span>
                    </h3>
                </div>
                {/* Nav Links  */}
                <div className="hidden lg:block">
                    <ul className="font-rubik flex items-center gap-3">
                        {
                            navLinks.map(link =>  <li key={link.element}>
                                <NavLink to={link.path} className={"font-rubik font-normal text-[15px] text-[#100C08] uppercase"}>{link.element}</NavLink>
                            </li>)
                        }
                    </ul>
                </div>
                <div className="flex items-center gap-3">
                    <div className="px-2 py-2 cursor-pointer">
                        <GrAppsRounded size={28}/>
                    </div>

                    {/* Theme control  */}
                    <div>
                    <button className="">
                        <label className="swap swap-rotate p-2 border border-transparent hover:border-gray-500 duration-300 rounded-full hover:bg-base-300 ">
                            <input type="checkbox" className="theme-controller" value="synthwave" />
                            {/* sun icon */}
                            <LuSunMoon size={24} className="swap-off fill-current"/>
                            {/* moon icon */}
                            <BsMoon size={24} className="swap-on fill-current"/>
                        </label>
                    </button>
                    </div>

                    {/* User Action  */}
                    <div className="flex items-center">
                        {
                            user ? <div className="hidden md:block"><NavUserInfo/></div> : (<div className="md:flex items-center hidden">
                                <Link to={"/auth/login"}><Button variant="filled" className="font-rubik text-white tracking-wider text-xs font-normal bg-primary">Log in</Button></Link>
                            </div>)
                        } 
                    </div>
                    
                    {/* hamburger  */}
                    <button onClick={() => setOpenMenu(true)} className="drawer-button lg:hidden">
                        <HiMenuAlt3 size={28}/>
                    </button>
                    <div>
                        <MobileMenuSidebar/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;
