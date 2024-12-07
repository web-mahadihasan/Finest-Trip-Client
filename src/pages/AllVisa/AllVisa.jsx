import { useLoaderData } from "react-router";
import AsideToolBar from "../../components/AsideToolBar/AsideToolBar";
import PageBanner from "../../components/PageBanner/PageBanner";
import VisaCard from "../../components/VisaCard/VisaCard";
import { useState } from "react";
import { useAuth } from "../../provider/AuthProvider";

const AllVisa = () => {
    const {user} = useAuth()
    const allVisaData = useLoaderData()
    const [queryVisa, setQueryVisa] = useState(allVisaData)
    // Search functionality 
    const handleSearch = (query) =>  {
        const searchQuery = [...allVisaData].filter(prevData =>  prevData.userEmail ===  user.email)
        const searchResult = [...searchQuery].filter(prev =>  (prev.countryName).toLowerCase() ===   (query).toLowerCase())
        setQueryVisa(searchResult)
        console.log(searchResult)
    }
    // filter by visa type 
    const handleVisaTypeFilter = (query) =>  {
        const filterQuery = [...allVisaData].filter(prevData =>  prevData.userEmail ===  user.email)
        const filterResult = [...filterQuery].filter(prev =>  (prev.visaType).toLowerCase() ===   (query).toLowerCase())
        setQueryVisa(filterResult)
    }
    const handleSortByPrice = (accs, des) => {
        console.log('sorted')
    }
    return (
        <div>
            <PageBanner bgImg="https://i.ibb.co.com/2jrnj6r/section-5.png" title="See All Visa" path="all-visa"/>
            
            {/* All visa  */}
            <div className="container mx-auto px-4 grid col-span-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-24">
                <aside className="md:col-span-2 lg:col-span-1">
                    <AsideToolBar handleSearch={handleSearch} handleVisaTypeFilter={handleVisaTypeFilter} handleSortByPrice={handleSortByPrice}/>
                </aside>
                <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-5">
                    {
                        queryVisa.length > 0 ?  queryVisa.map(visa =>  <VisaCard key={visa._id} visa={visa}/>) : (<h3 className="col-span-2 text-3xl font-rubik font-medium text-red-600">No Visa Data found in your query. Try another </h3> )
                        
                    }
                </div>
            </div>
        </div>
    );
};

export default AllVisa;