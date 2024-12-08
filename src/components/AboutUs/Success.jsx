import traveler from "../../assets/traveler.svg"
import successIcon from "../../assets/successIcon.svg"
import positiveReview from "../../assets/positiveReview.svg"
import travel from "../../assets/travel.svg"
import CountUp from "react-countup";
import tripAdvisor from "../../assets/tripAdvisor.png"

const Success = () => {
    const successInfo = [
        {"title": 2.5, "text": "Happy Customer", "icon": traveler},
        {"title": 1.8, "text": "Success Visa", "icon": successIcon},
        {"title": 98, "text": "Positive Review", "icon": positiveReview},
        {"title": 98, "text": "Travel Gide", "icon": travel},
    ]
    return (
        <div className="">
            {/* Success count  */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-4 py-8 md:border-y md:border-base-300 my-6">
                {
                    successInfo.map((success, idx) =>  <div data-aos="fade-up" key={idx} className={`flex items-center gap-2 justify-center ${ idx ===  3? "border-r-0" : "border-r-2"}`}>
                        <img src={success.icon} alt="" />
                        <div className="">
                            <span className="text-4xl font-rubik font-bold">
                                 <CountUp start={1.1} end={success.title} decimals={idx <= 1 ? 1 : ""} delay={idx ===  1 ? 1.5 : 1} duration={3} />
                            </span>
                            <span className="text-4xl font-rubik font-bold">{idx > 1 ? "%" : " K"}</span>
                            <p className="font-jost text-lg text-titleBlack/70">{success.text}</p>
                        </div>
                    </div>)
                }
            </div>
            <h5 data-aos="fade-up" className="text-center flex gap-6 justify-center items-center font-jost font-medium text-titleBlack/70">
                <span className="text-xl text-titleBlack">Excellent! </span>
                <span>
                    5.0 Rating out of 5.0 based on
                    <a href="https://www.tripadvisor.com/" className="underline duration-300 hover:text-blue-500"> 1940 Reviews</a>
                </span>
                <span className="inline">
                    <img src={tripAdvisor} alt="" className="w-28 h-6"/>
                </span>
            </h5>
        </div>
    );
};

export default Success;