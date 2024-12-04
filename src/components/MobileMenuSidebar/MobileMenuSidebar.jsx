import { RiArrowRightSLine, RiCloseLargeLine } from "react-icons/ri";
import { useAppContext } from "../../provider/AppContext";
import logo from "../../assets/logo1.png"
import { Link, NavLink } from "react-router";
import { Button } from "@material-tailwind/react";
import { LuPhoneCall } from "react-icons/lu";
import { useAuth } from "../../provider/AuthProvider";
import NavUserInfo from "../NavUserInfo/NavUserInfo";

const MobileMenuSidebar = () => {
    const {openMenu, setOpenMenu} = useAppContext();
    const {user} = useAuth();

    const navLinks = [
        { "path": "/", "element": "Home" },
        { "path": "/all-visa", "element": "All Visas" },
        { "path": "/add-visa", "element": "Add Visa" },
        { "path": "/my-added-visa", "element": "Added Visas" },
        { "path": "/my-visa-application", "element": "Visa Applications" }
      ]
    return (
        <div className={`absolute lg:hidden z-40 duration-700 min-h-screen ${ openMenu? "top-0 left-0 block" : "-left-[800px] top-0"}`}>
            <div className="menu flex flex-col justify-between bg-base-200 text-base-content min-h-screen w-80 p-4 overflow-y-scroll">
            {/* Sidebar content here */}
                <div className="flex items-center justify-between mt-5">
                    <div className="flex items-center gap-2">
                        <img src={logo} alt="" className="w-12" />
                        <h3 className="text-2xl mb-3 font-black tracking-wide text-black font-inter text-center">
                            Finest<span className="text-customGreen">Trip</span>
                        </h3>
                    </div>
                    {/* Menu Close  */}
                    <button onClick={() => setOpenMenu(false)} className="p-2 border border-black/65 cursor-pointer rounded-full">
                        <RiCloseLargeLine size={22} className=""/>
                    </button>
                </div>

                {/* Nav Links  */}
                <div className="mt-8">
                    <ul className="font-rubik flex flex-col gap-3 space-y-2">
                        {
                            navLinks.map(link =>  <li key={link.element}>
                                <NavLink to={link.path} className={"font-rubik font-normal text-[15px] text-[#100C08] uppercase flex justify-between"}>{link.element} <RiArrowRightSLine size={22}/></NavLink>
                            </li>)
                        }
                    </ul>
                </div>

                {/* User Log in & register  */}
                {
                    user ? <div className="m-3 md:hidden"><NavUserInfo/></div> : (<div className="mt-2 flex items-center">
                        <Link to={"/auth/register"}><Button variant="filled" className="font-rubik tracking-wider text-xs font-normal bg-primary hover:bg-primary-dark duration-300">Register</Button></Link>
                        <div className="divider divider-horizontal font-jost mx-1">or</div>
                        <Link to={"/auth/login"}><Button variant="filled" className="font-rubik text-white tracking-wider text-xs font-normal bg-primary hover:bg-primary-dark duration-300">Log in</Button></Link>
                    </div>)
                }
                {/* More query  */}
                <div className="py-1">
                <div className="divider my-2"></div>
                    <div className="flex items-center gap-3">
                        <div className="px-2 border-r-2 border-gray-500">
                            <LuPhoneCall size={28} className="text-primary"/>
                        </div>
                        <div>
                            <p className="font-jost font-medium text-base">To More Inquery</p>
                            <h4 className="text-primary font-semibold font-rubik text-lg">+8801794943980</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileMenuSidebar;


{/* <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
   
    <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
     
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div> */}