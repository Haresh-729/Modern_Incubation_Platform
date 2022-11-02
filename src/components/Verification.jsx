import React from "react";
import veriimg from "./../assets/veri1.png"
import { IconButton } from "rsuite";
import { ArrowRightLine } from "@rsuite/icons";



function Verification() {
    return (
        <div className= "rounded-xl">
    <div className="flex justify-center font-serif  text-red-600 font-extrabold text-lg md:text-xl lg:text-2xl xl:text-3xl mt-[3rem] pt-3  md:mt-[1rem]">
        Verification Steps
    </div>
    
    <div
        // data-aos="slide-up"
        className=" mx-4 sm:mx-16"
    >
        <div className="flex flex-col items-center justify-center my-5">
            <img
                className=" lg:mx-8 lg:pt-4 lg:pl-4 pt-2 w-[18rem] sm:w-[27rem] lg:w-[50rem] md:w-[28rem] xl:w-[75rem] "
                src={veriimg}
                alt="verification steps"
            ></img>
            {/* <div className="mt-4 text-sm text-[#013BBA] lg:grid lg:grid-cols-4 lg:mb-8 lg:place-items-center text-center lg:gap-8 lg:text-xl sm:pb-2 sm:gap-6 sm:text-base md:gap-6 gap-2 md:mx-14  md:text-lg  grid-cols-4 text-[0.6rem] font-bold flex">
                <div className="lg:mr-12">Create your Account <span ><ArrowRightLine/></span></div>
                <div className="lg:mr-5">Pass Maturity Test   <span><ArrowRightLine/></span></div>
                <div>Upload Required Documents   <span><ArrowRightLine/></span></div>
                <div>Get Verified  </div>
            </div> */}
        </div>
    </div>

    <div>
        {/* <img src={cloud} alt="c" className=" w-[15rem] mt-[5rem] absolute"></img> */}


        <div className="flex items-center justify-center lg:justify-evenly mx-2 border-2 border-offwhite lg: rounded-xl md:rounded-[2rem] pl-4 lg:pl-8 py-4 bg-cover bg-[url('https://i.ibb.co/CsYYDV0/image.png')]">
            <div>
                <h1 className="text-[#EF4A37] font-serif text-lg sm:text-2xl lg:text-4xl lg:font-extrabold sm:tracking-wide font-bold drop-shadow-xl">
                Once You get Verified... You Can
                </h1>
                <div className="my-5 text-xs sm:text-sm lg:text-xl sm:w-full text-white text-extrabold flex flex-col sm:grid sm:grid-cols-3 sm:gap-4
         gap-2">
                    <h1 className="bg-[#C5D4F2] bg-opacity-50 font-extrabold rounded-[1rem] sm:text-center  px-2 py-1 sm:py-2">
                        Upload Ideas
                    </h1>
                    <h1 className="bg-[#C5D4F2] bg-opacity-50 font-extrabold rounded-[1rem] sm:text-center sm:col-span-2 px-2 py-1 sm:py-2">
                        Collaborate With Others
                    </h1>
                    <h1 className="bg-[#C5D4F2] bg-opacity-50 font-extrabold rounded-[1rem] sm:text-center sm:col-span-2 px-2 py-1 sm:py-2">
                        Enjoy Full Access
                    </h1>
                    <h1 className="bg-[#C5D4F2] bg-opacity-50 font-extrabold rounded-[1rem] sm:text-center  px-2 py-1 sm:py-2">
                        Like and Comment
                    </h1>
                </div>
                <h1 className="text-white font-extrabold text-right text-xs sm:text-sm lg:text-xl ">
                    .....And Many More
                </h1>
            </div>
            <img src="https://i.ibb.co/Bfhx654/image.png" alt="girl thinking" className="text-right mr-4 h-[9rem] sm:h-[12rem] md:h-[14rem] lg:h-[18rem] "></img>
        </div>
    </div>
</div>

    )
}

export default Verification;