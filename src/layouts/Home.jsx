import { useLoaderData } from "react-router";
import VisaCard from "../components/VisaCard/VisaCard";
import Banner from "../components/Banner/Banner";
import Success from "../components/AboutUs/Success";

const Home = () => {
    const lastedVisa = useLoaderData()
    console.log(lastedVisa)
    return (
        <div className="z-20">
            {/* Banner  */}
            <div>
                <Banner/>
            </div>
            {/* Visa Card  */}
            <div className="container mx-auto px-4 md:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        lastedVisa.map(visa =>  <VisaCard key={visa._id} visa={visa}/>)
                    }
                </div>
            </div>


            {/* About us  */}
            <div className="">
                <Success/>
            </div>
        </div>
    );
};

export default Home;