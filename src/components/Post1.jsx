import React from "react";
import IdeaTemp from "./IdeaTemp";
import { useState } from "react";

function Post1() {
  const data1 = [
    {
      h: "Incubation",
      gmail: "tanvikinjale@gmail.com",
      description:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem ex, officia temporibus animi similique ullam, eius provident, nam repellat ad quia? Aliquam, rem aperiam alias tempore voluptatibus ad consectetur rerum ",
      title: "Idea title",
      category: "Incubation",
      imgUrl:
        "https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png",
    },
    {
      h: "Programming",
      gmail: "tanvikinjale@gmail.com",
      description:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem ex, officia temporibus animi similique ullam, eius provident, nam repellat ad quia? Aliquam, rem aperiam alias tempore voluptatibus ad consectetur rerum ",
      title: "Idea title",
      category: "Programming",
      imgUrl:
        "https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png",
    },
    {
      h: "Civil",
      gmail: "tanvikinjale@gmail.com",
      description:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem ex, officia temporibus animi similique ullam, eius provident, nam repellat ad quia? Aliquam, rem aperiam alias tempore voluptatibus ad consectetur rerum ",
      title: "Idea title",
      category: "Civil",
      imgUrl:
        "https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png",
    },
    {
      h: "Civil 1",
      gmail: "tanvikinjale@gmail.com",
      category: "Civil",
      description:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem ex, officia temporibus animi similique ullam, eius provident, nam repellat ad quia? Aliquam, rem aperiam alias tempore voluptatibus ad consectetur rerum ",
      title: "Idea title",
      imgUrl:
        "https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png",
    },
    {
      h: "Electric",
      gmail: "tanvikinjale@gmail.com",
      category: "Electric",
      description:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem ex, officia temporibus animi similique ullam, eius provident, nam repellat ad quia? Aliquam, rem aperiam alias tempore voluptatibus ad consectetur rerum ",
      title: "Idea title",
      imgUrl:
        "https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png",
    },
    {
      h: "Electric 1",
      gmail: "tanvikinjale@gmail.com",
      description:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem ex, officia temporibus animi similique ullam, eius provident, nam repellat ad quia? Aliquam, rem aperiam alias tempore voluptatibus ad consectetur rerum ",
      title: "Idea title",
      category: "Electric",
      imgUrl:
        "https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png",
    },
    {
      h: "Science",
      gmail: "tanvikinjale@gmail.com",
      description:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem ex, officia temporibus animi similique ullam, eius provident, nam repellat ad quia? Aliquam, rem aperiam alias tempore voluptatibus ad consectetur rerum ",
      title: "Idea title",
      category:"Science",
      imgUrl:
        "https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png",
    },
    {
      h: "Sumit",
      gmail: "tanvikinjale@gmail.com",
      description:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem ex, officia temporibus animi similique ullam, eius provident, nam repellat ad quia? Aliquam, rem aperiam alias tempore voluptatibus ad consectetur rerum ",
      title: "Idea title",
      category: "Incubation",

      imgUrl:
        "https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png",
    },
  ];

  const [incub, setincub] = useState(false);
  const handleIncub = (e) => {
    setincub((current) => !current);
  };
  const [prog, setprog] = useState(false);
  const handleProg = (e) => {
    setprog((current) => !current);
  };
  const [prof, setprof] = useState(false);
  const handleProf = (e) => {
    setprof((current) => !current);
  };
  const [civil, setcivil] = useState(false);
  const handleCivil = (e) => {
    setcivil((current) => !current);
  };
  const [elec, setelec] = useState(false);
  const handleElec = (e) => {
    setelec((current) => !current);
  };
  const [sci, setsci] = useState(false);
  const handleSci = (e) => {
    setsci((current) => !current);
  };

  
  const handleClose1 = (e) => {
    setincub(true);
    setprog(false);
    setprof(false);
    setcivil(false);
    setelec(false);
    setsci(false);
  }

  const handleClose2 = (e) => {
    setincub(false);
    setprog(true);
    setprof(false);
    setcivil(false);
    setelec(false);
    setsci(false);
  }
  
  const handleClose3 = (e) => {
    setincub(false);
    setprog(false);
    setprof(true);
    setcivil(false);
    setelec(false);
    setsci(false);
  }
  
  const handleClose4 = (e) => {
    setincub(false);
    setprog(false);
    setprof(false);
    setcivil(true);
    setelec(false);
    setsci(false);
  }

  const handleClose5 = (e) => {
    setincub(false);
    setprog(false);
    setprof(false);
    setcivil(false);
    setelec(true);
    setsci(false);
  }

  const handleClose6 = (e) => {
    setincub(false);
    setprog(false);
    setprof(false);
    setcivil(false);
    setelec(false);
    setsci(true);
  }

  return (
    <div className="  xl:flex xl:flex-wrap xl:flex-row sm:mt-[2rem] mt-[4rem]  xl:mt-[-1rem]">
      <div
        className="xl:w-[24rem]  xl:py-[2rem] xl:rounded-[2rem] md:py-[4rem]  md:flex md:flex-row sm:flex sm:flex-row   bg-slate-200 xl:h-[38rem] lg:h-[48rem] sm:h-[40rem] sm:w-[38rem] md:w-[44rem] lg:w-[58rem] sm:rounded-[2rem] sm:mx-2   lg:mx-[3rem] md:mx-8 sm:py-[4rem] 
        flex flex-col rounded-lg w-[7rem] h-[24rem] mt-[5rem]
      "
      >
        <div className="">
          <button onClick={handleIncub, handleClose1} className="xl:h-[4rem] xl:mx-[2rem]  xl:rounded-2xl  xl:flex xl:flex-wrap xl:w-[20rem] xl:mb-6 hover:bg-blue   xl:text-2xl md:mx-[2rem]  md:rounded-xl md:h-[2rem] md:flex md:flex-wrap md:w-[12rem] md:mb-6 hover:bg-blue  md:text-lg lg:h-[4rem] lg:mx-[2rem]  lg:rounded-2xl  lg:flex lg:flex-wrap lg:w-[20rem] lg:mb-6 hover:bg-blue text-white bg-white lg:py-2 lg:text-3xl sm:text-xl sm:h-[2rem] sm:mx-[1rem]  sm:rounded-xl  sm:flex sm:flex-wrap sm:w-[14rem] sm:mb-6 hover:bg-blue rounded-xl h-[2rem] flex flex-wrap w-[6.5rem] mb-6 hover:bg-blue  text-[0.8rem]  mt-4 mx-1 font-semibold ">
            <img
              src="https://i.ibb.co/7Gh9CKL/Incubator.png"
              className="xl:w-[6rem] md:w-[3rem] lg:w-[5rem] xl:ml-[-1rem] sm:w-[3rem] xl:mt-[-0.9rem] w-[1.5rem] mt-1"
            />
            <h1 className="xl:py-2 py-1  text-black xl:font-semibold">
              Incubation
            </h1>
          </button>
          <button onClick={handleProg, handleClose2} className="xl:h-[4rem] xl:mx-[2rem]  xl:rounded-2xl  xl:flex xl:flex-wrap xl:w-[20rem] xl:mb-6 hover:bg-blue xl:text-2xl md:h-[2rem] md:mx-[2rem]  md:rounded-xl md:flex md:flex-wrap md:w-[12rem] md:mb-6 hover:bg-blue  md:text-lg lg:h-[4rem] lg:mx-[2rem]  lg:rounded-2xl lg:flex lg:flex-wrap lg:w-[20rem] lg:mb-6 hover:bg-blue lg:py-2 sm:text-xl sm:h-[2rem] sm:mx-[1rem]  sm:rounded-xl  sm:flex sm:flex-wrap sm:w-[14rem] sm:mb-6 hover:bg-blue text-white bg-white rounded-xl h-[2rem] flex flex-wrap w-[6.5rem] mb-6 hover:bg-blue  text-[0.7rem]  mt-4 mx-1 font-semibold ">
            <img
              src="https://i.ibb.co/jvZ4F6K/Google-Code.png"
              className="xl:w-[6rem] sm:w-[3rem] md:w-[3rem] lg:w-[5rem] xl:mt-[-0.5rem] xl:ml-[-1rem] w-[1.5rem]  mt-1"
            />
            <h1 className="xl:py-2 text-black xl:font-semibold py-1">
              Programming
            </h1>
          </button>
          <button onClick={handleProf, handleClose3}
            className=" xl:mx-[2rem]  xl:rounded-2xl xl:h-[4rem] xl:flex xl:flex-wrap xl:w-[20rem] xl:mb-6 hover:bg-blue  xl:text-2xl
          md:h-[2rem] md:mx-[2rem]  md:rounded-xl  md:flex md:flex-wrap md:w-[12rem] md:mb-6 hover:bg-blue md:text-lg
          lg:h-[4rem] lg:mx-[2rem]  lg:rounded-2xl  lg:flex lg:flex-wrap lg:w-[20rem] lg:mb-6 hover:bg-blue  lg:py-2 lg:text-3xl
          sm:text-xl sm:h-[2rem] sm:mx-[1rem]  sm:rounded-xl  sm:flex sm:flex-wrap sm:w-[14rem] sm:mb-6 hover:bg-blue text-white bg-white
          rounded-xl h-[2rem] flex flex-wrap w-[6.5rem] mb-6 hover:bg-blue  text-[0.8rem]  mt-4 mx-1 font-semibold "
          >
            <img
              src="https://i.ibb.co/Scyfs1q/Constructing.png"
              className="xl:w-[6rem] sm:w-[3rem] md:w-[3rem] lg:w-[5rem] xl:mt-[-0.5rem] xl:ml-[-1rem] w-[1.5rem] mt-1"
            />
            <h1 className="xl:py-2 text-black xl:font-semibold py-1">
              Professional
            </h1>
          </button>
          <button onClick={handleCivil, handleClose4}
            className="xl:h-[4rem] xl:mx-[2rem]  xl:rounded-2xl xl:flex xl:flex-wrap xl:w-[20rem] xl:mb-6 hover:bg-blue  xl:text-2xl
           md:mx-[2rem]  md:rounded-xl md:h-[2rem] md:flex md:flex-wrap md:w-[12rem] md:mb-6 hover:bg-blue md:text-lg
          lg:h-[4rem] lg:mx-[2rem]  lg:rounded-2xl  lg:flex lg:flex-wrap lg:w-[20rem] lg:mb-6 hover:bg-blue text-white bg-white lg:py-2 lg:text-3xl
          sm:text-xl sm:h-[2rem] sm:mx-[1rem]  sm:rounded-xl  sm:flex sm:flex-wrap sm:w-[14rem] sm:mb-6 hover:bg-blue 
          rounded-xl h-[2rem] flex flex-wrap w-[6.5rem] mb-6 hover:bg-blue  text-[0.8rem]  mt-4 mx-1 font-semibold"
          >
            <img
              src="https://i.ibb.co/bPtf10X/Tie.png"
              className="xl:w-[6rem] sm:w-[3rem] md:w-[3rem] lg:w-[5rem] xl:mt-[-0.5rem] xl:ml-[-1rem] w-[1.5rem] mt-1"
            />
            <h1 className="xl:py-2 text-black xl:font-semibold py-1">Civil</h1>
          </button>
          <button onClick={handleElec, handleClose5}
            className="xl:mx-[2rem]  xl:rounded-2xl xl:h-[4rem] xl:flex xl:flex-wrap xl:w-[20rem] xl:mb-6 hover:bg-blue   xl:text-2xl
          md:mx-[2rem]  md:rounded-xl md:h-[2rem] md:flex md:flex-wrap md:w-[12rem] md:mb-6 hover:bg-blue  md:text-lg
          lg:h-[4rem] lg:mx-[2rem]  lg:rounded-2xl  lg:flex lg:flex-wrap lg:w-[20rem] lg:mb-6 hover:bg-blue  lg:py-2 lg:text-3xl
          sm:text-xl sm:h-[2rem] sm:mx-[1rem]  sm:rounded-xl  sm:flex sm:flex-wrap sm:w-[14rem] sm:mb-6 hover:bg-blue text-white bg-white
          rounded-xl h-[2rem] flex flex-wrap w-[6.5rem] mb-6 hover:bg-blue  text-[0.8rem]  mt-4 mx-1 font-semibold"
          >
            <img
              src="https://i.ibb.co/LrxJPWp/Electrical.png"
              className="xl:w-[6rem] sm:w-[3rem] md:w-[3rem] lg:w-[5rem] xl:mt-[-0.5rem] xl:ml-[-1rem] w-[1.5rem]  mt-1"
            />
            <h1 className="xl:py-2 text-black xl:font-semibold py-1">
              Electrical
            </h1>
          </button>
          <button onClick={handleSci, handleClose6}
            className="xl:h-[4rem] xl:mx-[2rem]  xl:rounded-2xl xl:flex xl:flex-wrap xl:w-[20rem] xl:mb-6 hover:bg-blue text-white bg-white xl:text-2xl
          md:h-[2rem] md:mx-[2rem]  md:rounded-xl  md:flex md:flex-wrap md:w-[12rem] md:mb-6 hover:bg-blue  md:text-lg
          lg:h-[4rem] lg:mx-[2rem]  lg:rounded-2xl lg:flex lg:flex-wrap lg:w-[20rem] lg:mb-6 hover:bg-blue lg:py-2 lg:text-3xl
          sm:text-xl sm:h-[2rem] sm:mx-[1rem]  sm:rounded-xl  sm:flex sm:flex-wrap sm:w-[14rem] sm:mb-6 hover:bg-blue 
          rounded-xl h-[2rem] flex flex-wrap w-[6.5rem] mb-6 hover:bg-blue  text-[0.8rem]  mt-4 mx-1 font-semibold"
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
        {incub?(<div className="overflow-y-scroll sm:mt-[-1rem] no-scrollbarmd:h-[32rem]  items-center xl:grow xl:...float-center xl:flex xl:flex-col xl:items-center bg-white/30 rounded-[2rem]  xl:rounded-[3rem] border-1 xl:w-[52rem] border-offwhite shadow-lg  md:w-[26rem] lg:w-[36rem] lg:h-[38rem]  xl:absolute xl:inset xl:right-0 xl:mt-[-3rem] sm:w-[26rem] sm:h-[32rem] lg:mr-4 xl:h-[40rem] absolute inset right-0  w-[12rem] h-[32rem] mr-2">
          <h1>Incubation div</h1>
          {data1.map((item) => {
            return item.category==="Incubation" ? (<div>
              <IdeaTemp
                name={item.h}
                gmail={item.gmail}
                title={item.title}
                description={item.description}
                imgUrl={item.imgUrl}
              />
            </div>):null
          })}
        </div>):null}

        {prog?(<div className="overflow-y-scroll sm:mt-[-1rem] no-scrollbarmd:h-[32rem]  items-center xl:grow xl:...float-center xl:flex xl:flex-col xl:items-center bg-white/30 rounded-[2rem]  xl:rounded-[3rem] border-1 xl:w-[52rem] border-offwhite shadow-lg  md:w-[26rem] lg:w-[36rem] lg:h-[38rem]  xl:absolute xl:inset xl:right-0 xl:mt-[-3rem] sm:w-[26rem] sm:h-[32rem] lg:mr-4 xl:h-[40rem] absolute inset right-0  w-[12rem] h-[32rem] mr-2">
          <h1>Programming div</h1>
          {data1.map((item) => {
            return item.category==="Programming" ? (<div>
              <IdeaTemp
                name={item.h}
                gmail={item.gmail}
                title={item.title}
                description={item.description}
                imgUrl={item.imgUrl}
              />
            </div>):null
          })}
        </div>):null}

        {prof?(<div className="overflow-y-scroll sm:mt-[-1rem] no-scrollbarmd:h-[32rem]  items-center xl:grow xl:...float-center xl:flex xl:flex-col xl:items-center bg-white/30 rounded-[2rem]  xl:rounded-[3rem] border-1 xl:w-[52rem] border-offwhite shadow-lg  md:w-[26rem] lg:w-[36rem] lg:h-[38rem]  xl:absolute xl:inset xl:right-0 xl:mt-[-3rem] sm:w-[26rem] sm:h-[32rem] lg:mr-4 xl:h-[40rem] absolute inset right-0  w-[12rem] h-[32rem] mr-2">
          <h1>Professional div</h1>
          {data1.map((item) => {
            return item.category==="Professional" ?(<div>
              <IdeaTemp
                name={item.h}
                gmail={item.gmail}
                title={item.title}
                description={item.description}
                imgUrl={item.imgUrl}
              />
            </div>):null
          })}
        </div>):null}

        {civil?(<div className="overflow-y-scroll sm:mt-[-1rem] no-scrollbarmd:h-[32rem]  items-center xl:grow xl:...float-center xl:flex xl:flex-col xl:items-center bg-white/30 rounded-[2rem]  xl:rounded-[3rem] border-1 xl:w-[52rem] border-offwhite shadow-lg  md:w-[26rem] lg:w-[36rem] lg:h-[38rem]  xl:absolute xl:inset xl:right-0 xl:mt-[-3rem] sm:w-[26rem] sm:h-[32rem] lg:mr-4 xl:h-[40rem] absolute inset right-0  w-[12rem] h-[32rem] mr-2">
          <h1>Civil div</h1>
          {data1.map((item) => {
            return item.category === "Civil" ? (<div>
              <IdeaTemp
                name={item.h}
                gmail={item.gmail}
                title={item.title}
                description={item.description}
                imgUrl={item.imgUrl}
              />
            </div>):null
          })}
        </div>):null}

        {elec?(<div className="overflow-y-scroll sm:mt-[-1rem] no-scrollbarmd:h-[32rem]  items-center xl:grow xl:...float-center xl:flex xl:flex-col xl:items-center bg-white/30 rounded-[2rem]  xl:rounded-[3rem] border-1 xl:w-[52rem] border-offwhite shadow-lg  md:w-[26rem] lg:w-[36rem] lg:h-[38rem]  xl:absolute xl:inset xl:right-0 xl:mt-[-3rem] sm:w-[26rem] sm:h-[32rem] lg:mr-4 xl:h-[40rem] absolute inset right-0  w-[12rem] h-[32rem] mr-2">
          <h1>Electric div</h1>
          {data1.map((item) => {
            return item.category === "Electric" ? (<div>
              <IdeaTemp
                name={item.h}
                gmail={item.gmail}
                title={item.title}
                description={item.description}
                imgUrl={item.imgUrl}
              />
            </div>):null
          })}
        </div>):null}

        {sci?(<div className="overflow-y-scroll sm:mt-[-1rem] no-scrollbarmd:h-[32rem]  items-center xl:grow xl:...float-center xl:flex xl:flex-col xl:items-center bg-white/30 rounded-[2rem]  xl:rounded-[3rem] border-1 xl:w-[52rem] border-offwhite shadow-lg  md:w-[26rem] lg:w-[36rem] lg:h-[38rem]  xl:absolute xl:inset xl:right-0 xl:mt-[-3rem] sm:w-[26rem] sm:h-[32rem] lg:mr-4 xl:h-[40rem] absolute inset right-0  w-[12rem] h-[32rem] mr-2">
          <h1>Science div</h1>
          {data1.map((item) => {
            return item.category === "Science" ? (<div>
              <IdeaTemp
                name={item.h}
                gmail={item.gmail}
                title={item.title}
                description={item.description}
                imgUrl={item.imgUrl}
              />
            </div>) :null
          })}
        </div>):null}
        
      </div>
    </div>
  );
}

export default Post1;
