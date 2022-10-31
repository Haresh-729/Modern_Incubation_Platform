import React from 'react'
import questions from './QuizData'
const QuizResult =(props) =>{
    return(
        <div className="score-section py-8 font-poppins text-center mx-[1rem]">
            <h2 className="text-xl font-semibold text-[#EF4A37] ">Completed!</h2>
            <h2 className="text-xl  mt-3">Incubation Section: {props.firstScore}</h2>
            <h2 className="text-xl ">Team Section: {props.secondScore}</h2>
            <h2 className="text-xl ">Programming Section: {props.thirdScore}</h2>
            <hr className="border-[0.15rem] mt-[.3rem] border-black"/>
            <h4 className="text-xl mt-3">Total Score {props.firstScore+props.secondScore+props.thirdScore}/75</h4>
            <h4 className="text-xl mt-5">Your Correct Question {props.ACA} out of {questions.length}</h4>
            <button className=" w-[14rem] h-[3rem] mt-6 font-medium justify-center text-xl text-white rounded-lg bg-[#013BBA] " onClick={props.handlePlayAgain}>Play Again </button>
        </div>
    )
}

export default QuizResult