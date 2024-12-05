import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const PlanYourTrip = () => {
    return (
        <div className="my-8 md:my-0 lg:my-8 h-full rounded-md border border-primary-light">
            <h3 className="font-rubik text-xl text-primary-dark font-medium p-3 bg-primary-light/10 rounded-md">Plan Your Trip Now</h3>
            <div className="p-4 pl-6 my-4 space-y-4">
                <p className="flex items-center gap-2">
                    <span><IoIosCall size={18} className="text-primary"/></span>
                    <span className="font-jost text-titleBlack/70">(629) 555-0129</span>
                </p>
                <p className="flex items-center gap-2">
                    <span><MdEmail size={18} className="text-primary"/></span>
                    <span className="font-jost text-titleBlack/70">info@finest-trip-com</span>
                </p>
                <p className="flex items-center gap-2">
                    <span><FaLocationDot size={18} className="text-primary"/></span>
                    <span className="font-jost text-titleBlack/70">Avenue 01, Lalbagh, Rangpur Bangladesh</span>
                </p>
            </div>
        </div>
    );
};

export default PlanYourTrip;