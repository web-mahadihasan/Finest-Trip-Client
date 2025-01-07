import { useLoaderData, useLocation } from "react-router";
import AsideToolBar from "../../components/AsideToolBar/AsideToolBar";
import PageBanner from "../../components/PageBanner/PageBanner";
import VisaCard from "../../components/VisaCard/VisaCard";
import { useEffect, useState } from "react";
import { useAuth } from "../../provider/AuthProvider";

const AllVisa = () => {
    const {user} = useAuth()
    const allVisaData = useLoaderData()
    const [queryVisa, setQueryVisa] = useState(allVisaData)
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const query = params.get("query")
    const category = params.get("category")
    
    console.log(allVisaData)

    useEffect(() => {
        if(location.search){
            if(query ===   "visa_type"){
                const visaTypeQuery = [...allVisaData].filter(prev =>  (prev.visaType).toLowerCase() ===   (category).toLowerCase())
                setQueryVisa(visaTypeQuery)
            }else if(query ===   "country"){
                const countryQuery = [...allVisaData].filter(prev =>  (prev.countryName).toLowerCase() ===   (category).toLowerCase())
                setQueryVisa(countryQuery)
                console.log(countryQuery)
            }
        }
    }, [location.search])

    // Search functionality 
    const handleSearch = (query) =>  {
        const searchResult = [...allVisaData].filter(prev =>  (prev.countryName).toLowerCase() ===   (query).toLowerCase())
        setQueryVisa(searchResult)
    }
    // filter by visa type 
    const handleVisaTypeFilter = (query) =>  {
        if(query ===   "All Visa"){
            setQueryVisa(allVisaData)
        } else{
            const filterResult = [...allVisaData].filter(prev =>  (prev.visaType).toLowerCase() ===   (query).toLowerCase())
            setQueryVisa(filterResult)
        }
    }
    const handleSortByPrice = (query) => {
        if(query ===   "accending"){
            const accendingVisa = [...allVisaData].sort((a, b) =>  a.visaFee - b.visaFee)
            setQueryVisa(accendingVisa)
        }
        if(query ===   "descending"){
            const accendingVisa = [...allVisaData].sort((a, b) =>  b.visaFee - a.visaFee)
            setQueryVisa(accendingVisa)
        }
    }
    return (
        <div>
            <PageBanner bgImg="https://i.ibb.co.com/2jrnj6r/section-5.png" title="See All Visa" path="all-visa"/>
            
            {/* All visa  */}
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-24 gap-6">
                <aside className="md:col-span-2 lg:col-span-1">
                    <AsideToolBar handleSearch={handleSearch} handleVisaTypeFilter={handleVisaTypeFilter} handleSortByPrice={handleSortByPrice}/>
                </aside>
                <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 h-fit">
                    {
                        queryVisa.length > 0 ?  queryVisa.map(visa =>  <VisaCard key={visa._id} visa={visa}/>) : (<h3 className="col-span-2 text-3xl font-rubik font-medium text-red-600">No Visa Data found in your query. Try another </h3> )
                        
                    }
                </div>
            </div>
        </div>
    );
};

export default AllVisa;