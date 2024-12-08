import { Button, Checkbox, Option } from "@material-tailwind/react";
import React, { useState } from "react";
import Swal from "sweetalert2";
import PageBanner from "../../components/PageBanner/PageBanner";
import { useAuth } from "../../provider/AuthProvider";
import Select from "react-select";

const AddVisa = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    requiredDocuments: [],
  });
  const [selectedValue, setSelectedValue] = useState(null);

  const documentOptions = [
    "Valid passport",
    "Visa application form",
    "Recent passport photograph",
    "Financial proof",
    "Letter of invitation (if applicable)",
  ];
  const options = [
    { value: "Tourist visa", label: "tourist visa" },
    { value: "Student visa", label: "Student visa" },
    { value: "Official visa", label: "Official visa" },
    { value: "Business visa", label: "Business visa" },
    { value: "Worker visa", label: "Worker visa" },
    { value: "Visitor visa", label: "Visitor visa" },
  ];

  const optionOnChange = (selectedOption) => {
    setSelectedValue(selectedOption.value);
  };

  // Handle requirements doc
  const handleRequirementDoc = (document) => {
    setFormData((prev) => {
      const isSelected = prev.requiredDocuments.includes(document);
      const updatedDocuments = isSelected
        ? prev.requiredDocuments.filter((item) => item !== document)
        : [...prev.requiredDocuments, document];
      return { ...prev, requiredDocuments: updatedDocuments };
    });
  };

  // handle visa add
  const handleAddVisa = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const countryImage = data.get("countryImage");
    const countryName = data.get("countryName");
    const processingTime = data.get("processingTime");
    const description = data.get("description");
    const ageRestriction = data.get("ageRestriction");
    const visaFee = data.get("visaFee");
    const validity = data.get("validity");
    const applicationMethod = data.get("applicationMethod");
    const visaType = selectedValue;
    const userEmail = user.email;
    const userName = user.displayName;
    const createdAt = new Date();

    // console.log(visaTitle, countryName)
    const visaData = {
      ...formData,
      createdAt,
      countryImage,
      countryName,
      visaType,
      processingTime,
      description,
      ageRestriction,
      visaFee,
      validity,
      applicationMethod,
      userEmail,
      userName,
    };

    fetch("https://finest-trip-server.vercel.app/add-visa", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(visaData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "Sucessfull!",
          text: "Sucessfully added new visa",
          icon: "success",
        });
        form.reset();
        setFormData.requiredDocuments = [];
        setSelectedValue(null);
      });
    console.log(formData);
  };

  return (
    <div>
      <div>
        <PageBanner
          bgImg="https://i.ibb.co.com/yqLfWK0/Section-7.png"
          title="Add New Visa"
          path="add-visa"
        />
      </div>
      <div className="min-h-screen bg-cover bg-center flex my-24 items-center justify-center bg-visa-form-bg bg-opacity-90 bg-no-repeat">
        <div
          className="rounded-lg shadow-lg p-8 max-w-6xl w-full"
          style={{
            background:
              "linear-gradient(125deg, rgba(99, 171, 69, 0.1) 0%, rgba(251, 176, 59, 0.1) 100%)",
          }}
        >
          <h2 className="text-3xl font-rubik font-bold text-center text-gray-800 mb-6">
            Visa Information
          </h2>
          <form onSubmit={handleAddVisa} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Country Image */}
              <div>
                <label className="block text-[13px] mb-1 font-rubik font-medium text-[#5d5b58]">
                  Country Image URL
                </label>
                <input
                  id="country-image"
                  type="url"
                  name="countryImage"
                  required
                  placeholder="Ex. https://i.ibb.co.com/image.png"
                  className="w-full h-10 px-4 font-jost text-base transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white focus:border-primary-light focus:outline-none bg-white bg-opacity-90"
                />
              </div>

              {/* Country Name */}
              <div>
                <label className="block text-[13px] mb-1 font-rubik font-medium text-[#5d5b58]">
                  Country Name
                </label>
                <input
                  id="country"
                  type="text"
                  name="countryName"
                  required
                  placeholder="Ex. United States"
                  className="w-full h-10 px-4 font-jost text-base transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white focus:border-primary-light focus:outline-none bg-white bg-opacity-90"
                />
              </div>

              {/* Visa Type */}
              <div>
                <label className="block text-[13px] mb-1 font-rubik font-medium text-[#5d5b58]">
                  Visa Type
                </label>
                <Select
                  options={options}
                  name="visaType"
                  onChange={optionOnChange}
                  placeholder="Select a visa type"
                />
              </div>

              {/* Processing time */}
              <div>
                <label className="block text-[13px] mb-1 font-rubik font-medium text-[#5d5b58]">
                  Processing Time
                </label>
                <input
                  id="processingTime"
                  type="text"
                  name="processingTime"
                  required
                  placeholder="5 - Days"
                  className="w-full h-10 px-4 font-jost text-base transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white focus:border-primary-light focus:outline-none bg-white bg-opacity-90"
                />
              </div>

              {/* Required Documents */}
              <div className="md:col-span-2">
                <label className="block text-[13px] mb-1 font-rubik font-medium text-[#5d5b58]">
                  Requirements Documents
                </label>
                <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {documentOptions.map((doc) => (
                    <label
                      key={doc}
                      className="flex items-center font-rubik text-base font-medium"
                    >
                      <Checkbox
                        label={doc}
                        checked={formData.requiredDocuments.includes(doc)}
                        onChange={() => handleRequirementDoc(doc)}
                      />
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
                  className="textarea outline-none textarea-bordered focus-visible:outline-none focus:border-primary-light font-rubik text-base w-full mt-1 text-gray-700 bg-white bg-opacity-90"
                  name="description"
                  required
                  placeholder="Enter visa description"
                />
              </div>

              {/* Age Restriction */}
              <div>
                <label className="block text-[13px] mb-1 font-rubik font-medium text-[#5d5b58]">
                  Age Restriction
                </label>
                <input
                  id="age"
                  type="number"
                  name="ageRestriction"
                  placeholder="45"
                  required
                  className="w-full h-10 px-4 font-jost text-base transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white focus:border-primary-light focus:outline-none bg-white bg-opacity-90"
                />
              </div>

              {/* Fee */}
              <div>
                <label className="block text-[13px] mb-1 font-rubik font-medium text-[#5d5b58]">
                  Visa Fee
                </label>
                <input
                  id="visa-fee"
                  type="number"
                  name="visaFee"
                  placeholder="$ 350"
                  required
                  className="w-full h-10 bg-white bg-opacity-90 px-4 font-jost text-base transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white focus:border-primary-light focus:outline-none"
                />
              </div>

              {/* Validity */}
              <div>
                <label className="block text-[13px] mb-1 font-rubik font-medium text-[#5d5b58]">
                  Validity
                </label>
                <input
                  id="validity"
                  type="text"
                  name="validity"
                  required
                  placeholder="1 Years"
                  className="w-full h-10 px-4 font-jost text-base transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white focus:border-primary-light focus:outline-none bg-white bg-opacity-90"
                />
              </div>

              {/* Application Method */}
              <div>
                <label className="block text-[13px] mb-1 font-rubik font-medium text-[#5d5b58]">
                  Application method
                </label>
                <input
                  id="application-method"
                  type="text"
                  name="applicationMethod"
                  required
                  placeholder="Online"
                  className="w-full h-10 px-4 font-jost text-base transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 bg-white bg-opacity-90 autofill:bg-white focus:border-primary-light focus:outline-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <Button
                type="submit"
                variant="filled"
                className="bg-primary text-white font-semibold font-rubik tracking-widest w-full text-sm hover:bg-primary-dark duration-300"
              >
                Add Visa
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddVisa;
