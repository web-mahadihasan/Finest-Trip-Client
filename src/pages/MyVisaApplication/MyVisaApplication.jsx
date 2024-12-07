import { Link, useLoaderData } from "react-router";
import AsideToolBar from "../../components/AsideToolBar/AsideToolBar";
import PageBanner from "../../components/PageBanner/PageBanner";
import VisaApplicationCard from "../../components/VisaApplicationCard/VisaApplicationCard";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useAuth } from "../../provider/AuthProvider";

const MyVisaApplication = () => {
    const loadedApplicationData = useLoaderData()
    const [visaApplicationData, setVisaApplicationData] = useState(loadedApplicationData);
    const {user} = useAuth()
    
    useEffect(() =>  {
        const appliedVisa = loadedApplicationData.filter(prevData =>  prevData.userEmail ===  user.email)
        setVisaApplicationData(appliedVisa)
    }, [])

    const handleCancelApplication = (appliedId) =>  {
        Swal.fire({
            title: "Cancel Application?",
            text: "Are you sure to cancel this application!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#63AB45",
            confirmButtonText: "Cancel Application",
            cancelButtonText: "Keep"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/cancel-application/${appliedId}`, {
                    method: "DELETE",
                })
                .then(res =>  res.json())
                .then(data =>  {
                    if(data.deletedCount > 0){
                        const remainingApplication = [...visaApplicationData].filter(prevData =>  prevData._id !==   appliedId)
                        setVisaApplicationData(remainingApplication)
                        Swal.fire({
                            title: "Success!",
                            text: "Your application has been Successfully Canceled.",
                            icon: "success"
                          });
                    }
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

    // Search functionality 
    const handleSearch = (query) =>  {
        const searchQuery = loadedApplicationData.filter(prevData =>  prevData.userEmail ===  user.email)
        const searchResult = [...searchQuery].filter(prev =>  (prev.countryName).toLowerCase() ===   (query).toLowerCase())
        setVisaApplicationData(searchResult)
        console.log(searchResult)
    }
    // filter by visa type 
    const handleVisaTypeFilter = (query) =>  {
        const filterQuery = loadedApplicationData.filter(prevData =>  prevData.userEmail ===  user.email)
        const filterResult = [...filterQuery].filter(prev =>  (prev.visaType).toLowerCase() ===   (query).toLowerCase())
        setVisaApplicationData(filterResult)
    }
    const handleSortByPrice = (accs, des) => {
        console.log('sorted')
    }
    return (
        <div>
            <PageBanner bgImg="https://i.ibb.co.com/2KHJjqV/Section-3.png" title="My Visa Applications" path="my-visa-applications"/>
            {/* Visa application card  */}
            <div className="container mx-auto px-4 grid col-span-1 xl:grid-cols-3 gap-6 my-24">
                <div className="col-span-2 xl:col-span-1">
                    <AsideToolBar handleSearch={handleSearch} handleVisaTypeFilter={handleVisaTypeFilter} handleSortByPrice={handleSortByPrice}/>
                </div>
                <div className="col-span-2 space-y-6">
                    {
                        visaApplicationData.length > 0 ? (visaApplicationData.map(visaData =>  
                            <VisaApplicationCard key={visaData._id} 
                            appliedVisaData={visaData} 
                            onCancel={handleCancelApplication}/>
                        )) 
                        : ( <h3 className="text-3xl font-rubik font-medium text-red-600">No Visa Application Found. <Link to={"/all-visa"} className="text-blue-900 underline text-2xl">See our visa offer</Link> </h3> )
                    }
                </div>
            </div>
        </div>
    );
};

export default MyVisaApplication;