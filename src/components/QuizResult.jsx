import React from "react";
import { useState } from "react";
import questions from "./QuizData";
import Pie from "../components/Charts/Pie";
import ChartsHeader from "./ChartsHeader";
import { FirstScore, SecondScore, ThirdScore } from "./Quiz";
import { useEffect } from "react";
import {setDoc, doc} from "firebase/firestore";
import {db,auth} from "../firebase";

const QuizResult = (props) => {
  const [resDiv, setRes] = useState(false);

  const handleRes = (e) => {
    setRes((current) => !current);
  };

  const data1 = [
    { x: "Incubation", y: props.firstScore, text: "5" },
    { x: "Team", y: props.secondScore, text: "2" },
    { x: "Programming", y: props.thirdScore, text: "1" },
  ];

  const maturityResult =
    props.firstScore + props.secondScore + props.thirdScore;

  useEffect(() => {
    setDoc(doc(db, "maturityPoints", auth.currentUser.uid), {
      maturityResult: maturityResult,
    });
  });

  return (
    <div className="flex flex-col items-center contents-center justify-center">
      <div className=" score-section py-8 font-poppins text-center mx-[1rem]">
        <h2 className="text-4xl font-bold poppins text-[#EF4A37] ">
          Completed!
        </h2>
        {/* <hr className="border-[0.15rem] mt-[.3rem] border-black" /> */}
        <h4 className="text-xl mt-3 font-bold">
          Total Score {props.firstScore + props.secondScore + props.thirdScore}
          /75
        </h4>
        <h4 className="text-xl mt-5 font-bold">
          Your Correct Question {props.ACA} out of {questions.length}
        </h4>
        <button
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 w-[14rem] h-[3rem]  mt-6 font-medium justify-center text-xl text-white rounded-lg bg-[#013BBA] "
          onClick={handleRes}
        >
          {" "}
          View Details{" "}
        </button>
        <div className="flex py-8 font-poppins items-center w-[40rem] text-center mx-[1rem]">
          {resDiv ? (
            <div
              className=" w-full px-6 lg:px-24" /*style={{visibility: isVisible ? 'visible' : 'hidden'}}*/
            >
              {/* <div className="first-letter:float-center flex flex-col items-center justify-center w-[30rem] bg-white/30 rounded-[1rem] border-2 border-offwhite shadow-lg"> */}
              {/* <h2 className="text-xl  mt-3">Incubation Section: {props.firstScore}</h2>
                <h2 className="text-xl ">Team Section: {props.secondScore}</h2>
                <h2 className="text-xl ">Programming Section: {props.thirdScore}</h2> */}
              <h2 className="text-xl text-center text-[#EF4A37] font-bold poppins">
                Correct Answers
              </h2>
              <h2 className="text-xl ">Incubation Section: {props.FCA}</h2>
              <h2 className="text-xl ">Team Section: {props.SCA}</h2>
              <h2 className="text-xl ">Programming Section: {props.TCA}</h2>
              <div className="float-center w-[30rem]">
                <Pie
                  id="pie-chart"
                  data={data1}
                  legendVisiblity
                  height="300px"
                  color="#b7cddb"
                />
              </div>
              {/* ChartsHeader(category="Pie" title="Project Cost Breakdown")
              <div className="rounded-[10rem] bg-white">*/}
              {/* </div> */}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default QuizResult;
