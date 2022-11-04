import React from "react";
import { useState } from "react";
import questions from "./QuizData";
import { FirstScore, SecondScore, ThirdScore} from "./Quiz";



import { PieChart, Pie} from 'recharts';

const QuizResult = (props) => {
  const [resDiv, setRes] = useState(false);

  const handleRes = (e) => {
    setRes((current) => !current);
  };

  const data1 = [
    { x: "Incubation", y: 5000, text: "5" },
    { x: "Team", y: 2000, text: "2" },
    { x: "Programming", y: 1000, text: "1" },
  ];
  const data = [
    {name: 'Geeksforgeeks', students: 400},
    {name: 'Technical scripter', students: 700},
    {name: 'Geek-i-knack', students: 200},
    {name: 'Geek-o-mania', students: 1000}
  ];

  const ChartsHeader = ({ category, title }) => (
    <div className=" mb-10">
      <div>
        <p className="text-lg text-gray-400">Chart</p>
        <p className="text-3xl font-extrabold tracking-tight dark:text-gray-200 text-slate-900">
          {category}
        </p>
      </div>
      <p className="text-center dark:text-gray-200 text-xl mb-2 mt-3">
        {title}
      </p>
    </div>
  );

  return (
    <div className="flex flex-col items-center">
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
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 w-[14rem] h-[3rem] mt-6 font-medium justify-center text-xl text-white rounded-lg bg-[#013BBA] "
          onClick={handleRes}
        >
          {" "}
          View Details{" "}
        </button>
        <div className="flex py-8 font-poppins w-[80rem] text-center mx-[1rem]">
          {resDiv ? (
            <div
              className=" w-full px-6 lg:px-24" /*style={{visibility: isVisible ? 'visible' : 'hidden'}}*/
            >
              <div className="first-letter:float-center flex flex-col items-left w-full bg-white/30 rounded-[1rem] border-2 border-offwhite shadow-lg">
                <h2 className="text-xl  mt-3">
                  {" "}
                  Incubation Section: {props.firstScore}{" "}
                </h2>
                <h2 className="text-xl ">Team Section: {props.secondScore}</h2>
                <h2 className="text-xl ">
                  Programming Section: {props.thirdScore}
                </h2>
                <h2 className="text-xl text-center text-[#EF4A37] font-bold poppins">
                  Correct Answers
                </h2>
                <h2 className="text-xl ">Incubation Section: {props.FCA}</h2>
                <h2 className="text-xl ">Team Section: {props.SCA}</h2>
                <h2 className="text-xl ">Programming Section: {props.TCA}</h2>
              </div>
              {/* ChartsHeader(category="Pie" title="Project Cost Breakdown") */}
              <PieChart width={700} height={700}>
          <Pie data={data} dataKey="students" outerRadius={250} fill="green" />
        </PieChart>
            
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default QuizResult;
