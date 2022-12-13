import React,{ useState, useRef,useEffect } from "react";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import { Formik, Form, Field, ErroMessage } from "formik";
import * as Yup from "yup";
import { bad_word } from "../data/dummy";
import html2canvas from 'html2canvas';
import { addDoc, collection, serverTimestamp, orderBy, onSnapshot, doc} from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';
// import { WithContext as ReactTags } from 'react-tag-input';

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import jsPDF from "jspdf";
import {
  exportComponentAsPDF,
  exportComponentAsPNG,
} from "react-component-export-image";

const Upload1 = ({ username, category, photoUrl }) => {
  // Tags

  // const KeyCodes = {
  //   comma: 188,
  //   enter: 13
  // };

  // const delimiters = [KeyCodes.comma, KeyCodes.enter];

  // const sug = ["Dombivli", "Thane", "Mumbai"]
  // const suggestions = sug.map(items =>{
  //   return{
  //     id: items,
  //     text: items
  //   };
  // });
  //   const [tags, setTags] = React.useState([
  //     { id: 'Thailand', text: 'Thailand' },
  //     { id: 'India', text: 'India' },
  //     { id: 'Vietnam', text: 'Vietnam' },
  //     { id: 'Turkey', text: 'Turkey' }
  //   ]);

  //   const handleDelete = i => {
  //     setTags(tags.filter((tag, index) => index !== i));
  //   };

  //   const handleAddition = tag => {
  //     setTags([...tags, tag]);
  //   };

  //   const handleDrag = (tag, currPos, newPos) => {
  //     const newTags = tags.slice();

  //     newTags.splice(currPos, 1);
  //     newTags.splice(newPos, 0, tag);

  //     // re-render
  //     setTags(newTags);
  //   };

  //   const handleTagClick = index => {
  //     console.log('The tag at index ' + index + ' was clicked');
  //   };

  const navigate = useNavigate();

  // Export PNG
  const componentRef = useRef();

  const styles = StyleSheet.create({
    page: {
      backgroundColor: "white",
      color: "white",
    },
    section: {
      margin: 10,
      padding: 10,
    },
    viewer: {
      width: window.innerWidth, //the pdf viewer will take up all of the width and height
      height: window.innerHeight,
    },
  });

  let error = 0;
  const check_val = () => {
    const bad_words = ["death", "kill", "murder"];
    let check_text = values.title;
    for (var i = 0; i < bad_word.length; i++) {
      var val = bad_word[i];
      if (check_text.toLowerCase().indexOf(val.toString()) > -1) {
        error = error + 1;
      }
    }
    if (error > 0) {
      document.getElementById("bad_notice").innerHTML =
        "Warning: Something abusive";
    } else {
      document.getElementById("bad_notice").innerHTML = "";
    }
  };

  const [req, setReq] = useState([]);
  const [form1, setForm1] = useState(true);
  const [form2, setForm2] = useState(false);
  const [form3, setForm3] = useState(false);
  const [form4, setForm4] = useState(false);
  const [formS, setFormS] = useState(false);
  const [err1, setErr1] = useState(false);
  const [err2, setErr2] = useState(false);
  const [err3, setErr3] = useState(false);
  const [err4, setErr4] = useState(false);
  const [err5, setErr5] = useState(false);
  const [err6, setErr6] = useState(false);
  const [err7, setErr7] = useState(false);
  const [err8, setErr8] = useState(false);
  const [err9, setErr9] = useState(false);
  const [err10, setErr10] = useState(false);
  const [err11, setErr11] = useState(false);
  const [err12, setErr12] = useState(false);
  const [err13, setErr13] = useState(false);
  const [err14, setErr14] = useState(false);
  const [err15, setErr15] = useState(false);
  const [err16, setErr16] = useState(false);
  const [err17, setErr17] = useState(false);
  const [err18, setErr18] = useState(false);
  const [err19, setErr19] = useState(false);
  const [err20, setErr20] = useState(false);
  const [err21, setErr21] = useState(false);
  const [ideas,setIdeas] = useState([]);
  const [inputData,setInputData] = useState([]);

  useEffect(() => {
    onSnapshot(
      collection(db, "ideas"),
      orderBy("timestamp", "desc"),
      (snapshot) => {
        setIdeas(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })).sort()
        );
      }
    );
  }, []);

  useEffect(()=>{
    setInputData(ideas[ideas.length-1]);
  },[]);

  console.log(inputData)
  console.log(ideas)

  const options = [
    { value: "incubation", label: "Incubation" },
    { value: "programming", label: "Programming" },
    { value: "professional", label: "Professional" },
    { value: "civil", label: "Civil" },
    { value: "electrical", label: "Electrical" },
    { value: "hardware", label: "Hardware" },
    { value: "other", label: "Other" },
  ];

  const op = [
    { value: "business", label: "Business" },
    { value: "hackathon", label: "Hackathon" },
    { value: "personal_project", label: "Personal Project" },
    { value: "sale", label: "Sale" },
    { value: "other", label: "Other" },
  ];

  const [values, setValues] = useState({
    cat: options.value,
    subcat: "",
    title: "",
    owner: "",
    refe: "",
    mem: "",
    prob: "",
    sol: "",
    core: "",
    desc: "",
    users: "",
    keyf: "",
    stack: "",
    rfs: "",
    stcu: "",
    mem1: "",
    time: "",
    purpose: options.value,
    otherp: "",
    req: req,
    reason: "",
  });

  const validationSchema = Yup.object().shape({
    cat: Yup.string().required,
    subcat: Yup.string().required,
    title: Yup.string().required,
    owner: Yup.string().required,
    refe: Yup.string().required,
    mem: Yup.string().required,
    prob: Yup.string().required,
    sol: Yup.string().required,
    core: Yup.string().required,
    desc: Yup.string().required,
    users: Yup.string().required,
    keyf: Yup.string().required,
    stack: Yup.string().required,
    rfs: Yup.string().required,
    stcu: Yup.string().required,
    mem1: Yup.string().required,
    time: Yup.string().required,
    purpose: Yup.string().required,
    otherp: Yup.string().required,
    req: Yup.string().required,
    reason: Yup.string().required,
  });

  const getReq = (e) => {
    const { value, checked } = e.target;
    console.log(`${value} is ${checked}`);
    if (checked) {
      setReq([...req, value]);
    } else {
      setReq(req.filter((item) => item !== value));
    }
  };

  const hForm1N = (e) => {
    e.preventDefault();
    if (!values.cat) {
      setErr1(true);
      console.log("in if");
    }
    if (!values.subcat) {
      setErr2(true);
    }
    if (!values.title) {
      setErr3(true);
    }
    if (!values.owner) {
      setErr4(true);
    }
    if (!values.refe) {
      setErr5(true);
    }
    if (!values.mem) {
      setErr6(true);
    } else {
      setErr1(false);
      setErr2(false);
      setErr3(false);
      setErr4(false);
      setErr5(false);
      setErr6(false);
      setForm1(false);
      setForm2(true);
    }
    console.log(err1, error);
  };

  const hForm2P = () => {
    setForm2(false);
    setForm1(true);
  };
  const hForm2N = (e) => {
    e.preventDefault();
    if (!values.prob) {
      setErr7(true);
    }
    if (!values.sol) {
      setErr8(true);
    }
    if (!values.core) {
      setErr9(true);
    }
    if (!values.desc) {
      setErr10(true);
    } else {
      setErr7(false);
      setErr8(false);
      setErr9(false);
      setErr10(false);
      setForm1(false);
      setForm2(false);
      setForm3(true);
    }
  };

  const hForm3N = (e) => {
    e.preventDefault();
    if (!values.users) {
      setErr11(true);
    }
    if (!values.keyf) {
      setErr12(true);
    }
    if (!values.stack) {
      setErr13(true);
    }
    if (!values.rfs) {
      setErr14(true);
    }
    if (!values.stcu) {
      setErr15(true);
    } else {
      setErr11(false);
      setErr12(false);
      setErr13(false);
      setErr14(false);
      setErr15(false);
      setForm1(false);
      setForm2(false);
      setForm3(false);
      setForm4(true);
    }
  };
  const hForm3P = (e) => {
    setForm1(false);
    setForm2(true);
    setForm3(false);
  };

  const hForm4N = (e) => {
    e.preventDefault();
    if (values.mem1) {
      setErr16(true);
    }
    if (!values.time) {
      setErr17(true);
    }
    if (!values.purpose) {
      setErr18(true);
    }
    if (!values.otherp) {
      setErr19(true);
    }
    if (req) {
      setErr20(true);
    }
    if (!values.reason) {
      setErr21(true);
    } else {
      setErr16(false);
      setErr17(false);
      setErr18(false);
      setErr19(false);
      setErr20(false);
      setErr21(false);
      setForm1(false);
      setForm2(false);
      setForm3(false);
      setForm4(false);
      setFormS(true);
    }
    console.log(err16, err17, err18, err19, err20, err21);
  };
  const hForm4P = (e) => {
    setForm1(false);
    setForm2(false);
    setForm3(true);
    setForm4(false);
  };

  const hFormSP = (e) => {
    e.preventDefault();
    setFormS(false);
    setForm4(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const photo = exportComponentAsPNG(componentRef);
    const element = componentRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL('image/jpg');
    if (category === "student" || category === "individual") {
      addDoc(collection(db, "ideas"), 
      // removed serverTimestamp() from parameters of collection
      { 
        cat: values.cat,
        title: values.title,
        desc: values.desc,
        pdfFile: data,
        userName: username,
        timestamp: serverTimestamp(),
        status: "under-verification",
        aORrreason:"The Idea wihich you are trying to upload is under verification.",
        statusLogo: "https://i.ibb.co/W3Y9rx5/under-Verification.png",
        category: category,
        photoUrl: photoUrl,
        likeStatus: false,
        subcat: values.subcat,
        owner: values.owner,
        refe: values.refe,
        mem: values.mem,
        prob: values.prob,
        sol: values.sol,
        core: values.core,
        users: values.users,
        keyf: values.keyf,
        stack: values.stack,
        rfs: values.rfs,
        stcu: values.stcu,
        mem1: values.mem1,
        time: values.time,
        purpose: values.purpose,
        otherp: values.otherp,
        req: req,
        reason: values.reason,
      });
      navigate("/Idea-Review");
    } else {

      addDoc(collection(db, "ideas",serverTimestamp()), {
        cat: values.cat,
        title: values.title,
        desc: values.desc,
        pdfFile: data,
        userName: username,
        timestamp: serverTimestamp(),
        status: "verified",
        aORrreason:"The Idea which you are trying to upload has been approved successfully.",
        statusLogo: "https://i.ibb.co/tJR9T3x/verified.png",
        category: category,
        photoUrl: photoUrl,
        likeStatus: false,
        subcat: values.subcat,
        owner: values.owner,
        refe: values.refe,
        mem: values.mem,
        prob: values.prob,
        sol: values.sol,
        core: values.core,
        users: values.users,
        keyf: values.keyf,
        stack: values.stack,
        rfs: values.rfs,
        stcu: values.stcu,
        mem1: values.mem1,
        time: values.time,
        purpose: values.purpose,
        otherp: values.otherp,
        req: req,
        reason: values.reason,
      });
      navigate("/Post");
    }
  };

  const ComponentToPrint = React.forwardRef((props, ref) => (
    // <div ref={ref}>Hello World</div>
    <div ref={ref} className="mt-8 p-4 ">
      <div className="border-2 rounded-[2rem] md:p-[3rem] p-2">
        <div className="flex w-full justify-center">
          <h1 className="font-normal text-gray-600">
            *Confirm your Idea details before Submitting
          </h1>
        </div>
        <div
          id="dispBe"
          className="border-3 border-teal-600 rounded-xl px-3 pb-2 mt-[2rem] bg-[#ffffff48] shadow-xl shadow-gray-400"
        >
          <div className="flex justify-center w-full mt-2">
            <h1 className="text-center justify-center uppercase font-poppins font-bold text-red-700 text-xl mt-2">
              Basic Details
            </h1>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="w-full mx-2 flex-1  svelte-1l8159u">
              <div className="font-bold h-6 mt-3 text-gray-600 text-md leading-8 uppercase">
                Idea/Project Category
              </div>
              <div className="shadow-md my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <h1 className="p-1 px-2">{values.cat}</h1>
              </div>
            </div>
            <div className="w-full mx-2 flex-1 svelte-1l8159u">
              <div className="font-bold h-6 mt-3 text-gray-600 text-md leading-8 uppercase">
                Sub Category
              </div>
              <div className="shadow-md my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <h1 className="p-1 px-2">{values.subcat}</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="w-full mx-2 flex-1  svelte-1l8159u">
              <div className="font-bold h-6 mt-3 text-gray-600 text-md leading-8 uppercase">
                Idea/Project Title
              </div>
              <div className="shadow-md my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <h1 className="p-1 px-2">{values.title}</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="w-full mx-2 flex-1  svelte-1l8159u">
              <div className="font-bold h-6 mt-3 text-gray-600 text-md leading-8 uppercase">
                Idea/Project Owner
              </div>
              <div className="shadow-md my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <h1 className="p-1 px-2">{values.owner}</h1>
              </div>
            </div>
            <div className="w-full mx-2 flex-1 svelte-1l8159u">
              <div className="font-bold h-6 mt-3 text-gray-600 text-md leading-8 uppercase">
                Idea/Project Reference
              </div>
              <div className="shadow-md my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <h1 className="p-1 px-2">{values.refe}</h1>
              </div>
            </div>
            <div className="w-full mx-2 flex-1 svelte-1l8159u">
              <div className="font-bold h-6 mt-3 text-gray-600 text-md leading-8 uppercase">
                Idea/Project Members
              </div>
              <div className="shadow-md my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <h1 className="p-1 px-2">{values.mem}</h1>
              </div>
            </div>
          </div>
        </div>

        <div
          id="dispId"
          className="border-3 border-teal-600 rounded-xl px-3 pb-2 mt-[2rem] bg-[#ffffff48] shadow-xl shadow-gray-400"
        >
          <div className="flex justify-center w-full mt-2">
            <h1 className="text-center justify-center font-poppins font-bold text-red-700 text-xl uppercase mt-2">
              IDEA DESCRIPTION
            </h1>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="w-full mx-2 flex-1  svelte-1l8159u">
              <div className="font-bold h-6 mt-3 text-gray-600 text-md leading-8 uppercase">
                Idea/Project Problem Statement
              </div>
              <div className="shadow-md my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <h1 className="p-1 px-2">{values.prob}</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="w-full mx-2 flex-1  svelte-1l8159u">
              <div className="font-bold h-6 mt-3 text-gray-600 text-md leading-8 uppercase">
                Idea/Project Solution
              </div>
              <div className="shadow-md my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <h1 className="p-1 px-2">{values.sol}</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="w-full mx-2 flex-1  svelte-1l8159u">
              <div className="font-bold h-6 mt-3 text-gray-600 text-md leading-8 uppercase">
                Core Functionality of Idea
              </div>
              <div className="shadow-md my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <h1 className="p-1 px-2">{values.core}</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="w-full mx-2 flex-1  svelte-1l8159u">
              <div className="font-bold h-6 mt-3 text-gray-600 text-md leading-8 uppercase">
                Idea Description
              </div>
              <div className="shadow-md my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <h1 className="p-1 px-2">{values.desc}</h1>
              </div>
            </div>
          </div>
        </div>

        <div
          id="dispImp"
          className="border-3 border-teal-600 rounded-xl px-3 pb-2 mt-[2rem] bg-[#ffffff48] shadow-xl shadow-gray-400"
        >
          <div className="flex justify-center w-full mt-2">
            <h1 className="text-center justify-center font-poppins font-bold text-red-700 text-xl uppercase mt-2">
              Implementation
            </h1>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="w-full mx-2 flex-1  svelte-1l8159u">
              <div className="font-bold h-6 mt-3 text-gray-600 text-md leading-8 uppercase">
                Users for the Product
              </div>
              <div className="shadow-md my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <h1 className="p-1 px-2">{values.users}</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="w-full mx-2 flex-1  svelte-1l8159u">
              <div className="font-bold h-6 mt-3 text-gray-600 text-md leading-8 uppercase">
                Key features in Idea/Project
              </div>
              <div className="shadow-md my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <h1 className="p-1 px-2">{values.keyf}</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="w-full mx-2 flex-1  svelte-1l8159u">
              <div className="font-bold h-6 mt-3 text-gray-600 text-md leading-8 uppercase">
                Technology Stack I am thinking of
              </div>
              <div className="shadow-md my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <h1 className="p-1 px-2">{values.stack}</h1>
              </div>
            </div>
            <div className="w-full mx-2 flex-1  svelte-1l8159u">
              <div className="font-bold h-6 mt-3 text-gray-600 text-md leading-8 uppercase">
                Reasons for selecting this stack
              </div>
              <div className="shadow-md my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <h1 className="p-1 px-2">{values.rfs}</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="w-full mx-2 flex-1  svelte-1l8159u">
              <div className="font-bold md:h-6 mt-3 text-gray-600 text-md leading-8 uppercase">
                Technology stack that can also be used
              </div>
              <div className="shadow-md my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <h1 className="p-1 px-2">{values.stcu}</h1>
              </div>
            </div>
          </div>
        </div>

        <div
          id="dispReq"
          className="border-3 border-teal-600 rounded-xl px-3 pb-2 mt-[2rem] bg-[#ffffff48] shadow-xl shadow-gray-400"
        >
          <div className="flex justify-center w-full mt-2">
            <h1 className="text-center justify-center font-poppins font-bold text-red-700 text-xl uppercase mt-2">
              Requirement
            </h1>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="w-full mx-2 flex-1  svelte-1l8159u">
              <div className="font-bold md:h-6 mt-3 text-gray-600 text-md leading-8 uppercase">
                Members required for this Idea/Project
              </div>
              <div className="shadow-md my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <h1 className="p-1 px-2">{values.mem1}</h1>
              </div>
            </div>
            <div className="w-full mx-2 flex-1  svelte-1l8159u">
              <div className="font-bold md:h-6 mt-3 text-gray-600 text-md md:leading-8 uppercase">
                Expected time to implement this Idea/Project
              </div>
              <div className="shadow-md my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <h1 className="p-1 px-2">{values.time}</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="w-full mx-2 flex-1  svelte-1l8159u">
              <div className="font-bold md:h-6 mt-3 text-gray-600 text-md md:leading-8 uppercase">
                Idea/Project is being developed for the Purpose of
              </div>
              <div className="shadow-md my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <h1 className="p-1 px-2">{values.purpose}</h1>
              </div>
            </div>
            <div className="w-full mx-2 flex-1  svelte-1l8159u">
              <div className="font-bold md:h-6 mt-3 text-gray-600 text-md leading-8 uppercase">
                My requirent through Modernvate is/are
              </div>
              <div className="shadow-md my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <h1 className="p-1 px-2">{req + " "}</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="w-full mx-2 flex-1  svelte-1l8159u">
              <div className="font-bold h-6 mt-3 text-gray-600 text-md leading-8 uppercase">
                How this idea came to my mind
              </div>
              <div className="shadow-md my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <h1 className="p-1 px-2">{values.reason}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  

  return (
    <div className="p-5">
      {form1 ? (
        <div>
          <div className="mx-4 p-4">
            <div className="flex items-center">
              <div className="flex items-center text-white relative">
                <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-teal-600 bg-teal-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-bookmark "
                  >
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">
                  <p>
                    Basic <br className="md:hidden" /> Details
                  </p>
                </div>
              </div>
              <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
              <div className="flex items-center text-gray-500 relative">
                <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-user-plus "
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="8.5" cy="7" r="4"></circle>
                    <line x1="20" y1="8" x2="20" y2="14"></line>
                    <line x1="23" y1="11" x2="17" y2="11"></line>
                  </svg>
                </div>
                <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">
                  Idea <br className="md:hidden" /> Descr
                  <br className="md:hidden" />
                  iption
                </div>
              </div>
              <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
              <div className="flex items-center text-gray-500 relative">
                <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-mail "
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div
                  className={`absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500`}
                >
                  Impleme
                  <br className="md:hidden" />
                  ntation
                </div>
              </div>
              <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
              <div className="flex items-center text-gray-500 relative">
                <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-database "
                  >
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                  </svg>
                </div>
                <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">
                  Requi
                  <br className="md:hidden" />
                  rement
                </div>
              </div>
              <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
              <div className="flex items-center text-gray-500 relative">
                <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-database "
                  >
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                  </svg>
                </div>
                <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">
                  Confirm
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 p-4 ">
            {/* <ReactTags
              tags={tags}
              suggestions={suggestions}
              delimiters={delimiters}
              handleDelete={handleDelete}
              handleAddition={handleAddition}
              handleDrag={handleDrag}
              handleTagClick={handleTagClick}
              inputFieldPosition="bottom"
              autocomplete
              /> */}
            <div>
              <div className="flex flex-col md:flex-row">
                <div className="w-full mx-2 flex-1 svelte-1l8159u">
                  <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                    {" "}
                    Idea Category
                  </div>
                  <div className=" my-2 p-1 flex svelte-1l8159u">
                    <Select
                      placeholder="Enter Idea Category"
                      className="w-full  rounded-md border-[#7587A4] bg-white text-base font-normal text-[#7587A4] outline-none focus:border-blue focus:drop-shadow-2xl"
                      onChange={(event) =>
                        setValues((prev) => ({ ...prev, cat: event.value }))
                      }
                      options={options}
                      id="cat"
                      name="cat"
                      required
                      autoComplete="on"
                    />
                  </div>
                  {err1 ? (
                    <div className="ml-2 text-red-500 animate-bounce">
                      Category is required
                    </div>
                  ) : null}
                </div>
                <div className="w-full mx-2 flex-1 svelte-1l8159u">
                  <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                    {" "}
                    Sub Category
                  </div>
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                    <input
                      required
                      name="subcat"
                      autoComplete="on"
                      placeholder="Eg. Web based Software..."
                      className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                      onChange={(event) =>
                        setValues((prev) => ({
                          ...prev,
                          subcat: event.target.value,
                        }))
                      }
                    />
                  </div>
                  {err2 ? (
                    <div className="ml-2 text-red-500 animate-bounce">
                      Sub Category is required
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="flex flex-col md:flex-row">
                <div className="w-full mx-2 flex-1 svelte-1l8159u">
                  <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                    {" "}
                    Idea/ Project Title
                  </div>
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                    <input
                      placeholder="Your Idea Heading.."
                      required
                      autoComplete="on"
                      onKeyUp={check_val}
                      className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                      onChange={(event) =>
                        setValues((prev) => ({
                          ...prev,
                          title: event.target.value,
                        }))
                      }
                    />
                  </div>
                  <p id="bad_notice" className="text-red-500"></p>
                  {err3 ? (
                    <div className="ml-2 text-red-500 animate-bounce">
                      Title is Must
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="flex flex-col md:flex-row">
                <div className="w-full mx-2 flex-1 svelte-1l8159u">
                  <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                    {" "}
                    Idea/ Project Owner
                  </div>
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                    <input
                      placeholder="Ex.Haresh Kurade.."
                      required
                      autoComplete="on"
                      className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                      onChange={(event) =>
                        setValues((prev) => ({
                          ...prev,
                          owner: event.target.value,
                        }))
                      }
                    />{" "}
                  </div>
                  {err4 ? (
                    <div className="ml-2 text-red-500 animate-bounce">
                      Owner name must be there
                    </div>
                  ) : null}
                </div>
                <div className="w-full mx-2 flex-1 svelte-1l8159u">
                  <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                    {" "}
                    Idea/ Project Reference
                  </div>
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                    <input
                      placeholder="Ex. form College"
                      required
                      autoComplete="on"
                      className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                      onChange={(event) =>
                        setValues((prev) => ({
                          ...prev,
                          refe: event.target.value,
                        }))
                      }
                    />{" "}
                  </div>
                  {err5 ? (
                    <div className="ml-2 text-red-500 animate-bounce">
                      Reference is required(if not enter no)
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="flex flex-col md:flex-row">
                <div className="w-full mx-2 flex-1 svelte-1l8159u">
                  <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                    {" "}
                    Idea/ Project Members (if any)
                  </div>
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                    <input
                      placeholder="Just a hint.."
                      required
                      autoComplete="on"
                      className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                      onChange={(event) =>
                        setValues((prev) => ({
                          ...prev,
                          mem: event.target.value,
                        }))
                      }
                    />{" "}
                  </div>
                  {err6 ? (
                    <div className="ml-2 text-red-500 animate-bounce duration-75">
                      members field is required
                    </div>
                  ) : null}
                </div>
                <div className="w-full mx-2 flex-1 svelte-1l8159u">
                  <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                    {" "}
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="flex p-2 mt-4">
              <div className="flex-auto flex flex-row-reverse">
                <button
                  onClick={hForm1N}
                  className="text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                      hover:bg-teal-600 bg-teal-600 text-teal-100 border duration-200 ease-in-out border-teal-600 transition"
                >
                  Next{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {form2 ? (
        <div>
          <div className="mx-4 p-4">
            <div className="flex items-center">
              <div className="flex items-center text-white relative">
                <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-teal-600 bg-teal-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-bookmark "
                  >
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">
                  <p>
                    Basic <br className="md:hidden" /> Details
                  </p>
                </div>
              </div>
              <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-teal-600"></div>
              <div className="flex items-center text-white relative">
                <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-teal-600 border-teal-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-user-plus "
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="8.5" cy="7" r="4"></circle>
                    <line x1="20" y1="8" x2="20" y2="14"></line>
                    <line x1="23" y1="11" x2="17" y2="11"></line>
                  </svg>
                </div>
                <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">
                  Idea <br className="md:hidden" /> Descr
                  <br className="md:hidden" />
                  iption
                </div>
              </div>
              <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
              <div className="flex items-center text-gray-500 relative">
                <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-mail "
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div
                  className={`absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500`}
                >
                  Impleme
                  <br className="md:hidden" />
                  ntation
                </div>
              </div>
              <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
              <div className="flex items-center text-gray-500 relative">
                <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-database "
                  >
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                  </svg>
                </div>
                <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">
                  Requi
                  <br className="md:hidden" />
                  rement
                </div>
              </div>
              <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
              <div className="flex items-center text-gray-500 relative">
                <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-database "
                  >
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                  </svg>
                </div>
                <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">
                  Confirm
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 p-4">
            <div>
              <div className="flex flex-col md:flex-row">
                <div className="w-full mx-2 flex-1 svelte-1l8159u">
                  <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                    {" "}
                    Idea/Project Problem Statement
                  </div>
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                    <input
                      placeholder="Problem your Idea will solve.."
                      required
                      autoComplete="on"
                      className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                      onChange={(event) =>
                        setValues((prev) => ({
                          ...prev,
                          prob: event.target.value,
                        }))
                      }
                    />{" "}
                  </div>
                  {err7 ? (
                    <div className="ml-2 text-red-500 animate-bounce">
                      Problem statement is required
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="w-full mx-2 flex-1 svelte-1l8159u">
                  <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                    {" "}
                    Idea/Project Solution
                  </div>
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                    <input
                      placeholder="Idea will provide solution for.."
                      required
                      autoComplete="on"
                      type="text"
                      className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                      onChange={(event) =>
                        setValues((prev) => ({
                          ...prev,
                          sol: event.target.value,
                        }))
                      }
                    />{" "}
                  </div>
                  {err8 ? (
                    <div className="ml-2 text-red-500 animate-bounce">
                      Solution is required
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="w-full mx-2 flex-1 svelte-1l8159u">
                  <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                    {" "}
                    Core Functionality of Idea
                  </div>
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                    <input
                      placeholder="Main Reason for behind the Idea/Project.."
                      required
                      autoComplete="on"
                      type="text"
                      className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                      onChange={(event) =>
                        setValues((prev) => ({
                          ...prev,
                          core: event.target.value,
                        }))
                      }
                    />{" "}
                  </div>
                  {err9 ? (
                    <div className="ml-2 text-red-500 animate-bounce">
                      Functionalities are required
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="w-full mx-2 flex-1 svelte-1l8159u">
                  <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                    {" "}
                    Idea Description
                  </div>
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                    <input
                      placeholder="Explaination of entire Idea/Project..."
                      required
                      autoComplete="on"
                      type="text"
                      className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                      onChange={(event) =>
                        setValues((prev) => ({
                          ...prev,
                          desc: event.target.value,
                        }))
                      }
                    />{" "}
                  </div>
                  {err10 ? (
                    <div className="ml-2 text-red-500 animate-bounce">
                      Description is required
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="flex p-2 mt-4">
              <button
                onClick={hForm2P}
                className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
          hover:bg-gray-200 bg-gray-100 text-gray-700 border duration-200 ease-in-out border-gray-600 transition"
              >
                Previous{" "}
              </button>
              <div className="flex-auto flex flex-row-reverse">
                <button
                  onClick={hForm2N}
                  className="text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                      hover:bg-teal-600 bg-teal-600 text-teal-100 border duration-200 ease-in-out border-teal-600 transition"
                >
                  Next{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {form3 ? (
        <div>
          <div className="mx-4 p-4">
            <div className="flex items-center">
              <div className="flex items-center text-white relative">
                <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-teal-600 bg-teal-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-bookmark "
                  >
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">
                  <p>
                    Basic <br className="md:hidden" /> Details
                  </p>
                </div>
              </div>
              <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-teal-600"></div>
              <div className="flex items-center text-white relative">
                <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-teal-600 border-teal-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-user-plus "
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="8.5" cy="7" r="4"></circle>
                    <line x1="20" y1="8" x2="20" y2="14"></line>
                    <line x1="23" y1="11" x2="17" y2="11"></line>
                  </svg>
                </div>
                <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">
                  Idea <br className="md:hidden" /> Descr
                  <br className="md:hidden" />
                  iption
                </div>
              </div>
              <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-teal-600"></div>
              <div className="flex items-center text-white relative">
                <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-teal-600 border-teal-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-mail "
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div
                  className={`absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600`}
                >
                  Impleme
                  <br className="md:hidden" />
                  ntation
                </div>
              </div>
              <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
              <div className="flex items-center text-gray-500 relative">
                <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-database "
                  >
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                  </svg>
                </div>
                <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">
                  Requi
                  <br className="md:hidden" />
                  rement
                </div>
              </div>
              <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
              <div className="flex items-center text-gray-500 relative">
                <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-database "
                  >
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                  </svg>
                </div>
                <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">
                  Confirm
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 p-4">
            <div>
              <div className="flex flex-col md:flex-row">
                <div className="w-full mx-2 flex-1 svelte-1l8159u">
                  <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                    {" "}
                    Users of the product
                  </div>
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                    <input
                      placeholder="Ex. School Students, Teenagers, Above age 45..."
                      required
                      autoComplete="on"
                      className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                      onChange={(event) =>
                        setValues((prev) => ({
                          ...prev,
                          users: event.target.value,
                        }))
                      }
                    />{" "}
                  </div>
                  {err11 ? (
                    <div className="ml-2 text-red-500 animate-bounce duration-75">
                      users must be entered.
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="w-full mx-2 flex-1 svelte-1l8159u">
                  <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                    {" "}
                    Key Features in Idea/Project
                  </div>
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                    <input
                      placeholder="Functionalities offered through Ide/Project.."
                      required
                      autoComplete="on"
                      className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                      onChange={(event) =>
                        setValues((prev) => ({
                          ...prev,
                          keyf: event.target.value,
                        }))
                      }
                    />{" "}
                  </div>
                  {err12 ? (
                    <div className="ml-2 text-red-500 animate-bounce duration-75">
                      Key features are required
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="w-full mx-2 flex-1 svelte-1l8159u">
                  <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                    {" "}
                    Technology Stack you thinking of
                  </div>
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                    <input
                      placeholder="MERN, Android,..."
                      required
                      autoComplete="on"
                      className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                      onChange={(event) =>
                        setValues((prev) => ({
                          ...prev,
                          stack: event.target.value,
                        }))
                      }
                    />{" "}
                  </div>
                  {err13 ? (
                    <div className="ml-2 text-red-500 animate-bounce duration-75">
                      Tech stack is required
                    </div>
                  ) : null}
                </div>
                <div className="w-full mx-2 flex-1 svelte-1l8159u">
                  <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                    {" "}
                    Reasons for selecting this stack
                  </div>
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                    <input
                      placeholder="Answer according to you..."
                      required
                      autoComplete="on"
                      className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                      onChange={(event) =>
                        setValues((prev) => ({
                          ...prev,
                          rfs: event.target.value,
                        }))
                      }
                    />{" "}
                  </div>
                  {err14 ? (
                    <div className="ml-2 text-red-500 animate-bounce duration-75">
                      Reasons must be entered
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="w-full mx-2 flex-1 svelte-1l8159u">
                  <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                    {" "}
                    Stack That can also be used
                  </div>
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                    <input
                      placeholder="Other technology stack that can be used.."
                      required
                      autoComplete="on"
                      className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                      onChange={(event) =>
                        setValues((prev) => ({
                          ...prev,
                          stcu: event.target.value,
                        }))
                      }
                    />{" "}
                  </div>
                  {err15 ? (
                    <div className="ml-2 text-red-500 animate-bounce duration-75">
                      This is required
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="flex p-2 mt-4">
              <button
                onClick={hForm3P}
                className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
          hover:bg-gray-200  bg-gray-100 text-gray-700 border duration-200 ease-in-out border-gray-600 transition"
              >
                Previous{" "}
              </button>
              <div className="flex-auto flex flex-row-reverse">
                <button
                  onClick={hForm3N}
                  className="text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                      hover:bg-teal-600  bg-teal-600 text-teal-100 border duration-200 ease-in-out border-teal-600 transition"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {form4 ? (
        <div>
          <div className="mx-4 p-4">
            <div className="flex items-center">
              <div className="flex items-center text-white relative">
                <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-teal-600 bg-teal-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-bookmark "
                  >
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">
                  <p>
                    Basic <br className="md:hidden" /> Details
                  </p>
                </div>
              </div>
              <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-teal-600"></div>
              <div className="flex items-center text-white relative">
                <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-teal-600 border-teal-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-user-plus "
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="8.5" cy="7" r="4"></circle>
                    <line x1="20" y1="8" x2="20" y2="14"></line>
                    <line x1="23" y1="11" x2="17" y2="11"></line>
                  </svg>
                </div>
                <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">
                  Idea <br className="md:hidden" /> Descr
                  <br className="md:hidden" />
                  iption
                </div>
              </div>
              <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-teal-600"></div>
              <div className="flex items-center text-white relative">
                <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-teal-600 border-teal-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-mail "
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div
                  className={`absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600`}
                >
                  Impleme
                  <br className="md:hidden" />
                  ntation
                </div>
              </div>
              <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-teal-600"></div>
              <div className="flex items-center text-white relative">
                <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-teal-600 border-teal-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-database "
                  >
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                  </svg>
                </div>
                <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">
                  Requi
                  <br className="md:hidden" />
                  rement
                </div>
              </div>
              <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
              <div className="flex items-center text-gray-500 relative">
                <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-database "
                  >
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                  </svg>
                </div>
                <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">
                  Confirm
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 p-4">
            <div>
              <div className="flex flex-col md:flex-row">
                <div className="w-full mx-2 flex-1 svelte-1l8159u">
                  <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                    {" "}
                    Members Required
                  </div>
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                    <input
                      placeholder="Ex. 5..."
                      required
                      autoComplete="off"
                      type="number"
                      min={1}
                      max={10}
                      className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                      onChange={(event) =>
                        setValues((prev) => ({
                          ...prev,
                          mem1: event.target.value,
                        }))
                      }
                    />{" "}
                  </div>
                  {err16 ? (
                    <div className="ml-2 text-red-500 animate-bounce duration-75">
                      How many members are required
                    </div>
                  ) : null}
                </div>
                <div className="w-full mx-2 flex-1 svelte-1l8159u">
                  <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                    {" "}
                    Expected Time for completion
                  </div>
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                    <input
                      placeholder="Years..."
                      required
                      autoComplete="off"
                      type="number"
                      min={1}
                      max={3}
                      className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                      onChange={(event) =>
                        setValues((prev) => ({
                          ...prev,
                          time: event.target.value,
                        }))
                      }
                    />{" "}
                  </div>
                  {err17 ? (
                    <div className="ml-2 text-red-500 animate-bounce duration-75">
                      Time is required
                    </div>
                  ) : null}
                </div>
                <div className="w-full mx-2 flex-1 svelte-1l8159u"></div>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="w-full mx-2 flex-1 svelte-1l8159u">
                  <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                    {" "}
                    Idea/Project Purpose
                  </div>
                  <div className=" my-2 p-1 flex rounded svelte-1l8159u">
                    <Select
                      placeholder="Purpose"
                      className="w-full rounded-md border-[#7587A4] bg-white text-base font-normal text-[#7587A4] outline-none focus:border-blue focus:drop-shadow-2xl"
                      onChange={(event) =>
                        setValues((prev) => ({ ...prev, purpose: event.value }))
                      }
                      options={op}
                      id="purpose"
                      required
                    />
                  </div>
                  {err18 ? (
                    <div className="ml-2 text-red-500 animate-bounce duration-75">
                      Purpose must be entered
                    </div>
                  ) : null}
                </div>
                <div className="w-full mx-2 flex-1 svelte-1l8159u">
                  <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                    If Other
                  </div>
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                    <input
                      placeholder="If other then specify..."
                      autoComplete="off"
                      className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                      onChange={(event) =>
                        setValues((prev) => ({
                          ...prev,
                          otherp: event.target.value,
                        }))
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="w-full mx-2 flex-1 svelte-1l8159u">
                  <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                    {" "}
                    Requirement From Modernvate
                  </div>
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                    <div className="p-1 px-2 flex items-center xl:space-x-16 md:space-x-4 space-x-3">
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
                          {" "}
                          Guidance{" "}
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
                          {" "}
                          Support{" "}
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
                          {" "}
                          Tools{" "}
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
                          {" "}
                          People{" "}
                        </label>
                      </div>
                    </div>
                  </div>
                  {err20 ? (
                    <div className="ml-2 text-red-500 animate-bounce duration-75">
                      This is must
                    </div>
                  ) : null}
                </div>
                <div className="w-full mx-2 flex-1 svelte-1l8159u">
                  <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                    How did the idea came into your mind
                  </div>
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                    <input
                      placeholder="If other then specify..."
                      required
                      autoComplete="on"
                      className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                      onChange={(event) =>
                        setValues((prev) => ({
                          ...prev,
                          reason: event.target.value,
                        }))
                      }
                    />
                  </div>
                  {err21 ? (
                    <div className="ml-2 text-red-500 animate-bounce duration-75">
                      You have to answer this
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="flex p-2 mt-4">
              <button
                onClick={hForm4P}
                className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-gray-200
                 bg-gray-100 text-gray-700 border duration-200 ease-in-out border-gray-600 transition"
              >
                Previous
              </button>
              <div className="flex-auto flex flex-row-reverse">
                <button
                  onClick={hForm4N}
                  className="text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                      hover:bg-teal-600  bg-teal-600 text-teal-100 border duration-200 ease-in-out border-teal-600 transition"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {/* <PDFViewer style={styles.viewer}>
<Document>
  <Page size="A4" style={styles.page}>
    <View style={styles.section}>
      </View>
    </Page>
</Document>
</PDFViewer> */}
      {formS ? (
        <div>
          <div className="mx-4 p-4 mt-[2rem] md:mt-0">
            <div className="flex items-center">
              <div className="flex items-center text-white relative">
                <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-teal-600 bg-teal-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-bookmark "
                  >
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">
                  <p>
                    Basic <br className="md:hidden" /> Details
                  </p>
                </div>
              </div>
              <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-teal-600"></div>
              <div className="flex items-center text-white relative">
                <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-teal-600 border-teal-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-user-plus "
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="8.5" cy="7" r="4"></circle>
                    <line x1="20" y1="8" x2="20" y2="14"></line>
                    <line x1="23" y1="11" x2="17" y2="11"></line>
                  </svg>
                </div>
                <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">
                  Idea <br className="md:hidden" /> Descr
                  <br className="md:hidden" />
                  iption
                </div>
              </div>
              <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-teal-600"></div>
              <div className="flex items-center text-white relative">
                <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-teal-600 border-teal-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-mail "
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div
                  className={`absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600`}
                >
                  Impleme
                  <br className="md:hidden" />
                  ntation
                </div>
              </div>
              <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-teal-600"></div>
              <div className="flex items-center text-white relative">
                <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-teal-600 border-teal-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-database "
                  >
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                  </svg>
                </div>
                <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">
                  Requi
                  <br className="md:hidden" />
                  rement
                </div>
              </div>
              <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-teal-600"></div>
              <div className="flex items-center text-white relative">
                <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-teal-600 border-teal-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-database "
                  >
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                  </svg>
                </div>
                <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">
                  Confirm
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 p-4 ">
            {/* <div className="border-2 rounded-[2rem] md:p-[3rem] p-2">
                <div className="flex w-full justify-center">
                  <h1 className="font-normal text-gray-600">
                    *Confirm your Idea details before Submitting
                  </h1>
                </div>
                <div id="dispBe"
                  className="border-3 border-teal-600 rounded-xl px-3 pb-2 mt-[2rem] bg-[#ffffff48] shadow-xl shadow-gray-400">
                      <div className="flex justify-center w-full mt-2">
                        <h1 className="text-center justify-center uppercase font-poppins font-bold text-red-700 text-xl mt-2">
                          Basic Details
                        </h1>
                      </div>
                      <div className="flex flex-col md:flex-row">
                        <div className="w-full mx-2 flex-1  svelte-1l8159u">
                          <div className="font-bold h-6 mt-3 text-gray-600 text-md leading-8 uppercase">
                            Idea/Project Category
                          </div>
                          <div className="shadow-md my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                            <h1 className="p-1 px-2">{values.cat}</h1>
                          </div>
                        </div>
                        <div className="w-full mx-2 flex-1 svelte-1l8159u">
                          <div className="font-bold h-6 mt-3 text-gray-600 text-md leading-8 uppercase">
                            Sub Category
                          </div>
                          <div className="shadow-md my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                            <h1 className="p-1 px-2">{values.subcat}</h1>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row">
                        <div className="w-full mx-2 flex-1  svelte-1l8159u">
                          <div className="font-bold h-6 mt-3 text-gray-600 text-md leading-8 uppercase">
                            Idea/Project Title
                          </div>
                          <div className="shadow-md my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                            <h1 className="p-1 px-2">{values.title}</h1>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row">
                        <div className="w-full mx-2 flex-1  svelte-1l8159u">
                          <div className="font-bold h-6 mt-3 text-gray-600 text-md leading-8 uppercase">
                            Idea/Project Owner
                          </div>
                          <div className="shadow-md my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                            <h1 className="p-1 px-2">{values.owner}</h1>
                          </div>
                        </div>
                        <div className="w-full mx-2 flex-1 svelte-1l8159u">
                          <div className="font-bold h-6 mt-3 text-gray-600 text-md leading-8 uppercase">
                            Idea/Project Reference
                          </div>
                          <div className="shadow-md my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                            <h1 className="p-1 px-2">{values.refe}</h1>
                          </div>
                        </div>
                        <div className="w-full mx-2 flex-1 svelte-1l8159u">
                          <div className="font-bold h-6 mt-3 text-gray-600 text-md leading-8 uppercase">
                            Idea/Project Members
                          </div>
                          <div className="shadow-md my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                            <h1 className="p-1 px-2">{values.mem}</h1>
                          </div>
                        </div>
                      </div>
                  </div>

                    <div
                      id="dispId"
                      className="border-3 border-teal-600 rounded-xl px-3 pb-2 mt-[2rem] bg-[#ffffff48] shadow-xl shadow-gray-400"
                    >
                      <div className="flex justify-center w-full mt-2">
                        <h1 className="text-center justify-center uppercase font-poppins font-bold text-red-700 text-xl uppercase mt-2">
                          IDEA DESCRIPTION
                        </h1>
                      </div>
                      <div className="flex flex-col md:flex-row">
                        <div className="w-full mx-2 flex-1  svelte-1l8159u">
                          <div className="font-bold h-6 mt-3 text-gray-600 text-md leading-8 uppercase">
                            Idea/Project Problem Statement
                          </div>
                          <div className="shadow-md my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                            <h1 className="p-1 px-2">{values.prob}</h1>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row">
                        <div className="w-full mx-2 flex-1  svelte-1l8159u">
                          <div className="font-bold h-6 mt-3 text-gray-600 text-md leading-8 uppercase">
                            Idea/Project Solution
                          </div>
                          <div className="shadow-md my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                            <h1 className="p-1 px-2">{values.sol}</h1>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row">
                        <div className="w-full mx-2 flex-1  svelte-1l8159u">
                          <div className="font-bold h-6 mt-3 text-gray-600 text-md leading-8 uppercase">
                            Core Functionality of Idea
                          </div>
                          <div className="shadow-md my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                            <h1 className="p-1 px-2">{values.core}</h1>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row">
                        <div className="w-full mx-2 flex-1  svelte-1l8159u">
                          <div className="font-bold h-6 mt-3 text-gray-600 text-md leading-8 uppercase">
                            Idea Description
                          </div>
                          <div className="shadow-md my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                            <h1 className="p-1 px-2">{values.desc}</h1>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      id="dispImp"
                      className="border-3 border-teal-600 rounded-xl px-3 pb-2 mt-[2rem] bg-[#ffffff48] shadow-xl shadow-gray-400"
                    >
                      <div className="flex justify-center w-full mt-2">
                        <h1 className="text-center justify-center uppercase font-poppins font-bold text-red-700 text-xl uppercase mt-2">
                          Implementation
                        </h1>
                      </div>
                      <div className="flex flex-col md:flex-row">
                        <div className="w-full mx-2 flex-1  svelte-1l8159u">
                          <div className="font-bold h-6 mt-3 text-gray-600 text-md leading-8 uppercase">
                            Users for the Product
                          </div>
                          <div className="shadow-md my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                            <h1 className="p-1 px-2">{values.users}</h1>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row">
                        <div className="w-full mx-2 flex-1  svelte-1l8159u">
                          <div className="font-bold h-6 mt-3 text-gray-600 text-md leading-8 uppercase">
                            Key features in Idea/Project
                          </div>
                          <div className="shadow-md my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                            <h1 className="p-1 px-2">{values.keyf}</h1>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row">
                        <div className="w-full mx-2 flex-1  svelte-1l8159u">
                          <div className="font-bold h-6 mt-3 text-gray-600 text-md leading-8 uppercase">
                            Technology Stack I am thinking of
                          </div>
                          <div className="shadow-md my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                            <h1 className="p-1 px-2">{values.stack}</h1>
                          </div>
                        </div>
                        <div className="w-full mx-2 flex-1  svelte-1l8159u">
                          <div className="font-bold h-6 mt-3 text-gray-600 text-md leading-8 uppercase">
                            Reasons for selecting this stack
                          </div>
                          <div className="shadow-md my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                            <h1 className="p-1 px-2">{values.rfs}</h1>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row">
                        <div className="w-full mx-2 flex-1  svelte-1l8159u">
                          <div className="font-bold h-6 mt-3 text-gray-600 text-md leading-8 uppercase">
                            Technology stack that can also be used
                          </div>
                          <div className="shadow-md my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                            <h1 className="p-1 px-2">{values.stcu}</h1>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      id="dispReq"
                      className="border-3 border-teal-600 rounded-xl px-3 pb-2 mt-[2rem] bg-[#ffffff48] shadow-xl shadow-gray-400"
                    >
                      <div className="flex justify-center w-full mt-2">
                        <h1 className="text-center justify-center uppercase font-poppins font-bold text-red-700 text-xl uppercase mt-2">
                          Requirement
                        </h1>
                      </div>
                      <div className="flex flex-col md:flex-row">
                        <div className="w-full mx-2 flex-1  svelte-1l8159u">
                          <div className="font-bold h-6 mt-3 text-gray-600 text-md leading-8 uppercase">
                            Members required for this Idea/Project
                          </div>
                          <div className="shadow-md my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                            <h1 className="p-1 px-2">{values.mem}</h1>
                          </div>
                        </div>
                        <div className="w-full mx-2 flex-1  svelte-1l8159u">
                          <div className="font-bold md:h-6 mt-3 text-gray-600 text-md md:leading-8 uppercase">
                            Expected time to implement this Idea/Project
                          </div>
                          <div className="shadow-md my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                            <h1 className="p-1 px-2">{values.time}</h1>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row">
                        <div className="w-full mx-2 flex-1  svelte-1l8159u">
                          <div className="font-bold md:h-6 mt-3 text-gray-600 text-md md:leading-8 uppercase">
                            Idea/Project is being developed for the Purpose of
                          </div>
                          <div className="shadow-md my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                            <h1 className="p-1 px-2">{values.purpose}</h1>
                          </div>
                        </div>
                        <div className="w-full mx-2 flex-1  svelte-1l8159u">
                          <div className="font-bold h-6 mt-3 text-gray-600 text-md leading-8 uppercase">
                            My requirent through Modernvate is/are
                          </div>
                          <div className="shadow-md my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                            <h1 className="p-1 px-2">{req + " "}</h1>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row">
                        <div className="w-full mx-2 flex-1  svelte-1l8159u">
                          <div className="font-bold h-6 mt-3 text-gray-600 text-md leading-8 uppercase">
                            How this idea came to my mind
                          </div>
                          <div className="shadow-md my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                            <h1 className="p-1 px-2">{values.reason}</h1>
                          </div>
                        </div>
                      </div>
                    </div>
              </div> */}
            <React.Fragment>
              <ComponentToPrint ref={componentRef} />
            </React.Fragment>
            <div className="flex flex-row items-center justify-center w-full gap-8 mt-[4rem]">
              <button
                onClick={hFormSP}
                className="text-xl hover:scale-110 focus:outline-none flex justify-center w-1/3 px-4 py-2 rounded font-bold cursor-pointer 
                      hover:bg-teal-400 font-poppins font-bold hover:text-white bg-gray-100 text-teal-600 border-2 duration-200 ease-in-out border-teal-600 transition"
              >
                Previous{" "}
              </button>
              <button
                onClick={handleSubmit}
                className="text-xl hover:scale-110 focus:outline-none flex justify-center w-1/3 px-4 py-2 rounded font-bold cursor-pointer
                    hover:bg-teal-400 font-poppins font-bold bg-teal-600 text-teal-100 border duration-200 ease-in-out border-teal-600 transition"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Upload1;
