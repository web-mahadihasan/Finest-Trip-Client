import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";

const Banner = () => {
  useEffect(() => {
    const slider = new Glide(".glide-04", {
      type: "carousel",
      focusAt: "center",
      perView: 1,
      // autoplay: 4000,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 1,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      {/*<!-- Component: Carousel with controls outside --> */}
      <div className="glide-04 relative w-full -z-0">
        {/*    <!-- Slides --> */}
        <div
          className="overflow-hidden container mx-auto rounded-xl mt-6"
          data-glide-el="track"
        >
          <ul className="w-full whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            

            <li className="border bg-gray-100 min-h-[600px] w-full">
              <Slide1/>
            </li>

            <li className="border bg-gray-100 min-h-[600px] w-full">
              <Slide2/>
            </li>

            <li className="border bg-gray-100 min-h-[600px] w-full">
              <Slide3/>
            </li>
            
          </ul>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="flex w-full items-center justify-center gap-2 p-4"
          data-glide-el="controls"
        >
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            title="Left Image"
            aria-label="prev slide"
          >
            <GoArrowLeft />
          </button>
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            title="Right Image"
            aria-label="next slide"
          >
            <GoArrowRight />
          </button>
        </div>
      </div>
      {/*<!-- End Carousel with controls outside --> */}
    </>
  );
};

export default Banner;