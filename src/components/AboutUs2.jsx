import React from "react";

function AboutUs2() {
  return (
    <div className="flex top-0">
      <img data-aos="fade-right" className="mt-[25rem]  absolute will-change-scroll" src="https://i.ibb.co/BjHYqT0/cloud4.png" alt="clouds"/>
      <div data-aos="fade-up" className=" w-screen md:pt-0 pt-[2vh] h-full ">
      
        <h1 className=" md:mb-10 text-center md:text-3xl font-bold lg:font-extrabold text-blue sm:text-2xl text-xl">
          Philosophy
        </h1>
        <h1 className=" md:mx-8 md:my-4 text-center md:text-xl lg:text-2xl md:font-bold pt-[2vh] md:p-0 text-redish">
          Our philosophy is to work with you to transform you and your ideas, to
          drive your own success, where and when you need it.
        </h1>
        

        <div className="flex flex-col md:flex-row items-center justify-center">
          <img
            src="https://i.ibb.co/NT0mLzD/philosophy.png"
            alt="p"
            className="w-[10rem] lg:w-[8rem]  md:hidden"
          ></img>
          <div className="p-2 lg:pl-20 md:w-2/3  md:text-xl md:tracking-wide md:text-start pl-[2.5vw] md:font-bold text-[#7587A4]">
            <p className="md:mb-5 md:mt-5 md:pt-0 pt-[3vh]">
              The<span className="text-blue font-bold"> ModernSolnHub® </span>is
              a venture which is founded by IT Industry experts across the
              globe.
            </p>
            <p className="">
              <span className="text-blue font-bold">ModernVate </span> is a
              software which will provide a platform for young students to
              showcase their ideas, show their skills, and ask for tools, to
              uplift their ideas through the guidance of IT industrialists,
              business people, institutions, and organizations.
            </p>
          </div>
          <img
            src="https://i.ibb.co/NT0mLzD/philosophy.png"
            alt="p"
            className="hidden md:block md:w-1/3"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default AboutUs2;
