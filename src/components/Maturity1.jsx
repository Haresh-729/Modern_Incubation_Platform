import React from "react";
import questions from './QuizData'
import { useNavigate } from "react-router-dom";

function Maturity1(props) {
  const navigate = useNavigate();
  const handleRoute = () => {

    navigate("/quiz");
  };
  return (
    <div data-aos="fade-right" className=" select-none flex flex-wrap flex-col  md:flex md:flex-wrap lg:flex lg:flex-wrap  pt-[5rem] xl:mr-4 xl:flex xl:flex-wrap  ">
    <div className="flex justify-center items-center w-full">
    <div className="text-center xl:text-3xl sm:text-xl  md:mt-[-4rem]  font-bold text-lg text-[#EF4A37] md:text-center md:mx-14 lg:text-3xl   md:text-2xl xl:py-2 ">
      “Self knowledge is the first step to Maturity”
      <h1 className="lg:text-center font-medium xl:text-2xl text-[grey] text-base    mt-4 md:mt-2">
        This Test will help you find your Maturity related to various fields.
      </h1>
    </div>
    </div>
    <div className="xl:flex xl:flex-row xl:gap:[-5rem] md:flex md:flex-row sm:flex sm:flex-row w-full">
      <div className="md:flex md:px-0 md:pt-[14rem] flex flex-col justify-center items-center md:justify-start  md:items-start  lg:pt-1 lg:mx-2  mx-6 lg:ml-[2rem] md:flex-wrap lg:w-[64rem]  ">
        <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 flex rounded-3xl xl:mt-8 lg:w-[32rem]  sm:w-[18rem] sm:h-[10rem] md:w-[24rem] w-[17rem] lg:h-[8rem] md:mt-[-11rem] lg:mt-12  h-[11rem] xl:w-[38rem] xl:h-[10rem] mt-8 bg-indigo-200 md:h-[8rem] ">
          <p className="font-medium md:text-lg xl:text-2xl text-base text-[#7587A4] ml-4 px-2">
            <p className="font-bold md:py-1 xl:py-2 md:text-xl text-lg text-[#EF4A37] lg:py-0 xl:text-2xl py-1 ">
              1.CODING
            </p>
            This Test will help you find your coding skills which shows how
            much are you known to programimg languages..
          </p>
        </div>

        <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 flex rounded-3xl xl:w-[44rem] xl:h-[10rem]  md:w-[27rem] w-[17rem]  h-[11rem] lg:h-[8rem] sm:w-[20rem] sm:h-[10rem] md:h-[10rem] lg:w-[40rem] mt-6 md:mt-[1.3rem]  bg-indigo-400 lg:mt-6 ">
          <div className="font-medium xl:text-2xl md:text-xl  text-base px-2 text-[#D9E4FA] mx-4 md:mt-4">
            <h1 className="font-bold  xl:text-2xl xl:py-2 md:text-xl text-lg py-2 text-[#EF4A37] lg:py-0">
              2.PROFESSIONAL SKILLS
            </h1>
            This Test will help you find your Professional skills which will
            help you to know how professional you are..
          </div>
        </div>
        <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 flex rounded-3xl xl:w-[52rem] xl:h-[10rem] md:w-[30rem] mt-6 md:mt-6 w-[17rem]  h-[12rem] sm:w-[22rem] sm:h-[10rem] md:h-[10rem] lg:w-[44rem] lg:h-[8rem] bg-indigo-500 ">
          <p className="font-medium xl:text-2xl md:text-xl text-base px-2s  text-[#D9E4FA] mx-4 mt-4">
            <h1 className="font-bold xl:text-2xl  md:text-xl  text-lg lg:py-0 xl:py-2 text-[#EF4A37]">
              3.INCUBATION
            </h1>
            This Test will help you find your Incubation knowledge that is How
            a team is and such various questions based ..
          </p>
        </div>
      </div>
     <div className="flex justify-center items-center    ">
      <img
        src="https://i.ibb.co/8zJ32St/Pie-chart.png"
        className=" ml-[-1.5rem] w-[16rem] mt-8   md:w-[16rem]  md:h-[16rem] md:mx-0  md:mr-[2.5rem]  sm:ml-[-4rem] xl:w-[32rem]  sm:w-[24rem] sm:mt-[4rem] lg:w-[20rem] lg:h-[20rem] "
        alt="Pie-imag"
      />
      </div>
    </div>
   <div className="flex  justify-center items-center w-full">
    <button
      onClick={handleRoute}
      className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 flex rounded-[5rem] my-8 border-4 border-[blue]
      font-bold text-xl lg:text-3xl px-3 justify-center text-center text-blue bg-white hover:bg-indigo-200    lg:mt-14  "
    >
      Start Test
    </button>
    </div>
  </div>
  );
}

export default Maturity1;
