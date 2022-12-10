import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth, db } from "../firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GithubAuthProvider,
  GoogleAuthProvider,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import { toast, ToastContainer } from "react-toastify";
import { setDoc, serverTimestamp, doc } from "firebase/firestore";
import { sendm } from "../Email.js";

// import { createTransport } from "nodemailer";

const Login = () => {
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  // const [profileUrl, setProfileUrl] = useState("https://i.ibb.co/3MH6BD3/profile.png");

  const [error, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.email || !values.password) {
      setErrorMsg(toast("Please fill all the fields"));
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    setLoading(false);
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        navigate("/dashboard");
        setLoading(true);
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setLoading(true);
        setErrorMsg(toast(err.message));
      });
  };

  const signInWithGoogle = () => {
    setLoading(false);
    signInWithPopup(auth, new GoogleAuthProvider())
      .then(async (res) => {
        toast("Successfully signed in with Google!");
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: user.displayName,
        });

        sendm();
        navigate("/dashboard");
        setLoading(true);
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setLoading(true);
        setErrorMsg(toast(err.message));
      });
  };

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "haresh.personal4@gmail.com",
//       pass: "thkeijnrnzogjlpd",
//     },
//     tls: {
//       rejectUnauthorized: false,
//     },
//   });

  const signInWithGithub = () => {
    setLoading(false);
    signInWithPopup(auth, new GithubAuthProvider())
      .then(async (res) => {
        toast("Successfully signed in with Github!");
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

  // ManasCode End

  return (
    <div className="w-screen h-full">
      <div className="mx-4 flex-col justify-center w-auto h-screen, md:mx-4 lg:mx-8 pt-2">
        <div
          data-aos="fade-left"
          className=" float-none md:float-right flex flex-col items-center justify-center md:w-1/2 lg:w-2/5 py-4 sm:mx-14 md:mx-4 lg:mx-2 lg:py-5  xl:py-14 my-4 lg:my-8 bg-white/30 rounded-[2rem] lg:rounded-[4rem] xl:rounded-[5rem]  border-2 border-offwhite shadow-lg xl:1/3"
        >
          <h1 className="sm:text-2xl sm:mt-[4rem] md:my-[2rem] mt-[2rem]   md:text-2xl lg:text-3xl xl:text-4xl text-xl font-extrabold poppins  text-orange">
            Login Account
          </h1>
          <div className="flex gap-2 lg:gap-8 ">
            <button
              onClick={signInWithGoogle}
              className="items-center justify-center flex m-5 p-1 xl:p-3 w-auto border-[0.1rem] lg:border-[0.2rem] border-grey border-solid hover:bg-offwhite/30 rounded-[0.5rem] lg:rounded-2xl"
            >
              <img
                className="w-5 lg:w-6 xl:w-8 m-1"
                src="https://i.ibb.co/ccpyr20/google.png"
                alt="img desc"
              />
              <span className="text-grey text-xs md:px-2 lg:text-base xl:text-lg traking-tight lg:tracking-normal">
                Sign in with Google
              </span>
            </button>
            <button
              onClick={signInWithGithub}
              className="items-center justify-center flex  m-5  p-1 xl:p-3 w-auto border-[0.1rem] lg:border-[0.2rem] border-grey border-solid hover:bg-offwhite/30 rounded-[0.5rem] lg:rounded-2xl"
            >
              <img
                className="w-5 lg:w-6 xl:w-8 m-1"
                src="https://i.ibb.co/z8SL7zX/icons8-github-48.png"
                alt="img desc"
              />
              <span className="text-grey text-xs md:px-2 lg:text-base xl:text-lg traking-tight lg:tracking-normal">
                Sign in with Github
              </span>
            </button>
          </div>
          <div className="flex">
            <span className="items-center text-grey tracking-[0.3em]  text-xs lg:text-xl xl:text-2xl lg:mt-4 font-poppins">
              -OR-
            </span>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center w-full gap-4  xl:gap-6 lg:mt-6 xl:px-12"
          >
            <div className="relative w-full px-10" id="form">
              <input
                type="email"
                name="email"
                id="email"
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, email: event.target.value }))
                }
                className="border-b-2 shadow-sm border-grey bg-white/0 w-full py-2 focus:outline-none focus:shadow-md focus:border-b-blue focus:border-b-2 transition-colors peer"
                placeholder="Email"
                autoComplete="off"
                required
                pattern="\S+.*"
              />
            </div>
            <div className="relative w-full px-10">
              <input
                type="password"
                name="password"
                id="password"
                onChange={(event) =>
                  setValues((prev) => ({
                    ...prev,
                    password: event.target.value,
                  }))
                }
                className="border-b-2 shadow-sm border-grey bg-white/0 w-full py-2 focus:outline-none focus:shadow-md focus:border-b-blue focus:border-b-2 transition-colors peer"
                autoComplete="off"
                placeholder="Password"
                required
                pattern="\S+.*"
              />
            </div>
            <div className="relative w-full px-12">
              <button
                disabled={submitButtonDisabled}
                className="w-full p-1 my-4 sm:my-8 lg:my-6 xl:my-8 font-bold lg:extrabold xl:font-extrabold font-poppins text-sm sm:text-sm md:text-sm lg:text-xl xl:text-2xl text-white bg-blue rounded-[0.3rem] hover:bg-lb focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 sm:text-2xl"
              >
                LOGIN ACCOUNT
              </button>
            </div>
            {/* <p className="font-bold text-[0.75rem] text-red-500">{errorMsg}</p> */}
            <ToastContainer />
            <Link to="/register">
              <p className="font-poppins text-xs lg:text-sm xl:text-2xl items-center">
                <span className=" text-grey  hover:underline hover:decoration-grey">
                  Don't have an account?
                </span>
                <span className=" text-orange thover:underline hover:decoration-orange">
                  {" "}
                  Sign Up
                </span>
              </p>
            </Link>
            <Link to="/forgot-pass">
              <p className="font-poppins text-sm items-center">
                <span className=" text-grey hover:underline hover:decoration-grey">
                  Forgot Password?
                </span>
              </p>
            </Link>
          </form>
        </div>

        <div className="h-screen hidden md:block lg:block md:w-1/2 xl:2/3">
          <div className="font-cambria text-blue ml-6  mt-6 text-5xl md:text-2xl lg:text-4xl xl:text-5xl  tracking-wider">
            Get Started
          </div>
          <div className="font-cambria text-blue ml-6   text-5xl md:text-2xl lg:text-4xl xl:text-5xl tracking-wider">
            {" "}
            With The{" "}
          </div>
          <div className="font-cambria  text-6xl ml-6  md:text-3xl lg:text-5xl xl:text-6xl  text-orange tracking-wider">
            {" "}
            Big Thing
          </div>
          <img
            data-aos="fade-right"
            className="float-left w-[30rem] md:w-[20rem] lg:w-[40rem] xl:w-[45rem] h-[22rem] md:h-[22rem] lg:h-[32rem] xl:h-[38rem] object-bottom "
            src="https://i.ibb.co/71DDfsV/Mobile-login-cuate-1.png"
            alt="img desc"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
