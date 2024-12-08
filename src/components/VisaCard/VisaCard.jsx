import { MdAccessTime } from "react-icons/md";
import location from "../../assets/location.svg"
import { Button } from "@material-tailwind/react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { Link, useLocation } from "react-router";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBinFill } from "react-icons/ri";
import { IoTrashOutline } from "react-icons/io5";

const VisaCard = ({visa={}, onDelete, onUpdate}) => {
    const {pathname} = useLocation()
    const {
        _id,
        visaTitle,
        countryImage,
        countryName,
        visaType,
        processingTime,
        visaFee,
        validity,
        applicationMethod,
    } = visa || {}

    return (
        <div className="card card-compact flex-col rounded-md bg-base-100 visa-card-shadow">
            <div className="p-4 relative  overflow-hidden">
                <figure className="rounded-md overflow-hidden border border-primary-light/40">
                    <img
                    src={countryImage}
                    alt={visaTitle} className="rounded-md duration-500 h-[230px] w-full hover:scale-110"/>
                    <div className="flex items-center gap-1 top-5 left-5 p-2 bg-base-200 rounded border border-primary absolute">
                        <img src={location} alt="" className="w-5"/>
                        <p className="font-jost text-base font-medium">{countryName}</p>
                    </div>
                </figure>
            </div>
            <div className="p-4 font-jost flex-1">
                <div className="flex justify-between items-center">
                    <p className="flex gap-1 items-center">
                        <span><MdAccessTime size={18} className="text-primary" /></span>
                        <span className="text-base font-medium">Processing Time</span>
                    </p>
                    <p className="text-black/65 text-base">{processingTime}</p>
                </div>
                
                <h2 className="py-3 text-2xl font-rubik font-medium text-black/80">{countryName}</h2>
                <div className="space-y-2 flex-1">
                    <p className="text-base">
                        <span className="font-medium">Visa Type: </span>
                        <span className="text-black/65">{visaType}</span>
                    </p>
                    <p className="text-base">
                        <span className="font-medium">Validity: </span>
                        <span className="text-black/65">{validity} +</span>
                    </p>
                    <p className="text-base">
                        <span className="font-medium">Application Method: </span>
                        <span className="text-black/65">{applicationMethod}</span>
                    </p>
                </div>
            </div>
            <div className="border-t border-base-300 py-1"></div>
            <div className="font-rubik flex items-center justify-between flex-wrap px-4 md:px-2 gap-1 lg:px-4 pt-1 pb-4"> 
                {
                    pathname ===  "/my-added-visa" ? (<>
                        <div>
                            <h5 className="font-medium text-sm tracking-wide">Visa Fee:</h5>
                            <h3 className="">
                                <span className="text-2xl md:text-xl font-bold text-primary">$ {visaFee}</span>
                            </h3>
                        </div>
                        <div className="flex gap-3">                   
                            <Button onClick={() =>  onUpdate(_id)} variant="filled" className="bg-primary font-rubik font-medium tracking-wider flex items-center gap-1 hover:bg-primary-dark duration-300">Update <CiEdit size={18}/> </Button>
                            <Button onClick={() =>  onDelete(_id)} variant="filled" className="bg-red-600 font-rubik font-medium tracking-wider flex items-center gap-1 hover:bg-red-800 duration-300">Delete <IoTrashOutline size={18}/> </Button>
                        </div>
                    </>) : (<>
                        <div>
                            <h5 className="font-medium text-sm tracking-wide">Starting From:</h5>
                            <h3 className="">
                                <span className="text-2xl font-bold text-primary mr-3">$ {visaFee}</span>
                                {/* <span className="line-through text-xl font-semibold text-black/75">$ 220</span> */}
                            </h3>
                            <p className="text-xs">TAXES INCL/PERS</p>
                        </div>
                        <div>
                            <Link to={`/visa-details/${_id}`}>                    
                                <Button variant="filled" className="bg-primary font-rubik font-medium tracking-wide flex items-center gap-1 hover:bg-primary-dark duration-300">See Details <BsArrowUpRightCircle size={18}/> </Button>
                            </Link>
                        </div>
                    </>)
                }
                
            </div>
        </div>
    );
};

export default VisaCard;