import React from "react";
import { IconButton } from "rsuite";
import { Search, Send } from "@rsuite/icons";
import TFIM from "./../assets/tasks blue frame.png";
import TFIM1 from "./../assets/tasks image frame.png";
import TL1 from "./../assets/TL1.png";
import TL2 from "./../assets/TL2.png";
import TL3 from "./../assets/TL3.png";
import TL4 from "./../assets/TL4.png";
import TL5 from "./../assets/TL5.png";
import TL6 from "./../assets/TL6.png";
import TL7 from "./../assets/TL7.png";
import TL8 from "./../assets/TL8.png";
import TL9 from "./../assets/TL9.png";
import TL10 from "./../assets/TL10.png";
import TL11 from "./../assets/TL11.png";
import TL12 from "./../assets/TL12.png";

function Tasks() {
  const data = [
    {
      id: "Create Account",
      img: TL1,
      h: "",
      d: "Complete your profile and then get started for modernvate ",
    },
    {
      id: "Get Yourself Verified",
      img: TL2,
      h: "",
      d: " Once you get any brilliant idea document it and upload it in ideas section",
    },
    {
      id: "Update Profile",
      img: TL3,
      h: "",
      d: "Complete your profile and then get started for modernvate",
    },
    {
      id: "Upload Idea",
      img: TL4,
      h: "",
      d: "Once you get any brilliant idea document it and upload it in ideas section",
    },
    {
      id: "Verify your Idea",
      img: TL5,
      h: "",
      d: "Try and get your idea verified.",
    },
    {
      id: "Enroll for a session",
      img: TL6,
      h: "",
      d: "Enroll yourself in a Session to learn more",
    },
    {
      id: "Check Your Maturity level",
      img: TL7,
      h: "",
      d: "Perform Maturity test and Get your Score",
    },
    {
      id: "Check posts",
      img: TL8,
      h: "",
      d: "check posts of verified users",
    },
    {
      id: "Use TOdo List",
      img: TL9,
      h: "",
      d: "Add task to your list and complete it.",
    },
    {
      id: "Current Projects",
      img: TL10,
      h: "",
      d: "Check the current projects of modernvate",
    },
    {
      id: "Complete Sessions",
      img: TL11,
      h: "",
      d: "Complete sessions to gain knowledge about the respective session",
    },
    {
      id: "FAQs",
      img: TL12,
      h: "",
      d: "Search for quesions and get the answers accordingly",
    },
  ];
  return (
    <div className="    ">
      <div className="flow-root flex-col items-end xl:justify-center pt-2 xl:pt-8 xl:mx-3">
        <div className="overflow-y-scroll no-scrollbar xl:no-scrollbar h-[34rem]  items-center mt-[4rem] xl:float-center xl:flex xl:flex-col xl:items-center bg-white/30 rounded-[2rem]  xl:h-[40rem] lg:h-[40rem]  md:h-[36rem] xl:rounded-[5rem] border-1 border-offwhite shadow-lg md:mx-8 md:mt-4 ">
          <div className="wrap w-[10rem] sm:w-[] xl:wrap lg:w-[80rem] md:w-[72rem] xl:w-[76rem]   ">
            <div className="md:grid md:grid-cols-2  xl:grid-cols-16 xl:grid">
              <div
                className="row-span-full col-start-2 h-[8rem] w-[19rem] col-end-8 self-center  text-[#EF4A37] text-right  bg-gradient-to-tr to-blue-500 via-[#7CD4FD] from-[#0589c7] rounded-[2rem]

                xl:row-span-full xl:col-start-3 xl:h-[20rem] xl:w-[72rem] xl:mx-2 xl:col-end-12 xl:self-center  xl:text-right xl:rounded-[4rem]

              md:row-span-full md:col-start-2 md:h-[10rem] md:w-[36rem] md:mx-12 md:col-end-8 md:ml-[-32rem]   md:text-right md:rounded-[2rem]

              lg:row-span-full lg:col-start-2 lg:h-[14rem] lg:w-[52rem] lg:mx-12 lg:col-end-8 lg:ml-[-36rem]   lg:text-right lg:rounded-[2rem]
              "
              >
                <h1 className="mt-[1rem] mr-[3rem] text-[0.6rem] xl:mt-[2rem] xl:text-3xl font-bold poppins md:mt-[-1rem]  pt-10 md:text-[1rem] md:font-bold lg:text-2xl">
                  Do not pray for tasks equal to your <br /> powers. Pray for
                  powers equal to your tasks
                </h1>
                <h1 className="mt-1 xl:mt-[4rem] xl:text-2xl text-[0.6rem] text-[#8794ac] font-poppins mr-[1rem] md:text-sm lg:text-2xl lg:mt-[2rem]">
                  Complete Tasks and Earn badges & Win
                  <br />
                  Exciting Prizes
                </h1>
              </div>
              <div className="row-span-full w-[8rem] xl:w-[80rem] xl:h-[20rem] md:w-[80rem]  h-[20rem] col-span-11 col-end-8 xl:col-span-9 xl:col-end-9 self-center p-4">
                <img
                  src={TFIM1}
                  className="w-[8rem] md:w-[12rem] ml-[-1rem] md:mt-20 mt-[-8rem] lg:mt-[4rem] lg:w-[16rem] xl:mt-[-0.3rem] xl:ml-[8rem] xl:w-[20rem] "
                  alt="Task-imgage"
                />
              </div>
            </div>

            <div
              className="grid grid-cols-1 place-items-center sm:grid-cols-2 text-center gap-4 mt-[-17rem] mx-[10rem]
            md:grid md:grid-cols-2 md:place-items-center  md:text-center  md:mt-[-2rem] md:ml-[2rem] md:mr-[32rem] md:mx-[10rem] lg:mt-[-2rem] lg:ml-[8rem] lg:mr-[28rem] lg:mx-[2rem]
            xl:grid  xl:place-items-center xl:grid-cols-2 xl:gap-x-[26rem] xl:gap-y-[4rem]  xl:mt-6"
            >
              {data.map((item) => (
                <div
                  className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  bg-[#99B0E1]/40 border-2 border-offwhite shadow-lg
                   flex w-[17rem] h-[6rem]  lg:w-[20rem] rounded-[2rem]
                   xl:w-[32rem] xl:h-[12rem] xl:rounded-[5rem] xl:mr-[-24rem] "
                >
                  <div className="flex-none w-48 relative">
                    <img
                      src={item.img}
                      className="float-left align-left w-[4rem] mt-2 ml-2 xl:w-[6rem] xl:mt-7 xl:ml-8 xl:mt-1"
                      alt="TL1"
                    />
                  </div>
                  <form className="float-center text-start ml-[-7rem] xl:ml-[-4rem] mt-1 ">
                    <div className="items-center flex flex-wrap">
                      <h1 className="flex text-[1rem] font-bold poppins xl:text-[2rem] mt-1 text-[#667A9B]">
                        {item.id}
                      </h1>
                    </div>
                    <div className="flex-center place-items-left flex-wrap">
                      <h1 className="float-left xl:text-[1.5rem] text-[0.7rem] pl-[-2rem]  font-poppins mt-1   text-[#667A9B]">
                        {item.d}
                      </h1>
                    </div>
                  </form>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tasks;
