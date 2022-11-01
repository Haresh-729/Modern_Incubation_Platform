import { useState } from "react";
import { Link } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import {auth} from "../firebase";


function ForgotPass() {
    const [email, setEmail]=useState('');
    const [errorMsg, setErrorMsg]=useState('');

    const onChange = (e) => {
        setEmail(e.target.value);
    }

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await sendPasswordResetEmail(auth,email);
            // toast.success("Email sent successfully!");
            setErrorMsg("Email sent");
        } catch (error) {
            // toast.error(error);
            setErrorMsg(error);
        }
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
            <div className="hidden sm:block">
                <img className="w-full h-full object-cover" src="https://i.ibb.co/71DDfsV/Mobile-login-cuate-1.png" alt=""/>
            </div>

            <div className="flex flex-col justify-center">
                <form className="max-w-[400px] w-full mx-auto bg-white/50 p-8 px-8 rounded-[4rem]">
                    <h2 className="text-4xl font-bold text-center text-blue mb-10">Forgot Password</h2>
                    <div className="flex flex-col py-2">
                        <input type="email" name="email" id="email" onChange={onChange} className="border-b-2 shadow-sm border-grey bg-white/0 w-full py-2 focus:outline-none focus:shadow-md focus:border-b-blue focus:border-b-2 transition-colors peer" placeholder='Email' autoComplete="off" required pattern="\S+.*" />
                    </div>
                    <button onClick={handleClick} className="w-full h-12 px-4 my-4 font-extrabold font-poppins text-2xl text-white bg-blue rounded-[0.3rem] hover:bg-lb focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">

                        Send Reset Link

                    </button>
                    <p className="font-bold text-[0.75rem] text-red-500">{errorMsg}</p>
                    <p>
                    <Link to='/login'>
                        
                            <span className=" text-grey hover:underline hover:decoration-grey">Log In</span>
                        
                    </Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default ForgotPass;