import { Button } from "@material-tailwind/react";
import { Link } from "react-router";
import Blogs from "./Blogs";
import RightBlogs from "./RightBlogs";

const RecentBlogContainer = ({blogsData}) => {
    return (
        <div className="">
            <div className="flex justify-between items-center flex-col md:flex-row">
                <div>
                    <h5 data-aos="fade-right" className="font-jost font-2xl font-normal p-2 bg-primary-light/35 w-fit text-titleBlack px-8 rounded-bl-[15px] rounded-tr-[15px]">Recent Blogs</h5>
                    <h3 data-aos="fade-right" className="text-2xl md:text-3xl xl:text-4xl font-medium my-4 font-rubik">Insights from Our Latest Articles.</h3>
                </div>
                <div data-aos="fade-left" className="p-1 border border-dashed border-primary rounded-lg w-fit h-fit mb-6 md:mb-0">
                     <Link data-aos="fade-right" className=""><Button variant="filled" className="bg-primary font-rubik font-medium text-sm tracking-wide hover:bg-primary-dark duration-300 focus:bg-primary-dark">See all Blogs</Button></Link>
                </div>
            </div>

            {/* Blogs content  */}
            <div className="grid grid-cols-1 lg:grid-cols-2 my-8 gap-8">
                <div>
                    {
                        blogsData?.slice(0, 1).map(blog =>  <Blogs key={blog.id} blog={blog}/>)
                    }
                </div>
                {/* Right Blogs  */}
                <div className="space-y-4 h-full flex flex-col justify-between mb-6">
                    {
                        blogsData?.slice(1, 3).map(blog =>  <RightBlogs key={blog.id} blog={blog}/>)
                    }
                    {/* <RightBlogs/> */}
                </div>
            </div>
            
        </div>
    );
};

export default RecentBlogContainer;