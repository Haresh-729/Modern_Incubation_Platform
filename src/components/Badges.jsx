import React from "react";
import sheild from "./../assets/shield.jpg";
import Bird from "./../assets/bird.jpg";
import Fighter from "./../assets/fighter.jpg";
import Friendly from "./../assets/friendly.jpg";
import top from "./../assets/top.png";

const Badges = () => {
  const dataB1 = [
    {
      Bname: "Shield",
      img: "https://i.ibb.co/xYNFDJv/Shield-logo.png",
      description: "Badge For Completing Verification",
      t: true,
    },
    {
      Bname: "Free Bird",
      img: "https://i.ibb.co/crFgY9m/Bird-Badge.png",
      description: "Badge For Uploading Your First Idea",
    },
  ];

  const dataB2 = [
    {
      Bname: "Top Scrorer",
      img: top,
      description: "Upload 5 Ideas",
    },
    {
      Bname: "Friendly",
      img: "https://i.ibb.co/7gGhZVP/friendly.png",
      description: "FCollaborate Once",
    },
    {
      Bname: "Fighter",
      img: "https://i.ibb.co/F0YysYC/fighter.png",
      description: "Start One Project",
    },
  ];

  return (
    <div data-aos="fade-right" className="select-none flex flex-col gap-3 lg:gap-5 mx-3">
      <div className="text-[0.8rem] sm:text-[1rem] lg:text-[1.8rem] md:text-[1.2rem] p-2  md:py-6 sm:p-4 rounded-[1.4rem] text-[#667A9B] bg-[#99B0E1] bg-opacity-60 mt-[4rem] md:mt-[1rem]">
        <h1 className="font-extrabold pl-2">Hi Asmi!</h1>
        <h1 className="font-extrabold pl-2 mb-4">
          Congratulations for your recently earned badges
        </h1>
        <div className="flex flex-wrap pl-2 md:pt-4 gap-5">
          {dataB1.map((item) => (
            <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 m-1 w-[5rem]  sm:w-[11rem] lg:w-[15rem] lg:mr-2 ">
              <artical className="flex flex-col text-[0.6rem]  sm:text-[0.8rem] lg:text-[1rem] items-center justify-center gap-1 py-2 text-[#667A9B] bg-[#99B0E1] bg-opacity-60 rounded-[1.3rem] shadow-xl">
                <img
                  src={item.img}
                  alt="a"
                  className="w-[3rem] sm:w-[3.5rem] lg:w-[5rem]"
                ></img>
                <h1 className=" font-extrabold text-center ">{item.Bname}</h1>
                <h1 className=" sm:font-semibold text-center">
                  {item.description}
                </h1>
              </artical>
            </div>
          ))}
        </div>
      </div>

      <div className="text-[0.8rem] sm:text-[1rem] md:text-[1.2rem] lg:text-[1.8rem] p-2  md:py-6 sm:p-4 rounded-[1.4rem] text-[#667A9B] bg-[#99B0E1] bg-opacity-60">
        <h1 className="font-extrabold pl-2 mb-4">Your Next Target</h1>
        <div className="gap-5 flex flex-wrap pl-2 md:pt-4">
          {dataB2.map((item) => (
            <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 m-1 w-[5rem]  sm:w-[11rem] lg:w-[15rem] lg:mr-2 ">
              <artical className="flex flex-col text-[0.6rem]  sm:text-[0.8rem] lg:text-[1rem] items-center justify-center gap-1 py-2 text-[#667A9B] bg-[#99B0E1] bg-opacity-60 rounded-[1.3rem] shadow-xl">
                <img
                  src={item.img}
                  alt="a"
                  className="w-[3rem] sm:w-[3.5rem] lg:w-[5rem]"
                ></img>
                <h1 className=" font-extrabold text-center ">{item.Bname}</h1>
                <h1 className=" sm:font-semibold text-center lg:mt-3">
                  {item.description}
                </h1>
              </artical>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Badges;
