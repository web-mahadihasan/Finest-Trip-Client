import { BsArrowRight } from "react-icons/bs";
import { LuCircleUser } from "react-icons/lu";
import { MdArrowRightAlt } from "react-icons/md";
import { PiCalendarDotsLight } from "react-icons/pi";
import { Link } from "react-router";

const Blogs = ({blog}) => {
    const {posted_date, post_by, title, body, image} = blog || {}
    return (
        <div>
            <div className="card card-compact bg-base-100 w-full border shadow">
                <figure>
                    <img
                    src={image}
                    alt={"Image for" + title} className="h-[280px] w-full" />
                </figure>
                <div className="p-5 space-y-3">
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
                    <p className="font-jost text-titleBlack/70 text-lg line-clamp-3">{body}</p>
                    <Link className="flex items-center gap-1 font-rubik font-sm font-medium text-primary hover:text-primary-dark duration-300">
                        <span>Read More</span>
                        <span><BsArrowRight size={18} /></span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Blogs;