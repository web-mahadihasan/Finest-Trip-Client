import { Button } from "@material-tailwind/react";
import { Link } from "react-router";
import { Typewriter } from "react-simple-typewriter";
import tripAdvisor from "../../assets/tripAdvisor1.png"


const Slide1 = () => {

    return (
        <div
            className="hero h-full"
            style={{
                backgroundImage: "url(https://i.ibb.co.com/zmRGHs4/home2-banner-img1.webp)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-3xl">
                <h1 className="mb-5 text-3xl md:text-5xl font-extrabold font-rubik tracking-wider flex flex-col text-white gap-2">
                    <span>Let’s Explore Your </span>
                    <span className="text-primary">
                    <Typewriter
                        words={['Holiday Trip.', 'Honeymoon Trip.', 'Family Trip.']}
                        loop={Infinity}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                    </span>
                </h1>
                <p className="mb-5 font-jost text-lg">
                    Fast, reliable, and hassle-free visa processing services, providing expert guidance to help you reach your dream destinations with ease and confidence.                
                </p>
                <div className="flex items-center max-w-lg mx-auto mt-8 justify-between">
                    <div className="flex items-center">
                        <img src={tripAdvisor} alt="Trust Advisor" className="w-24"/>
                        <div className="text-left">
                            <h3 className="text-2xl font-bold font-rubik text-white">Tripadvisor</h3>
                            <h6 className="flex gap-1 text-white  items-center text-base font-rubik">
                                <p>⭐⭐⭐⭐⭐</p>
                                <p className="font-medium">5.0 / 5.0</p>
                            </h6>
                        </div>
                    </div>
                    <Link><Button variant="filled" className="bg-primary font-rubik font-medium text-base tracking-wide hover:bg-primary-dark duration-300 focus:bg-primary-dark">Book a Visa</Button></Link>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Slide1;

// Visa Immigration for a Brighter You Future

// https://triprex.b-cdn.net/wp-content/uploads/2024/02/hero-home1-slider-1.webp
// https://triprex.b-cdn.net/wp-content/uploads/2024/02/hero-home1-slider-4.webp
// https://triprex.b-cdn.net/wp-content/uploads/2024/02/home2-banner-img1.webp
//top https://i.ibb.co.com/bvdvrrb/beautiful-historical-places-taj-mahal.jpg 