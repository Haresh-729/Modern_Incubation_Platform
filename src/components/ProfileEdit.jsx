import { useState } from "react";
import React from "react";
import Select from "react-select";
import { IconButton } from "rsuite";
import { Edit, Send } from "@rsuite/icons";

const ProfileEdit = () => {
  const gradelist = [
    {
      value: 1,
      label: "10th",
    },
    {
      value: 2,
      label: "12th",
    },
    {
      value: 3,
      label: "Diploma",
    },
    {
      value: 4,
      label: "Degree",
    },
  ];
  const Gender = [
    {
      value: 1,
      label: "Male",
    },
    {
      value: 2,
      label: "Female",
    },
  ];
  function customTheme(theme) {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary25: "#F5F5F5",
        primary: "#013BBA",
      },
    };
  }
  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      borderBottom: "1px dotted pink",
      color: "grey",
      padding: 10,
      margin: 0,
      backgroundColor: "#D9E4FA",
      borderRadius: "20px 20px 20px 20px",
      rounded: 2,
    }),
    control: (provided, style) => ({
      ...provided,
      backgroundColor: "white/2",
      color: "white",
      borderRadius: "20px 20px 20px 20px",
      border: "",
    }),
  };
  const [result, ddlvalue] = useState(gradelist.label);
  const ddlHandler = (e) => {
    ddlvalue(e.value);
  };

  function editHandler(e) {
    if (
      first.length === 0 ||
      last.length === 0 ||
      state.length === 0 ||
      city.length === 0 ||
      phone.length === 0 ||
      email.length === 0 ||
      add.length === 0 ||
      name.length === 0
    ) {
      alert("Check the fileds");
    } else if (email.indexOf("@") === -1) {
      alert("Email must include @");
    } else if (phone.length > 10) {
      alert("Phone.No must contain only 10 no");
    } else if (add.length > 50) {
      alert("Address must contain only 50 characters");
    } else {
      alert("saved");
    }
    e.preventDefault();
  }

  function firstHandler(e) {
    let item = e.target.value;
    if (item.length < 0) {
      SetFirstErr(true);
    } else {
      SetFirstErr(false);
    }
    SetFirst(item);
  }
  function lastHandler(e) {
    let item = e.target.value;
    if (item.length > 10) {
      SetLastErr(true);
    } else {
      SetLastErr(false);
    }
    SetLast(item);
  }
  function stateHandler(e) {
    let item = e.target.value;
    if (item.length > 10) {
      SetStateErr(true);
    } else {
      SetStateErr(false);
    }
    SetState(item);
  }
  function addHandler(e) {
    let item = e.target.value;
    if (item.length > 50) {
      SetAddErr(true);
    } else {
      SetAddErr(false);
    }
    SetAdd(item);
  }

  function emailHandler(e) {
    let item = e.target.value;
    if (item.indexOf("@") === -1) {
      SetEmailErr(true);
    } else {
      SetEmailErr(false);
    }
    SetEmail(item);
  }
  function phoneHandler(e) {
    let item = e.target.value;
    if (item.length > 10) {
      SetPhoneErr(true);
    } else {
      SetPhoneErr(false);
    }
    SetPhone(item);
  }
  function nameHandler(e) {
    let item = e.target.value;
    if (item.length > 10) {
      SetNameErr(true);
    } else {
      SetNameErr(false);
    }
    SetName(item);
  }
  function cityHandler(e) {
    let item = e.target.value;
    if (item.length > 10) {
      SetCityErr(true);
    } else {
      SetCityErr(false);
    }
    SetCity(item);
  }

  const [first, SetFirst] = useState("");
  const [last, SetLast] = useState("");
  const [state, SetState] = useState("");
  const [add, SetAdd] = useState("");
  const [email, SetEmail] = useState("");
  const [phone, SetPhone] = useState("");
  const [name, SetName] = useState("");
  const [city, SetCity] = useState("");
  const [firstErr, SetFirstErr] = useState(false);
  const [lastErr, SetLastErr] = useState(false);
  const [stateErr, SetStateErr] = useState(false);
  const [addErr, SetAddErr] = useState(false);
  const [emailErr, SetEmailErr] = useState(false);
  const [phoneErr, SetPhoneErr] = useState(false);
  const [nameErr, SetNameErr] = useState(false);
  const [cityErr, SetCityErr] = useState(false);

  return (
    <div>
      <form onSubmit={editHandler}>
        <div className=" bg-[#6788D3]  ">
          <div className="">
            <div class="md:flex md:flex-wrap xl:flex xl:flex-wrap  xl:justify-center md:justify-center">
              <div className=" mt-[6rem] mr-4  ">
                <h1 className=" text-lg xl:text-4xl  md:text-4xl lg:text-4xl text-center text-white leading-loose xl:mr-4 ">
                  Asim sali
                </h1>
                <h1 className=" text-xl xl:flex xl:flex-wrap xl:text-center  xl:mt-[1rem] text-center mt-[-2rem] md:flex md:flex-wrap md:mt-[1rem] xl:mr-[4rem] lg:mr-[1rem] text-white">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 xl:mt-1 md:mt-1 ml-[1rem] lg:mt-1  h-6 xl:mr-2 md:mr-2 lg:ml-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  asmisali17@gmail.com
                </h1>
              </div>
              <IconButton
                icon={<Edit />}
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 w-[2rem] h-[2rem]  text-center  justify-center font-extrabold font-poppins text-xl mt-[4rem] absolute ml-[8rem] flex text-black bg-[#EAECF0] rounded-[5rem] xl:mr-[4rem] md:w-[2rem] md:h-[2rem] md:text-xl md:mt-[10rem]  lg:w-[3rem] lg:h-[3rem] lg:text-3xl lg:pt-2 lg:mt-[10rem] lg:mr-[1rem]
                
                "
              ></IconButton>
              <div class=" flex flex-wrap md:w-40 lg:w-40 xl:w-40   ">
                <img
                  src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png"
                  alt="..."
                  class="shadow-lg rounded-full w-[4rem] mt-4 mr-42 py-0 h-auto mx-[8rem] align-middle border-none 
                  xl:shadow-lg xl:rounded-full xl:w-[10rem] xl:mt-10 xl:ml-[-4rem] xl:py-0 md:h-[6rem] md:ml-[-1rem] md:border-none 
                  md:shadow-lg md:rounded-full md:w-[6rem] md:mt-[5rem]  md:py-0 lg:h-auto lg:align-middle lg:border-none
                  lg:shadow-lg lg:rounded-full lg:w-[10rem] lg:mt-10 lg:mr-42 lg:py-0 lg:h-auto lg:align-middle lg:border-none"
                />
              </div>
            </div>
          </div>
          <div className=" xl:flex xl:flex-row xl:flex-wrap  md:flex mx-4 md:flex-row  md:flex-wrap justify-center md:justify-center  mt-24 xl:w-[80rem] md:w-[48rem]  md:gap-8 gap-4 xl:gap-12">
            <input
              type="text"
              placeholder="First name"
              name="Firstname"
              className="xl:w-[32rem] xl:h-[3rem] bg-white  bg-opacity-20  md:w-[20rem] md:h-[3rem]  w-[17rem] h-[3rem] placeholder-white mt-8  px-5 rounded-[2rem] "
              // onChange={firstHandler}
            />
            {firstErr ? <span>Not valid</span> : ""}
            <input
              type="text"
              placeholder="Last name"
              name="Lastname"
              className="xl:w-[32rem] xl:h-[3rem]  md:w-[20rem] md:h-[3rem] bg-white  bg-opacity-20 placeholder-white mt-8 w-[17rem] h-[3rem] px-5 rounded-[2rem]"
              // onChange={lastHandler}
            />
            {lastErr ? <span>Not valid</span> : ""}
            <div>
              <Select
                options={Gender}
                theme={customTheme}
                styles={customStyles}
                required
                name="Gender"
                pattern="\S+.*"
                onChange={ddlHandler}
                placeholder="Gender"
                placeholderTextColor="#6495ed"
                className="xl:w-[32rem] xl:h-[3rem]   text-white md:w-[20rem] md:h-[3rem]   px-5 rounded-[2rem]  mt-8 w-[17rem] h-[3rem] "
              ></Select>
            </div>
            <input
              type="text"
              placeholder="State"
              name="State"
              className="xl:w-[32rem] xl:h-[3rem]  md:w-[20rem] md:h-[3rem]  mt-8 w-[17rem] h-[3rem]  bg-white  bg-opacity-20 placeholder-white  px-5 rounded-[2rem]"
              // onChange={stateHandler}
            />
            {stateErr ? <span>Not valid</span> : ""}
            <input
              type="text"
              placeholder="City"
              name="City"
              className="xl:w-[32rem] xl:h-[3rem]  bg-white  bg-opacity-20 placeholder-white md:w-[20rem] md:h-[3rem]  mt-8 w-[17rem] h-[3rem]   px-5 rounded-[2rem]"
              // onChange={cityHandler}
            />
            {cityErr ? <span>Not valid</span> : ""}
            <div className="flex flex-wrap xl:w-[32rem]">
              <input
                type="email"
                name="Email"
                placeholder="Mail-ID"
                className="xl:w-[32rem] xl:h-[3rem]  md:w-[20rem] md:h-[3rem]  mt-8 w-[17rem] h-[3rem]  bg-white  bg-opacity-20 placeholder-white  px-5 rounded-[2rem]"
                onChange={emailHandler}
              />
              {emailErr ? (
                <span className="mt-2 ml-2 text-red-600 text-xl">
                  Must inculde @
                </span>
              ) : (
                ""
              )}
            </div>
            <div className="flex flex-wrap xl:w-[32rem]">
              <input
                type="text"
                name="Address"
                placeholder="Eduacation/Institution Address"
                aria-multiline="true"
                className="xl:w-[32rem] xl:h-[3rem]  md:h-[3rem]  mt-8 w-[17rem] h-[3rem]   md:w-[20rem] h-[5rem] bg-white  bg-opacity-20 placeholder-white px-5 rounded-[2rem]"
                onChange={addHandler}
              />
              {addErr ? (
                <span className="mt-2 ml-2 text-red-600 text-xl">
                  Exceeded the maximum limit = 50
                </span>
              ) : (
                ""
              )}
            </div>
            <input
              type="text"
              name="Edname"
              placeholder="Eduaction/Institution Name"
              className="xl:w-[32rem] xl:h-[3rem] md:w-[20rem] md:h-[3rem]  mt-8 w-[17rem] h-[3rem]  bg-white  bg-opacity-20 placeholder-white  px-5 rounded-[2rem]"
              // onChange={nameHandler}
            />
            {nameErr ? <span>Not valid</span> : ""}
            <div>
              <Select
                options={gradelist}
                theme={customTheme}
                styles={customStyles}
                required
                pattern="\S+.*"
                onChange={ddlHandler}
                placeholder=" Grade"
                name="Grade"
                className="xl:w-[32rem] xl:h-[3rem]  text-white md:w-[20rem] md:h-[3rem]  mt-8 w-[17rem] h-[3rem]    px-5 rounded-[2rem]"
              ></Select>
            </div>
            <div className="flex flex-wrap xl:w-[32rem]">
              <input
                type="text"
                placeholder="Phone no.. +91"
                name="phone"
                className="xl:w-[32rem] md:w-[20rem] md:h-[3rem]  xl:h-[3rem] bg-white  mt-8 w-[17rem] h-[3rem]  bg-opacity-20 placeholder-white  px-5 rounded-[2rem]"
                onChange={phoneHandler}
              />
              {phoneErr ? (
                <span className="mt-2 ml-2 text-red-600 text-xl">
                  Exceeded the maximum limit = 10
                </span>
              ) : (
                ""
              )}
            </div>

            <input
              type="text"
              placeholder="I heard about Modervate from"
              className="xl:w-[32rem] md:w-[20rem] md:h-[3rem]  xl:h-[3rem] bg-white  bg-opacity-20 placeholder-white  mt-8 w-[17rem] h-[3rem]  px-5 rounded-[2rem]"
            />
          </div>
          <div className="xl:flex xl:flex-wrap md:flex md:flex-wrap flex mx-6 pb-6  flex-row place-content-center mr-10  xl:mr-24 gap-12">
            <div className="xl:w-44 xl:h-12 md:w-44 md:h-12 rounded-xl md:mt-10 xl:before:mt-10 xl:mb-5 md:mb-5  text-center xl:text-2xl md:text-2xl text-xl text-blue font-bold mt-6 border-4 border-blue   bg-white w-[8rem] h-8">
              Cancel
            </div>
            <button
              type="submit"
              className="xl:w-44 xl:h-12 md:w-44 md:h-12 rounded-xl md:mt-10 xl:before:mt-10 xl:mb-5 md:mb-5  text-center xl:text-2xl md:text-2xl text-xl text-blue font-bold border-4 border-blue mt-6  bg-white w-[8rem] h-8"
            >
              Save
            </button>
          </div>
          <div></div>
        </div>
      </form>
    </div>
  );
};
export default ProfileEdit;
