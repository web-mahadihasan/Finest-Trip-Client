import AsideToolBar from "../../components/AsideToolBar/AsideToolBar";
import PageBanner from "../../components/PageBanner/PageBanner";
import VisaApplicationCard from "../../components/VisaApplicationCard/VisaApplicationCard";

const MyVisaApplication = () => {
    return (
        <div>
            <PageBanner bgImg="https://i.ibb.co.com/2KHJjqV/Section-3.png" title="My Visa Applications" path="my-visa-applications"/>
            {/* Visa application card  */}
            <div className="container mx-auto px-4 grid col-span-1 xl:grid-cols-3 gap-6 my-24">
                <div className="col-span-2 xl:col-span-1">
                    <AsideToolBar/>
                </div>
                <div className="col-span-2">
                    <VisaApplicationCard/>
                </div>
            </div>
        </div>
    );
};

export default MyVisaApplication;