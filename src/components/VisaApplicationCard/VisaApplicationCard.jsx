import { Button } from "@material-tailwind/react";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { Link } from "react-router";

const VisaApplicationCard = ({appliedVisaData, onCancel}) => {

    const {
        _id,
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
        userEmail,
        userName
    } = appliedVisaData || {}
    
    return (
        <div className="rounded-md bg-base-100 gap-2 shadow grid grid-cols-1 md:grid-cols-3 border">
            <div className="col-span-1 h-full w-full">
                <figure className="max-h-full">
                    <img
                    src={countryImage}
                    alt={visaTitle} className="w-full max-h-[240px] md:min-h-[440px] rounded-l-md lg:min-h-[301px] lg:max-h-[320px]"/>
                </figure>
            </div>
            <div className="col-span-2  px-4">
            <h2 className="py-3 text-2xl font-rubik font-medium text-black/80">{visaTitle}</h2>
                <div className="pt-1 font-jost flex flex-wrap items-center gap-4">
                        <p className="text-lg">
                            <span className="font-medium text-titleBlack/80">Processing Time: </span>
                            <span className="text-black/65">{processingTime}</span>
                        </p>
                        <p className="text-lg">
                            <span className="font-medium text-titleBlack/80">Visa Type: </span>
                            <span className="text-black/65">{visaType}</span>
                        </p>
                        <p className="text-lg">
                            <span className="font-medium text-titleBlack/80">Validity: </span>
                            <span className="text-black/65">{validity}</span>
                        </p>
                        <p className="text-lg">
                            <span className="font-medium text-titleBlack/80">Age Restriction: </span>
                            <span className="text-black/65">{ageRestriction}</span>
                        </p>
                        <p className="text-lg">
                            <span className="font-medium text-titleBlack/80">Apply Method: </span>
                            <span className="text-black/65">{applicationMethod}</span>
                        </p>
                </div>
                <div className="font-rubik bg-primary-light/10 rounded-md mt-2 py-2 px-1 flex flex-wrap justify-between gap-4">
                    <p className="text-lg">
                        <span className="font-medium text-titleBlack">Applied Name: </span>
                        <span className="text-black/80 capitalize">{userName}</span>
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
                                <span className="text-2xl font-bold text-primary mr-3">$ {visaFee}</span>
                            </h3>
                        </div>
                        <h4 className="flex flex-col items-center gap-1 text-primary font-rubik text-lg lg:border-x lg:px-2 border-gray-300">
                            <span className="text-titleBlack/70">Applied Email</span>
                            <span className="lowercase">{userEmail}</span>
                        </h4>
                        <div className="">                    
                            <Button onClick={() =>  onCancel(_id)} variant="filled" className="bg-red-500 font-rubik font-medium tracking-wide flex items-center gap-1 hover:bg-red-700 duration-300">Cancel Application </Button>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default VisaApplicationCard;