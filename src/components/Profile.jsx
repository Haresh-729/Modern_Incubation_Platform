// import React from "react";
// import avatar from "../data/avatar.jpg";
// import { badges, interests, sessions } from "../data/profileData";
// import { IconButton } from "rsuite";
// import { Edit } from "@rsuite/icons";
// import { NavLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { MdChevronLeft, MdChevronRight } from "react-icons/md";

// const Profile = ({username,photoUrl}) => {
//   const navigate = useNavigate();
//   const handleEdit = () => {

//     navigate("/Profile-Edit");
//   };

//   function toggleText1() {
//     var dots = document.getElementById("dots1");
//     var moreText = document.getElementById("more1");
//     var button = document.getElementById("button1");

//     if (dots.classList.contains("hidden")) {
//       // Show the dots
//       dots.classList.remove("hidden");

//       // Hide the more text
//       moreText.classList.add("hidden");

//       // change text of the button
//       button.innerHTML = "More";
//     } else {
//       // Hide the dots
//       dots.classList.add("hidden");

//       // hide the more text
//       moreText.classList.remove("hidden");

//       // change text of the button
//       button.innerHTML = "Less";
//     }
//   }

//   const slideLeft = () => {
//     var slider = document.getElementById("slider");
//     slider.scrollLeft = slider.scrollLeft - 500;
//   };

//   const slideRight = () => {
//     var slider = document.getElementById("slider");
//     slider.scrollLeft = slider.scrollLeft + 500;
//   };

//   return (
//     <div className="mx-3">
//       <div className=" md:mx-8 lg:mx-6 md:mt-6  mt-20   xl:grid xl:grid-cols-6 xl:grid-rows-2 xl:gap-4 xl:mx-16 xl:mt-6 ">
//         {/* div 1 */}
//         <div className="w-full mb-1 h-20 md:col-start-1 md:col-span-6 md:row-start-1 md:row-span-1 md:mb-1 md:h-32   lg:col-start-1 lg:col-span-6 lg:row-start-1 lg:row-span-1 lg:mb-1 lg:h-32    xl:col-start-1 xl:col-span-6 xl:row-start-1 xl:row-span-1 xl:mb-1 xl:h-32 bg-[url('https://i.ibb.co/LYQ3cs3/bg.png')] bg-cover rounded-lg  bg-local static justify-items-stretch">
//           <IconButton
//             icon={<Edit />}
//             onClick={handleEdit}
//             className="xl:ml-[8rem] invisible xl:visible absolute z-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 xl:w-[2.5rem] xl:h-[2rem] xl:pb-[2.5rem] text-center justify-center font-extrabold font-poppins xl:text-2xl text-black bg-white/50 border-2 border-white shadow-xl xl:rounded-[5rem] hover:bg-[#0589c7d3] hover:border-0 hover:text-white xl:mt-[10rem] xl:mr-[-5rem]"
//           ></IconButton>
//           <img
//             src={photoUrl}
//             alt="profile-Picture"
//             border="0"
//             className="h-20 w-20 ml-8 mt-[2rem] rounded-full border-2 border-white md:h-40 md:w-40 md:ml-7 md:mt-[2rem] md:rounded-full md:border-4 md:border-white   lg:h-40 lg:w-40 lg:ml-7 lg:mt-[2rem] lg:rounded-full lg:border-4 lg:border-white    xl:h-40 xl:w-40 xl:ml-7 xl:mt-[2rem] xl:rounded-full xl:border-4 xl:border-white absolute "
//           />
//         </div>

//         {/* div 2 */}
//         <div className="w-full md:w-full lg:w-full md:h-auto h-14 mb-4 bg-indigo-400 bg-cover rounded-lg xl:h-24 xl:col-start-1 xl:col-span-6 xl:row-start-2 xl:row-span-1  xl:bg-indigo-400 xl:bg-cover xl:rounded-lg">
//           <div className="flex items-start pl-32 md:pl-48 lg:pl-48 xl:pl-48">
//             <h1 className="text-[#ffffff]  text-2xl md:text-5xl lg:text-5xl xl:text-5xl p-5 font-semibold ">
//               {username}
//             </h1>
//           </div>
//         </div>
//       </div>

//       <div className=" md:grid md:grid-cols-6 md:grid-rows-3 md:gap-4 md:mx-8 md:rounded-[2rem] md:h-auto   lg:grid lg:grid-cols-6 lg:grid-rows-3 lg:gap-4 lg:mx-8 lg:rounded-[2rem] lg:h-auto   xl:grid xl:grid-cols-6 xl:grid-rows-3 xl:gap-4 xl:mx-16 xl:rounded-[2rem] xl:h-auto">
//         <div className=" rounded-lg  md:col-start-1 md:col-span-4 md:row-start-1 md:row-span-1 md:rounded-[1rem]   lg:col-start-1 lg:col-span-4 lg:row-start-1 lg:row-span-1 lg:rounded-[1rem]  xl:col-start-1 xl:col-span-4 xl:row-start-1 xl:row-span-1 xl:rounded-[1rem] bg-slate-300  ">
//           <h3
//             className="
//            pl-6 py-3 text-lg  xl:p-8 xl:text-2xl font-bold text-grey"
//           >
//             Interests
//           </h3>

//           <div className="flex flex-wrap text-justify">
//             <div>
//               {interests.map((item) => (
//                 <div key={item.name} className="flex flex-wrap ">
//                   {item.interests.map((link) => (
//                     <h1
//                       to={`/${link.name}`}
//                       key={link.name}
//                       className="pl-3 pb-2 xl:pl-8 xl:pb-3 md:pb-3 md:pl-6 lg:pb-3 xl:pr-6 text-xs md:text-xl lg:text-xl xl:text-xl"
//                     >
//                       <span className="capitalize ">{link.name}</span>
//                     </h1>
//                   ))}
//                   <span id="more1" class="hidden">
//                     {interests.map((item) => (
//                       <div key={item.name} className="flex flex-wrap">
//                         {item.interests.map((link) => (
//                           <h1
//                             to={`/${link.name}`}
//                             key={link.name}
//                             className="pl-3 pb-2 xl:pl-8 xl:pb-3 md:pb-3  lg:pb-3 xl:pr-6 text-xs md:text-xl lg:text-xl xl:text-xl"
//                           >
//                             <span className="capitalize ">{link.name}</span>
//                           </h1>
//                         ))}
//                       </div>
//                     ))}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             <span
//               id="dots1"
//               className="bottom-0 right-0 font-bold  text-sky-700 duration-300 hover:text-sky-500"
//             ></span>
//             <button
//               onClick={toggleText1}
//               id="button1"
//               className=" xl:w-[4rem] ml-3 mb-2  xl:mr-4 xl:ml-8 rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm xl:text-base xl:font-medium text-white shadow-sm hover:bg-indigo-700 "
//             >
//               More
//             </button>
//           </div>
//         </div>

//         {/* Enrolled Sessions */}
//         <div className="rounded-lg mt-2 md:col-start-1 md:col-span-4 md:row-start-2 md:row-end-4  md:rounded-[2rem] lg:col-start-1 lg:col-span-4 lg:row-start-2 lg:row-end-4  lg:rounded-[2rem]  xl:col-start-1 xl:col-span-4 xl:row-start-2 xl:row-end-4  xl:rounded-[2rem] bg-indigo-400 ">
//           <div className=" flex items-center">
//             <MdChevronLeft
//               className="opacity-50 bg-white rounded-sm ml-2 mr-2  cursor-pointer hover:opacity-100"
//               onClick={slideLeft}
//               size={40}
//             />

//             <div
//               id="slider"
//               className=" bg-cover rounded-[1rem] overflow-x-scroll scroll whitespace-nowrap scroll-smooth no-scrollbar xl:no-scrollbar 2xl:no-scrollbar"
//             >
//               <h1 className="sticky left-0 font-bold text-lg pt-3 xl:text-2xl xl:p-4">
//                 Enrolled Sessions
//               </h1>
//               {sessions.map((session) => (
//                 <NavLink
//                   to={`/${session.name}`}
//                   key={session.name}
//                   className="inline-block  p-2 cursor-pointer hover:scale-105 duration-300 transition ease-in-out delay-150 flex-col items-center  relative shadow-md  xl:m-2 m-1 pb-8 lg:w-auto xl:w-auto  bg-white/30 rounded-[1rem] xl:rounded-[3rem] border-2 border-offwhite "
//                 >
//                   <div className="flex flex-col justify-center items-center ">
//                     <div className=" xl:w-[12rem] md:w-[8rem] lg:[10rem] w-[4rem] ">
//                       <span className=""> {session.icon}</span>
//                     </div>
//                     <div className=" xl:text-xl text-xs xl:mx-8 ">
//                       <p className="xl:text-center capitalize ">
//                         {session.name}
//                       </p>
//                     </div>
//                   </div>
//                 </NavLink>
//               ))}
//             </div>
//             <MdChevronRight
//               className="opacity-50 bg-white rounded-sm mr-2 ml-2 cursor-pointer hover:opacity-100"
//               onClick={slideRight}
//               size={40}
//             />
//           </div>
//           {/* Enrolled Sessions end  */}
//         </div>

//         {/* Badges */}

//         <div className="mt-2 md:mt-0 lg:mt-0 xl:mt-0 h-[12rem] md:h-[32rem]  lg:h-[32rem] xl:h-[37rem] md:col-start-5 md:col-end-7 md:row-start-1 md:row-end-4     lg:col-start-5 lg:col-end-7 lg:row-start-1 lg:row-end-4     xl:col-start-5 xl:col-end-7 xl:row-start-1 xl:row-end-4 rounded-[1rem]  bg-slate-200 overflow-y-scroll   ">
//           <div className="sticky top-0 bg-slate-300 rounded-md  m-0">
//             <h3 className=" md:p-4 lg:p-4 xl:p-4 pl-6 py-3 md:text-2xl lgxl::text-2xl xl:text-2xl text-lg font-bold text-grey ">
//               Badges Earned
//             </h3>
//           </div>

//           {badges.map((item) => (
//             <div
//               key={item.name}
//               className=" flex flex-col items-center justify-center md:flex md:justify-start md:items-start  lg:flex lg:justify-start lg:items-start   xl:flex xl:justify-start xl:items-start"
//             >
//               {item.badges.map((badge) => (
//                 <NavLink
//                   to={`/${badge.name}`}
//                   key={badge.name}
//                   className=" p-4 mb-8 "
//                 >
//                   <div className="flex flex-col md:flex md:flex-row md:gap-2 lg:flex lg:flex-row lg:gap-4  xl:flex xl:flex-row xl:gap-4">
//                     <span className=""> {badge.icon}</span>

//                     <span className="capitalize  ">{badge.name}</span>
//                   </div>
//                 </NavLink>
//               ))}
//             </div>
//           ))}
//         </div>

//         {/* badges end */}
//       </div>
//     </div>
//   );
// };

// export default Profile;
import React from "react";
import IdeaPost from "./IdeaPost";

function Post() {
  
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
