import React from "react";

function AboutUs3() {
//   function increaseHeight() {}

  function toggleText1() {
    var dots = document.getElementById("dots1");
    var moreText = document.getElementById("more1");
    var button = document.getElementById("button1");

    if (dots.classList.contains("hidden")) {
      // Show the dots
      dots.classList.remove("hidden");

      // Hide the more text
      moreText.classList.add("hidden");

      // change text of the button
      button.innerHTML = "Read more";
    } else {
      // Hide the dots
      dots.classList.add("hidden");

      // hide the more text
      moreText.classList.remove("hidden");

      // change text of the button
      button.innerHTML = "Read less";
    }
  }

  function toggleText2() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var button = document.getElementById("button2");

    if (dots.classList.contains("hidden")) {
      // Show the dots
      dots.classList.remove("hidden");

      // Hide the more text
      moreText.classList.add("hidden");

      // change text of the button
      button.innerHTML = "Read more";
    } else {
      // Hide the dots
      dots.classList.add("hidden");

      // hide the more text
      moreText.classList.remove("hidden");

      // change text of the button
      button.innerHTML = "Read less";
    }
  }

  function toggleText3() {
    var dots = document.getElementById("dots3");
    var moreText = document.getElementById("more3");
    var button = document.getElementById("button3");

    if (dots.classList.contains("hidden")) {
      // Show the dots
      dots.classList.remove("hidden");

      // Hide the more text
      moreText.classList.add("hidden");

      // change text of the button
      button.innerHTML = "Read more";
    } else {
      // Hide the dots
      dots.classList.add("hidden");

      // hide the more text
      moreText.classList.remove("hidden");

      // change text of the button
      button.innerHTML = "Read less";
    }
  }

  return (
    <section className="flex mx-auto h-full w-screen md:pt-6">
      <div className="">
        <h1 className="text-center text-[#0139B5] lg:mr-0 font-bold text-2xl md:text-3xl lg:text-4xl pt-5 underline  decoration-[#0139B5]">
          Pillars of innovation
        </h1>
        <div className="md:flex justify-between items-center">
         <div className="flex justify-center">
          <img
            className="w-[15rem] md:w-[20rem] md:pl-4   mt-3"
            src="https://i.ibb.co/7RDbj3F/modernvate-Pillar.png"
            alt="Pillars of Modernvate"
          /></div>
          <div className="md:text-left md:grid md:grid-cols-2 gap-12 md:ml-10 md:mr-10 mt-[4vh]">
            <div className="flex justify-left items-center">
              <img
                src="https://i.ibb.co/RP4h19S/Better.png"
                alt="Better"
                className="object-scale-down md:h-20 md:w-20 w-12 md:pr-2 m-[2vw] md:m-0"
              />  
              <span className="text-base text-[#EF4A37] font-semibold md:font-bold">
                BETTER
                <p className="text-sm text-[#0139B5] md:font-semibold">
                  Helps you to decide what is better for you
                </p>
              </span>
            </div>

            <div className="flex justify-left items-center">
              <img
                src="https://i.ibb.co/G9RZZ5B/Cheaper.png"
                alt="Cheaper"
                className="object-scale-down md:h-20 md:w-20 w-12 md:pr-2 m-[2vw] md:m-0"
              />
              <span className="text-base text-[#EF4A37] font-semibold md:font-bold">
                CHEAPER
                <p className="text-sm text-[#0139B5] md:font-semibold">
                  With affordable low-cost expert guidance & services
                </p>
              </span>
            </div>

            <div className="flex justify-left items-center">
              <img
                src="https://i.ibb.co/YbtpGcG/Faster.png"
                alt="Faster"
                className="object-scale-down md:h-20 md:w-20 w-12 md:pr-2 m-[2vw] md:m-0"
              />
              <span className="text-base text-[#EF4A37] font-semibold md:font-bold">
                FASTER
                <p className="text-sm text-[#0139B5] md:font-semibold">
                  Provides a pathway to get a faster outcome
                </p>
              </span>
            </div>

            <div className="flex justify-left items-center">
              <img
                src="https://i.ibb.co/Z6Ztp2n/Easier.png"
                alt="Easier"
                className="object-scale-down md:h-20 md:w-20 w-12 md:pr-2 m-[2vw] md:m-0"
              />
              <span className="text-base text-[#EF4A37] font-semibold md:font-bold">
                EASIER
                <p className="text-sm text-[#0139B5] md:font-semibold">
                  Making everything easy for you
                </p>
              </span>
            </div>
          </div>
        </div>

        <div className="md:flex md:justify-beetween md:items-stretch md:flex-row md:text-justify">

          <div className="md:mt-10 md:ml-5  md:w-3/12 rounded-lg md:rounded-[3rem] border-4 mx-3 shadow-2xl mt-[2vh] px-[3px] md:mb-8 bg-white bg-opacity-25 ">
            <h1 className="text-[#0139B5] font-bold lg:text-2xl md:text-xl text-center pt-4 md:py-3">
              Sharpen your Ideas
            </h1>
            <p className="text-clip overflow-hidden md:m-0 m-4 md:pb-3 md:px-3">
              The verified students’ ideas will be visible to each and every
              user using our website. With the help of the verified users’
              ideas, other users may get extra knowledge or they can sharpen
              their ideas.
              <span id="dots1">...</span>
              <span id="more1" className="hidden">
                &nbsp;If any industry or organization wants to add more points
                to the ideas, they can do it. They can do it using comments and
                ask them to modify their idea accordingly.
              </span>
              <button
                onClick={toggleText1}
                id="button1"
                className=" underline text-sky-700 duration-300 hover:text-sky-500 decoration-sky-500"
              >
                Read more
              </button>
            </p>
          </div>
          <div className="md:mt-10 md:ml-5  md:w-3/12 rounded-lg md:rounded-[3rem] border-4 mx-4 shadow-2xl mt-[2vh] px-[3px] md:mb-8 bg-white bg-opacity-25 ">
            <h1 className="text-[#0139B5] font-bold lg:text-2xl md:text-xl  text-center pt-4 md:py-3">
              Guidance for students
            </h1>
            <p className="text-clip overflow-hidden md:m-0 m-4 md:pb-3 md:px-3">
              Students get an opportunity to submit their ideas. Any student or
              user generates any idea, they can upload it on our website, those
              ideas will be verified by the industrialists, organizations, or
              any higher
              <span id="dots2">...</span>
              <span id="more2" className="more hidden">
                &nbsp;authority, and will get an opportunity to execute their
                ideas. Industrialists may also like or comment on the ideas
                generated by the students.
              </span>
              <button
                onClick={toggleText2}
                id="button2"
                className=" underline text-sky-700 duration-300 hover:text-sky-500 decoration-sky-500"
              >
                Read more
              </button>
            </p>
          </div>
          <div className="md:mt-10 md:ml-5  md:w-3/12 rounded-lg md:rounded-[3rem] border-4 mx-4 shadow-2xl mt-[2vh] px-[3px] md:mb-8 bg-white bg-opacity-25 ">
            <h1 className="text-[#0139B5] font-bold lg:text-2xl md:text-xl   text-center pt-4 md:py-3">
              Internships & Investment
            </h1>
            <p className="text-clip overflow-hidden md:m-0 m-4 md:pb-3 md:px-3">
              The verified users may get an opportunity from industrialists or
              business experts to invest in their ideas and also get a chance to
              get internships and placements.
              <span id="dots3">...</span>
              <span id="more3" className="hidden">
                &nbsp;The investors can collaborate with the verified users as
                and how they feel appropriate.
              </span>
              <button
                onClick={toggleText3}
                id="button3"
                className=" underline text-sky-700 duration-300 hover:text-sky-500 decoration-sky-500"
              >
                Read more
              </button>
            </p>
          </div>
          <div className="md:mt-10 md:ml-5  md:w-3/12 rounded-lg md:rounded-[3rem] border-4 mx-4 shadow-2xl mt-[2vh] px-[3px] md:mb-8 bg-white bg-opacity-25 ">
            <h1 className="text-[#0139B5] font-bold lg:text-2xl md:text-xl  text-center pt-4 md:py-3">
              Test Maturity Level
            </h1>
            <p className="text-clip overflow-hidden md:m-0 m-4 md:pb-3 md:px-3">
              Universities and Industries will get to know their maturity level
              in the market, through a predefined criteria.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs3;
