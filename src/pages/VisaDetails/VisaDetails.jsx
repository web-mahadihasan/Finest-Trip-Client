import { GiCheckMark } from "react-icons/gi";
import location from "../../assets/location.svg"
import { Button } from "@material-tailwind/react";
import { RxExternalLink } from "react-icons/rx";
import PlanYourTrip from "../../components/PlanYourTrip/PlanYourTrip";
import FAQ from "../../components/FAQ/FAQ";
import { Link, useLoaderData, useNavigate } from "react-router";
import { GoArrowLeft } from "react-icons/go";
import ApplyNowModal from "../../components/ApplyNowModal/ApplyNowModal";
import { useRef } from "react";
import { RiCloseLargeLine } from "react-icons/ri";
import PageBanner from "../../components/PageBanner/PageBanner";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const VisaDetails = () => {
    const {faqData, visaDetailsData} = useLoaderData();
    const navigate = useNavigate()
    const modalRef = useRef()
    const { 
        _id,
        visaTitle,
        countryImage,
        countryName,
        visaType,
        processingTime,
        requiredDocuments,
        description,
        ageRestriction,
        visaFee,
        validity,
        applicationMethod
    } = visaDetailsData || {}

    const extraReqDoc = [
        "Passport Scan Copy: Clearly scanned Passport copy required. Minimum of 6 months validity required from the arrival date.",
        "Photo Specification: Passport Size Photo with White Background (clear scanned Copy required)",
        "Previous Visa copy: If traveler has previous travel history on countries like Thailand, Malaysia, Singapore, USA, UK and so on, need those clear VISA scanned copy.",
        "Flight and hotel reservations booking with dates clearly stated (DO NOT purchase until visa approval)",
        "Processing time depends on visa."
    ];
    const handleApplyNow = () => { 
        modalRef.current.showModal()
    }
    const handleSubmitApplication = (applicationData) => {
        fetch('http://localhost:3000/submit-application', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(applicationData)
        })
        .then(res =>  res.json())
        .then(data =>  {
            if(data.insertedId){
                modalRef.current.close()
                Swal.fire({
                    title: "Congratulation!",
                    text: "Sucessfully submit application form. Wait for response",
                    icon: "success",
                  });
                navigate("/my-visa-application")
            }
        }).catch(err => {
            toast.error("Falied to submit your application! Try again")
        })
    }
    return (
        <div>
            <PageBanner bgImg="https://i.ibb.co.com/RPbNqx9/Section-4.png" title={`Details About ` + countryName +" " + visaType} path="visa-details"/>
            <div className="container mx-auto px-4 md:px-0 mt-16 min-h-screen">
            <Link to={-1} className="flex items-center gap-2 py-2 px-4 border w-fit rounded-md border-primary-light font-jost font-medium my-2">
                <span><GoArrowLeft size={18}/></span>
                <span>Back</span>
            </Link>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <img src={countryImage} alt={countryName} className="w-full h-[300px] md:h-[320px] xl:h-[380px] rounded-md"/>
                    <div className="flex items-center gap-1 my-5">
                        <img src={location} alt="" className="w-9"/>
                        <p className="font-rubik text-3xl font-bold text-titleBlack">{countryName}</p>
                    </div>
                    <div className="pt-1 font-jost flex flex-wrap items-center gap-6">
                        <p className="text-lg">
                            <span className="font-medium text-titleBlack">Processing Time: </span>
                            <span className="text-black/65">{processingTime}</span>
                        </p>
                        <p className="text-lg">
                            <span className="font-medium text-titleBlack">Visa Type: </span>
                            <span className="text-black/65">{visaType}</span>
                        </p>
                        <p className="text-lg">
                            <span className="font-medium text-titleBlack">Validity: </span>
                            <span className="text-black/65">{validity}+</span>
                        </p>
                        <p className="text-lg">
                            <span className="font-medium text-titleBlack">Application Method: </span>
                            <span className="text-black/65">{applicationMethod}</span>
                        </p>
                        <p className="text-lg">
                            <span className="font-medium text-titleBlack">Age Restriction: </span>
                            <span className="text-black/65">{ageRestriction}</span>
                        </p>
                    </div>
                    {/* Visa Description  */}
                    <div className="my-8 space-y-3">
                        <h3 className="font-rubik text-2xl font-medium text-titleBlack">Description:</h3>
                        <p className="font-jost text-lg text-black/65">
                            <span className="block">{description}</span>
                            Passport Scan Copy: Clearly scanned Passport copy required. Minimum of 6 months validity required from the arrival date.
                            Photo Specification: Passport Size Photo with White Background (clear scanned Copy required)
                            Previous Visa copy: If traveler has previous travel history on countries like Thailand, Malaysia, Singapore,
                        </p>
                    </div>
                    {/* Requirements docs  */}
                    <div className="border p-5">
                        <h3 className="font-rubik text-2xl font-medium text-titleBlack">View Required Documents</h3>
                        <p className="font-rubik text-lg my-2"><span className="text-red-500">*</span>Required Documents for Visa</p>
                        <div className="ml-10 my-3">
                            {
                                requiredDocuments.map((req, idx) =>  <li key={idx} className="font-jost text-black/75 text-lg list-inside">{req}</li>)
                            }
                        </div>
                        <div>
                            <p className="font-rubik text-lg my-2">Details: </p>
                            <ul className="space-y-3 ml-6">
                                {
                                    extraReqDoc.map((extraDoc, idx) =>  <li key={idx} className="flex items-start gap-2 font-jost text-black/65 text-lg">
                                        <span><GiCheckMark size={16} className="text-primary mt-1"/></span>
                                        <span>{extraDoc}</span>
                                    </li>)
                                }
                            </ul>
                        </div>
                    </div>

                    {/* FAQ  */}
                    <div>
                        <FAQ faqData={faqData}/>
                    </div>
                </div>

                {/* Aside bar  */}
                <aside className="">
                    <div className="md:grid grid-cols-2 lg:grid-cols-1 gap-3">
                        {/* Visa fee  */}
                        <div className="text-center p-6 rounded-md space-y-3" style={{background: "linear-gradient(125deg, rgba(99, 171, 69, 0.1) 0%, rgba(251, 176, 59, 0.1) 100%)"}}>
                            <h3 className="text-titleBlack font-rubik text-2xl font-medium">Cost Summary</h3>
                            <h4 className="text-2xl font-rubik text-primary font-semibold">$ <span>{visaFee} /</span> <span className="text-lg text-titleBlack/60 font-normal">per visa</span></h4>
                            <p className="text-sm font-jost text-black/65">Arrange your trip in advance - book this Visa now!</p>
                            <Button onClick={handleApplyNow} variant="filled" className="bg-primary text-white font-jost tracking-wide text-sm font-medium flex items-center gap-1 mx-auto hover:bg-primary-dark duration-300">Apply Now <RxExternalLink size={18}/></Button>
                        </div>
                        {/* plan your trip  */}
                        <div>
                            <PlanYourTrip/>
                        </div>
                        {/* // modal  */}
                        <div className="modal">
                            <dialog ref={modalRef} id="my_modal_4" className={`modal`} style={{background: "linear-gradient(125deg, rgba(99, 171, 69, 0.1) 0%, rgba(251, 176, 59, 0.1) 100%)"}}>
                                <div className="modal-box max-w-3xl">
                                    <form method="dialog">
                                        <button className="btn btn-sm md:btn-md border border-primary btn-circle right-5 absolute top-4"><RiCloseLargeLine size={20}/></button>
                                    </form>
                                    <ApplyNowModal visaData={visaDetailsData} onApplicationSubmit={handleSubmitApplication}/>
                                </div>
                            </dialog>
                        </div>
                        {/* Modal close  */}
                    </div>
                    
                </aside>
            </div>
        </div>
        </div>
    );
};

export default VisaDetails;