import "./footer.css"
import logo from "../../assets/logo1.png";
import { Link } from "react-router";
import { Button } from "@material-tailwind/react";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import visa from "../../assets/visa-logo.svg";
import strip from "../../assets/stripe-logo.svg";
import paypal from "../../assets/paypal-logo.svg";
import woo from "../../assets/woo-logo.svg";
import skrill from "../../assets/skrill-logo.svg";
import { LuInstagram } from "react-icons/lu";
import { RiFacebookFill, RiLinkedinBoxFill } from "react-icons/ri";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-full overflow-hidden text-white min-h-[580px]">
            {/* <div style={{backgroundImage: "url(https://i.ibb.co.com/tzv0dF5/shape-10.png"}} className="h-[100px] bg-no-repeat"></div> */}
            <div id="animate-area" className=" z-20 min-h-[550px] flex items-center">
                <div className="text-white container mx-auto px-4 xl:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-full content-center gap-6 py-10">
                    <div className="space-y-3">
                        <div className="flex items-center">
                            <img src={logo} alt="" className="w-12" />
                            <h3 className="text-4xl font-black tracking-wide text-white font-inter text-center">
                                Finest<span className="text-customGreen">Trip</span>
                            </h3>
                        </div>
                        <h3 className="font-rubik text-2xl mb-3 font-semibold text-[rgba(255,255,255,.8)] py-5">Want to Take a Packages?</h3>
                        <Link><Button variant="filled" className="bg-primary font-rubik font-medium text-base tracking-wide">Book a Visa</Button></Link>
                    </div>
                    <nav className=" font-jost text-lg text-[rgba(255,255,255,.5)]">
                        <h3 className="font-rubik text-2xl mb-3 font-semibold text-[rgba(255,255,255,.8)]">company</h3>
                        <div className="flex flex-col space-y-2">
                            <Link to={"/all-visa"}>All Visa</Link>
                            <Link to={"/about-us"}>About us</Link>
                            <Link to={"/contact"}>Contact</Link>
                            <Link to={"blogs"}>Blogs</Link>
                            <Link to={"/auth/register"}>Register</Link>
                        </div>
                    </nav>
                    <div className="flex flex-col">
                        <h3 className="font-rubik text-2xl mb-3 font-semibold text-[rgba(255,255,255,.8)]">Contact</h3>
                        <p className="flex items-start gap-2">
                            <span className="mt-1"><IoIosCall size={18} className="text-primary"/></span>
                            <span className="font-jost text-lg text-[rgba(255,255,255,.5)] mb-5">(629) 555-0129</span>
                        </p>
                        <p className="flex items-start gap-2">
                            <span className="mt-1"><MdEmail size={18} className="text-primary"/></span>
                            <span className="font-jost text-lg text-[rgba(255,255,255,.5)] mb-5">info@finest-trip-com</span>
                        </p>
                        <p className="flex items-start gap-2">
                            <span className="mt-1"><FaLocationDot size={18} className="text-primary"/></span>
                            <span className="font-jost text-lg text-[rgba(255,255,255,.5)] mb-5">Avenue 01, Lalbagh, Rangpur Bangladesh</span>
                        </p>
                    </div>
                    <div>
                        <h3 className="font-rubik text-2xl mb-3 font-semibold text-[rgba(255,255,255,.8)]">We are here</h3>
                        <p className="font-jost text-lg text-[rgba(255,255,255,.5)] mb-5">Your trusted partner for seamless visa processing, expert guidance, and global travel solutions</p>
                        <div>
                            <h3 className="font-rubik text-xl font-semibold text-[rgba(255,255,255,.8)]">Our Payment partnet</h3>
                            <div className="flex items-center gap-3 my-3 cursor-pointer">
                                <img src={visa} alt="" className="rounded w-12" />
                                <img src={strip} alt="" className="rounded w-12"/>
                                <img src={paypal} alt="" className="rounded w-12"/>
                                <img src={woo} alt="" className="rounded w-12"/>
                                <img src={skrill} alt="" className="rounded w-12"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#0d0e12] min-h-14 py-4 border-t border-gray-700 flex items-center">
                <div className="container mx-auto px-4 space-y-3 md:space-y-0 md:flex items-center justify-between md:flex-row gap-6">
                    {/* Socail  */}
                    <div className="flex items-center gap-2 cursor-pointer">
                        <a href="https://facebook.com" target="blanck" className="p-[6px] rounded-full border border-[rgba(255,255,255,.5)]"><RiFacebookFill size={16} className="text-[rgba(255,255,255,.8)]"/></a>
                        <a href="https://instagram.com" target="blanck" className="p-[6px] rounded-full border border-[rgba(255,255,255,.5)]"><LuInstagram size={16} className="text-[rgba(255,255,255,.8)]"/></a>
                        <a href="https://twitter.com" target="blanck" className="p-[6px] rounded-full border border-[rgba(255,255,255,.5)]"><FaTwitter size={16} className="text-[rgba(255,255,255,.8)]"/></a>
                        <a href="https://linkedin.com" target="blanck" className="p-[6px] rounded-full border border-[rgba(255,255,255,.5)]"><FaLinkedinIn size={16} className="text-[rgba(255,255,255,.8)]"/></a>
                    </div>
                    {/* copyright  */}
                    <div className="font-jost text-lg text-[rgba(255,255,255,.5)] ">
                        <p>&copy; Copyright 2024 FinestTrip | Design By <a className="text-blue-500" href="https://www.linkedin.com/in/mahadi-hasan-481210147/">Mahadi Hasan</a></p>
                    </div>
                    <div className="font-jost text-lg text-[rgba(255,255,255,.5)] ">
                        <a href="#">Privacy & Plicy . </a>
                        <a href="#">Terms & Condition</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;