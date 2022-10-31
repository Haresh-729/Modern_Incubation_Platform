import React from "react";

const AboutUs4 = () => {
  return (
    <div className="flex">
    <div className="bg-cover md:pt-7 pt-4 w-screen h-full">
      <h1 className="text-center font-bold text-2xl md:text-3xl lg:text-3xl lg:font-extrabold mb-4 text-blue leading-2 ">
        Our Capablities
      </h1>
      <div className="  flex flex-col text-base md:px-4 md:text-sm items-center justify-center  md:grid md:grid-cols-3  md:pt-10 ">
        <div className="flex item-center lg:mr-8  place-self-end mb-3 rounded-[1.5rem] md:rounded-[3rem] border-4 bg-white bg-opacity-25 h-72 w-72 md:h-60 md:w-60  shadow-2xl">
          <p className="leading-relaxed  md:py-2 py-[3vh] px-3 font-semibold text-center  text-[#7587A4]">
            Modern Solutions Hub develops innovation at all levels within
            colleges, universities, and organizations combining complementary
            and specialized competencies to help our clients on their Innovation
            & Transformation journey to growth and value creation.
          </p>
        </div>
        <div className="flex item-center  mb-3 rounded-[1.5rem] md:rounded-[3rem] border-4 bg-white bg-opacity-25 h-72 w-72 md:h-60 md:w-60  shadow-2xl">
          <p className="leading-relaxed  md:py-2 py-[3vh] px-3 font-semibold text-center  text-[#7587A4]">
          Whether you are a student, faculty, college or university, start-up
            or MNC organization, we provide coaching, solutions & services to
            help you on your transformation journey.
          </p>
        </div>
        <div className="row-span-3">
          <img src="https://i.ibb.co/w67pyLV/capa.png" className="hidden md:block  md:w-[25rem] md:w-[50rem] md:mt-1" alt="icon" />
        </div>
        <div className="mb-3 rounded-[1.5rem] place-self-end lg:mr-8 md:rounded-[3rem] border-4 bg-white bg-opacity-25 h-72 w-72 md:h-60 md:w-60  shadow-2xl">
          <p className="leading-relaxed  md:py-2 py-[3vh] px-3 font-semibold text-center  text-[#7587A4]">
          Our philosophy is to work with you to transform you and your
            organization to drive your own success where and when you need it.
          </p>
        </div>
        <div className="content-center mb-3 rounded-[1.5rem] md:rounded-[3rem] border-4 bg-white bg-opacity-25 h-72 w-72 md:h-60 md:w-60
          shadow-2xl">
          <p className="leading-relaxed  md:py-2 py-[3vh] px-3 font-semibold text-center  text-[#7587A4]">
          We help our clients to transform. We prepare organizations for
            change and use innovative personalized solutions to make this
            happen.
          </p>
        </div>
        
        <div className="">
          <img src="https://i.ibb.co/w67pyLV/capa.png" className="hidden   md:max-w-xl md:mt-1" alt="icon" />
        </div>
      </div>
    </div>
    </div>
  );
};
export default AboutUs4;
