import { MdAccessTime } from "react-icons/md";
import location from "../../assets/location.svg"
import { Button } from "@material-tailwind/react";
import { BsArrowUpRightCircle } from "react-icons/bs";

const VisaCard = ({visa={}}) => {
    const {
        visaTitle,
        countryImage,
        countryName,
        visaType,
        processingTime,
        requiredDocuments,
        description,
        ageRestriction,
        visaFee,
        validity,
        applicationMethod,
    } = visa || {}

    return (
        <div className="card card-compact rounded-md bg-base-100 visa-card-shadow ">
            <div className="p-4 relative  overflow-hidden">
                <figure className="rounded-md overflow-hidden">
                    <img
                    src={countryImage}
                    alt={visaTitle} className="rounded-md duration-500 h-[230px] w-full hover:scale-110"/>
                    <div className="flex items-center gap-1 top-5 left-5 p-2 bg-base-200 rounded border border-primary absolute">
                        <img src={location} alt="" className="w-5"/>
                        <p className="font-jost text-base font-medium">{countryName}</p>
                    </div>
                </figure>
            </div>
            <div className="p-4 font-jost">
                <div className="flex justify-between items-center">
                    <p className="flex gap-1 items-center">
                        <span><MdAccessTime size={18} className="text-primary" /></span>
                        <span className="text-base font-medium">Processing Time</span>
                    </p>
                    <p className="text-black/65 text-base">{processingTime}</p>
                </div>
                
                <h2 className="py-3 text-2xl font-rubik font-medium text-black/80">{visaTitle}</h2>
                <div className="space-y-2">
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
            <div className="font-rubik flex items-center justify-between px-4 pt-1 pb-4">
                <div>
                    <h5 className="font-medium text-sm tracking-wide">Starting From:</h5>
                    <h3 className="">
                        <span className="text-2xl font-bold text-primary mr-3">$ {visaFee}</span>
                        <span className="line-through text-xl font-semibold text-black/75">$ 220</span>
                    </h3>
                    <p className="text-xs">TAXES INCL/PERS</p>
                </div>
                <div>
                    <Button variant="filled" className="bg-primary font-rubik font-medium tracking-wide flex items-center gap-1 hover:bg-primary-dark duration-300">See Details <BsArrowUpRightCircle size={18}/> </Button>
                </div>
            </div>
        </div>
    );
};

export default VisaCard;