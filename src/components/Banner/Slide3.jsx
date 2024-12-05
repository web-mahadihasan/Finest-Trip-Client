import { Button } from "@material-tailwind/react";
import { Link } from "react-router";
import { Typewriter } from "react-simple-typewriter";
import tripAdvisor from "../../assets/tripAdvisor1.png"
import { LuPlane } from "react-icons/lu";

const Slide3 = () => {

    return (
        <div
            className="hero h-full"
            style={{
                backgroundImage: "url(https://i.ibb.co.com/qn5LpgZ/hero-home1-slider-4.webp)",
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
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                    </span>
                </h1>
                <p className="mb-5 font-jost text-lg">
                    Fast, reliable, and hassle-free visa processing services, providing expert guidance to help you reach your dream destinations with ease and confidence.                
                </p>
                <div className="max-w-lg mx-auto mt-8">
                    <div className="flex items-center justify-between">
                        <Link className="p-1 border border-dashed border-primary rounded-lg"><Button variant="filled" className="bg-primary font-rubik font-medium text-base tracking-wide hover:bg-primary-dark duration-300 focus:bg-primary-dark flex items-center gap-2">Book a trip <LuPlane size={20}/></Button></Link>
                        <Link className="flex items-center gap-3 play-btn w-fit">
                                <div className="relative h-[70px] flex items-center w-[70px]">
                                    <a className="video-play-button top-0 left-0 ">
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                            viewBox="0 0 104 104" enable-background="new 0 0 104 104" xml:space="preserve">
                                        <path fill="none" stroke="#FFFFFF" stroke-width="4" stroke-miterlimit="10" d="M26,35h52L52,81L26,35z"/>
                                        <circle class="video-play-circle" fill="none" stroke="#e11d48" stroke-width="4" stroke-miterlimit="10" cx="52" cy="52" r="50"/>
                                        </svg>
                                        <span class="video-play-outline"></span>
                                    </a>
                                </div>
                                    <span className="font-rubik text-lg font-medium">Watch Tour Videos</span>
                            </Link>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Slide3;

// Visa Immigration for a Brighter You Future
