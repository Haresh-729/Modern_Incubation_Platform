import React, { useState } from "react";
import Select from "react-select";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { auth } from "../firebase";
import { ToastContainer, toast } from "react-toastify";
import { Oval } from "react-loader-spinner";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GRegister from "../Group/GRegister";
import axios from "axios";
import greet from "../assets/greet.png";
// import nodemailer from "nodemailer";

const Register = () => {
  const navigate = useNavigate();
  // const transporter = nodemailer.createTransport({
  //     service: "gmail",
  //     auth: {
  //       user: "haresh.personal4@gmail.com",
  //       pass: "thkeijnrnzogjlpd",
  //     },
  //     tls: {
  //       rejectUnauthorized: false,
  //     },
  //   });

  const options = [
    { value: "student", label: "Student" },
    { value: "individual", label: "Individual" },
    { value: "organization", label: "Organization" },
    { value: "institute", label: "Institute" },
  ];

//   const submitEmail = async (e) => {
//     e.preventDefault();
//     console.log({ mailerState });
//     const response = await fetch("http://localhost:3001/send", {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify({ mailerState }),
//     })
//   };

  // const [cate,setcate] = useState(false);

  // const [result,ddlvalue]=useState(options.label)
  //     const handleRoute = e =>{
  //         if(e.value === "organization" || e.value === "institute"){
  //             setcate(true);
  //         }
  // {cate?(navigate("/groupregister")):null}
  // const handleRoute = e => {
  //     if(options.values === "Organization" && options.values === "Institute"){
  //         navigate("/groupregister");
  //     }

  const [values, setValues] = useState({
    category: options.value,
    name: "",
    email: "",
    password: "",
  });
  if (values.category === "organization" || values.category === "institute") {
    navigate("/groupregister", { state: values.category });
  }

  const [error, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const [ppUrl, setPpUrl] = useState("https://i.ibb.co/3MH6BD3/profile.png");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(false);
    if (!values.category || !values.name || !values.email || !values.password) {
      setErrorMsg(toast("Please fill all the fields"));
      setLoading(true);
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    // setPpUrl("https://i.ibb.co/3MH6BD3/profile.png");
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        const formDataCopy = { ...values };
        delete formDataCopy.password;
        formDataCopy.timestamp = serverTimestamp();
        formDataCopy.photoURL = ppUrl;
        console.log(formDataCopy);

        await setDoc(doc(db, "users", user.uid), formDataCopy);
        axios.post(
          "https://api.emailjs.com/api/v1.0/email/send/contact_service",
          (result) => {
            console.log(result);
          }
        );

        navigate("/dashboard");
        setPpUrl("");
        setLoading(true);
        submitEmail();
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setLoading(true);
        setErrorMsg(toast(err.message));
      });
  };

  const signUpWithGoogle = () => {
    setSubmitButtonDisabled(true);
    setLoading(false);
    signInWithPopup(auth, new GoogleAuthProvider())
      .then(async (res) => {
        toast("Successfully signed in with google!");
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: user.displayName,
        });
        await setDoc(doc(db, "users", user.uid), {
          category: "individual",
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          timestamp: serverTimestamp(),
        });
        // console.log(ppUrl);
        navigate("/dashboard");
        // setLoading(true);
        // transporter.sendMail({
        //   from: '"Haresh Kurade" <haresh.personal4@gmail.com>', // sender address
        //   to: "kuradeharesh4002@gmail.com", // list of receivers
        //   subject: "Welcome To Modernvate ✔", // Subject line
        //   text: "Your Modernvate account created successfully...Lets get started with Modernvate...!", // plain text body
        //   html: "<b>There is a new article. It's about sending emails, check it out!</b>", // html body
        // });
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setLoading(true);
        setErrorMsg(toast(err.message));
      });
  };

  const signUpWithGithub = () => {
    setSubmitButtonDisabled(true);
    setLoading(false);
    signInWithPopup(auth, new GithubAuthProvider())
      .then(async (res) => {
        toast("Successfully signed in with github!");
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: user.displayName,
        });
        // console.log(user);

        await setDoc(doc(db, "users", user.uid), {
          category: "individual",
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          timestamp: serverTimestamp(),
        });
        navigate("/dashboard");
        setLoading(true);
        // transporter.sendMail({
        //   from: '"Haresh Kurade" <haresh.personal4@gmail.com>', // sender address
        //   to: "kuradeharesh4002@gmail.com", // list of receivers
        //   subject: "Welcome To Modernvate ✔", // Subject line
        //   text: "Your Modernvate account created successfully...Lets get started with Modernvate...!", // plain text body
        //   html: "<b>There is a new article. It's about sending emails, check it out!</b>", // html body
        // });
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setLoading(true);
        setErrorMsg(toast(err.message));
      });
  };

  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      borderBottom: "1px dotted pink",
      color: "grey",
      padding: 10,
      margin: 0,
      backgroundColor: "#D9E4FA",
      borderRadius: "0px 0px 20px 20px",
    }),
    control: (provided, style) => ({
      ...provided,
      backgroundColor: "white/0",
      borderRadius: "0px 0px 0px 0px",
      border: "2px solid #7587A4",
      // : 'border: 2px solid blue',
    }),
  };

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
  const [guDiv, setRes] = useState(false);
  return (
    <div className="w-screen h-full">
      <div className="mx-4 flex-col justify-center w-auto h-auto, md:mx-4 lg:mx-8 pt-2">
        <div
          data-aos="fade-left"
          className="float-none md:float-right flex flex-col items-center justify-center md:w-1/2 lg:w-2/5 py-4 sm:mx-14 md:mx-4 lg:mx-2 lg:py-5  xl:py-14 my-4 lg:my-8 bg-white/30 rounded-[2rem] lg:rounded-[4rem] xl:rounded-[5rem]  border-2 border-offwhite shadow-lg xl:1/3"
        >
          <h1 className="sm:text-2xl sm:mt-[4rem] md:my-[2rem] mt-[2rem]   md:text-2xl lg:text-3xl xl:text-4xl text-xl font-extrabold poppins  text-orange">
            Register Account
          </h1>
          <div className="flex gap-2 lg:gap-8">
            <button
              onClick={signUpWithGoogle}
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 items-center justify-center flex m-5 p-1 xl:p-3 w-auto border-[0.1rem] lg:border-[0.2rem] border-grey border-solid hover:bg-offwhite/30 rounded-[0.5rem] lg:rounded-2xl"
            >
              <img
                className="w-4 lg:w-6 xl:w-8 m-1"
                src="https://i.ibb.co/ccpyr20/google.png"
                alt="img desc"
              />
              <span className="text-grey text-xs md:px-2 lg:text-base xl:text-lg traking-tight lg:tracking-normal">
                Sign in with Google
              </span>
            </button>
            <button
              onClick={signUpWithGithub}
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 items-center justify-center flex  m-5  p-1 xl:p-3 w-auto border-[0.1rem] lg:border-[0.2rem] border-grey border-solid hover:bg-offwhite/30 rounded-[0.5rem] lg:rounded-2xl"
            >
              <img
                className="w-4 lg:w-6 xl:w-8 m-1"
                src="https://i.ibb.co/z8SL7zX/icons8-github-48.png"
                alt="img desc"
              />
              <span className="text-grey text-xs md:px-2 lg:text-base xl:text-lg traking-tight lg:tracking-normal">
                Sign in with Github
              </span>
            </button>
          </div>
          <div className="flex">
            <span className=" items-center text-grey tracking-[0.3em] pb-2 text-xs lg:text-xl xl:text-2xl lg:mt-4 font-poppins">
              -OR-
            </span>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center w-full gap-4  xl:gap-4 lg:mt-6 xl:px-12"
          >
            <div className="relative w-full px-10">
              <Select
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, category: event.value }))
                }
                options={options}
                theme={customTheme}
                id="category"
                styles={customStyles}
                required
                pattern="\S+.*"
              />
            </div>
            <div className="relative w-full px-10" id="form">
              <input
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, name: event.target.value }))
                }
                type="text"
                name="name"
                id="name"
                className=" border-b-2 border-grey shadow-sm bg-white/0 w-full py-2 focus:outline-none focus:shadow-md focus:border-b-blue focus:border-b-2 transition-colors"
                placeholder="Full Name"
                autoComplete="on"
                required
                pattern="\S+.*"
              />
            </div>
            <div className="relative w-full px-10" id="form">
              <input
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, email: event.target.value }))
                }
                type="email"
                name="email"
                id="email"
                className="border-b-2 border-grey shadow-sm bg-white/0 w-full py-2 focus:outline-none focus:shadow-md focus:border-b-blue focus:border-b-2 transition-colors"
                placeholder="Email"
                autoComplete="on"
                required
                pattern="\S+.*"
              />
            </div>
            <div className="relative w-full px-10">
              <input
                onChange={(event) =>
                  setValues((prev) => ({
                    ...prev,
                    password: event.target.value,
                  }))
                }
                type="password"
                name="password"
                id="password"
                className=" border-b-2 border-grey shadow-sm bg-white/0 w-full py-2 focus:outline-none focus:shadow-md focus:border-b-blue focus:border-b-2 transition-colors"
                autoComplete="on"
                placeholder="Password"
                required
                pattern="\S+.*"
              />
            </div>
            <div className="relative w-full px-12">
              <button
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 w-full p-1 my-4 sm:my-8 lg:my-4 xl:my-8 font-bold lg:extrabold xl:font-extrabold font-poppins text-sm sm:text-sm md:text-sm lg:text-xl xl:text-2xl text-white bg-blue rounded-[0.3rem] hover:bg-lb focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 sm:text-2xl"
                disabled={submitButtonDisabled}
              >
                REGISTER ACCOUNT
              </button>
            </div>
            <ToastContainer />
            {/* <p className="font-bold text-[0.75rem] text-red-500">{errorMsg}</p> */}
            <Link to="/login">
              <p className="font-poppins text-xs lg:text-sm xl:text-2xl items-center">
                <span className=" text-grey hover:underline hover:decoration-grey">
                  Already have an account?
                </span>
                <span className=" text-orange hover:underline hover:decoration-orange">
                  {" "}
                  Sign In
                </span>
              </p>
            </Link>
          </form>
        </div>
        <div className="h-screen hidden md:block lg:block md:w-1/2 xl:2/3">
          <div className="font-cambria text-blue ml-6  mt-6 text-5xl md:text-2xl lg:text-4xl xl:text-5xl  tracking-wider">
            It's Never too late to
          </div>
          <div className="font-cambria text-blue ml-6   text-5xl md:text-2xl lg:text-4xl xl:text-5xl tracking-wider">
            {" "}
            become an{" "}
          </div>
          <div className="font-cambria  text-6xl ml-6  md:text-3xl lg:text-5xl xl:text-6xl  text-orange tracking-wider">
            Entrepreneur
          </div>
          <img
            data-aos="fade-right"
            className="float-left w-[30rem] md:w-[20rem] lg:w-[40rem] xl:w-[45rem] h-[22rem] md:h-[22rem] lg:h-[32rem] xl:h-[38rem] object-bottom"
            src="https://i.ibb.co/WDFcrf9/register-Img.png"
            alt="img desc"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
