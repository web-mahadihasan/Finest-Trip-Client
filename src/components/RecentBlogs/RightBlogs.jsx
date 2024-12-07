import { BsArrowRight } from "react-icons/bs";
import { LuCircleUser } from "react-icons/lu";
import { MdArrowRightAlt } from "react-icons/md";
import { PiCalendarDotsLight } from "react-icons/pi";
import { Link } from "react-router";

const RightBlogs = ({blog}) => {
    const {posted_date, post_by, title, body, image} = blog || {}
    return (
        <div className="">
            <div className="card-compact rounded-xl grid grid-cols-3 bg-base-100 w-full border">
                <figure className="col-span-1">
                    <img
                    src={image}
                    alt={"Image for" + title} className="w-full h-full rounded-l-lg"/>
                </figure>
                <div className="card-body col-span-2">
                    <div className="flex items-center justify-between">
                        <p className="flex items-center font-jost text-base gap-1 text-titleBlack/70">
                            <span><PiCalendarDotsLight size={20} className="text-primary"/></span>
                            <span>{posted_date}</span>
                        </p>
                        <p className="flex items-center font-jost text-base gap-1 text-titleBlack/70">
                            <span><LuCircleUser size={20} className="text-primary"/></span>
                            <span>By {post_by}</span>
                        </p>
                    </div>
                    <h2 className="card-title text-2xl font-rubik text-titleBlack">{title}</h2>
                    <p className="font-jost text-titleBlack/70 text-lg line-clamp-2">{body}</p>
                    <Link className="flex items-center gap-1 font-rubik font-sm font-medium text-primary hover:text-primary-dark duration-300">
                        <span>Read More</span>
                        <span><BsArrowRight size={18} /></span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RightBlogs;