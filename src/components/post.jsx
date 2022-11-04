import React from "react";
import IdeaPost from "./IdeaPost";

function Post() {
  const incubation = [console.log("incubation")];
  const programming = [console.log("programmin")];
  const professional = [console.log("profesional")];
  const civil = [console.log("civil")];
  const electrical = [console.log("electrical")];
  const science = [console.log("science")];

  const data1 = [
    {
      h: "Tanvi Kinjale",
      gmail: "tanvikinjale@gmail.com",
      description:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem ex, officia temporibus animi similique ullam, eius provident, nam repellat ad quia? Aliquam, rem aperiam alias tempore voluptatibus ad consectetur rerum ",
      title: "Idea title",
      imgUrl:
        "https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png",
    },
    {
      h: "Tanvi Kinjale",
      gmail: "tanvikinjale@gmail.com",
      description:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem ex, officia temporibus animi similique ullam, eius provident, nam repellat ad quia? Aliquam, rem aperiam alias tempore voluptatibus ad consectetur rerum ",
      title: "Idea title",
      imgUrl:
        "https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png",
    },
    {
      h: "Tanvi Kinjale",
      gmail: "tanvikinjale@gmail.com",
      description:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem ex, officia temporibus animi similique ullam, eius provident, nam repellat ad quia? Aliquam, rem aperiam alias tempore voluptatibus ad consectetur rerum ",
      title: "Idea title",
      imgUrl:
        "https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png",
    },
    {
      h: "Tanvi Kinjale",
      gmail: "tanvikinjale@gmail.com",
      description:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem ex, officia temporibus animi similique ullam, eius provident, nam repellat ad quia? Aliquam, rem aperiam alias tempore voluptatibus ad consectetur rerum ",
      title: "Idea title",
      imgUrl:
        "https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png",
    },
    {
      h: "Tanvi Kinjale",
      gmail: "tanvikinjale@gmail.com",
      description:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem ex, officia temporibus animi similique ullam, eius provident, nam repellat ad quia? Aliquam, rem aperiam alias tempore voluptatibus ad consectetur rerum ",
      title: "Idea title",
      imgUrl:
        "https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png",
    },
    {
      h: "Tanvi Kinjale",
      gmail: "tanvikinjale@gmail.com",
      description:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem ex, officia temporibus animi similique ullam, eius provident, nam repellat ad quia? Aliquam, rem aperiam alias tempore voluptatibus ad consectetur rerum ",
      title: "Idea title",
      imgUrl:
        "https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png",
    },
    {
      h: "Tanvi Kinjale",
      gmail: "tanvikinjale@gmail.com",
      description:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem ex, officia temporibus animi similique ullam, eius provident, nam repellat ad quia? Aliquam, rem aperiam alias tempore voluptatibus ad consectetur rerum ",
      title: "Idea title",
      imgUrl:
        "https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png",
    },
    {
      h: "Tanvi Kinjale",
      gmail: "tanvikinjale@gmail.com",
      description:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem ex, officia temporibus animi similique ullam, eius provident, nam repellat ad quia? Aliquam, rem aperiam alias tempore voluptatibus ad consectetur rerum ",
      title: "Idea title",
      imgUrl:
        "https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png",
    },
  ];

  return (
    <div className="  xl:flex xl:flex-wrap xl:flex-row sm:mt-[2rem] mt-[4rem]  xl:mt-[-1rem]">
      <div
        className="xl:w-[24rem]  xl:py-[2rem] xl:rounded-[2rem] md:py-[4rem]  md:flex md:flex-row sm:flex sm:flex-row   bg-slate-200 xl:h-[38rem] lg:h-[48rem] sm:h-[40rem] sm:w-[38rem] md:w-[44rem] lg:w-[58rem] sm:rounded-[2rem] sm:mx-2   lg:mx-[3rem] md:mx-8 sm:py-[4rem] 
        flex flex-col rounded-lg w-[7rem] h-[24rem] mt-[5rem]"
      >
        <div className="">
          <button
            className="xl:h-[4rem] xl:mx-[2rem]  xl:rounded-2xl  xl:flex xl:flex-wrap xl:w-[20rem] xl:mb-6 hover:bg-blue   xl:text-2xl
         md:mx-[2rem]  md:rounded-xl md:h-[2rem] md:flex md:flex-wrap md:w-[12rem] md:mb-6 hover:bg-blue  md:text-lg

          lg:h-[4rem] lg:mx-[2rem]  lg:rounded-2xl  lg:flex lg:flex-wrap lg:w-[20rem] lg:mb-6 hover:bg-blue text-white bg-white lg:py-2 lg:text-3xl
          sm:text-xl sm:h-[2rem] sm:mx-[1rem]  sm:rounded-xl  sm:flex sm:flex-wrap sm:w-[14rem] sm:mb-6 hover:bg-blue
        rounded-xl h-[2rem] flex flex-wrap w-[6.5rem] mb-6 hover:bg-blue  text-[0.8rem]  mt-4 mx-1 font-semibold"
            onClick={() => [incubation]}>
            <img
              src="https://i.ibb.co/7Gh9CKL/Incubator.png"
              className="xl:w-[6rem] md:w-[3rem] lg:w-[5rem] xl:ml-[-1rem] sm:w-[3rem] xl:mt-[-0.9rem] w-[1.5rem] mt-1"
            />
            <h1
              className="xl:py-2 py-1  text-black xl:font-semibold">
              Incubation
            </h1>
          </button>
          <button
            className="xl:h-[4rem] xl:mx-[2rem]  xl:rounded-2xl  xl:flex xl:flex-wrap xl:w-[20rem] xl:mb-6 hover:bg-blue xl:text-2xl
          md:h-[2rem] md:mx-[2rem]  md:rounded-xl md:flex md:flex-wrap md:w-[12rem] md:mb-6 hover:bg-blue  md:text-lg

          lg:h-[4rem] lg:mx-[2rem]  lg:rounded-2xl lg:flex lg:flex-wrap lg:w-[20rem] lg:mb-6 hover:bg-blue lg:py-2 

          sm:text-xl sm:h-[2rem] sm:mx-[1rem]  sm:rounded-xl  sm:flex sm:flex-wrap sm:w-[14rem] sm:mb-6 hover:bg-blue text-white bg-white 
          rounded-xl h-[2rem] flex flex-wrap w-[6.5rem] mb-6 hover:bg-blue  text-[0.7rem]  mt-4 mx-1 font-semibold "
            onClick={() => [programming]}
          >
            <img
              src="https://i.ibb.co/jvZ4F6K/Google-Code.png"
              className="xl:w-[6rem] sm:w-[3rem] md:w-[3rem] lg:w-[5rem] xl:mt-[-0.5rem] xl:ml-[-1rem] w-[1.5rem]  mt-1"
            />
            <h1 className="xl:py-2 text-black xl:font-semibold py-1">
              Programming
            </h1>
          </button>
          <button
            className=" xl:mx-[2rem]  xl:rounded-2xl xl:h-[4rem] xl:flex xl:flex-wrap xl:w-[20rem] xl:mb-6 hover:bg-blue  xl:text-2xl
          md:h-[2rem] md:mx-[2rem]  md:rounded-xl  md:flex md:flex-wrap md:w-[12rem] md:mb-6 hover:bg-blue md:text-lg
          lg:h-[4rem] lg:mx-[2rem]  lg:rounded-2xl  lg:flex lg:flex-wrap lg:w-[20rem] lg:mb-6 hover:bg-blue  lg:py-2 lg:text-3xl
          sm:text-xl sm:h-[2rem] sm:mx-[1rem]  sm:rounded-xl  sm:flex sm:flex-wrap sm:w-[14rem] sm:mb-6 hover:bg-blue text-white bg-white
          rounded-xl h-[2rem] flex flex-wrap w-[6.5rem] mb-6 hover:bg-blue  text-[0.8rem]  mt-4 mx-1 font-semibold "
            onClick={() => [professional]}
          >
            <img
              src="https://i.ibb.co/Scyfs1q/Constructing.png"
              className="xl:w-[6rem] sm:w-[3rem] md:w-[3rem] lg:w-[5rem] xl:mt-[-0.5rem] xl:ml-[-1rem] w-[1.5rem] mt-1"
            />
            <h1 className="xl:py-2 text-black xl:font-semibold py-1">
              Professional
            </h1>
          </button>
          <button
            className="xl:h-[4rem] xl:mx-[2rem]  xl:rounded-2xl xl:flex xl:flex-wrap xl:w-[20rem] xl:mb-6 hover:bg-blue  xl:text-2xl
           md:mx-[2rem]  md:rounded-xl md:h-[2rem] md:flex md:flex-wrap md:w-[12rem] md:mb-6 hover:bg-blue md:text-lg
          lg:h-[4rem] lg:mx-[2rem]  lg:rounded-2xl  lg:flex lg:flex-wrap lg:w-[20rem] lg:mb-6 hover:bg-blue text-white bg-white lg:py-2 lg:text-3xl
          sm:text-xl sm:h-[2rem] sm:mx-[1rem]  sm:rounded-xl  sm:flex sm:flex-wrap sm:w-[14rem] sm:mb-6 hover:bg-blue 
          rounded-xl h-[2rem] flex flex-wrap w-[6.5rem] mb-6 hover:bg-blue  text-[0.8rem]  mt-4 mx-1 font-semibold"
            onClick={() => [civil]}
          >
            <img
              src="https://i.ibb.co/bPtf10X/Tie.png"
              className="xl:w-[6rem] sm:w-[3rem] md:w-[3rem] lg:w-[5rem] xl:mt-[-0.5rem] xl:ml-[-1rem] w-[1.5rem] mt-1"
            />
            <h1 className="xl:py-2 text-black xl:font-semibold py-1">Civil</h1>
          </button>
          <button
            className="xl:mx-[2rem]  xl:rounded-2xl xl:h-[4rem] xl:flex xl:flex-wrap xl:w-[20rem] xl:mb-6 hover:bg-blue   xl:text-2xl
          md:mx-[2rem]  md:rounded-xl md:h-[2rem] md:flex md:flex-wrap md:w-[12rem] md:mb-6 hover:bg-blue  md:text-lg
          lg:h-[4rem] lg:mx-[2rem]  lg:rounded-2xl  lg:flex lg:flex-wrap lg:w-[20rem] lg:mb-6 hover:bg-blue  lg:py-2 lg:text-3xl
          sm:text-xl sm:h-[2rem] sm:mx-[1rem]  sm:rounded-xl  sm:flex sm:flex-wrap sm:w-[14rem] sm:mb-6 hover:bg-blue text-white bg-white
          rounded-xl h-[2rem] flex flex-wrap w-[6.5rem] mb-6 hover:bg-blue  text-[0.8rem]  mt-4 mx-1 font-semibold"
            onClick={() => [electrical]}
          >
            <img
              src="https://i.ibb.co/LrxJPWp/Electrical.png"
              className="xl:w-[6rem] sm:w-[3rem] md:w-[3rem] lg:w-[5rem] xl:mt-[-0.5rem] xl:ml-[-1rem] w-[1.5rem]  mt-1"
            />
            <h1 className="xl:py-2 text-black xl:font-semibold py-1">
              Electrical
            </h1>
          </button>
          <button
            className="xl:h-[4rem] xl:mx-[2rem]  xl:rounded-2xl xl:flex xl:flex-wrap xl:w-[20rem] xl:mb-6 hover:bg-blue text-white bg-white xl:text-2xl
          md:h-[2rem] md:mx-[2rem]  md:rounded-xl  md:flex md:flex-wrap md:w-[12rem] md:mb-6 hover:bg-blue  md:text-lg
          lg:h-[4rem] lg:mx-[2rem]  lg:rounded-2xl lg:flex lg:flex-wrap lg:w-[20rem] lg:mb-6 hover:bg-blue lg:py-2 lg:text-3xl
          sm:text-xl sm:h-[2rem] sm:mx-[1rem]  sm:rounded-xl  sm:flex sm:flex-wrap sm:w-[14rem] sm:mb-6 hover:bg-blue 
          rounded-xl h-[2rem] flex flex-wrap w-[6.5rem] mb-6 hover:bg-blue  text-[0.8rem]  mt-4 mx-1 font-semibold"
            onClick={() => [science]}
          >
            <img
              src="https://i.ibb.co/njtzBzg/Benzene-Ring.png"
              className="xl:w-[6rem] sm:w-[3rem] md:w-[3rem] xl:mt-[-0.5rem]  lg:w-[5rem] xl:ml-[-1rem] w-[1.5rem] mt-1"
            />
            <h1 className="xl:py-2 text-black xl:font-semibold py-1">
              Science
            </h1>
          </button>
        </div>

        <div
          className="overflow-y-scroll sm:mt-[-1rem] no-scrollbarmd:h-[32rem]  items-center xl:grow xl:...float-center xl:flex xl:flex-col xl:items-center bg-white/30 rounded-[2rem]  xl:rounded-[3rem] border-1 xl:w-[52rem] border-offwhite shadow-lg  md:w-[26rem] lg:w-[36rem] lg:h-[38rem]  xl:absolute xl:inset xl:right-0 xl:mt-[-3rem] sm:w-[26rem] sm:h-[32rem] lg:mr-4 xl:h-[40rem]
        absolute inset right-0  w-[12rem] h-[32rem] mr-2 


        "
        >
          {data1.map((item) => (
            <div>
              <IdeaPost
                name={item.h}
                gmail={item.gmail}
                title={item.title}
                description={item.description}
                imgUrl={item.imgUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Post;
