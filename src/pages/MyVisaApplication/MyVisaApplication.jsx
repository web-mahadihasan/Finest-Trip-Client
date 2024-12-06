import { Link, useLoaderData } from "react-router";
import AsideToolBar from "../../components/AsideToolBar/AsideToolBar";
import PageBanner from "../../components/PageBanner/PageBanner";
import VisaApplicationCard from "../../components/VisaApplicationCard/VisaApplicationCard";
import { useState } from "react";
import Swal from "sweetalert2";

const MyVisaApplication = () => {
    const loadedApplicationData = useLoaderData()
    const [visaApplicationData, setVisaApplicationData] = useState(loadedApplicationData)

    const handleCancelApplication = (appliedId) =>  {
        Swal.fire({
            title: "Cancel Application?",
            text: "Are you sure to cancel this application!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#63AB45",
            cancelButtonColor: "#d33",
            confirmButtonText: "Cancel Application",
            cancelButtonText: "Close"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/cancel-application/${appliedId}`, {
                    method: "DELETE"
                })
                .then(res =>  res.json())
                .then(data =>  {
                    console.log(data)
                    if(data.deletedCount > 0){
                        const remainingApplication = [...visaApplicationData].filter(prevData =>  prevData._id !==  appliedId)
                        setVisaApplicationData(remainingApplication)
                        Swal.fire({
                            title: "Success!",
                            text: "Your application has been Successfully Canceled.",
                            icon: "success"
                          });
                    }
                    console.log(data)
                }).catch(err =>  {
                    Swal.fire({
                        title: "Falied",
                        text: "Fetching error when cancel application! Try again.",
                        icon: "error"
                      });
                })
            }
          });
    }
    return (
        <div>
            <PageBanner bgImg="https://i.ibb.co.com/2KHJjqV/Section-3.png" title="My Visa Applications" path="my-visa-applications"/>
            {/* Visa application card  */}
            <div className="container mx-auto px-4 grid col-span-1 xl:grid-cols-3 gap-6 my-24">
                <div className="col-span-2 xl:col-span-1">
                    <AsideToolBar/>
                </div>
                <div className="col-span-2">
                    {
                        visaApplicationData.length < 0 ? <h3 className="text-3xl font-rubik font-medium text-red-600">No Visa Application Yet. <Link to={"/all-visa"} className="text-blue-900 underline text-2xl">See our visa offer</Link> </h3> : (
                            visaApplicationData.map(visaData =>  <VisaApplicationCard key={visaData._id} appliedVisaData={visaData} onCancel={handleCancelApplication}/>)
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default MyVisaApplication;