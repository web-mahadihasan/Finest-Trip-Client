import { Link, NavLink } from "react-router";
import logo from "../../assets/logo1.png"
import { HiMenuAlt3 } from "react-icons/hi";
import { Button } from "@material-tailwind/react";
import NavUserInfo from "../NavUserInfo/NavUserInfo";
import { useAuth } from "../../provider/AuthProvider";
import { useAppContext } from "../../provider/AppContext";
import MobileMenuSidebar from "../MobileMenuSidebar/MobileMenuSidebar";
import { LuSunMoon } from "react-icons/lu";
import { BsMoon } from "react-icons/bs";
import appsSvg from "../../assets/app.svg"
import { useState } from "react";


const Nav = () => {
    const {user} = useAuth();
    const {setOpenMenu, toggleTheme} = useAppContext();
   
    const navLinks = [
        { "path": "/", "element": "Home" },
        { "path": "/all-visa", "element": "All Visas" },
        { "path": "/add-visa", "element": "Add Visa" },
        { "path": "/my-added-visa", "element": "My Added Visa" },
        { "path": "/my-visa-application", "element": "Visa Applications" }
      ]


            
    return (
        <div className=" w-full border-b border-base-100 shadow-md bg-white z-50 backdrop-blur-2xl">
            <div className="flex py-4 items-center justify-between container mx-auto px-4 md:px-0">
                <div className="flex items-center gap-2">
                    <img src={logo} alt="" className="w-12" />
                    <h3 className="text-2xl md:text-3xl xl:text-4xl font-black tracking-wide text-black font-inter text-center">
                        Finest<span className="text-primary">Trip</span>
                    </h3>
                </div>
                {/* Nav Links  */}
                <div  className="hidden lg:block">
                    <ul className="font-rubik flex items-center gap-3">
                        {
                            navLinks.map(link =>  <li key={link.element}>
                                <NavLink to={link.path} className={"font-rubik font-normal text-[15px] text-[#100C08] uppercase"}>{link.element}</NavLink>
                            </li>)
                        }
                    </ul>
                </div>
                <div  className="flex items-center gap-3">
                    <div className="px-2 py-2 cursor-pointer border border-transparent hover:border-gray-500 duration-500 rounded-full hover:bg-base-300 ">
                        <img src={appsSvg} alt="" />
                    </div>

                    {/* Theme control  */}
                    <div>
                    <button onClick={toggleTheme} className="border-x px-2 border-base-300">
                        <label className="swap swap-rotate p-2 border border-transparent hover:border-gray-500 duration-500 rounded-full hover:bg-base-300 ">
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
                                <Link to={"/auth/login"}><Button variant="filled" className="font-rubik text-white tracking-wider hover:bg-primary-dark duration-300 text-xs font-normal bg-primary">Log in</Button></Link>
                            </div>)
                        } 
                    </div>
                    
                    {/* hamburger  */}
                    <button onClick={() => setOpenMenu(true)} className="drawer-button lg:hidden">
                        <HiMenuAlt3 size={28}/>
                    </button>
                    <aside>
                        <MobileMenuSidebar/>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default Nav;
