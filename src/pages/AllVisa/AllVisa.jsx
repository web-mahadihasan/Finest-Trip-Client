import { useLoaderData } from "react-router";
import AsideToolBar from "../../components/AsideToolBar/AsideToolBar";
import PageBanner from "../../components/PageBanner/PageBanner";
import VisaCard from "../../components/VisaCard/VisaCard";

const AllVisa = () => {
    const visaData = useLoaderData()
    return (
        <div>
            <PageBanner bgImg="https://i.ibb.co.com/2jrnj6r/section-5.png" title="See All Visa" path="all-visa"/>
            
            {/* All visa  */}
            <div className="container mx-auto px-4 grid col-span-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-24">
                <aside className="md:col-span-2 lg:col-span-1">
                    <AsideToolBar/>
                </aside>
                <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-5">
                    {
                        visaData.map(visa =>  <VisaCard key={visa._id} visa={visa}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllVisa;