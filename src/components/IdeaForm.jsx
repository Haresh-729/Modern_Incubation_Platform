import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import Select from "react-select";
import { storage, db } from "../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";

function IdeaForm({ username, category, photoUrl }) {
  const [notify, setNotify] = useState();
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const navigate = useNavigate();
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfFileError, setPdfFileError] = useState("");
  const [loading, setLoading] = useState(true);

  // console.log(category);
  console.log(photoUrl);
  const options = [
    { value: "incubation", label: "Incubation" },
    { value: "programming", label: "Programming" },
    { value: "professional", label: "Professional" },
    { value: "civil", label: "Civil" },
    { value: "electrical", label: "Electrical" },
    { value: "hardware", label: "Hardware" },
    { value: "other", label: "Other" },
  ];

  const [req, setReq] = useState([]);

  const getReq = (e) => {
    const { value, checked } = e.target;
    console.log(`${value} is ${checked}`);
    if (checked) {
      setReq([...req, value]);
    } else {
      setReq(req.filter((item) => item !== value));
    }
  };

  const [values, setValues] = useState({
    progress: 0,
    cat: options.value,
    title: "",
    desc: "",
    reason: "",
  });

  const filetype = ["application/pdf"];

  const handlePdfFileChange = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && filetype.includes(selectedFile.type)) {
        setPdfFile(selectedFile);
        setPdfFileError("");
        setSubmitButtonDisabled(false);
      } else {
        setPdfFile(null);
        setPdfFileError("Please select a valid file type (pdf)");
      }
    } else {
      setPdfFile(null);
      setPdfFileError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitButtonDisabled(true);
    setLoading(false);
    const storageRef = ref(storage, `files/${pdfFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, pdfFile);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setValues({ progress: progress });
      },
      (error) => {
        console.log(error);
        setNotify(toast("Idea Uploading Failed!"));
        setSubmitButtonDisabled(false);
        setLoading(true);
      },
      () => {
        if (category === "student" || category === "individual") {
          getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
            console.log("done");
            setLoading(true);
            setNotify(toast("Idea Under Verification!"));
            setSubmitButtonDisabled(false);
            await addDoc(collection(db, "ideas"), {
              cat: values.cat,
              title: values.title,
              desc: values.desc,
              pdfFile: url,
              reason: values.reason,
              req: req,
              userName: username,
              timestamp: serverTimestamp(),
              status: "under-verification",
              statusLogo: "https://i.ibb.co/W3Y9rx5/under-Verification.png",
              category: category,
              photoUrl: photoUrl,
            });
            navigate("/Idea-Review");
            setReq([]);
            setPdfFile(null);
            setValues({
              progress: 0,
              cat: options.value,
              title: "",
              desc: "",
              reason: "",
            });
          });
        } else {
          getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
            console.log("done");
            setLoading(true);
            setNotify(toast("Idea Uploaded Successfully!"));
            setSubmitButtonDisabled(false);
            await addDoc(collection(db, "ideas"), {
              cat: values.cat,
              title: values.title,
              desc: values.desc,
              pdfFile: url,
              reason: values.reason,
              req: req,
              userName: username,
              timestamp: serverTimestamp(),
              status: "verified",
              statusLogo: "https://i.ibb.co/tJR9T3x/verified.png",
              category: category,
              photoUrl: photoUrl,
            });
            navigate("/Post");
            setReq([]);
            setPdfFile(null);
            setValues({
              progress: 0,
              cat: options.value,
              title: "",
              desc: "",
              reason: "",
            });
          });
        }
      }
    );
  };

  return (
    <div className="w-full h-screen pb-5 ">
      <div>
        <div className="p-8">
          <h1 className="text-2xl text-center font-semibold text-blue">
            It's not too late to write your own ideas{" "}
          </h1>
          <h1 className="text-2xl text-center font-bold text-redish">
            UPLOAD YOUR IDEAS NOW
          </h1>
        </div>
        <div className="mx-auto w-full max-w-[550px] p-4  border-[#D9D9D9] bg-white/30 border-2 rounded-2xl">
          <form id="form" onSubmit={handleSubmit}>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3">
                <div className="mb-5">
                  <Select
                    placeholder="Idea Category"
                    className="w-full  border-b-[0.2rem] rounded-md border-[#7587A4] bg-white py-3 px-6 text-base font-medium text-[#7587A4] outline-none focus:border-blue focus:drop-shadow-2xl"
                    onChange={(event) =>
                      setValues((prev) => ({ ...prev, cat: event.value }))
                    }
                    options={options}
                    id="cat"
                    required
                  />
                </div>
              </div>
              <div className="w-full px-3 ">
                <div className="mb-5">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Idea Title"
                    className="w-full  border-b-[0.2rem] rounded-md border-[#7587A4] bg-white py-3 px-6 text-base font-medium outline-none focus:border-blue focus:shadow-md"
                    onChange={(event) =>
                      setValues((prev) => ({
                        ...prev,
                        title: event.target.value,
                      }))
                    }
                    required
                  />
                </div>
              </div>
              <div className="w-full px-3 ">
                <div className="mb-5">
                  <input
                    type="text"
                    name="description"
                    id="description"
                    placeholder="Short Description"
                    className="w-full  border-b-[0.2rem] rounded-md border-[#7587A4] bg-white py-3 px-6 text-base font-medium  outline-none focus:border-blue focus:shadow-md"
                    onChange={(event) =>
                      setValues((prev) => ({
                        ...prev,
                        desc: event.target.value,
                      }))
                    }
                    required
                  />
                </div>
              </div>
            </div>

            <div className="max-w-2xl mx-auto flex justify-center">
              <input
                className=" py-1 px-5 block w-1/2 text-sm text-white border rounded-2xl cursor-pointer bg-blue focus:outline-none  dark:bg-blue dark:placeholder-white"
                id="file_input"
                type="file"
                onChange={handlePdfFileChange}
                required
              ></input>
            </div>
            <div className="text-red-600 max-w-2xl mx-auto flex justify-center">
              {pdfFileError}
            </div>
            <div className="mt-2 mb-4 flex justify-center">
              <div className="rounded-3xl bg-[#CCD7F0] flex flex-row space-x-4 py-1 px-5 text-center text-base font-semibold text-black outline-none hover:shadow-form ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-5 hover:stroke-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                  />
                </svg>
                <img
                  className="w-6 h-6 hover:stroke-2"
                  src="https://i.ibb.co/NLXZ8j1/delete.png"
                  alt="delete"
                />
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-5 hover:stroke-2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Google Drive</title>
                  <path d="M12.01 1.485c-2.082 0-3.754.02-3.743.047.01.02 1.708 3.001 3.774 6.62l3.76 6.574h3.76c2.081 0 3.753-.02 3.742-.047-.005-.02-1.708-3.001-3.775-6.62l-3.76-6.574zm-4.76 1.73a789.828 789.861 0 0 0-3.63 6.319L0 15.868l1.89 3.298 1.885 3.297 3.62-6.335 3.618-6.33-1.88-3.287C8.1 4.704 7.255 3.22 7.25 3.214zm2.259 12.653-.203.348c-.114.198-.96 1.672-1.88 3.287a423.93 423.948 0 0 1-1.698 2.97c-.01.026 3.24.042 7.222.042h7.244l1.796-3.157c.992-1.734 1.85-3.23 1.906-3.323l.104-.167h-7.249z" />
                </svg>
              </div>
            </div>
            <div className="mb-5">
              <input
                type="text"
                name="how"
                id="how"
                placeholder="How did the idea came in your mind?"
                className="w-full appearance-none  border-b-[0.2rem] rounded-md border-[#7587A4] bg-white py-3 px-6 text-base font-medium outline-none focus:border-blue focus:shadow-md"
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, reason: event.target.value }))
                }
                required
              />
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#7587A4]">
                What do you require to complete the idea?
              </label>
              <div className="flex items-center space-x-6 ">
                <div className="flex flex-wrap items-center">
                  <input
                    type="checkbox"
                    name="checkbox1"
                    id="checkboxButton1"
                    className="h-5 w-5"
                    value="guidance"
                    onChange={(event) => getReq(event)}
                  />
                  <label
                    htmlFor="checkboxButton1"
                    className="pl-3 text-base font-medium text-[#7587A4]"
                  >
                    Guidance
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="checkbox1"
                    id="checkboxButton2"
                    className="h-5 w-5"
                    value="support"
                    onChange={(event) => getReq(event)}
                  />
                  <label
                    htmlFor="checkboxButton2"
                    className="pl-3 text-base font-medium text-[#7587A4]"
                  >
                    Support
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="checkbox1"
                    id="checkboxButton3"
                    className="h-5 w-5"
                    value="tools"
                    onChange={(event) => getReq(event)}
                  />
                  <label
                    htmlFor="checkboxButton3"
                    className="pl-3 text-base font-medium text-[#7587A4]"
                  >
                    Tools
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="checkbox1"
                    id="checkboxButton4"
                    className="h-5 w-5"
                    value="people"
                    onChange={(event) => getReq(event)}
                  />
                  <label
                    htmlFor="checkboxButton4"
                    className="pl-3 text-base font-medium text-[#7587A4]"
                  >
                    People
                  </label>
                </div>
              </div>
            </div>

            <div className=" flex justify-center">
              <button
                className="rounded-3xl bg-blue py-3 px-10 text-center text-base font-semibold text-white outline-none hover:bg-[#00008b] hover:shadow-lg focus:bg-[#00008b] focus: shadow-md "
                onClick={() => notify}
                disabled={submitButtonDisabled}
              >
                Submit
              </button>
              <ToastContainer />
            </div>
          </form>
          <div className="mt-2 flex justify-center">
            <div hidden={loading}>
              <Oval
                height="30"
                width="80"
                radius="7"
                color="blue"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IdeaForm;
