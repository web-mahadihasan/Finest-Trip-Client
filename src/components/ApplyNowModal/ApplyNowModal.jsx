import { Button } from "@material-tailwind/react";
import logo from "../../assets/logo1.png";
import { useAuth } from "../../provider/AuthProvider";

const ApplyNowModal = ({visaData, onApplicationSubmit}) => {
    const {user} = useAuth()
    const {visaFee, countryName} = visaData || {};

    const handleApplicationForm = (e) =>  {
        e.preventDefault()
        const form = e.target 
        const data = new FormData(form)
        const fName = data.get("firstName");
        const lName = data.get("lastName");
        const fullName = `${fName} ${lName}`
        
        const applicationData = {
            ...visaData,  
            userEmail: user.email, 
            userName: user.displayName
        }
        return onApplicationSubmit(applicationData)
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
            Visa application Form for {countryName}
        </h2>
            {/* Visa application form  */}
            <div className="max-w-lg mx-auto my-10">
                <form onSubmit={handleApplicationForm} className="space-y-4">
                    {/* Email  */}
                    <div>
                        <label className="block text-[16px] mb-1 font-rubik font-medium text-[#5d5b58]">
                            Your Register Email
                        </label>
                        <input id="country" type="email" name="applyEmail" value={user?.email} readOnly required placeholder="john@example.com" className="w-full h-10 px-4 font-jost text-base transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white focus:border-primary-light focus:outline-none bg-white bg-opacity-90 max-w-lg" />
                    </div>
                    {/* Name  */}
                    <div className="md:grid grid-cols-2 gap-3">
                        <div>
                            <label className="block text-[16px] mb-1 font-rubik font-medium text-[#5d5b58]">
                                First Name
                            </label>
                            <input id="country" type="text" name="firstName" required placeholder="john" className="w-full h-10 px-4 font-jost text-base transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white focus:border-primary-light focus:outline-none bg-white bg-opacity-90 max-w-lg" />
                        </div>
                        <div>
                            <label className="block text-[16px] mb-1 font-rubik font-medium text-[#5d5b58]">
                                Last Name
                            </label>
                            <input id="country" type="text" name="lastName" required placeholder="Doe" className="w-full h-10 px-4 font-jost text-base transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white focus:border-primary-light focus:outline-none bg-white bg-opacity-90 max-w-lg" />
                        </div>
                    </div>
                    {/* Fee  */}
                    <div className="md:grid grid-cols-2 gap-3">
                        <div>
                            <label className="block text-[16px] mb-1 font-rubik font-medium text-[#5d5b58]">
                                Visa Fee
                            </label>
                            <input id="country" type="number" name="applyFee" value={visaFee} readOnly required placeholder="john" className="w-full h-10 px-4 font-jost text-base transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white focus:border-primary-light focus:outline-none bg-white bg-opacity-90 max-w-lg" />
                        </div>
                        <div></div>
                    </div>

                    {/* Submit  */}
                    <Button type="submit" variant="filled" className="w-full bg-primary font-rubik tracking-wide font-normal text-base hover:bg-primary-dark duration-300">Submit application</Button>
                </form>
            </div>
        </div>
    );
};

export default ApplyNowModal;