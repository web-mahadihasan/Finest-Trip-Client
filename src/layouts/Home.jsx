import { Link, useLoaderData } from "react-router";
import VisaCard from "../components/VisaCard/VisaCard";
import Banner from "../components/Banner/Banner";
import frame from "../assets/FrameCategory.png";
import AboutUs from "../components/AboutUs/AboutUs";
import VisaCategory from "../components/VisaCategory/VisaCategory";
import { SlPlane } from "react-icons/sl";
import { Button } from "@material-tailwind/react";
import AvailableCountry from "../components/AvailAbleCountry/AvailableCountry";
import review from "../assets/review.png"
import Review from "../components/UserReview/Review";
import tripAdvisor from "../assets/tripAdvisor.png"
import RecentBlogContainer from "../components/RecentBlogs/RecentBlogContainer";
import { Typewriter } from "react-simple-typewriter";
import { TiThSmallOutline } from "react-icons/ti";
import { TbSortAscendingShapes } from "react-icons/tb";
import { useState } from "react";
import { FaListUl } from "react-icons/fa";
import { AiOutlineAppstore } from "react-icons/ai";
import lottie3 from "../../public/lottie3.json"
import lottie4 from "../../public/lottie4.json"
import Lottie from "lottie-react";


const Home = () => {
    const {lastedVisa, categoryData, countryData, reviewData, blogsData} = useLoaderData()
    const [lastedVisaOffer, setLastedVisaOffer] = useState(lastedVisa)


    const handleSortByPrice = () =>  {
        const sortByPrice = [...lastedVisa].sort((a, b) =>  a.visaFee - b.visaFee)
        setLastedVisaOffer(sortByPrice)
    }
    return (
        <div className="z-20">
            {/* Banner  */}
            <section>
                <Banner/>
            </section>

            {/* Visa Card  */}
            <section className="container mx-auto px-4 md:px-0 mt-16 mb-24">
                <div className="flex items-center justify-between">
                    <div className="w-40 hidden md:flex">
                        <Lottie animationData={lottie4}/>
                    </div>
                    <div>
                        <p className="flex items-center gap-2 justify-center">
                        <span><img src={frame} alt="Visa category icon" className=""/></span>
                        <span data-aos="zoom-out-up" className="uppercase font-rubik">Our Latesd Visa</span>
                        </p>
                        <h3 data-aos="fade-up" className="text-2xl lg:text-3xl xl:text-4xl font-medium my-4 text-center font-rubik">Check Out the Latest Visa Deals <br /> Excitement Await </h3>
                        <div data-aos="fade-up" className="flex items-center flex-wrap justify-center gap-4 mb-8">
                            <Link to={"/all-visa"} className="flex items-center gap-1 p-2 border px-4 border-primary border-dashed font-jost bg-primary rounded-md text-white tracking-wider font-lg uppercase">
                                <span><TiThSmallOutline /></span>
                                <span>View all</span>
                            </Link>
                            <button onClick={handleSortByPrice} className="flex items-center gap-1 p-1.5 px-6 border border-primary border-dashed rounded-md font-jost text-primary text-lg">
                                <span><TbSortAscendingShapes size={20} className="text-primary"/></span>
                                <span>Sort by price</span>
                            </button>
                            <div className="flex gap-2">
                                <button><FaListUl size={20} className="text-titleBlack/65"/></button>
                                <button><AiOutlineAppstore size={24} className="text-primary"/></button>
                            </div>
                        </div>
                    </div>
                    <div className="w-40 hidden md:flex">
                        <Lottie animationData={lottie3}/>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
                    {
                        lastedVisaOffer.map(visa =>  <VisaCard key={visa._id} visa={visa}/>)
                    }
                </div>
            </section>

            {/* Visa Category  */}
            <section className="w-full bg-[#f1f5eb] py-16 my-24">
                <div className="container mx-auto px-4 xl:px-0">
                    <p data-aos="fade-up" className="flex items-center gap-2 justify-center">
                    <span><img src={frame} alt="Visa category icon" className=""/></span>
                    <span className="uppercase font-rubik">Visa category</span>
                    </p>
                    <h3 data-aos="fade-up" className="text-2xl md:text-3xl xl:text-4xl font-medium my-4 text-center font-rubik">Explorer Most Poplar Visa Category <br />
                        <span className="text-primary inline-block my-4">
                            <Typewriter
                            words={['Student Visa.', 'Tourist Visa.', 'Business Visa.', 'Worker Visa.', "Offical Visa.", "Visitor Visa."]}
                            loop={Infinity}
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={500}
                        />    
                        </span>    
                    </h3>

                    {/* Category  */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {
                            categoryData?.map((category, idx ) =>  <VisaCategory key={idx} category={category}/>)
                        }
                    </div>
                </div>
                
            </section>

            {/* About us  */}
            <section className="container mx-auto px-4 xl:px-0">
                <AboutUs/>
            </section>

            {/* Available country  */}
            <section className="container mx-auto px-4 xl:px-0 my-24">
                <div className="flex md:items-center flex-col md:flex-row justify-between my-8">
                    <div>
                        <p data-aos="fade-right" className="flex items-center gap-1 p-2 bg-primary-light/35 w-fit text-titleBlack px-8 rounded-bl-[15px] rounded-tr-[15px]">
                            <span className="uppercase font-rubik tracking-wide">Available Country</span>
                            <span><SlPlane size={22}/></span>
                        </p>
                        <h3 data-aos="fade-right" className="text-2xl md:text-3xl xl:text-4xl font-medium my-4 font-rubik">Explore Visa Options by Country</h3>
                    </div>
                    <div data-aos="fade-left" className="p-1 border border-dashed border-primary rounded-lg w-fit h-fit mb-6 md:mb-0">
                        <Link className=""><Button variant="filled" className="bg-primary font-rubik font-medium text-sm tracking-wide hover:bg-primary-dark duration-300 focus:bg-primary-dark">See all Country</Button></Link>
                    </div>
                </div>
                 {/* Country List  */}
                 <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                    {
                        countryData?.slice(0, 5).map((country, idx) =>  <AvailableCountry key={country.id} country={country}/>)
                    }
                </div>
            </section>

            {/* User Review section  */}
            <section className="w-full bg-[#f1f5eb] py-16">
                <div className="container mx-auto px-4 xl:px-0">
                    <p data-aos="fade-up" className="flex items-center gap-2 justify-center">
                    <span><img src={review} alt="Visa category icon" className=""/></span>
                    <span data-aos="fade-up" className="uppercase font-rubik">Success Story</span>
                    </p>
                    <h3 data-aos="fade-up" className="text-2xl md:text-3xl xl:text-4xl font-medium my-4 text-center font-rubik capitalize">Reviews form our happy users </h3>
                    <p data-aos="fade-up" className="text-lg font-jost text-titleBlack/75 mb-4 text-center max-w-xl mx-auto"> what our clients have to say about our exceptional services. Honest and insightful reviews from real customers showcase their experiences, satisfaction, and trust in our expertise.</p>
                    
                </div>
                    {/* Review Card  */}
                <div className="">
                    <Review reviewData={reviewData}/>
                </div>
                {/* Write Review bg-[#faf6e7] */}
                <div data-aos="fade-up" className="container p-3 bg-primary-light/30 rounded-md backdrop-blur-2xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <div>
                            <img src={tripAdvisor} alt="" className="w-28"/>
                            <p className="font-jost text-lg font-medium">5.0 ⭐⭐⭐⭐</p>
                        </div>
                        <div>
                            <p className="font-jost font-medium text-xl">Rating</p>
                            <p className="font-jost text-lg font-medium text-titleBlack/70">1940 Reviews</p>
                        </div>
                    </div>
                    <div className="p-1 border border-dashed border-primary rounded-lg">
                        <Link to={"https://www.tripadvisor.com/"} target="blank" className="">
                            <Button variant="filled" className="bg-primary font-rubik font-medium text-sm capitalize tracking-wide hover:bg-primary-dark duration-300 focus:bg-primary-dark py-2">Write a Review</Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Recent Blogs section  */}
            <section className="container mx-auto px-4 xl:px-0 my-24 mb-32">
                <RecentBlogContainer blogsData={blogsData}/>
            </section>

        </div>
    );
};

export default Home;