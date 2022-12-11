import React, { useState, useEffect } from "react";
import { collection, doc, onSnapshot, updateDoc, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";


function VerifyIdeas({
    ideaId,
    user,
    cat,
    category,
    username,
    title,
    statusLogo,
    pdfFile,
    description,
    photoUrl,
    status
}) {
    const navigate = useNavigate();
    const [like, setLike] = useState(false);
    const [collab, setCollab] = useState(false);
    const [toggleCmts, setToggleCmts] = useState(false);
    const [displayStatus, setStatus] = useState(false);
    const [commentCount, setCommentCount] = useState(0);
    const [comments, setComments] = useState([]);
    const [show, setShow] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const [likes, setLikes] = useState([]);
    const [showDetails, setShowDetails] = useState(false);
    const [showAForm,setShowAForm] = useState(false);
    const [showRForm,setShowRForm] = useState(false);
    const [feedback,setFeedback] = useState("");

    useEffect(() => {
        let unsubscribe;
        if (ideaId) {
            unsubscribe = onSnapshot(collection(db, "ideas", ideaId, "comments"), orderBy("timestamp", "desc"), (snapshot) => {
                setCommentCount(snapshot.docs.length);
                setComments(snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                })))
            }
            );
        }
        return () => {
            unsubscribe();
        };
    }, [ideaId]);


    useEffect(() => {
        let unsubscribe;
        if (ideaId) {
            unsubscribe = onSnapshot(collection(db, "ideas", ideaId, "likes"), (snapshot) => {
                setLikeCount(snapshot.docs.length);
                setLikes(snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                })));
            }
            );
        }
        return () => {
            unsubscribe();
        };
    }, [ideaId]);


    return (
        <div className="pt-5 bg-cover w-full h-full flex flex-col items-center justify-start">
            {
                status === "under-verification" ?
                    category === "student" || category === "individual" ?
                        cat === "institute" || cat === "organization" ?
                            <>
                                {/* <article className="drop-shadow-lg my-5 w-1/2 border rounded-[2rem] {/*  hover:bg-offwhite transition duration-350 ease-in-out"> */}
                                <article className=" my-2 w-11/12 sm:w-1/2 border rounded-[2rem] shadow-lg">
                                    <div className="flex flex-shrink-0 p-4 pb-0">
                                        {/* <a href="#" className="flex-shrink-0 group block">  */}

                                        {/* div1 main */}
                                        <div className=" w-full flex flex-row justify-between">
                                            {/* div 1.1 img&name */}
                                            <div className="flex">
                                                <div>
                                                    <img
                                                        className="inline-block h-10 w-10 rounded-full"
                                                        src={photoUrl}
                                                        alt=""
                                                    ></img>
                                                </div>
                                                <div className="ml-3 items-center justify-center">
                                                    <p className="text-base leading-6 font-medium text-[#304E81]">
                                                        {username}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* div 1.2 option&close */}

                                            <div className="flex justify-items-end space-x-4 ">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="w-6 h-6 hover:stroke-blue"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                                    />
                                                </svg>
                                                {
                                                    show ?

                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth="1.5"
                                                            stroke="currentColor"
                                                            className="w-6 h-6 hover:stroke-blue"
                                                            onClick={() => [setCollab(false), setLike(false), setToggleCmts(false), setShow(!show)]}
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M6 18L18 6M6 6l12 12"
                                                            />
                                                        </svg>
                                                        :
                                                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 30.000000 30.000000"
                                                            preserveAspectRatio="xMidYMid meet" className="w-6 h-5 hover:stroke-blue"
                                                            onClick={() => {
                                                                setShow(!show);
                                                            }}>

                                                            <g transform="translate(0.000000,30.000000) scale(0.100000,-0.100000)"
                                                                fill="#000000" stroke="none">
                                                                <path d="M203 263 c20 -2 37 -7 37 -11 0 -9 -183 -192 -192 -192 -4 0 -9 17
                                                                         -11 38 -3 30 -4 28 -5 -15 l-2 -53 53 2 c43 1 45 2 15 5 -21 2 -38 7 -38 11 0
                                                                        9 183 192 192 192 4 0 9 -17 11 -37 3 -31 4 -29 5 15 l2 52 -52 -2 c-44 -1
                                                                        -46 -2 -15 -5z"/>
                                                            </g>
                                                        </svg>
                                                }


                                            </div>
                                        </div>
                                        {/* </a>  */}
                                    </div>
                                    <div className="pl-16 mb-2">
                                        <div className="flex items-center">
                                            <h1 className="text-black font-bold text-2xl pr-4">{title}</h1>
                                            {

                                                <>

                                                    <button onClick={() => [
                                                        setShowRForm(!showRForm),setShowAForm(false)
                                                    ]}>
                                                        <img className="mr-4 h-5" src="https://i.ibb.co/ZBDkw5b/icons8-rejected-64-1.png" alt="statusLogo"></img>
                                                    </button>
                                                    <button onClick={() => [
                                                        setShowRForm(false),setShowAForm(!showAForm)
                                                    ]}>
                                                        <img className=" h-5" src="https://i.ibb.co/vjPL21q/icons8-approval-64.png" alt="statusLogo"></img>
                                                    </button>
                                                </>

                                            }
                                        </div>
                                    </div>
                                    {show ?
                                        <>
                                            <div className="pl-16">
                                                <p className="text-base width-auto font-medium text-black flex-shrink">
                                                    {description}
                                                </p>
                                            </div>
                                            {showDetails ? (
                                                <span className="text-grey pl-16 text-base width-auto font-medium flex-shrink hover:text-gray-300 cursor-pointer" onClick={() => setShowDetails(!showDetails)}>Hide Details
                                                    <img className="mx-1" src={pdfFile} />
                                                </span>) : <span className="text-grey pl-16 text-base width-auto font-medium flex-shrink hover:text-gray-300 cursor-pointer " onClick={() => setShowDetails(!showDetails)}>View Details</span>}
                                            <div className="pt-2 pl-16 flex flex-row space-x-8 ">
                                                <button
                                                    onClick={() => [setLike(!like), setCollab(false), setToggleCmts(false), setStatus(false)]}
                                                    id="like"
                                                    className="transition ease-in-out hover:scale-75  duration-10"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        className="w-8 h-8"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                                                        />
                                                    </svg>
                                                </button>
                                                <button
                                                    id="collab"
                                                    onClick={() => [setCollab(!collab), setLike(false), setToggleCmts(false), setStatus(false)]}
                                                    className="transition ease-in-out hover:scale-75  duration-10"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        className="w-10 h-10"
                                                    >
                                                        <path d="M20.516 13.453l3.484-.891-1.932-7.562-3.526.891.196.753c-1.796.24-2.544-.226-4.459-1.226-.498-.257-.972-.418-1.408-.418-.592 0-1.108.268-1.503.714l-.491.552c-1.956-1.525-3.178-.405-4.505.084-.364.135-.793.185-1.087.202l.173-.662-3.526-.89-1.932 7.562 3.484.891.182-.695c.316.06 1.509.291 1.733.347-.649 1.055.01 2.357 1.199 2.495.226.545.741.932 1.34 1.003.225.544.736.928 1.332.997.33.815 1.305 1.267 2.232.863.352.354.841.537 1.356.537.703 0 1.349-.344 1.674-1.012.574-.12 1.052-.498 1.296-1.01.552-.115 1.031-.47 1.285-1.002.759-.154 1.378-.773 1.457-1.602.031-.312-.03-.624-.155-.91.289-.16 1.442-.647 1.886-.833l.215.822zm.686-6.996l1.338 5.24-1.165.298-1.366-5.237 1.193-.301zm-18.577 5.538l-1.165-.298 1.338-5.24 1.193.301-1.366 5.237zm3.766 2.484c-.294-.221-.331-.645-.08-.942l.61-.749c.249-.298.69-.363.986-.14.295.223.33.644.08.944l-.609.747c-.25.299-.693.361-.987.14zm1.336 1c-.296-.224-.337-.636-.086-.936l.616-.754c.25-.3.69-.363.984-.142.295.222.33.646.082.943l-.617.755c-.25.301-.682.356-.979.134zm1.336 1c-.295-.222-.333-.645-.082-.945l.609-.745c.251-.299.69-.364.986-.142.295.223.331.645.08.944l-.608.747c-.25.3-.691.361-.985.141zm2.93.108l-.61.75c-.251.302-.691.363-.986.142-.295-.222-.331-.645-.082-.943l.612-.751c.252-.298.693-.362.987-.139.296.221.332.644.079.941zm1.28 1.11c-.12.092-.266.138-.415.138-.16 0-.315-.069-.448-.176l.358-.441c.159-.187.269-.412.332-.65l.24.212c.251.285.218.694-.067.917zm3.873-3.017c-.289.222-.719.168-.967-.114l-1.944-1.669c-.16-.138-.37.107-.208.242l1.896 1.628c.248.285.217.696-.068.916-.276.218-.712.181-.969-.114l-1.491-1.308c-.161-.139-.37.102-.213.241l1.457 1.279c.249.285.211.686-.075.909-.28.218-.708.184-.96-.106l-.45-.402-.002-.225c-.089-.78-.711-1.352-1.449-1.434-.224-.547-.737-.93-1.335-.998-.218-.535-.726-.93-1.334-1-.397-.975-1.636-1.334-2.549-.679-.425-.133-1.852-.45-2.434-.564l.836-3.204c.783-.037 1.694-.132 2.902-.705.864-.411 1.278-.599 2.067-.013-.507.507-1.027.955-1.562 1.268-.48.28-.688.837-.531 1.419.181.668.856 1.343 1.96 1.343s2.924-1.014 3.279-1.502c1.472 1.391 2.902 2.684 4.143 3.796.35.39.285.776.001.996zm.526-2.537c-.837-.753-2.728-2.463-3.407-3.143-.289-.288-.691-.619-1.244-.619-.49 0-.878.267-1.128.468-.573.462-2.019 1.378-2.592.92 1.161-.754 2.208-1.943 3.192-3.063.24-.273.587-.219 1.1.044 2.153 1.125 3.007 1.666 5.538 1.394l.779 2.987c-.5.199-1.823.78-2.238 1.012z" />
                                                    </svg>
                                                </button>
                                                <button
                                                    id="comment"
                                                    onClick={() => [setToggleCmts(!toggleCmts), setLike(false), setCollab(false), setStatus(false)]}
                                                    className="transition ease-in-out hover:scale-75  duration-10"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        className="w-8 h-8"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </>
                                        : null
                                    }

                                </article>
                                {
                                    displayStatus ?
                                        status === "not-verified" ?
                                            <div className="  bg-[#6788D3] border rounded-3xl bg-opacity-30">
                                                <h1 className="pl-6 pt-2 text-redish tracking-wider font-extrabold ">IDEA NOT VERIFIED</h1>
                                                <div className="mx-6 my-4 border rounded-2xl h-full  bg-[#ffff] text-grey">
                                                    <h1 className="pl-4 pt-2 font-bold text-xs tracking-wider">DETAILS</h1>
                                                    <p className="px-8 py-3 text-xs font-medium tracking-wide overflow-y-auto">
                                                        Idea wihich you have submitted is already in practice. Try something
                                                        better
                                                    </p>
                                                </div>
                                            </div>
                                            :
                                            status === "verified" ?
                                                <div className="  bg-[#6788D3] border rounded-3xl bg-opacity-30">
                                                    <h1 className="pl-6 pt-2 text-redish tracking-wider font-extrabold ">IDEA VERIFIED</h1>
                                                    <div className="mx-6 my-4 border rounded-2xl h-full  bg-[#ffff] text-grey">
                                                        <h1 className="pl-4 pt-2 font-bold text-xs tracking-wider">DETAILS</h1>
                                                        <p className="px-8 py-3 text-xs font-medium tracking-wide overflow-y-auto">
                                                            Idea wihich you have submitted is already in practice. Try something
                                                            better
                                                        </p>
                                                    </div>
                                                </div>
                                                :
                                                <div className="  bg-[#6788D3] border rounded-3xl bg-opacity-30">
                                                    <h1 className="pl-6 pt-2 text-redish tracking-wider font-extrabold ">IDEA UNDER VERIFICATION</h1>
                                                    <div className="mx-6 my-4 border rounded-2xl h-full  bg-[#ffff] text-grey">
                                                        <h1 className="pl-4 pt-2 font-bold text-xs tracking-wider">DETAILS</h1>
                                                        <p className="px-8 py-3 text-xs font-medium tracking-wide overflow-y-auto">
                                                            Idea wihich you have submitted is already in practice. Try something
                                                            better
                                                        </p>
                                                    </div>
                                                </div>
                                        :
                                        null

                                }

                                {
                                    showAForm ?
                                        <div className="w-full max-w-xs">
                                            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                                <div className="mb-4">
                                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="reason">
                                                        Reason to accept the idea
                                                    </label>
                                                    <input onChange={(e)=>setFeedback(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="reason" type="text" placeholder="Enter the reason"/>
                                                </div>
                                                <div className="flex items-center justify-center">
                                                    <button onClick={()=>{
                                                            updateDoc(doc(db, "ideas", ideaId), {
                                                                status: "verified",
                                                                aORrreason:feedback,
                                                                statusLogo: "https://i.ibb.co/tbs1YjT/verified.png",
                                                            }).then(() => {
                                                                console.log("Document successfully updated!");
                                                                navigate("/Post");
                                                            }).catch((error) => {
                                                                // The document probably doesn't exist.
                                                                console.error("Error updating document: ", error);
                                                            });
                                                        }} className="bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                                        Submit
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        :
                                        showRForm ?
                                            <div className="w-full max-w-xs">
                                                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                                    <div className="mb-4">
                                                        <label className="block text-gray-700 text-sm font-bold mb-2" for="reason">
                                                        Reason to reject the idea
                                                        </label>
                                                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="reason" type="text" placeholder="Enter the reason"/>
                                                    </div>
                                                    <div className="flex items-center justify-center">
                                                        <button onClick={()=>{
                                                            updateDoc(doc(db, "ideas", ideaId), {
                                                                status: "not-verified",
                                                                aORrreason:feedback,
                                                                statusLogo: "https://i.ibb.co/5hbBY04/not-Verified.png",
                                                            }).then(() => {
                                                                console.log("Document successfully updated!");
                                                            }).catch((error) => {
                                                                // The document probably doesn't exist.
                                                                console.error("Error updating document: ", error);
                                                            });
                                                        }} className="bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                                            Submit
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                            : null
                                }

                                {like ? (
                                    <div className="w-[20rem] bg-[#6788D3] bg-opacity-30 shadow-2xl rounded-3xl p-4 float-left">
                                        {/* <div className="flex items-center justify-start pb-4">
                                      <div className="pr-4">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="25"
                                          height="25"
                                          viewBox="0 0 24 24"
                                        >
                                          <path d="M12.015 7c4.751 0 8.063 3.012 9.504 4.636-1.401 1.837-4.713 5.364-9.504 5.364-4.42 0-7.93-3.536-9.478-5.407 1.493-1.647 4.817-4.593 9.478-4.593zm0-2c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 5c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm0-2c-2.209 0-4 1.792-4 4 0 2.209 1.791 4 4 4s4-1.791 4-4c0-2.208-1.791-4-4-4z" />
                                        </svg>
                                      </div>
                                      <div>
                                        <p className="text-lg text-gray-500 font-bold">VIEWS</p>
                                        <p className="text-lg text-[#013BBA] font-bold">1234</p>
                                      </div>
                                    </div> */}

                                        <div className="flex items-center justify-start pb-4">
                                            <div className="pr-4">
                                                <button>
                                                    {


                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth="1.5"
                                                            stroke="currentColor"
                                                            className="w-6 h-6"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                                                            />
                                                        </svg>

                                                    }

                                                </button>
                                            </div>
                                            <div>

                                                <p className="text-lg text-gray-500 font-bold">LIKES</p>
                                                <p className="text-lg text-[#013BBA] font-bold">{likeCount}</p>

                                            </div>
                                        </div>

                                        <div className="overflow-y-auto h-[15rem] pb-3">
                                            {likes.map(({ id, data }) => (
                                                <div key={id} id={id}>
                                                    <div className="flex pb-3">
                                                        <div>
                                                            <img
                                                                className="h-10 w-10 rounded-full mr-3"
                                                                src={data.photoUrl}
                                                                alt="Profie"
                                                            />
                                                        </div>
                                                        <div>
                                                            <p className="flex justify-between text-md text-gray-500 font-bold">
                                                                {data.uname}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )
                                    :
                                    collab ?
                                        status === "verified" ?
                                            navigate("/chat")
                                            :
                                            <div className="w-[20rem] h-[20rem] bg-[#6788D3] bg-opacity-30 shadow-2xl rounded-3xl p-4 float-left">
                                                <div className="flex items-center justify-start pb-4">
                                                    <div>
                                                        <p className="text-lg text-gray-500 font-bold">Idea needs to be verified in order to collaborate</p>
                                                    </div>
                                                </div>
                                            </div>
                                        :
                                        toggleCmts ?
                                            <div className="w-[18rem] bg-[#6788D3] bg-opacity-30 shadow-2xl rounded-3xl p-4 float-left">
                                                <div className="flex items-center justify-start pb-4">
                                                    <div className="pr-4">
                                                        <svg
                                                            xmlns="http:www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth="1.5"
                                                            stroke="currentColor"
                                                            className="w-6 h-6"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <p className="text-lg text-gray-500 font-bold">COMMENTS</p>
                                                        <p className="text-lg text-[#013BBA] font-bold">{commentCount}</p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="overflow-y-auto h-[15rem] pb-3">
                                                        {

                                                            comments.map(({ id, data }) => (
                                                                <div key={id}>
                                                                    <div className="flex pb-3">
                                                                        <div>
                                                                            <img
                                                                                className="h-10 w-10 rounded-full mr-3"
                                                                                src="https://i.ibb.co/smDcGmp/profile.png"
                                                                                alt="Profie"
                                                                            />
                                                                        </div>
                                                                        <div>
                                                                            <p className="flex justify-between text-md text-gray-500 font-bold">
                                                                                {data.uname}
                                                                            </p>
                                                                            <div className="w-[10rem] bg-slate-200 rounded-bl-3xl rounded-r-3xl">
                                                                                <p className=" px-2 py-2">{data.text}</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))

                                                        }
                                                    </div>
                                                </div>

                                                <div>
                                                </div>


                                            </div>
                                            :
                                            null
                                }
                            </>
                            :
                            null
                        :
                        null
                    :
                    null
            }

        </div>
    );
}

export default VerifyIdeas;