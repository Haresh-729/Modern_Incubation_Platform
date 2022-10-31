import React from "react";

function Maturity1() {
  return (
    <div className="bg-cover flex flex-wrap md:flex md:flex-wrap lg:flex lg:flex-wrap md:justify-center   md:w-screen md:min-h-screen lg:w-screen xl:flex xl:flex-wrap lg:min-h-screen lg:flex lg:flex-wrap  w-screen min-h-screen">
      <div className="text-center xl:text-4xl lg:text-center lg:flex lg:flex-wrap font-bold text-xl text-[#EF4A37] md:text-center md:mx-14 lg:text-3xl lg:w-[90rem] xl:mx-[26rem] lg:mx-[12rem] md:text-2xl xl:py-2 ">
        “Self knowledge is the first step to Maturity”
      </div>

      <div
        className=" text:center mx-4 md:text-left font-medium text-xl text-[grey] mt-4 md:justify-center md:w-[28rem] xl:text-3xl xl:w-[38rem]  md:ml-4 lg:flex lg:flex-wrap lg:mx-0
       md:flex md:flex-wrap lg:ml-[-27rem]  lg:mt-[5rem] md:text-xl left-0 xl:ml-[-12rem]  xl:w-[56rem] xl:text-center "
      >
        This Test will help you find your Maturity related to various fields.
      </div>

      <div className="float-right lg:absolute lg:inset  right-0 md:mt-6 lg:mx-4  lg:flex lg:flex-wrap  lg:flex-col   ">
        <img
          src="https://i.ibb.co/8zJ32St/Pie-chart.png"
          className="md:w-[17rem] w-[16rem] mt-6 lg:mt-0 mx-10 md:mx-2 xl:w-[48rem] xl:mt-[12rem] lg:mt-[4rem] lg:w-[24rem]"
          alt="Pie-imag"
        />
      </div>
      <div className="md:flex lg:ml-[4rem] xl:ml-[-70rem] md:flex-wrap lg:w-[64rem]  ">
        <div className="flex rounded-3xl xl:mt-44 lg:w-[32rem] md:w-[28rem] w-[20rem] lg:h-[8rem] md:mt-[-11rem] lg:mt-12  h-[12rem] xl:w-[38rem] xl:h-[10rem] mt-8 bg-indigo-200 md:h-[8rem] ">
          <p className="font-medium md:text-xl xl:text-2xl text-lg text-[#7587A4] ml-4">
            <p className="font-bold md:py-1 xl:py-2 md:text-xl text-xl text-[#EF4A37] lg:py-0 xl:text-2xl ">
              1.CODING
            </p>
            This Test will help you find your coding skills which shows how much
            are you known to programimg languages..
          </p>
        </div>

        <div className="flex rounded-3xl xl:w-[44rem] xl:h-[10rem]  md:w-[36rem] w-[20rem]  h-[12rem] lg:h-[8rem]  md:h-[8rem] lg:w-[40rem] mt-12 md:mt-[-1rem]  bg-indigo-400 lg:mt-6 ">
          <div className="font-medium xl:text-2xl md:text-xl  text-lg text-[#D9E4FA] mx-4 mt-4">
            <h1 className="font-bold md:py-1 xl:text-2xl xl:py-2 md:text-xl text-xl text-[#EF4A37] lg:py-0">
              2.PROFESSIONAL SKILLS
            </h1>
            This Test will help you find your Professional skills which will
            help you to know how professional you are..
          </div>
        </div>
        <div className="flex rounded-3xl xl:w-[52rem] xl:h-[10rem] md:w-[42rem] w-[20rem] mt-10 md:mt-6 h-[12rem] md:h-[8rem] lg:w-[48rem] lg:h-[8rem] bg-indigo-500 ">
          <p className="font-medium xl:text-2xl md:text-xl text-lg text-[#D9E4FA] mx-4 mt-4">
            <h1 className="font-bold xl:text-2xl md:py-1 md:text-xl  text-xl lg:py-0 xl:py-2 text-[#EF4A37]">
              3.INCUBATION
            </h1>
            This Test will help you find your Incubation knowledge that is How a
            team is and such various questions based ..
          </p>
        </div>
      </div>

      <div className="rounded-[40rem]  flex flex-wrap mx-20">
        <button
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 flex rounded-[5rem] mt-14 border-4 border-[blue] 
        font-bold text-2xl  w-[10rem] h-[3rem] justify-center text-center text-blue bg-white hover:bg-indigo-200 lg:mx-[24rem]  md:mx-[16rem]  xl:w-[14rem] xl:mx-[36rem] xl:mt-24  "
        >
          {" "}
          START TEST{" "}
        </button>
      </div>
    </div>
  );
}

export default Maturity1;
