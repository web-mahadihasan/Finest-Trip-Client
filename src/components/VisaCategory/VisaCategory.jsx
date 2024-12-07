import { Button } from "@material-tailwind/react";
import { PiArrowCircleUpRight } from "react-icons/pi";
import { Link } from "react-router";


const VisaCategory = ({category}) => {
    const {title, short_description, image, icon} = category || {}
    return (
        <div className="grid grid-cols-4 gap-6 p-5 border border-base-300 shadow">
            <div className="col-span-2 w-full overflow-hidden rounded-md max-h-full">
                <img src={image} alt="" className="h-full w-full rounded-md hover:scale-110 duration-300"/>
            </div>
            <div className="col-span-2">
                <h3 className="font-medium font-rubik text-2xl my-2">{title + "image"}</h3>
                <p className="text-lg font-jost text-titleBlack/75">{short_description}</p>
                <div className="flex items-center justify-between">
                    <Link to={"all-visa"} state={title}><Button variant="outlined" className="flex items-center gap-1 text-primary border-primary hover:bg-primary duration-300 hover:text-white font-rubik tracking-wider mt-1 font-medium">Explorer <PiArrowCircleUpRight size={20}/> </Button></Link>
                    <span>
                        <img src={icon} alt={title + "icon"} />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default VisaCategory;