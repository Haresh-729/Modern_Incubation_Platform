import React from "react";

function CreateProject() {
  return (
    <div className=" flex justify-center  w-screen h-screen">
      <div className="mx-[1rem] xl:my-[4rem]  xl:flex xl:flex-wrap my-[4rem] bg-slate-100 border-b-8 border-r-8 border-gray-300  transperant-4 md:w-4/5 lg:w-4/5 xl:mt-14 mb-14 mt-14  xl:mx-10 h-fit xl:w-4/5 rounded-[2rem] xl:rounded-[4rem]   items-center justify-center">
        <h1 className="mt-4 text-xl  md:text-3xl lg:text-3xl  xl:text-5xl xl:font-bold text-[#EF4A37] xl:py-10  text-center">
          Initiate a Project
        </h1>
        <div className=" flex flex-row justify-center items-center md:flex md:flex-row lg:flex lg:flex-row xl:flex xl:flex-row  xl:mx-[8rem] my-[3rem] mx-[1rem]">
          <div className="text-xs gap-[4rem] flex flex-col xl:flex xl:flex-col xl:text-2xl xl:gap-[11rem] xl:mr-4 xl:font-semibold  lg:flex lg:flex-col lg:text-2xl lg:gap-[7rem] lg:mr-4 lg:font-semibold  md:mt-8 md:flex md:flex-col md:text-lg md:gap-[7rem] md:mr-4 md:font-semibold">
            <h1>Project Title:</h1>
            <h1>Team Members:</h1>
            <h1>Held By:</h1>
            <h1>Description:</h1>
          </div>
          <div className=" xl:flex xl:gap-10 xl:mt-[-1rem] xl:flex-col lg:flex lg:gap-10 lg:mt-[1rem] lg:flex-col md:flex md:gap-10  md:flex-col ">
            <input
              type="text"
              name=""
              id=""
              className="w-full rounded-[1rem] xl:w-[40rem] mt-8 mb-16 xl:h-[4rem] xl:rounded-[2rem] "
            />

            <input
              type="text"
              name=""
              id=""
              className="w-full h-[2rem] rounded-[1rem] xl:w-[40rem] mb-16 xl:h-[9rem] xl:rounded-[2rem] "
            />

            <input
              type="text"
              name=""
              id=""
              className="w-full h-[2rem] rounded-[1rem] xl:w-[40rem] mb-14   xl:h-[4rem] xl:rounded-[2rem]"
            />

            <input
              type="text"
              name=""
              id=""
              className="w-full h-[2rem] rounded-[1rem] xl:w-[40rem] ml-1 xl:h-[7rem]
              xl:rounded-[2rem]"
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="items-center mb-[2rem] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 flex rounded-3xl xl:rounded-[5rem]  border-4 border-[blue] 
        font-bold text-lg p-2 w-[6rem] h-[3rem] justify-center text-center text-blue bg-white hover:bg-indigo-200 lg:mx-[24rem]  md:mx-[16rem]  xl:w-[14rem] xl:mx-[28rem] xl:mt-12 sm:mt-2 sm:mx-[12rem] "
          >
            {" "}
            CREATE{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateProject;
