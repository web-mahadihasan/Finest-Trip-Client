import { FaPaperPlane } from "react-icons/fa";
import { MdAddCall, MdLocationPin } from "react-icons/md";
import { Link } from "react-router";

const TopNavbar = () => {

    return (
        <div className="w-full bg-[#222222] py-1 invisible lg:visible">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <span><FaPaperPlane size={28} className="text-[#63AB45]"/></span>
                    <div className="">
                        <p className="text-white font-rubik text-sm">Email:</p>
                        <Link to={"https://mail.google.com/"} target="blanck" className="font-rubik text-[#63AB45] font-medium lg:text-sm xl:text-base cursor-pointer">info@finest-trip.com</Link>
                    </div>
                </div>
                <div className="border-r-2 border-white/45">.</div>
                <div>
                    <p className="font-jost text-white lg:text-sm xl:text-base">50% Off Your Next Trip. Hurry Up For your new Tour! <Link className="text-[#63AB45]">Book Your Tour</Link></p>
                </div>
                <div className="border-r-2 border-white/45">.</div>
                <div className="text-white font-rubik text-sm">
                    <p className="flex items-center gap-1">
                        <span><MdLocationPin size={18} className="text-[#63AB45]"/></span>
                        <Link to={"https://www.google.com/maps/search/lalbagh+rangpur/@25.7244404,89.251601,16z"} target="blanck">Avenue 01, Lalbagh, Rangpur Bangladesh</Link>
                    </p>
                    <p className="flex items-center gap-1">
                        <span><MdAddCall size={18} className="text-[#63AB45]"/></span>
                        <Link to={"8801794943980"} target="blanck">+8801794943980</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TopNavbar;