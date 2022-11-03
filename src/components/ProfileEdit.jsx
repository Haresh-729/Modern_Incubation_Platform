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
            phone: "",
          });

        });

      }
    );

  }

  return (
    <div>
      <form onSubmit={handleUpdate}>
        <div className=" bg-[#6788D3]  ">
          <div className="">
            <div className="md:flex md:flex-wrap xl:flex xl:flex-wrap  xl:justify-center md:justify-center">
              <div className=" mt-[6rem] mr-4  ">
                <h1 className=" text-lg xl:text-4xl  md:text-4xl lg:text-4xl text-center text-white leading-loose xl:mr-4 ">
                  {username}
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
                  {electronicMail}
                </h1>
              </div>
        

              <IconButton
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 w-[2rem] h-[2rem]  text-center  justify-center font-extrabold font-poppins text-xl mt-[4rem] absolute ml-[8rem] flex text-black bg-[#EAECF0] rounded-[5rem] xl:mr-[4rem] md:w-[2rem] md:h-[2rem] md:text-xl md:mt-[10rem]  lg:w-[3rem] lg:h-[3rem] lg:text-3xl lg:pt-2 lg:mt-[10rem] lg:mr-[1rem]"
                // onClick={handlePngFileChange}
                aria-label="upload picture"

              >
                <label htmlFor="image-upload">
                <Edit />
                </label>
                <input type="file" id="image-upload" accept="image/png" style={{ display: 'none' }} onChange={handlePngFileChange} />
              </IconButton>
              <div>{pngFileError}</div>
              <div className=" flex flex-wrap md:w-40 lg:w-40 xl:w-40   ">
                <img
                  src={photoUrl}
                  alt="..."
                  className="shadow-lg rounded-full w-[4rem] mt-4 mr-42 py-0 h-auto mx-[8rem] align-middle border-none 
                  xl:shadow-lg xl:rounded-full xl:w-[6rem] xl:mt-10 xl:ml-[-4rem] xl:py-0 md:h-[6rem] md:ml-[-1rem] md:border-none 
                  md:shadow-lg md:rounded-full md:w-[6rem] md:mt-[5rem]  md:py-0 lg:h-auto lg:align-middle lg:border-none
                  lg:shadow-lg lg:rounded-full lg:w-[6rem] lg:mt-10 lg:mr-42 lg:py-0 lg:h-auto lg:align-middle lg:border-none"
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
              onChange={event => setValues((prev => ({ ...prev, fname: event.target.value })))}
            />
            <input
              type="text"
              placeholder="Last name"
              name="Lastname"
              className="xl:w-[32rem] xl:h-[3rem]  md:w-[20rem] md:h-[3rem] bg-white  bg-opacity-20 placeholder-white mt-8 w-[17rem] h-[3rem] px-5 rounded-[2rem]"
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
                className="xl:w-[32rem] xl:h-[3rem]   text-white md:w-[20rem] md:h-[3rem]   px-5 rounded-[2rem]  mt-8 w-[17rem] h-[3rem] "
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
                className="xl:w-[32rem] xl:h-[3rem]  text-white md:w-[20rem] md:h-[3rem]  mt-8 w-[17rem] h-[3rem]    px-5 rounded-[2rem]"
              ></Select>
            </div>

            <input
              type="text"
              placeholder="City"
              name="City"
              pattern="\S+.*"
              className="xl:w-[32rem] xl:h-[3rem]  bg-white  bg-opacity-20 placeholder-white md:w-[20rem] md:h-[3rem]  mt-8 w-[17rem] h-[3rem]   px-5 rounded-[2rem]"
              onChange={event => setValues((prev => ({ ...prev, city: event.target.value })))}
            />

            <div className="flex flex-wrap xl:w-[32rem]">
              <input
                type="email"
                name="Email"
                placeholder="Mail-ID"
                className="xl:w-[32rem] xl:h-[3rem]  md:w-[20rem] md:h-[3rem]  mt-8 w-[17rem] h-[3rem]  bg-white  bg-opacity-20 placeholder-white  px-5 rounded-[2rem]"
                pattern="\S+.*"
                onChange={event => setValues((prev => ({ ...prev, email: event.target.value })))}
              />
            </div>
            <div className="flex flex-wrap xl:w-[32rem]">
              <input
                type="text"
                name="Address"
                placeholder="Eduacation/Institution Address"
                aria-multiline="true"
                pattern="\S+.*"
                className="xl:w-[32rem] xl:h-[3rem]  md:h-[3rem]  mt-8 w-[17rem] h-[3rem]   md:w-[20rem] h-[5rem] bg-white  bg-opacity-20 placeholder-white px-5 rounded-[2rem]"
                onChange={event => setValues((prev => ({ ...prev, addr: event.target.value })))}
              />
            </div>
            <input
              type="text"
              name="Edname"
              pattern="\S+.*"
              placeholder="Eduaction/Institution Name"
              className="xl:w-[32rem] xl:h-[3rem] md:w-[20rem] md:h-[3rem]  mt-8 w-[17rem] h-[3rem]  bg-white  bg-opacity-20 placeholder-white  px-5 rounded-[2rem]"
              onChange={event => setValues((prev => ({ ...prev, instAdr: event.target.value })))}
            />
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
                className="xl:w-[32rem] xl:h-[3rem]  text-white md:w-[20rem] md:h-[3rem]  mt-8 w-[17rem] h-[3rem]    px-5 rounded-[2rem]"
              ></Select>
            </div>
            <div className="flex flex-wrap xl:w-[32rem]">
              <input
                type="text"
                placeholder="Phone no.. +91"
                name="phone"
                pattern="\S+.*"
                className="xl:w-[32rem] md:w-[20rem] md:h-[3rem]  xl:h-[3rem] bg-white  mt-8 w-[17rem] h-[3rem]  bg-opacity-20 placeholder-white  px-5 rounded-[2rem]"
                onChange={event => setValues((prev => ({ ...prev, phone: event.target.value })))}
              />
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
          <ToastContainer/>

        </div>
      </form>
    </div>
  );
};
export default ProfileEdit;
