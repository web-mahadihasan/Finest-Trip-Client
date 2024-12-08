import { Button, Radio } from "@material-tailwind/react";
import { useState } from "react";
import {  LiaSortNumericDownSolid, LiaSortNumericUpAltSolid } from "react-icons/lia";
import { useLocation } from "react-router";


const AsideToolBar = ({handleSearch, handleVisaTypeFilter, handleSortByPrice}) => {
    const [searchText, setSearchText] = useState("")
    const {pathname} = useLocation()
    const handleFilter = (e) => {
        const query = e.target.value
        handleVisaTypeFilter(query);
    }
    // lg:grid grid-cols-2 gap-3 xl:grid-cols-1 
    // lg:col-span-2 xl:col-span-1
    return (
        <div className={`w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${pathname ===  "/all-visa" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-16" : "xl:my-0 xl:grid-cols-1"}`}>
            <div className="border bg-base-100 shadow p-6 rounded w-full">
                <h3 className="text-lg font-medium font-rubik text-titleBlack">Search by Country name</h3>
                <div className="relative my-2">
                    <input onChange={(e) =>  setSearchText(e.target.value)}
                    id="search" type="search" name="search" placeholder="Search here" aria-label="Search content"
                    className="peer relative h-12 w-full rounded border border-slate-200 px-4 pr-12 text-slate-500 outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400" />
                    <svg xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-4 top-3 h-6 w-6 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" aria-label="Search icon"
                    role="graphics-symbol">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </div>
                <Button onClick={() => {handleSearch(searchText)}} className="bg-primary font-rubik font-medium text-sm rounded tracking-wide hover:bg-primary-dark duration-300">Search</Button>
            </div>
            <div className="bg-base-100 shadow p-6 lg:my-0 border lg:flex-1">
                <h3 className="text-lg font-medium font-rubik text-titleBlack">Filter by Visa Type</h3>
                <div>
                <div className={`font-jost text-lg ${pathname ===  "/all-visa"? "flex flex-wrap": "flex gap-1 flex-wrap xl:flex-col xl:flex-nowrap"}`}>
                    <Radio onClick={handleFilter} name="type" label="All Visa" value="All Visa" ripple={true} />
                    <Radio onClick={handleFilter} name="type" label="Tourist visa" value="Tourist visa" ripple={true} />
                    <Radio onClick={handleFilter} name="type" label="Student visa" value="Student visa" ripple={false} />
                    <Radio onClick={handleFilter} name="type" label="Official visa" value="Official visa" ripple={false} />
                    <Radio onClick={handleFilter} name="type" label="Business visa" value="Business visa" ripple={false} />
                    <Radio onClick={handleFilter} name="type" label="Worker visa" value="Worker visa" ripple={false} />
                    <Radio onClick={handleFilter} name="type" label="Visitor visa" value="Visitor visa" ripple={false} />
                </div>
                </div>
            </div>
            <div className="bg-base-100 shadow p-6 my-4 lg:my-0 border lg:flex-1">
                <h3 className="text-lg font-medium font-rubik text-titleBlack">Sort by Price </h3>
                <div className="my-4 font-rubik px-2">
                    <button onClick={() => handleSortByPrice("accending")} className="flex items-center gap-1 p-2 border border-primary px-4 rounded bg-base-200 border-dashed font-jost">Price Low to High <LiaSortNumericDownSolid  size={18}/> </button>
                    <button onClick={() => handleSortByPrice("descending")} className="flex items-center gap-1 p-2 border border-primary px-4 rounded bg-base-200 border-dashed font-jost mt-2">Price Low to High <LiaSortNumericUpAltSolid size={18} /> </button>
                </div>
            </div>
        </div>
    );
};

export default AsideToolBar;
