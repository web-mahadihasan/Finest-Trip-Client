import { Button, Checkbox, Option, Select } from "@material-tailwind/react";
import logo from "../../assets/logo1.png";
import { useState } from "react";
import { useAuth } from "../../provider/AuthProvider";

const UpdateVisaData = ({prevVisaData, onApplicationSubmit}) => {
        const {user} = useAuth()
        const [formData, setFormData] = useState({
            visaTitle: "",
            countryImage: "",
            countryName: "",
            visaType: "",
            processingTime: "",
            requiredDocuments: [],
            description: "",
            ageRestriction: "",
            visaFee: "",
            validity: "",
            applicationMethod: "",
            userEmail: user?.email,
            userName: user?.displayName,
        });

        const documentOptions = [
            "Valid passport",
            "Visa application form",
            "Recent passport photograph",
            "Financial proof",
            "Letter of invitation (if applicable)"
        ];
        const visaTypes = ["Tourist visa", "Student visa", "Official visa", "Business visa", "Worker visa"];
        const processingTime = ["1 - 2 Days", "2 - 5 Days", "5 - 10 Days", "10 - 15 Days", "15 Days +"]
        const validity = ["3 Months", "6 Months", "1 Years", "2 Years", "5 Years +"]

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
            onApplicationSubmit()
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
            Update Visa Application Data
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
                        <input onChange={handleInputChange} id="visa-title" type="text" name="visaTitle" defaultValue={prevVisaData.visaTitle}
                        placeholder="Electronic Visa For Individuals..."  required
                        className="w-full h-10 px-4 font-jost text-base transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white focus:border-primary-light focus:outline-none bg-white bg-opacity-90" />
                        </div>
                        {/* Country Image */}
                        <div>
                            <label className="block text-[13px] mb-1 font-rubik font-medium text-[#5d5b58]">
                                Country Image URL
                            </label>
                            <input onChange={handleInputChange} id="country-image" type="url" name="countryImage" required placeholder="Ex. https://i.ibb.co.com/image.png" className="w-full h-10 px-4 font-jost text-base transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white focus:border-primary-light focus:outline-none bg-white bg-opacity-90" />
                        </div>

                        {/* Country Name */}
                        <div>
                        <label className="block text-[13px] mb-1 font-rubik font-medium text-[#5d5b58]">
                            Country Name
                        </label>
                        <input onChange={handleInputChange} id="country" type="text" name="countryName" required placeholder="Ex. USA" className="w-full h-10 px-4 font-jost text-base transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white focus:border-primary-light focus:outline-none bg-white bg-opacity-90" />
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
                        <Select onChange={(val) =>  setFormData(prev =>  ({ ...prev, processingTime: val }))} value={formData.processingTime} required label="Select one" className="bg-white bg-opacity-90">
                                {processingTime.map((day) => (
                                    <Option key={day} value={day} className="my-1 font-jost text-base">{day}</Option>
                                ))}
                            </Select>
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
                        <textarea onChange={handleInputChange}
                            className="textarea outline-none textarea-bordered focus-visible:outline-none focus:border-primary-light font-rubik text-base w-full mt-1 text-gray-700 bg-white bg-opacity-90" name="description" required
                            placeholder="Enter visa description"
                        />
                        </div>

                        {/* Age Restriction */}
                        <div>
                        <label className="block text-[13px] mb-1 font-rubik font-medium text-[#5d5b58]">
                            Age Restriction
                        </label>
                        <input onChange={handleInputChange} id="age" type="number" name="ageRestriction" placeholder="45" required className="w-full h-10 px-4 font-jost text-base transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white focus:border-primary-light focus:outline-none bg-white bg-opacity-90" />
                        </div>

                        {/* Fee */}
                        <div>
                        <label className="block text-[13px] mb-1 font-rubik font-medium text-[#5d5b58]">
                            Visa Fee
                        </label>
                        <input onChange={handleInputChange} id="visa-fee" type="number" name="visaFee" placeholder="$ 350" required className="w-full h-10 bg-white bg-opacity-90 px-4 font-jost text-base transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white focus:border-primary-light focus:outline-none" />
                        </div>

                        {/* Validity */}
                        <div>
                        <label className="block text-[13px] mb-1 font-rubik font-medium text-[#5d5b58]">
                            Validity
                        </label>
                        <Select onChange={(val) =>  setFormData(prev =>  ({ ...prev, validity: val }))} value={formData.validity} required label="Select one" className="bg-white bg-opacity-90">
                                {validity.map((month) => (
                                    <Option key={month} value={month} className="my-1 font-jost text-base">{month}</Option>
                                    // onChange={(val) => setValue(val)
                                ))}
                            </Select>
                        </div>

                        {/* Application Method */}
                        <div>
                        <label className="block text-[13px] mb-1 font-rubik font-medium text-[#5d5b58]">
                            Application method
                        </label>
                        <input onChange={handleInputChange} id="application-method" type="text" name="applicationMethod" required placeholder="Online" className="w-full h-10 px-4 font-jost text-base transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 bg-white bg-opacity-90 autofill:bg-white focus:border-primary-light focus:outline-none" />
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