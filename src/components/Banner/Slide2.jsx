import { Button } from "@material-tailwind/react";
import { FaPlay } from "react-icons/fa6";
import { Link } from "react-router";
import "./Slide.css"

const Slide2 = () => {

    return (
        <div
            className="hero h-full"
            style={{
                backgroundImage: "url(https://triprex.b-cdn.net/wp-content/uploads/2024/02/hero-home1-slider-1.webp)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-7xl gap-6 grid grid-cols-1 md:grid-cols-2 items-center">
                    <div className="text-left">
                        <h3 className="mb-5 text-3xl md:text-4xl lg:text-5xl font-bold font-rubik tracking-wider flex flex-col text-white gap-2">Visa Made Easy Dreams Made Possible</h3>
                        <p className="mb-5 font-jost text-lg">Effortless visa processing, expert guidance, and personalized support to turn your travel dreams into reality</p>
                        <div className="flex lg:items-center gap-8 lg:flex-row flex-col">
                            <Link to={"/all-visa"}><Button className="bg-primary text-base font-medium font-rubik tracking-wide hover:bg-primary-dark duration-300">See Visa</Button></Link>
                            {/* <Link>
                                <span></span>
                                <span>Watch Tour Videos</span>
                            </Link> */}
                            <Link className="flex items-center gap-3 play-btn w-fit">
                                <div className="relative h-[70px] flex items-center w-[70px]">
                                    <p className="video-play-button top-0 left-0 ">
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                            viewBox="0 0 104 104" enableBackground="new 0 0 104 104" xmlSpace="preserve">
                                        <path fill="none" stroke="#FFFFFF" strokeWidth="4" strokeMiterlimit="10" d="M26,35h52L52,81L26,35z"/>
                                        <circle className="video-play-circle" fill="none" stroke="#e11d48" strokeWidth="4" strokeMiterlimit="10" cx="52" cy="52" r="50"/>
                                        </svg>
                                        <span className="video-play-outline"></span>
                                    </p>
                                </div>
                                    <span className="font-rubik text-lg font-medium">Watch Tour Videos</span>
                            </Link>

                        </div>
                    </div>
                    <div className="w-full">
                        <div className="max-w-[450px] h-[400px] md:h-[500px] shadow-lg rounded-xl lg:h-[550px] mx-auto" style={{ backgroundImage: "url(https://i.ibb.co.com/PzGq9Vr/bannerBg.png)",}}>
                            <img src="https://i.ibb.co.com/r7Q8Jg1/home2-about-img1.webp" alt="" className="rounded-xl w-full h-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide2;