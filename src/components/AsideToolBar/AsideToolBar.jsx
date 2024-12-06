import { Button, Radio } from "@material-tailwind/react";
import { useState } from "react";
import {  LiaSortNumericDownSolid, LiaSortNumericUpAltSolid } from "react-icons/lia";


const AsideToolBar = () => {
    const [selectedOption, setSelectedOption] = useState(null)
    const [priceRange, setPriceRange] = useState(null)

    const hanldeVisaTypeFilter = e => {
      setSelectedOption(e.target.value)
    }
    const handleSliderChange = (value) => {
        setPriceRange(value); 
        console.log("Selected Value:", value); 
      };
  
    return (
        <div className="w-full lg:grid grid-cols-2 gap-3 xl:grid-cols-1">
            <div className="border bg-base-100 shadow p-6 rounded w-full lg:col-span-2 xl:col-span-1">
                <h3 className="text-lg font-medium font-rubik text-titleBlack">Search by Country name</h3>
                <div className="relative my-2">
                    <input
                    id="search" type="search" name="search" placeholder="Search here" aria-label="Search content"
                    className="peer relative h-12 w-full rounded border border-slate-200 px-4 pr-12 text-slate-500 outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400" />
                    <svg xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-4 top-3 h-6 w-6 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" aria-label="Search icon"
                    role="graphics-symbol">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </div>
                <Button className="bg-primary font-rubik font-medium text-sm rounded tracking-wide hover:bg-primary-dark duration-300">Search</Button>
            </div>
            <div className="bg-base-100 shadow p-6 my-4 lg:my-0 border lg:flex-1">
                <h3 className="text-lg font-medium font-rubik text-titleBlack">Filter by Visa Type</h3>
                <div>
                <div className="flex gap-1 flex-col font-jost text-lg">
                    <Radio  name="type" label="Turist Visa" value="Turist Visa" ripple={true} />
                    <Radio name="type" label="Student visa" ripple={false} />
                    <Radio name="type" label="Official visa" ripple={false} />
                    <Radio name="type" label="Business visa" ripple={false} />
                    <Radio name="type" label="Worker visa" ripple={false} />
                </div>
                </div>
            </div>
            <div className="bg-base-100 shadow p-6 my-4 lg:my-0 border lg:flex-1">
                <h3 className="text-lg font-medium font-rubik text-titleBlack">Sort by Price </h3>
                <div className="my-4 font-rubik px-2">
                    <button className="flex items-center gap-1 p-2 border border-primary px-4 rounded bg-base-200 border-dashed font-jost">Price Low to High <LiaSortNumericDownSolid  size={18}/> </button>
                    <button className="flex items-center gap-1">Price Low to High <LiaSortNumericUpAltSolid size={18} /> </button>
                    {/* <Slider
                        defaultValue={50}
                        min={200}
                        step={500}
                        max={2700}
                        graduated
                        progress
                        className="tex-lg"
                        onChange={handleSliderChange}
                        renderMark={mark => {                        
                            return mark;
                        }}
                    /> */}
                </div>
            </div>
        </div>
    );
};

export default AsideToolBar;
