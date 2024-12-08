import { Button } from "@material-tailwind/react";
import { GiCheckMark } from "react-icons/gi";
import { Link } from "react-router";

const AvailableCountry = ({country}) => {
    const {country_name, visa_type, country_image} = country || {}
    const filterType = {
        type: "country Name",
        query: country_name
    }
    return (
        <div data-aos="flip-left" className="p-5 border bg-base-100 rounded-lg hover:border-primary duration-500">
            <img src={country_image} alt="" className="w-14 rounded-full h-14"/>
            <h3 className="font-rubik text-xl font-medium my-3 text-titleBlack">{country_name}</h3>
            <ul className="list-inside ml-4 mb-3 space-y-1">
                {
                    visa_type?.map((visaType, idx) =>  <li key={idx} className="flex items-center gap-2 font-jost text-titleBlack/70"> <GiCheckMark className="text-primary"/> {visaType}</li>)
                }
            </ul>
            <Link to={{pathname: "/all-visa", search: `?query=country&category=${country_name}`}} state={filterType} search={country_name} ><Button variant="outlined" className="border-primary font-rubik text-sm font-medium tracking-wider hover:bg-primary-dark hover:text-white duration-300">Find Visa</Button></Link>
        </div>
    );
};

export default AvailableCountry;