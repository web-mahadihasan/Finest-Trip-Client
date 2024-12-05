import { TbArrowNarrowRightDashed } from "react-icons/tb";

const PageBanner = ({bgImg, title, path}) => {

    // const app = "https://i.ibb.co.com/RPbNqx9/Section-4.png"
    return (
        <div className="hero h-[400px] bg-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${ bgImg})`,}}>
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-white text-center">
                <div className="">
                <h1 className="mb-5 text-3xl md:text-4xl xl:text-5xl font-bold">{title}</h1>
                <p className="flex items-center justify-center gap-2 text-xl font-rubik text-primary">Home <TbArrowNarrowRightDashed size={24} className="text-white"/> <span className="text-white">{path}</span></p>
                </div>
            </div>
        </div>
    );
};

export default PageBanner;