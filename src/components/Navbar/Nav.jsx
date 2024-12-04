import { Link, NavLink } from "react-router";
import logo from "../../assets/logo1.png"
import { GrAppsRounded } from "react-icons/gr";
import { BiUserCircle } from "react-icons/bi";
import { HiMenuAlt3 } from "react-icons/hi";
import { Button } from "@material-tailwind/react";
import NavUserInfo from "../NavUserInfo/NavUserInfo";

const Nav = () => {
    const user = false
    const navLinks = [
        { "path": "/", "element": "Home" },
        { "path": "/all-visas", "element": "All Visas" },
        { "path": "/add-visa", "element": "Add Visa" },
        { "path": "/my-added-visas", "element": "Added Visas" },
        { "path": "/my-visa-applications", "element": "Visa Applications" }
      ]
            
    return (
        <div className="w-full border-b-2 border-red-500 shadow-lg bg-white z-50">
            <div className="flex py-4 items-center justify-between container mx-auto px-4 xl:px-0">
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
                                <NavLink to={link.path}>{link.element}</NavLink>
                            </li>)
                        }
                    </ul>
                </div>
                <div className="flex items-center gap-3">
                    <div className="px-2 py-2 cursor-pointer">
                        <GrAppsRounded size={28}/>
                    </div>
                    <div className="flex items-center">
                        {
                            user ? <NavUserInfo/> : (<div className="md:flex items-center hidden">
                                {/* <Link to={"/auth/register"}><Button variant="filled" className="font-rubik tracking-wider text-xs font-normal bg-primary">Register</Button></Link> */}
                                {/* <div className="divider divider-horizontal font-jost mx-1">or</div> */}
                                <Link to={"/auth/login"}><Button variant="filled" className="font-rubik text-white tracking-wider text-xs font-normal bg-primary">Log in</Button></Link>
                            </div>)
                        } 
                    </div>

                    {/* hamburger  */}
                    <div>
                        <HiMenuAlt3 size={28}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;
