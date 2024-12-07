import React, { useEffect } from "react"
import Glide from "@glidejs/glide"
import { GoArrowLeft, GoArrowRight } from "react-icons/go"
import left from "../../assets/leftQuota.svg"
import right from "../../assets/rightQuota.svg"

const DisplayProject = ({reviewData}) =>  {
  useEffect(() => {
    const slider = new Glide(".glide-03", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 3000,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1140: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount()

    return () => {
      slider.destroy()
    }
  }, [])

  return (
    <>
      {/*<!-- Component: Carousel with indicators & controls inside --> */}
      <div className="glide-03 relative w-full xl:w-11/12 mx-auto rounded-md p-8">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            {
                reviewData?.map(review =>  
                    <div className="border min-h-[310px] bg-white/85 rounded-md border-gray-200 shadow-md p-6 flex flex-col">
                        <div className="flex items-center 6 mb-4 gap-2 justify-center">
                            <div className="rating">
                                <input type="radio" name="rating-1" disabled className="mask mask-star bg-orange-500" />
                                <input type="radio" name="rating-1" disabled className="mask mask-star bg-orange-500"  />
                                <input type="radio" name="rating-1" disabled className="mask mask-star bg-orange-500" />
                                <input type="radio" name="rating-1" disabled className="mask mask-star bg-orange-500" />
                                <input type="radio" name="rating-1" disabled className="mask mask-star bg-orange-500" defaultChecked/>
                            </div>
                            <p className="text-lg font-medium text-gray-800 mt-1 font-jost">Rating: {review.rating.toFixed(2)} / 5.00 </p>
                        </div>
                        <h4 className=" text-black/75 my-3 text-center font-rubik text-xl font-medium">{review.title}</h4>
                        <p className="font-jost text-lg font-normal text-center text-titleBlack/70 flex-1">{review.review}</p>
                        <div className="flex items-center justify-between">
                            <img src={left} alt="" className="w-16"/>
                            <div>
                                <img src={review.image} alt="" className="w-16 rounded-full h-16 mx-auto"/>
                                <p className="text-xl font-rubik font-medium text-titleBlack/75 text-center">{review.name}</p>
                            </div>
                            <img src={right} alt="" className="w-16"/>
                        </div>
                    </div>
                )
            }
          </ul>
        </div>

        {/*    <!-- Controls --> */}
        <div
          className="absolute left-0 top-1/2 flex h-0 w-full items-center justify-between px-4 "
          data-glide-el="controls"
        >
          <button
            className="inline-flex ml-5 h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-primary text-white transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <GoArrowLeft />
          </button>
          <button
            className="inline-flex h-8 w-8 mr-5 items-center justify-center rounded-full border border-slate-700 bg-primary text-white transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
             <GoArrowRight />
          </button>
        </div>
        

      </div>
      {/*<!-- End Carousel with indicators & controls inside --> */}
    </>
  )
}

export default DisplayProject;