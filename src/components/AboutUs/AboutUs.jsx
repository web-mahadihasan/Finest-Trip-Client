import Success from "./Success";
import svg1 from "../../assets/about-svg1.svg"
import svg2 from "../../assets/about-svg2.svg"
import svg3 from "../../assets/about-svg3.svg"
import svg4 from "../../assets/about-svg4.svg"
import aboutBg from "../../assets/about-bg.png"
import { Button } from "@material-tailwind/react";

const AboutUs = () => {

    const aboutInfo = [
        {title: "Safety First Always", icon: svg1},
        {title: "Trusted Travel Guide", icon: svg2},
        {title: "Expertise And Experience", icon: svg3},
        {title: "Time and Stress Savings", icon: svg4}
    ]
    return (
        <div className="my-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
                <div className="order-2 lg:order-1">
                    <h5 className="font-jost font-2xl font-normal p-2 bg-primary-light/35 w-fit text-titleBlack px-8 rounded-bl-[15px] rounded-tr-[15px]">About us</h5>
                    <h3 className="text-2xl md:text-3xl xl:text-4xl font-medium my-4 font-rubik">We provide the best tour facilities.</h3>
                    <p className="text-lg font-jost text-titleBlack/75 mb-5">
                        Explore hassle-free travel with our top-notch tour facilities. From personalized itineraries to seamless arrangements, we ensure a memorable journey with comfort, convenience, and exceptional service tailored to your needs.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> 
                        {
                            aboutInfo.map((info, idx) =>  <div key={idx} className={`cursor-pointer px-6 gap-4 py-4 flex items-center rounded-md duration-300 ${idx ===  1 || idx ===  2 ? "bg-[#fcf6e7] hover:bg-[#fbb03b]" : "bg-[#eff6ec] hover:bg-primary hover:text-white"}`}>
                                <div className="p-3 bg-white w-fit rounded-full">
                                    <img src={info.icon} alt={info.title} className="w-10"/>
                                </div>
                                <h3 className="max-w-[130px] font-rubik font-medium text-lg">{info.title}</h3>
                            </div>)
                        }
                    </div>
                    <Button variant="filled" className="bg-primary font-rubik text-base capitalize font-medium tracking-wider my-4 hover:bg-primary-dark duration-300">See Visa process</Button>
                </div>
                <div className="order-1 lg:order-2">
                    <img src={aboutBg} alt="" className="cursor-pointer"/>
                </div>
            </div>

            {/* Success  */}
            <div>
                <Success/>
            </div>
        </div>
    );
};

export default AboutUs;