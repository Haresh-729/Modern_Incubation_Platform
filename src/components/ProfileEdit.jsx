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

  // function firstHandler(e) {
  //   let item = e.target.value;
  //   if (item.length < 0) {
  //     SetFirstErr(true);
  //   } else {
  //     SetFirstErr(false);
  //   }
  //   SetFirst(item);
  // }
  // function lastHandler(e) {
  //   let item = e.target.value;
  //   if (item.length > 10) {
  //     SetLastErr(true);
  //   } else {
  //     SetLastErr(false);
  //   }
  //   SetLast(item);
  // }
  // function stateHandler(e) {
  //   let item = e.target.value;
  //   if (item.length > 10) {
  //     SetStateErr(true);
  //   } else {
  //     SetStateErr(false);
  //   }
  //   SetState(item);
  // }
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
  // function nameHandler(e) {
  //   let item = e.target.value;
  //   if (item.length > 10) {
  //     SetNameErr(true);
  //   } else {
  //     SetNameErr(false);
  //   }
  //   SetName(item);
  // }
  // function cityHandler(e) {
  //   let item = e.target.value;
  //   if (item.length > 10) {
  //     SetCityErr(true);
  //   } else {
  //     SetCityErr(false);
  //   }
  //   SetCity(item);
  // }

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
        <div className=" bg-[#6788D3]  w-screen h-full">
          <div className="">
            <div class="flex flex-wrap   justify-center">
              <div className=" mt-[6rem] mr-2  ">
                <h1 className=" text-4xl text-white leading-loose ">
                  Asim sali
                </h1>
                <h1 className=" text-xl flex flex-wrap  text-white">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 mt-1 h-6 m"
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
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 w-[3rem] h-[3rem] text-center justify-center font-extrabold font-poppins text-3xl mt-[10rem] absolute ml-28 flex text-black bg-[#EAECF0] rounded-[5rem] hover:bg-lb hover:text-white "
              ></IconButton>
              <div class=" flex flex-wrap w-40  ">
                <img
                  src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png"
                  alt="..."
                  class="shadow-lg rounded-full w-[10rem] mt-10 mr-56 py-0 h-auto align-middle border-none"
                />
              </div>
            </div>
          </div>
          <div className=" flex flex-wrap justify-center mx-32 mt-24 w-[80rem] gap-12">
            <input
              type="text"
              placeholder="First name"
              name="Firstname"
              className="w-[32rem] h-[3rem] bg-white  bg-opacity-20 placeholder-white  px-5  rounded-[2rem] "
              // onChange={firstHandler}
            />
            {firstErr ? <span>Not valid</span> : ""}
            <input
              type="text"
              placeholder="Last name"
              name="Lastname"
              className="w-[32rem] h-[3rem] bg-white  bg-opacity-20 placeholder-white  px-5 rounded-[2rem]"
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
                className="w-[32rem] h-[3rem]  text-white   px-5 rounded-[2rem]"
              ></Select>
            </div>
            <input type="text" placeholder="State" name="State" className="w-[32rem] h-[3rem]  bg-white  bg-opacity-20 placeholder-white  px-5 rounded-[2rem]"
              // onChange={stateHandler}
            />
            {stateErr ? <span>Not valid</span> : ""}
            <input type="text" placeholder="City" name="City" className="w-[32rem] h-[3rem] bg-white  bg-opacity-20 placeholder-white  px-5 rounded-[2rem]"
              // onChange={cityHandler}
            />
            {cityErr ? <span>Not valid</span> : ""}
            <div className="flex flex-wrap w-[32rem]"> 
              <input type="email" name="Email" placeholder="Mail-ID" className="w-[32rem] h-[3rem] bg-white  bg-opacity-20 placeholder-white  px-5 rounded-[2rem]" onChange={emailHandler}/>
              {emailErr ? (
                <span className="mt-2 ml-2 text-red-600 text-xl">
                  Must inculde @
                </span>
              ) : ("")}
            </div>
            <div className="flex flex-wrap w-[32rem]">
              <input
                type="text"
                name="Address"
                placeholder="Eduacation/Institution Address"
                aria-multiline="true"
                className="w-[32rem] h-[5rem] bg-white  bg-opacity-20 placeholder-white px-5 rounded-[2rem]"
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
            <input type="text" name="Edname" placeholder="Eduaction/Institution Name" className="w-[32rem] h-[3rem] bg-white  bg-opacity-20 placeholder-white  px-5 rounded-[2rem]"
              // onChange={nameHandler}
            />
            {nameErr ? <span>Not valid</span> : ""}
            <div>
              <Select options={gradelist} theme={customTheme} styles={customStyles} required pattern="\S+.*" onChange={ddlHandler} placeholder=" Grade" name="Grade" className="w-[32rem] h-[3rem]  text-white   px-5 rounded-[2rem]"></Select>
            </div>
            <div className="flex flex-wrap w-[32rem]">
              <input
                type="text"
                placeholder="Phone no.. +91"
                name="phone"
                className="w-[32rem] h-[3rem] bg-white  bg-opacity-20 placeholder-white  px-5 rounded-[2rem]" onChange={phoneHandler}
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
              className="w-[32rem] h-[3rem] bg-white  bg-opacity-20 placeholder-white  px-5 rounded-[2rem]"
            />
          </div>
          <div className="flex flex-wrap place-content-center mr-10 gap-12">
            <div className="w-44 h-12 rounded-xl mt-10 mb-5 text-center text-2xl text-blue font-bold border-4 border-blue bg-white">
              Cancel
            </div>
            <button type="submit" className="w-44 h-12 rounded-xl mb-5 mt-10 text-center text-blue font-bold border-blue border-4 text-2xl bg-white">
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
