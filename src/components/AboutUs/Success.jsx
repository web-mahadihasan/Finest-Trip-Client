import traveler from "../../assets/traveler.svg"
import successIcon from "../../assets/successIcon.svg"
import positiveReview from "../../assets/positiveReview.svg"
import travel from "../../assets/travel.svg"

const Success = () => {
    const successInfo = [
        {"title": "1.6k+", "text": "Happy Traveler", "icon": traveler},
        {"title": "1.2k+", "text": "Trous Success", "icon": successIcon},
        {"title": "98%k+", "text": "Positive Review", "icon": positiveReview},
        {"title": "98%k+", "text": "Travel Gide", "icon": travel},
    ]
    return (
        <div className="container mx-auto px-4 xl:px-0">
            <div className="grid grid-cols-2 md:grid-cols-4 py-6 border-y border-base-300 my-6">
                {
                    successInfo.map((success, idx) =>  <div key={idx} className="flex items-center gap-2 justify-center">
                        <img src={success.icon} alt="" />
                        <div>
                            <h4>{success.title}</h4>
                            <p>{success.text}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Success;