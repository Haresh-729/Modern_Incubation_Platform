import React from "react";
import img from "../assets/ContactUsPg.png";
import imgCU from "../assets/cu.png";
import imgRAU from "../assets/rau.png";

function ContactUs() {
  return (
    <div className="pt-10 sm:pt-5 md:pt-10 pb-2 mt-[3rem]  md:mt-[0rem]">
      <div className="mx-2">
        <div className="flex mb-6 md:mb-[5rem] xl:mb-[2.2rem] items-center">
          <div className=" flex ">
            <img
              src={img}
              alt=""
              className="w-[10rem] sm:w-[12rem] md:w-[20rem]  xl:w-[24rem] pl-3 md:pl-16  "
            ></img>
          </div>
          <div className="p-2  w-2/3 text-center xl:text-right text-sm md:text-xl lg:text-2xl xl:text-3xl tracking-wide font-extrabold ">
            <h1 className=" mb-2 text-[#0139B5]  text-shadow-xl">
              The important thing is Not to Hesitate in{" "}
            </h1>
            <h1 className=" mb-2 text-[#EF4A37] text-shadow-xl">
              Questioning...
            </h1>
            <h1 className=" text-[#0139B5] text-shadow-xl">
              Have any questions ?{" "}
            </h1>
          </div>
        </div>
        <div className="flex  space-x-2 lg:space-x-4 xl:space-x-6  lg:mx-10 xl:mx-20">
          <div className="   rounded-[1.2rem] md:rounded-[1.9rem]  lg:rounded-[2.2rem] border-2 shadow-2xl py-2 px-8 bg-white bg-opacity-20 w-1/2 flex text-center flex-col items-center space-y-3">
            <img
              className="w-[3rem] sm:w-[4rem] md:w-[5rem] xl:w-[7rem] pt-4"
              src={imgCU}
              alt=""
            ></img>
            <h1 className="px-10 text-xs md:text-base xl:text-2xl font-bold text-[#7587A4]">
              Intrested in{" "}
              <span className="text-sm md:text-lg xl:text-3xl  font-extrabold text-[#EF4A37] ">
                Modernvate{" "}
              </span>
              Talk to us through Email
            </h1>
            <a
              href=""
              className="text-[0.6rem] md:text-[0.8rem] lg:text-lg xl:text-xl pt-4 underline font-bold xl:pb-4 text-[#090822]"
            >
              info@modernsolnhub.com
            </a>
          </div>

          <div className="  rounded-[1.2rem] md:rounded-[1.9rem] lg:rounded-[2.2rem] border-2 shadow-2xl py-2 px-2 bg-white bg-opacity-20 w-1/2 flex flex-col items-center text-center justify-center space-y-3">
            <img
              className="w-[3rem] sm:w-[4rem] md:w-[5rem] xl:w-[7.1rem]  pt-4 "
              src={imgRAU}
              alt=""
            ></img>
            <h1 className=" px-2 tracking-normal  text-xs md:text-base xl:text-2xl font-bold text-[#7587A4]">
              I Feel free to Walk in to
              <span className="text-sm md:text-lg  xl:text-3xl  font-extrabold text-[#EF4A37] ">
                {" "}
                Modernvate{" "}
              </span>
              & Excel your Future
            </h1>
            <h1 className="text-[0.6rem] md:text-[0.8rem] lg:text-lg xl:text-xl xl:px-10 font-bold pt-4 xl:pb-4 text-[#090822] ">
              B-1704, Tulsi Aura Tower, Sector 8, Ghansoli, Navi Mumbai,
              Maharashtra 400701, India
            </h1>
          </div>
        </div>
      </div>
      <footer className=" mt-8  xl:mt-8 mx-1 lg:m-4 bg-[#C5D4F2] md:p-3 sm:p-2 rounded-3xl">
        <div className="md:flex md:justify-between">
          <div>
            <img
              src="https://i.ibb.co/NNgmSDY/footer-img.png"
              className="hidden lg:block md:block lg:px-8 md:pr-5 lg:h-60 lg:w-96 md:h-48 md:w-96"
              alt="footer-img"
            />
          </div>
          <div className="lg:h-full lg:w-full md:w-full md:h-full">
            <img
              src="https://i.ibb.co/R9cKZRv/Group-27.png"
              className="lg:w-64 md:w-48 w-32 px-3"
              alt="logo"
            ></img>
            <div className="lg:pb-1 md:pb-4 mx-auto">
              <div className="select-none lg:text-lg md:text-sm text-[11px] text-gray-500 px-5">
                502 GPM, Bandra Kherwadi East
                <p className="select-none lg:text-lg md:text-sm text-[11spx] text-gray-500">
                  Mumbai -400001
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center justify-between pt-2">
              <div>
                <ul className="text-gray-600 lg:text-lg md:text-xs md:leading-5 text-[11px]">
                  <li>
                    <a href="/about" className="hover:underline">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://modernsolnhub.com/page/contact-h8km3"
                      className="select-none hover:underline"
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://modernsolnhub.com/page/internship-r6npio"
                      className="hover:underline"
                    >
                      Internship
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="text-gray-600 lg:text-lg md:text-xs md:leading-5 text-[11px]">
                  <li>
                    <a
                      href="https://modernsolnhub.com/page/microservices-certification-qw546f"
                      className="hover:underline"
                    >
                      Certification
                    </a>{" "}
                  </li>
                  <li>
                    <a href="/" className="hover:underline">
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://modernsolnhub.com/"
                      className="hover:underline"
                    >
                      ModernSolHub
                    </a>{" "}
                  </li>
                </ul>
              </div>
              <div>
                <ul className="text-gray-600 lg:text-lg md:text-xs md:leading-5 text-[11px]">
                  <li>
                    <a href="/know-more" className="hover:underline">
                      Know More
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://modernsolnhub.com/page/our-leaders-h8km3"
                      className="hover:underline"
                    >
                      Leaders
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://modernsolnhub.com/page/student-to-smart-it-professional-masterclass"
                      className="hover:underline"
                    >
                      Course
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <hr className=" border-gray-200 sm:mx-auto lg:mb-2" /> */}
          <div className=" mb-2 flex gap-2 sm:mt-3 lg:pr-5 md:pr-5 md:w-96 w-32 pb-2 h-8 pt-2 justify-center mx-auto">
            <a
              href="https://www.instagram.com/drastic_coder/"
              className="lg:mt-[11.5rem] md:mt-[9.5rem]"
            >
              <img
                alt="instagram"
                src="https://i.ibb.co/BwmjsLB/instagram.png"
                className=" transition ease-in-out   hover:scale-75  duration-1"
              ></img>
              <span className="sr-only">instagram page</span>
            </a>
            <a
              href="https://www.instagram.com/drastic_coder/"
              className="lg:mt-[11.5rem] md:mt-[9.5rem]"
            >
              <img
                alt="Facebook"
                src="https://i.ibb.co/c8nkskK/facebook.png"
                className="transition ease-in-out   hover:scale-75  duration-10"
              ></img>
              <span className="sr-only">facebook page</span>
            </a>
            <a
              href="https://www.instagram.com/drastic_coder/"
              className="lg:mt-[11.5rem] md:mt-[9.5rem]"
            >
              <img
                alt="telegram"
                src="https://i.ibb.co/T8YTjmF/telegram.png"
                className="transition ease-in-out   hover:scale-75  duration-10"
              ></img>
              <span className="sr-only">telegram page</span>
            </a>
            <a
              href="https://www.instagram.com/drastic_coder/"
              className="lg:mt-[11.5rem] md:mt-[9.5rem]"
            >
              <img
                alt="in"
                src="https://i.ibb.co/YZBFK1h/in.png"
                className="transition ease-in-out   hover:scale-75  duration-10"
              ></img>
              <span className="sr-only">in page</span>
            </a>
            <a
              href="https://www.instagram.com/drastic_coder/"
              className="lg:mt-[11.5rem] md:mt-[9.5rem]"
            >
              <img
                alt="twitter"
                src="https://i.ibb.co/d0mY9Zp/twitter.png"
                className="transition ease-in-out hover:scale-75  duration-10"
              ></img>
              <span className="sr-only">twitter page</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ContactUs;
