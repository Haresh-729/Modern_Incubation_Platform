import React from "react";


const AboutUs = () => {
  return (
    <section
      className="flex md:overflow-y-hidden w-screen min-h-full md:mb-10 "
      style={{ fontFamily: "Baloo Bhai 2" }}
    >
      <div className="md:flex">
      <img 
            data-aos="fade-down" className=" mt-[15rem] absolute will-change-scroll" src="https://i.ibb.co/BjHYqT0/cloud4.png" alt="clouds"/>
        <div data-aos="fade-right" className="md:float-left md:text-left md:pl-10  md:pt-10 pl-[10vw] pr-4 pt-[4vh]   md:w-2/3">
          <p className="">
            <span className="font-weight-700 font-extrabold text-2xl lg:text-4xl  text-redish ">
              Innovation
            </span>
            <span className="font-weight-600 text-2xl lg:text-4xl "> & </span>
            <span className="font-weight-700 font-extrabold lg:text-4xl text-2xl  text-orange ">
              Inspiration
            </span>
            <span className="text-2xl  text-gray-500 leading-1  tracking-normal">
             {' '} may come at any age whether <br /> you're 17 or 70 , all you need
              is some {' '}
            </span>
            <span className="font-weight-700 font-extrabold text-2xl lg:text-4xl text-redish ">
              Tools
            </span>
            <span className="text-2xl lg:text-4xl"> & </span>
            <span className="font-weight-700 font-extrabold text-2xl lg:text-4xl text-orange ">
              Guidance.
            </span>
            <br />
          </p>
          <p>
            <span className="font-weight-600 font-sm  text-blue  font-bold text-2xl lg:text-3xl">

              And we're here to give you that.
            </span>
          </p>
          <br />
          <p className="max-w-2xl  text-grey  font-weight-400 md:text-lg lg:text-2xl md:mt-4 ">
            The Incubation Centers provide students with <br />
            the necessary guidance that may be required for <br />
            their idea to survive and scale..
          </p>
        </div>
        <div data-aos="fade-left" className="flex justify-center md:w-1/3 md:float-right md:h-auto md:mr-8">
          <img src="https://i.ibb.co/kg2bySL/group1.png" className=" h-[15rem]  md:h-auto  " alt="icon" />
        </div>
      </div>
    </section>
  );
};
export default AboutUs;