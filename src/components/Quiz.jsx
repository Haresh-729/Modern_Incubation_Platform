import React from "react";
import { useState } from "react";
import Maturity1 from "./Maturity1";
import questions from "./QuizData";
import QuizResult from "./QuizResult";
import Register from "./Register";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [CorrectAns, setCorrectAns] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [clicked, setClicked] = useState();

  const [firstScore, setfirstScore] = useState(0);
  const [secondScore, setsecondScore] = useState(0);
  const [thirdScore, setthirdScore] = useState(0);

  const [FCA, setFCA] = useState(0);
  const [SCA, setSCA] = useState(0);
  const [TCA, setTCA] = useState(0);
  const [ACA, setACA] = useState(0);

  const handleAnsweroption = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 5);
      setCorrectAns(CorrectAns + 1);
      setShowResult(false);
    }
    setClicked(true);
  };

  const handleNextOpition = () => {
    setClicked(false);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      if (nextQuestion === 5) {
        setfirstScore(score);
        setFCA(CorrectAns);
        setScore(0);
        setCorrectAns(0);
      }
      if (nextQuestion === 10) {
        setsecondScore(score);
        setSCA(CorrectAns);
        setScore(0);
        setCorrectAns(0);
      }
    } else {
      setthirdScore(score);
      setTCA(CorrectAns);
      setCorrectAns(0);
      setACA(FCA + SCA + TCA);
      setShowResult(true);
      console.log(TCA);
    }
  };
  // <Dashboard score={score}/>

  const handlePlayAgain = () => {
    const prev = currentQuestion - 1;
    prev >= 0 && setCurrentQuestion(prev);
    setShowResult(false);
  };
  return (
    <div className="flex items-center justify-center w-screen min-h-screen">
      <div className="md:w-[32rem] md:h-auto app mx-4 bg-slate-400 rounded-[2rem] bg-opacity-50 w-[18rem] h-auto  text-violet-900 ">
        {showResult ? (
          <QuizResult
            score={score}
            CorrectAns={CorrectAns}
            firstScore={firstScore}
            secondScore={secondScore}
            thirdScore={thirdScore}
            FCA={TCA}
            SCA={SCA}
            TCA={TCA}
            ACA={ACA}
            handlePlayAgain={handlePlayAgain}
          />
        ) : (
          <>
            <div className="md:mt-8 question-selection mt-4 float-left ">
              <h5 className="md:text-3xl md:ml-8 md:py-4 text-xl font-bold ml-6 py-2">
                Score:{score}
              </h5>
              <div className="md:text-3xl md:ml-8 question-count ml-6 text-xl">
                <span>Question {currentQuestion + 1}</span> of{" "}
                {questions.length}
              </div>
              <br></br>
              <div className="md:ml-8 md:text-xl md:w-[28rem]  question-text ml-6 mb-6 py-2 w-[16rem] text-sm ">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-selection  ">
              {questions[currentQuestion].answerOptions.map((answerOptions) => (
                // eslint-disable-next-line no-template-curly-in-string
                <button
                  className={
                    'button ${clicked && answerOptions.isCorrect? "correct":"button"} transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 md:text-xl md:w-[20rem] md:h-[3rem] w-[14rem] h-[1rem] md:mx-20 mt-6 py-8  mx-8 flex flex-wrap text-sm text-white rounded-lg bg-[#013BBA] focus:bg-slate-600 hover:bg-slate-600  place-content-center'
                  }
                  disabled={clicked}
                  onClick={() => handleAnsweroption(answerOptions.isCorrect)}
                >
                  {answerOptions.answerText}
                </button>
              ))}
              {/* <button>Answers</button> */}
              <div className="actions">
                {/* <button className="w-[8rem]  bg-[#28a0a0] text-white rounded-lg  h-[3rem] mr-2 ml-6 text-xl hover:bg-slate-600 " onClick={handlePlayAgain}>Previous</button> */}
                <button
                  className=" md:w-[12rem] w-[8rem] align-right bg-[#28a0a0] text-white rounded-lg h-[3rem] md:mx-auto md:mt-10 flex justify-center items-center ml-20 mt-4 md:mb-10  mb-5 text-xl hover:bg-slate-600"
                  disabled={!clicked}
                  onClick={handleNextOpition}
                >
                  Next
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
