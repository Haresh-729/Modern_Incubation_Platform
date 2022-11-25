import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { Oval } from 'react-loader-spinner';
import 'react-toastify/dist/ReactToastify.css';
import {setDoc, doc, updateDoc,serverTimestamp} from "firebase/firestore";
import {db,storage,auth} from "../firebase";
import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import {useNavigate} from "react-router-dom";

function CreatePro() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    pname: "",
    heldby: "",
    desc: "",
    pimg: "",
    members:""
  });

  const [error,setErrorMsg] = useState("");
  const [loading, setLoading] = useState(true);

  const handleSubmit = async(e)=>{
    e.preventDefault();
    if(values.pname === " " ||  values.heldby === " " || values.desc ===" " || values.pimg === " " || values.members===" "){
      setErrorMsg(toast("Please fill all the fields"));
      setLoading(true);
    }
    const storageRef = ref(storage, `files/${values.pname}/${values.pimg.name}`);
    const uploadTask = uploadBytesResumable(storageRef, values.pimg);
    uploadTask.on('state_changed', (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
      }
    }, (error) => {
      setErrorMsg(toast("Error in uploading image"));
      setLoading(true);
    }, () => {
      getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
        await setDoc(doc(db, "projects",auth.currentUser.uid), {
          pname: values.pname,
          heldby: values.heldby,
          desc: values.desc,
          pimg: downloadURL,
          members:values.members,
          timestamp:serverTimestamp()
        }).then(()=>{
          setErrorMsg(toast("Project Created Successfully"));
          setLoading(true);
          navigate("/current-projects");
        }).catch((error)=>{
          setErrorMsg(toast("Error while creating project"));
          setLoading(true);
        });
      });
    });
  }
  
  console.log(values.pname)    
  console.log(values.heldby)    
  console.log(values.desc)      
  console.log(values.pimg)    
  console.log(values.members)

  return (
    <div className="bg-[#6788D3]">
      <div className="flex justify-center">
        <div className="lg:pr-28 md:pr-20 pr-3">
          <img
            className="lg:h-32 lg:w-auto md:h-24 md:w-auto h-16 w-auto"
            src="https://i.ibb.co/0XkM5mS/session.png"
          />
        </div>
        <div className="lg:text-2xl md:text-xl text-base font-bold text-white lg:pt-10 md:pt-8 pt-4">
          Create Project
        </div>
      </div>
      <div className="h-fit w-fit mx-auto">
        <form className="font-bold lg:mt-8 md:mt-4 mt-2 grid justify-items-end">
          <label className="lg:ml-0 md:ml-0 sm:ml-0 xl:ml-0 ml-4">
            Project Title:
            <input
              onChange={(event) =>
                setValues((prev) => ({ ...prev, pname: event.target.value }))
              }
              type="text"
              name="pname"
              required
              className="lg:ml-20 md:ml-16 text-white bg-offwhite bg-opacity-20 lg:rounded-xl md:rounded-xl rounded-md lg:w-72 md:w-64 w-56 lg:h-8 md:h-6 h-6 lg:p-3 md:p-2 p-1"
            />
          </label>

          <label className="lg:ml-0 md:ml-0 sm:ml-0 xl:ml-0 ml-4 mt-3">
            Held By:
            <input
              onChange={(event) =>
                setValues((prev) => ({ ...prev, heldby: event.target.value }))
              }
              type="text"
              name="heldby"
              required
              className="lg:ml-20 md:ml-16 text-white bg-offwhite bg-opacity-20 lg:rounded-xl md:rounded-xl rounded-md lg:w-72 md:w-64 w-56 lg:h-8 md:h-6 h-6 lg:mt-4 md:mt-3 lg:p-3 md:p-2 p-1"
            />
          </label>

          <label className="lg:flex md:flex lg:ml-0 md:ml-0 sm:ml-0 xl:ml-0 ml-4 mt-3">
            <span  className="lg:place-self-center md:place-self-center">
              Members:
            </span>
            <textarea
              required
              name="members"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, members: event.target.value }))
              }
              className="lg:ml-20 md:ml-16 text-white lg:h-20 md:h-16 h-14 bg-offwhite bg-opacity-20 lg:rounded-xl rounded-md md:rounded-xl lg:w-72 md:w-64 w-56 lg:mt-4 md:mt-3 lg:p-3 md:p-2 p-1"
            />
          </label>

          <label className="lg:flex md:flex lg:ml-0 md:ml-0 sm:ml-0 xl:ml-0 ml-4 mt-3">
            <span  className="lg:place-self-center md:place-self-center">
              Description:
            </span>
            <textarea
              required
              name="desc"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, desc: event.target.value }))
              }
              className="lg:ml-20 md:ml-16 text-white lg:h-20 md:h-16 h-14 bg-offwhite bg-opacity-20 lg:rounded-xl rounded-md md:rounded-xl lg:w-72 md:w-64 w-56 lg:mt-4 md:mt-3 lg:p-3 md:p-2 p-1"
            />
          </label>
          <label className="lg:flex md:flex lg:ml-0 md:ml-0 sm:ml-0 xl:ml-0 ml-4 mt-3">
            <span  className="lg:place-self-center md:place-self-center">
              Project Image:
            </span>
            <input
              type="file"
              accept="image/*"
              required
              name="desc"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, pimg: event.target.files[0] }))
              }
              className="lg:ml-20 md:ml-16 text-white bg-offwhite bg-opacity-20 lg:rounded-xl md:rounded-xl rounded-md lg:w-72 md:w-64 w-56 lg:h-10 md:h-6 h-6 md:mt-3 lg:p-3 md:p-2 p-1"
            />
          </label>

          <button
            onClick={handleSubmit}
            type="submit"
            value="Submit"
            className="place-self-center lg:my-10 md:my-8 my-6 bg-white lg:px-6 md:px-3 px-2 lg:py-1 md:py-1 py-1 lg:rounded-lg md:rounded-lg rounded-md text-blue border-2 border-blue hover:bg-blue hover:text-white"
          >
            Create
          </button>
          <ToastContainer/>
        </form>
      </div>
    </div>
  );
}
export default CreatePro;