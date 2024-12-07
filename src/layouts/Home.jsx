import { useLoaderData } from "react-router";
import VisaCard from "../components/VisaCard/VisaCard";
import Banner from "../components/Banner/Banner";
import frame from "../assets/FrameCategory.png";
import AboutUs from "../components/AboutUs/AboutUs";
import VisaCategory from "../components/VisaCategory/VisaCategory";

const Home = () => {
    const {lastedVisa, categoryData} = useLoaderData()
    // console.log(categoryData)
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

            {/* Visa Category  */}
            <div className="w-full bg-[#f1f5eb] py-16 my-24">
                <div className="container mx-auto px-4 xl:px-0">
                    <p className="flex items-center gap-2 justify-center">
                    <span><img src={frame} alt="Visa category icon" className=""/></span>
                    <span className="uppercase font-rubik">Visa category</span>
                    </p>
                    <h3 className="text-2xl md:text-3xl xl:text-4xl font-medium my-4 text-center font-rubik">Explorer Most Poplar Visa Category <br /> Excitement Await </h3>

                    {/* Category  */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {
                            categoryData?.map((category, idx ) =>  <VisaCategory key={idx} category={category}/>)
                        }
                    </div>
                </div>
                
            </div>

            {/* About us  */}
            <div className="container mx-auto px-4 xl:px-0">
                <AboutUs/>
            </div>

        </div>
    );
};

export default Home;