import { Button, Checkbox, Option, Select } from "@material-tailwind/react";
import logo from "../../assets/logo1.png";
import { useState } from "react";
import { useAuth } from "../../provider/AuthProvider";

const UpdateVisaData = ({prevVisaData, onUpdateVisaInfo}) => {
        const {user} = useAuth()
        const [formData, setFormData] = useState({
            visaType: "",
            requiredDocuments: [],
        });
        // console.log(prevVisaData)

        const documentOptions = [
            "Valid passport",
            "Visa application form",
            "Recent passport photograph",
            "Financial proof",
            "Letter of invitation (if applicable)"
        ];
        const visaTypes = ["Tourist visa", "Student visa", "Official visa", "Business visa", "Worker visa"];
      
        // Handle requirements doc
        const handleRequirementDoc = (document) => {
            setFormData((prev) => {
            const isSelected = prev.requiredDocuments.includes(document);
            const updatedDocuments = isSelected
                ? prev.requiredDocuments.filter((item) => item !==  document)
                : [...prev.requiredDocuments, document];
            return { ...prev, requiredDocuments: updatedDocuments };
            });
        };
            //   Handle form input 
        const handleInputChange = (e) => {
            const { name, value } = e.target;
            setFormData((prev) => ({ ...prev, [name]: value }));
        };
        const handleApplicationForm = (e) =>  {
            e.preventDefault()
            const form = e.target;
            const data = new FormData(form);
            const visaTitle = data.get("visaTitle");
            const countryImage = data.get("countryImage")
            const countryName = data.get("countryName")
            const processingTime = data.get("processingTime")
            const description = data.get("description")
            const ageRestriction = data.get("ageRestriction")
            const visaFee = data.get("visaFee")
            const validity = data.get("validity")
            const applicationMethod = data.get("applicationMethod")
            // console.log(visaTitle, countryName)
            const updateData = {...formData, visaTitle, countryImage, countryName, processingTime, description, ageRestriction, visaFee, validity, applicationMethod, userEmail:user.email, userName:user.displayName}
            
            onUpdateVisaInfo(updateData, prevVisaData._id)

            form.reset()
        }

    return (
        <div >
            <div className="flex items-center justify-center">
                <img src={logo} alt="" className="w-12" />
                <h3 className="text-4xl font-black tracking-wide text-black font-inter text-center">
                    Finest<span className="text-customGreen">Trip</span>
                </h3>
          </div>
          <h2 className="text-2xl md:text-3xl font-rubik font-medium text-center text-titleBlack my-6">
            Update Visa Information
        </h2>
            {/* Visa application form  */}
            <div className="max-w-2xl mx-auto my-10">
            <form onSubmit={handleApplicationForm} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Visa Title */}
                    <div className="col-span-2">
                    <label className="block text-[13px] mb-1 font-rubik font-medium text-[#5d5b58]">
                        Visa Title
                    </label>
                    <input id="visa-title" type="text" name="visaTitle" defaultValue={prevVisaData?.visaTitle}
                    placeholder="Electronic Visa For Individuals..."  required
                    className="w-full h-10 px-4 font-jost text-base transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white focus:border-primary-light focus:outline-none bg-white bg-opacity-90" />
                    </div>
                    {/* Country Image */}
                    <div>
                    <label className="block text-[13px] mb-1 font-rubik font-medium text-[#5d5b58]">
                        Country Image URL
                    </label>
                    <input id="country-image" type="url" name="countryImage" defaultValue={prevVisaData?.countryImage} required placeholder="Ex. https://i.ibb.co.com/image.png" className="w-full h-10 px-4 font-jost text-base transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white focus:border-primary-light focus:outline-none bg-white bg-opacity-90" />
                    </div>

                    {/* Country Name */}
                    <div>
                    <label className="block text-[13px] mb-1 font-rubik font-medium text-[#5d5b58]">
                        Country Name
                    </label>
                    <input id="country" type="text" name="countryName" defaultValue={prevVisaData?.countryName} required placeholder="Ex. USA" className="w-full h-10 px-4 font-jost text-base transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white focus:border-primary-light focus:outline-none bg-white bg-opacity-90" />
                    </div>

                    {/* Visa Type */}
                    <div>
                    <label className="block text-[13px] mb-1 font-rubik font-medium text-[#5d5b58]">
                            Visa Type
                    </label>
                    <Select onChange={(val) =>  setFormData(prev =>  ({ ...prev, visaType: val }))} label="Select one" required value={formData.visaType} name="visaType" className="bg-white bg-opacity-90">
                            {visaTypes.map((type) => (
                                <Option key={type} value={type} className="my-1 font-jost text-base">{type}</Option>
                                // onChange={(val) => setValue(val)
                            ))}
                        </Select>
                    </div>

                    {/* Processing time */}
                    <div>
                        <label className="block text-[13px] mb-1 font-rubik font-medium text-[#5d5b58]">
                            Processing Time
                        </label>
                        <input id="processingTime" type="text" name="processingTime" defaultValue={prevVisaData?.processingTime} required placeholder="Ex. USA" className="w-full h-10 px-4 font-jost text-base transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white focus:border-primary-light focus:outline-none bg-white bg-opacity-90" />
                    </div>

                    {/* Required Documents */}
                    <div className="md:col-span-2">
                        <label className="block text-[13px] mb-1 font-rubik font-medium text-[#5d5b58]">
                            Requirements Documents
                        </label>
                    <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                        {documentOptions.map((doc) => (
                        <label key={doc} className="flex items-center font-rubik text-base font-medium">
                            <Checkbox label={doc} checked={formData.requiredDocuments.includes(doc)} onChange={() => handleRequirementDoc(doc)}/>
                        </label>
                        ))}
                    </div>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">
                        <label className="block text-[13px] mb-1 font-rubik font-medium text-[#5d5b58]">
                            Description
                        </label>
                    <textarea
                        className="textarea outline-none textarea-bordered focus-visible:outline-none focus:border-primary-light font-rubik text-base w-full mt-1 text-gray-700 bg-white bg-opacity-90" name="description" required defaultValue={prevVisaData?.description}
                        placeholder="Enter visa description"
                    />
                    </div>

                    {/* Age Restriction */}
                    <div>
                    <label className="block text-[13px] mb-1 font-rubik font-medium text-[#5d5b58]">
                        Age Restriction
                    </label>
                    <input id="age" type="number" name="ageRestriction" defaultValue={prevVisaData?.ageRestriction} placeholder="45" required className="w-full h-10 px-4 font-jost text-base transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white focus:border-primary-light focus:outline-none bg-white bg-opacity-90" />
                    </div>

                    {/* Fee */}
                    <div>
                    <label className="block text-[13px] mb-1 font-rubik font-medium text-[#5d5b58]">
                        Visa Fee
                    </label>
                    <input id="visa-fee" type="number" name="visaFee" placeholder="$ 350" defaultValue={prevVisaData?.visaFee} required className="w-full h-10 bg-white bg-opacity-90 px-4 font-jost text-base transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white focus:border-primary-light focus:outline-none" />
                    </div>

                    {/* Validity */}
                    <div>
                        <label className="block text-[13px] mb-1 font-rubik font-medium text-[#5d5b58]">
                            Validity
                        </label>
                        <input id="validity" type="text" name="validity" defaultValue={prevVisaData?.validity} required placeholder="Ex. USA" className="w-full h-10 px-4 font-jost text-base transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white focus:border-primary-light focus:outline-none bg-white bg-opacity-90" />
                    </div>

                    {/* Application Method */}
                    <div>
                    <label className="block text-[13px] mb-1 font-rubik font-medium text-[#5d5b58]">
                        Application method
                    </label>
                    <input id="application-method" type="text" name="applicationMethod" defaultValue={prevVisaData?.applicationMethod} required placeholder="Online" className="w-full h-10 px-4 font-jost text-base transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 bg-white bg-opacity-90 autofill:bg-white focus:border-primary-light focus:outline-none" />
                    </div>

                </div>

                {/* Submit Button */}
                <div>
                    <Button type="submit" variant="filled" className="bg-primary text-white font-semibold font-rubik tracking-widest w-full text-sm hover:bg-primary-dark duration-300">Update Information</Button>
                </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateVisaData;