import React from "react";
import questions from './QuizData'
import { useNavigate } from "react-router-dom";

function Maturity1(props) {
  const navigate = useNavigate();
  const handleRoute = () => {

    navigate("/quiz");
  };
  return (
        <div className=" flex flex-wrap md:flex md:flex-wrap lg:flex lg:flex-wrap  pt-[6rem] xl:mr-4 xl:flex xl:flex-wrap  ">
      <div className="text-center xl:text-4xl lg:text-center  md:mt-[-4rem] lg:flex lg:flex-wrap font-bold text-xl text-[#EF4A37] md:text-center md:mx-14 lg:text-3xl   lg:mx-[12rem] md:text-2xl xl:py-2 ">
        “Self knowledge is the first step to Maturity”
        <h1 className="lg:text:center font-medium xl:text-3xl text-[grey]  xl:mx-4 xl:ml-[-2rem] xl:mt-10 mt-10">
          This Test will help you find your Maturity related to various fields.
        </h1>
      </div>
      <div className="xl:flex xl:flex-row xl:gap:[-5rem] md:flex md:flex-row sm:flex sm:flex-row ">
        <div className="md:flex md:px-0s md:pt-[14rem]  lg:pt-[2rem] lg:mx-2  mx-6 lg:ml-[2rem] md:flex-wrap lg:w-[64rem]  ">
          <div className="flex rounded-3xl xl:mt-20 lg:w-[32rem]  sm:w-[18rem] sm:h-[10rem] md:w-[24rem] w-[17rem] lg:h-[8rem] md:mt-[-11rem] lg:mt-12  h-[11rem] xl:w-[38rem] xl:h-[10rem] mt-8 bg-indigo-200 md:h-[8rem] ">
            <p className="font-medium md:text-lg xl:text-2xl text-lg text-[#7587A4] ml-4">
              <p className="font-bold md:py-1 xl:py-2 md:text-xl text-xl text-[#EF4A37] lg:py-0 xl:text-2xl ">
                1.CODING
              </p>
              This Test will help you find your coding skills which shows how
              much are you known to programimg languages..
            </p>
          </div>

          <div className="flex rounded-3xl xl:w-[44rem] xl:h-[10rem]  md:w-[27rem] w-[17rem]  h-[11rem] lg:h-[8rem] sm:w-[20rem] sm:h-[10rem] md:h-[10rem] lg:w-[40rem] mt-12 md:mt-[-1rem]  bg-indigo-400 lg:mt-6 ">
            <div className="font-medium xl:text-2xl md:text-xl  text-lg text-[#D9E4FA] mx-4 mt-4">
              <h1 className="font-bold  xl:text-2xl xl:py-2 md:text-xl text-xl text-[#EF4A37] lg:py-0">
                2.PROFESSIONAL SKILLS
              </h1>
              This Test will help you find your Professional skills which will
              help you to know how professional you are..
            </div>
          </div>
          <div className="flex rounded-3xl xl:w-[52rem] xl:h-[10rem] md:w-[30rem] mt-10 md:mt-6 w-[17rem]  h-[12rem] sm:w-[22rem] sm:h-[10rem] md:h-[10rem] lg:w-[44rem] lg:h-[8rem] bg-indigo-500 ">
            <p className="font-medium xl:text-2xl md:text-xl text-lg text-[#D9E4FA] mx-4 mt-4">
              <h1 className="font-bold xl:text-2xl  md:text-xl  text-xl lg:py-0 xl:py-2 text-[#EF4A37]">
                3.INCUBATION
              </h1>
              This Test will help you find your Incubation knowledge that is How
              a team is and such various questions based ..
            </p>
          </div>
        </div>

        <img
          src="https://i.ibb.co/8zJ32St/Pie-chart.png"
          className=" w-[16rem] mt-8 mx-8  md:w-[16rem]  md:h-[16rem] md:mx-0 md:ml-[-16rem] md:mr-[4rem] lg:ml-[-24rem] sm:ml-[-4rem] xl:w-[32rem]  sm:w-[24rem] sm:mt-[4rem] lg:w-[20rem] lg:h-[20rem] "
          alt="Pie-imag"
        />
      </div>

      <button
        onClick={handleRoute}
        className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 flex rounded-[5rem] mt-14 border-4 border-[blue]
        font-bold text-2xl sm:mx-[10rem]  w-[10rem] h-[3rem] justify-center text-center text-blue bg-white hover:bg-indigo-200 lg:mx-[24rem]  md:mx-[16rem] mx-18 xl:w-[14rem] xl:mx-[36rem] xl:mt-24  "
      >
        Start Test
      </button>
    </div>
  );
}

export default Maturity1;
