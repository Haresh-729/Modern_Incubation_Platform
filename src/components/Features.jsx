import React from "react";
import "../index.css";

const Features = () => {
  return (
    //starting main div..
    
      <div className="mb-[25rem] sm:mb-0  h-full lg:w-screen">
      <img data-aos="fade-left" className="  md:block float-right mt-[14rem] absolute w-[48rem] sm:w-[32rem] md:w-[38rem] lg:w-[40rem]" src="https://i.ibb.co/BjHYqT0/cloud4.png" alt="clouds"/> 
      <div className="w-screen h-screen" style={{ fontFamily: "Baloo Bhai 2" }}>
      <h1 className="text-center font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl lg:font-extrabold mt-6 md:mt-10 text-[#0139B5] leading-2 ">
        Features
      </h1>
      <br />
      <h2 className="text-center font-bold text-base sm:text-lg md:text-xl lg:text-3xl sm:tracking-wide text-[#7587A4] ">
        Beautiful Analytics to Grow Smarter
      </h2>

      <div 
      data-aos="fade-up"
       className="float-center flex flex-col items-center mx-2 sm:mx-10 lg:mx-16">
        <div className="grid grid-cols-4 gap-1 place-items-start text-center mt-8 ">
          <img src="https://i.ibb.co/Bq38Z7h/icon1.png" className="w-8 sm:w-12 lg:w-14 place-self-center " alt="icon" />
          <img src="https://i.ibb.co/9hfhVTY/icon2.png" className="w-8 sm:w-12 lg:w-14 place-self-center " alt="icon" />
          <img src="https://i.ibb.co/pfMfVkc/icon3.png" className="w-8 sm:w-12 lg:w-14 place-self-center " alt="icon" />
          <img src="https://i.ibb.co/JmtvT9P/icon4.png" className="w-8 sm:w-12 lg:w-14 place-self-center " alt="icon" />
          <p className="mb-3 font-normal text-xs sm:text-sm py-2 px-2 mt-2">
            <h1 className="font-bold lg:text-xl  text-blue">
              Connect with people all over the world
            </h1>
            <br />
            <p className="leading-tight sm:leading-normal text-[0.6rem] sm:text-[0.8rem] md:text-[0.8rem] lg:text-lg">
              Opportunity to connect with experts all over the world with one
              click through ModernVate.
            </p>
          </p>

          <p className="mb-3 font-normal text-xs sm:text-sm py-2 px-2 mt-2">
            <h1 className="font-bold lg:text-xl text-blue">
              Get your Business off the Ground
            </h1>{" "}
            <br />
            <p className="leading-tight sm:leading-normal text-[0.6rem] sm:text-[0.8rem] md:text-[0.8rem] lg:text-lg">
              We promise to give a Kickstart to your Business by Providing
              Guidance from IT Experts.
            </p>
          </p>

          <p className="mb-3 font-normal text-xs sm:text-sm mt-2 py-2 px-2 ">
            <h1 className="font-bold lg:text-xl text-blue">
              Funding your Next Big Idea
            </h1>
            <br />
            <p className="leading-tight sm:leading-normal text-[0.6rem] sm:text-[0.8rem] md:text-[0.8rem] lg:text-lg">
              If your idea attracts any organization they can help you by
              providing funds or guidance.
            </p>
          </p>

          <p className="mb-3 font-normal text-xs sm:text-sm mt-2 py-2 px-2">
            <h1 className="font-bold lg:text-xl text-blue">
              {" "}
              Get a chance to get an Internship
            </h1>
            <br />
            <p className="leading-tight sm:leading-normal text-[0.6rem] sm:text-[0.8rem] md:text-[0.8rem] lg:text-lg">
              {" "}
              You can also connect with other entrepreneurs for the purpose of
              gaining experience, guidance, etc.
            </p>
          </p>
        </div>
      </div>
      <div data-aos="flip-right" className="grid grid-cols-1 place-items-center space-y-4 sm:grid-cols-3  text-center   mt-4 mx-40 sm:mx-4 md:mx-18 lg:mx-20">
        <div className="flex flex-col  justify-center rounded-[5rem] rounded-tl-[0rem] border-4 py-4 px-2 bg-[#0139B5] bg-opacity-25 h-50 lg:h-56 w-52 lg:w-60">
          <img src="https://i.ibb.co/sK4WWdf/img1.png" className="w-10 lg:w-[4.2rem] ml-[4rem] lg:ml-[5rem]" alt="icon" />
          <h1 className="font-bold text-blue text-lg">
            Students
          </h1>
          <br />
          <p className="lg:leading-loose text-sm lg:font-medium lg:tracking-tight text-blue">
            Opportunity to connect with experts all over the world with one
            click through ModernVate.
          </p>
        </div>

        <div className="flex flex-col justify-center rounded-[5rem]  border-4 py-4 px-2 bg-[#0139B5] bg-opacity-25 h-50 lg:h-56 w-52 lg:w-60
        ">
          <img src="https://i.ibb.co/Z2C63pv/img2.png" className="w-12 lg:w-[4.7rem] ml-[4rem] lg:ml-[5rem]" alt="icon" />
          <h1 className="font-bold text-blue text-lg">
            University
          </h1>
          <br />
          <p className="lg:leading-loose text-sm lg:font-medium lg:tracking-tight text-blue">
            Opportunity to connect with experts all over the world with one
            click through ModernVate.
          </p>
        </div>

        <div className="flex flex-col justify-center rounded-[5rem] rounded-tr-[0rem]  border-4 py-4 px-2 bg-[#0139B5] bg-opacity-25 h-50 lg:h-56 w-52 lg:w-60">
          <img src="https://i.ibb.co/fkxTr0X/img3.png" className="w-12 lg:w-[4.7rem] ml-[4rem] lg:ml-[5rem]" alt="icon" />
          <h1 className="font-bold text-blue text-lg">
            Organization
          </h1>
          <br />
          <p className="lg:leading-loose text-sm lg:font-medium lg:tracking-tight text-blue">
            Opportunity to connect with experts all over the world with one
            click through ModernVate.
          </p>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Features;

