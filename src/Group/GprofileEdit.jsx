import { useState } from "react";
import React from "react";
import Select from "react-select";
import { IconButton } from "rsuite";
import { Edit, Send } from "@rsuite/icons";
import { useMemo } from "react";
import countryList from "react-select-country-list";
import { Country, State, City } from "country-state-city";
import { useEffect } from "react";
import { useFormik } from "formik";

const GUINProfileEdit = () => {
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

  const addressFromik = useFormik({
    initialValues: {
      country: "India",
      state: null,
      city: null,
    },
    onSubmit: (values) => console.log(JSON.stringify(values)),
  });

  const countries = Country.getAllCountries();

  const updatedCountries = countries.map((country) => ({
    label: country.name,
    value: country.id,
    ...country,
  }));
  const updatedStates = (countryId) =>
    State.getStatesOfCountry(countryId).map((state) => ({
      label: state.name,
      value: state.id,
      ...state,
    }));

  const { values, handleSubmit, setFieldValue, setValues } = addressFromik;

  useEffect(() => {}, [values]);

  const options = [
    {
      label: "Type",
      value: "type",
    },
    {
      label: "Pre-Primary School",
      value: "pre-primary school",
    },
    {
      label: "Primary School",
      value: "primary school",
    },
    {
      label: "Secondary School",
      value: "secondary school",
    },
    {
      label: "Institute",
      value: "institute",
    },
    {
      label: "Organization",
      value: "organization",
    },
  ];

  return (
    <div>
      <form onSubmit={editHandler}>
        <div className=" bg-[#6788D3]  w-full h-full">
          <div className="">
            <div class="flex flex-wrap   justify-center">
              <h1 className="text-4xl text-white pt-4 font-bold">
                Institute/Organization
              </h1>
            </div>
          </div>
          <div className=" flex flex-wrap justify-center mx-32 mt-24 w-[80rem] gap-12">
            <input
              type="text"
              placeholder="Institute/Organization Name"
              name="Firstname"
              className="w-[32rem] h-[3rem] bg-white  bg-opacity-20 placeholder-white  px-5  rounded-[2rem] "
              // onChange={firstHandler}
            />
            {firstErr ? <span>Not valid</span> : ""}
            <input
              type="text"
              placeholder="Principals/Head’s Name"
              name="Lastname"
              className="w-[32rem] h-[3rem] bg-white  bg-opacity-20 placeholder-white  px-5 rounded-[2rem]"
              // onChange={lastHandler}
            />
            {lastErr ? <span>Not valid</span> : ""}
            <input
              type="text"
              placeholder="Institute/Organization Website URL"
              name="Lastname"
              className="w-[32rem] h-[3rem] bg-white  bg-opacity-20 placeholder-white  px-5 rounded-[2rem]"
              // onChange={lastHandler}
            />
            <div className="flex flex-wrap w-[32rem]">
              <input
                type="email"
                name="Email"
                placeholder="Principals/Head’s Mail id"
                className="w-[32rem] h-[3rem] bg-white  bg-opacity-20 placeholder-white  px-5 rounded-[2rem]"
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

            <div className="flex flex-wrap w-[32rem]">
              <input
                type="text"
                name="Address"
                placeholder="Institute/Organization Address"
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

            <div className="flex flex-wrap w-[32rem]">
              <input
                type="text"
                placeholder="Principals/Head’s Contact no."
                name="phone"
                className="w-[32rem] h-[3rem] bg-white  bg-opacity-20 placeholder-white  px-5 rounded-[2rem]"
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

            <Select
              id="country"
              name="country"
              label="country"
              options={updatedCountries}
              value={values.country}
              onChange={(value) => {
                setValues({ country: value, state: null, city: null }, false);
              }}
              placeholder="Country"
              className="w-[20rem] pl-8"
            />
            <Select
              id="state"
              name="state"
              options={updatedStates(
                values.country ? values.country.value : null
              )}
              value={values.state}
              onChange={(value) => {
                setValues({ state: value, city: null }, false);
              }}
              placeholder="State"
              className="w-[20rem]  "
            />

            <select
              placeholder="Type"
              className="w-[20rem] rounded-sm text-gray-600 "
            >
              {options.map((option) => (
                <option value={option.value}>&nbsp;{option.label}</option>
              ))}
            </select>

            <input
              type="password"
              placeholder="Password"
              className="w-[24rem] h-[3rem] bg-white  justify-center  bg-opacity-20 placeholder-white  px-5 rounded-[2rem]"
            />
          </div>
          <div className="flex flex-wrap place-content-center mr-10 gap-12">
            <div className="w-44 h-12 rounded-xl mt-10 mb-5 text-center text-2xl text-blue font-bold border-4 border-blue bg-white">
              Cancel
            </div>
            <button
              type="submit"
              className="w-44 h-12 rounded-xl mb-5 mt-10 text-center text-blue font-bold border-blue border-4 text-2xl bg-white"
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
export default GUINProfileEdit;
