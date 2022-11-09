import { useState } from "react";
import React from "react";
import Select from "react-select";
import { IconButton } from "rsuite";
import { Edit, Send } from "@rsuite/icons";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { ToastContainer, toast } from 'react-toastify';
import { collection, doc, onSnapshot, updateDoc, orderBy } from "firebase/firestore";
import { db, auth,storage } from "../firebase";

const ProfileEdit = ({ username, photoUrl, electronicMail }) => {
  const gradelist = [
    {
      value: "10th",
      label: "10th",
    },
    {
      value: "12th",
      label: "12th",
    },
    {
      value: "Diploma",
      label: "Diploma",
    },
    {
      value: "Degree",
      label: "Degree",
    },
  ];
  const Gender = [
    {
      value: "Male",
      label: "Male",
    },
    {
      value: "Female",
      label: "Female",
    },
  ];
  const state = [
    {
      value: "Andhra Pradesh",
      label: "Andhra Pradesh",
    },
    {
      value: "Arunachal Pradesh",
      label: "Arunachal Pradesh",
    },
    {
      value: "Assam",
      label: "Assam",
    },
    {
      value: "Bihar",
      label: "Bihar",
    },
    {
      value: "Chhattisgarh",
      label: "Chhattisgarh",
    },
    {
      value: "Goa",
      label: "Goa",
    },
    {
      value: "Gujarat",
      label: "Gujarat",
    },
    {
      value: "Haryana",
      label: "Haryana",
    },
    {
      value: "Himachal Pradesh",
      label: "Himachal Pradesh",
    },
    {
      value: "Jammu and Kashmir",
      label: "Jammu and Kashmir",
    },
    {
      value: "Jharkhand",
      label: "Jharkhand",
    },
    {
      value: "Karnataka",
      label: "Karnataka",
    },
    {
      value: "Kerala",
      label: "Kerala",
    },
    {
      value: "Madhya Pradesh",
      label: "Madhya Pradesh",
    },
    {
      value: "Maharashtra",
      label: "Maharashtra",
    },
    {
      value: "Manipur",
      label: "Manipur",
    },
    {
      value: "Meghalaya",
      label: "Meghalaya",
    },
    {
      value: "Mizoram",
      label: "Mizoram",
    },
    {
      value: "Nagaland",
      label: "Nagaland",
    },
    {
      value: "Odisha",
      label: "Odisha",
    },
    {
      value: "Punjab",
      label: "Punjab",
    },
    {
      value: "Rajasthan",
      label: "Rajasthan",
    },
    {
      value: "Sikkim",
      label: "Sikkim",
    },
    {
      value: "Tamil Nadu",
      label: "Tamil Nadu",
    },
    {
      value: "Telangana",
      label: "Telangana",
    },
    {
      value: "Tripura",
      label: "Tripura",
    },
    {
      value: "Uttar Pradesh",
      label: "Uttar Pradesh",
    },
    {
      value: "Uttarakhand",
      label: "Uttarakhand",
    },
    {
      value: "West Bengal",
      label: "West Bengal",
    },
  ];

  const [notify, setNotify] = useState();
  const [png, setPng] = useState();

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

  const [values, setValues] = useState({
    fname: "",
    lname: "",
    gender: Gender.value,
    email: "",
    phone: "",
    add: "",
    city: "",
    state: state.value,
    instAdr: "",
    grade: gradelist.value,
    phone: "",

  });

  console.log(values);
  const [pngFile, setPngFile] = useState(null);
  const [pngFileError, setPngFileError] = useState("");

  const handlePngFileChange = (e) => {
    setPngFile(e.target.files[0]);
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    const storageRef = ref(storage, `files/${pngFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, pngFile);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
      },
      error => {
        console.log(error);
        setNotify(toast("File Uploading Failed!"))

      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
          console.log("done");

          await updateDoc(doc(db, 'users', auth.currentUser.uid), {
            fname: values.fname,
            lname: values.lname,
            gender: values.gender,
            email: values.email,
            phone: values.phone,
            address: values.add,
            city: values.city,
            state: values.state,
            institution: values.instAdr,
            grade: values.grade,
            photoURL: url,

          });
          setNotify(toast("Profile Updated!"));
          setPngFile(null);
          setValues({
            fname: "",
            lname: "",
            gender: Gender.value,
            email: "",
            phone: "",
            add: "",
            city: "",
            state: state.value,
            instAdr: "",
            grade: gradelist.value,
            
          });

        });

      }
    );

  }

  return (
    <div>
      <form onSubmit={handleUpdate}>
        <div className=" bg-[#6788D3]  ">
          <div className="flex flex-col items-center justify-center">
            <div className="md:flex md:flex-wrap xl:flex xl:flex-wrap justify-center  xl:justify-center md:justify-center">
              <div className="  mt-[6rem] md:mt-[3rem]  ">
                <h1 className=" text-base  font-bold  md:text-2xl lg:text-3xl text-center text-white leading-loose xl:mr-4 ">
                  {username}
                </h1>
                <h1 className=" text-sm lg:text-base text-center mt-[-1.9rem] md:flex md:flex-wrap md:mt-[0.4rem] xl:mr-[4rem] lg:mr-[1rem] text-white">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6  ml-[1rem]   h-6 xl:mr-2 md:mr-2 lg:ml-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  {electronicMail}
                </h1>
              </div>
        

              <IconButton
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 w-[2rem] h-[2rem]  text-center  justify-center font-extrabold font-poppins text-xl mt-[3.5rem] absolute ml-[10.5rem] flex text-black bg-[#EAECF0] rounded-[5rem]  md:w-[2rem] md:h-[2rem] md:text-xl md:mt-[6rem] md:ml-[10rem] xl:mb-[3rem] xl:ml-[26rem] lg:ml-[14rem] lg:w-[2.5rem] lg:h-[2.5rem] lg:text-2xl lg:pt-2 lg:mt-[7rem] "
                // onClick={handlePngFileChange}
                aria-label="upload picture"

              >
                <label htmlFor="image-upload" className="lg:mt-[-0.5rem]">
                <Edit />
                </label>
                <input type="file" id="image-upload" accept="image/png" style={{ display: 'none' }} onChange={handlePngFileChange} />
              </IconButton>
              <div>{pngFileError}</div>
              <div className=" flex flex-wrap">
                <img
                  src={photoUrl}
                  alt="..."
                  className="shadow-lg rounded-full w-[4rem] mt-4 mr-42 py-0 h-auto mx-[8rem] align-middle border-none 
                  xl:mt-10 xl:ml-[-0.5rem] xl:py-0 md:h-[6rem] md:w-[6rem] md:ml-[1rem] md:border-none md:mr-16 
                   md:mt-[2rem]  md:py-0 
                  lg:shadow-lg lg:rounded-full lg:w-[6rem] lg:mt-10  lg:py-0 lg:h-auto"
                />
              </div>
            </div>
          </div>
          <div data-aos="fade-right" className="sm:mt-4 lg:mt-10 md:px-8 lg:px-[5rem] flex-col mx-4 sm:grid sm:grid-cols-2 px-4 justify-center md:justify-center  mt-4  sm:gap-x-7 sm:gap-y-2 space-y-4 ">
            <input
              type="text"
              placeholder="First name"
              name="Firstname"
              className="  bg-white  bg-opacity-20 w-full  py-1 lg:py-3 placeholder-white mt-6 sm:mt-4  px-5  rounded-[2rem] "
              onChange={event => setValues((prev => ({ ...prev, fname: event.target.value })))}
            />
            <input
              type="text"
              placeholder="Last name"
              name="Lastname"
              className=" bg-white lg:py-3   bg-opacity-20 w-full placeholder-white py-1 px-5 rounded-[2rem]"
              onChange={event => setValues((prev => ({ ...prev, lname: event.target.value })))}
            />

            <div>
              <Select
                options={Gender}
                theme={customTheme}
                styles={customStyles}
                required
                name="Gender"
                onChange={event => setValues((prev => ({ ...prev, gender: event.value })))}
                placeholder="Gender"
                placeholderTextColor="#6495ed"
                className="   text-white text-sm rounded-[2rem]  w-full"
              ></Select>
            </div>

            <div>
              <Select
                options={state}
                theme={customTheme}
                styles={customStyles}
                required
                pattern="\S+.*"
                onChange={event => setValues((prev => ({ ...prev, state: event.value })))}
                placeholder="State"
                name="State"
                className="  text-white  rounded-[2rem]"
              ></Select>
            </div>

            <input
              type="text"
              placeholder="City"
              name="City"
              pattern="\S+.*"
              className=" bg-white  bg-opacity-20 placeholder-white lg:py-3   w-full py-1 px-5 rounded-[2rem]"
              onChange={event => setValues((prev => ({ ...prev, city: event.target.value })))}
            />

            <div className="flex flex-wrap w-full flex-col">
              <input
                type="email"
                name="Email"
                placeholder="Mail-ID"
                className="  bg-white  bg-opacity-20 placeholder-white py-1 lg:py-3 px-5 rounded-[2rem]"
                pattern="\S+.*"
                onChange={event => setValues((prev => ({ ...prev, email: event.target.value })))}
              />
            </div>
            <input
              type="text"
              name="Edname"
              pattern="\S+.*"
              placeholder="Eduaction/Institution Name"
              className="w-full py-1  bg-white  bg-opacity-20 placeholder-white lg:py-3  px-5 rounded-[2rem]"
              onChange={event => setValues((prev => ({ ...prev, instAdr: event.target.value })))}
            />
            <div className="flex flex-wrap  ">
              <input
                type="text"
                name="Address"
                placeholder="Eduacation/Institution Address"
                aria-multiline="true"
                pattern="\S+.*"
                className=" w-full py-1 bg-white  lg:py-3 bg-opacity-20 placeholder-white px-5 rounded-[2rem]"
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, addr: event.target.value }))
                }
              />
            </div>
            <div>
              <Select
                options={gradelist}
                theme={customTheme}
                styles={customStyles}
                required
                pattern="\S+.*"
                onChange={event => setValues((prev => ({ ...prev, grade: event.value })))}
                placeholder=" Grade"
                name="Grade"
                className="text-white w-full   rounded-[2rem]"
              ></Select>
            </div>
            <div className="flex flex-wrap">
              <input
                type="text"
                placeholder="Phone no.. +91"
                name="phone"
                pattern="\S+.*"
                className="   bg-white lg:py-3   bg-opacity-20 placeholder-white w-full py-1 px-5 rounded-[2rem]"
                onChange={event => setValues((prev => ({ ...prev, phone: event.target.value })))}
              />
            </div>

            <input
              type="text"
              placeholder="I heard about Modervate from"
              className=" w-full py-1  lg:py-3 col-span-full sm:w-1/2 sm:place-self-center bg-white  bg-opacity-20 placeholder-white  px-5 rounded-[2rem]"
            />
          </div>  
          <div className="py-8 flex justify-center items-center gap-4 md:gap-10">
            <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 rounded-xl  px-2 text-center xl:text-xl md:text-xl text-base text-blue font-bold lg:font-extrabold border-4 border-blue   bg-white ">
              Cancel
            </button>
            <button type="submit" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 rounded-xl  px-3 text-center xl:text-xl md:text-xl text-base text-blue font-bold lg:font-extrabold border-4 border-blue   bg-white ">
              Save
            </button>
          </div>
          <ToastContainer/>
          </div>
      </form>
    </div>
  );
};
export default ProfileEdit;
