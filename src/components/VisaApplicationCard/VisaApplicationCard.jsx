import { Button } from "@material-tailwind/react";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { Link } from "react-router";

const VisaApplicationCard = () => {
    
    return (
        <div className="rounded-md bg-base-100 shadow-xl grid grid-cols-1 md:grid-cols-3 border border-red-500">
            <figure className="col-span-1 h-full w-full">
                <img
                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                alt="Movie" className="w-full h-[260px]"/>
            </figure>
            <div className="col-span-2  px-4">
            <h2 className="py-3 text-2xl font-rubik font-medium text-black/80">Discover Serenity, Exploration, and Enlightenment.</h2>
                <div className="pt-1 font-jost flex flex-wrap items-center gap-4">
                        <p className="text-lg">
                            <span className="font-medium text-titleBlack">Processing Time: </span>
                            <span className="text-black/65">3-7 Days</span>
                        </p>
                        <p className="text-lg">
                            <span className="font-medium text-titleBlack">Visa Type: </span>
                            <span className="text-black/65">Turist</span>
                        </p>
                        <p className="text-lg">
                            <span className="font-medium text-titleBlack">Validity: </span>
                            <span className="text-black/65">1 Years+</span>
                        </p>
                        <p className="text-lg">
                            <span className="font-medium text-titleBlack">Age Restriction: </span>
                            <span className="text-black/65">30</span>
                        </p>
                        <p className="text-lg">
                            <span className="font-medium text-titleBlack">Application Method: </span>
                            <span className="text-black/65">Online</span>
                        </p>
                </div>
                <div className="font-rubik bg-primary-light/10 rounded-md mt-2 py-2 px-1 flex flex-wrap justify-between gap-4">
                    <p className="text-lg">
                        <span className="font-medium text-titleBlack">Applied Name: </span>
                        <span className="text-black/80">Mehedi Hasan</span>
                    </p>
                    <p className="text-lg">
                        <span className="font-medium text-titleBlack">Applied Date: </span>
                        <span className="text-black/65">12-16-2024</span>
                    </p>
                </div>

                {/* Price  */}
                <div className="border-t border-base-300 py-1"></div>
                    <div className="font-rubik flex flex-wrap items-center justify-between gap-2 pb-4">
                        <div>
                            <h5 className="font-medium text-sm tracking-wide">Visa Fee:</h5>
                            <h3 className="">
                                <span className="text-2xl font-bold text-primary mr-3">$ 500</span>
                            </h3>
                        </div>
                        <h4 className="flex items-center gap-1 text-primary font-rubik text-lg lg:border-x lg:px-2 border-gray-300">Already Applied <IoCheckmarkDoneSharp /> </h4>
                        <div>
                            <Link to={`/visa-details/`} className="">                    
                                <Button variant="filled" className="bg-red-500 font-rubik font-medium tracking-wide flex items-center gap-1 hover:bg-red-700 duration-300">Cancel Application </Button>
                            </Link>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default VisaApplicationCard;