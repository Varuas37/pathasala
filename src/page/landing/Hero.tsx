import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom'
import { heroText, btnText, Questions } from "./data"
import "./quiz.css"

interface Props {

}
const Hero: React.FC<Props> = () => {

    const [indexNumber, setIndexNumber] = useState(0);
    const handleNext = () => {
        if (indexNumber >= 3) {
            setIndexNumber(0);
        }
        else {
            setIndexNumber(indexNumber + 1)
        }
    }
    return (
        <main>
            <div className="flex flex-col items-center justify-center mt-20">
                <div className="container flex flex-row w-full justify-between items-center h-1/6">
                    <h1 className="heading w-1/2 font-sora font-bold" style={{ fontSize: 50, wordBreak: "break-word" }} >{heroText}</h1>
                    <button className="bg-darkerBlue font-sora text-xl rounded-xl p-4 outline-none focus:outline-none font-medium" style={{ fontSize: 25 }}  >{btnText}</button>
                </div>
                <div className="container  toolbar w-full mt-20 rounded-4xl items-center" style={{ backgroundColor: "#0B0F39", height: "700px" }}>
                    {/* Toolbar tip */}
                    <div className="toolbar relative bg-darkerBlue w-full h-9 rounded-4xl">
                        <div className="absolute ml-4 mt-3">
                            <div className="circles absolute rounded-full" style={{ height: "15px", width: "15px", backgroundColor: "#F65E58" }}></div>
                            <div className="circles absolute rounded-full" style={{ height: "15px", width: "15px", marginLeft: "20px", backgroundColor: "#F9BD2F" }}></div>
                            <div className="circles absolute bg-green-800 rounded-full" style={{ height: "15px", width: "15px", marginLeft: "40px", backgroundColor: "#3ACA41" }}></div>
                        </div>
                    </div>
                    {/* Sidebar */}
                    <div className=" flex flex-row items-center w-full">
                        <div className="hidden md:block ml-5 mt-3 rounded-xl bg-blueshade w-1/6" style={{ height: "640px" }}></div>
                        {/* Quiz Question requires height of 600 on Smaller screen and a 540 on bigger */}
                        <div className="flex flex-col w-full items-center justify-center" style={{ height: 600 }}> 

                            <div className="w-5/6 justify-end items-center space-x-2 flex flex-row mt-5 md:mt-0 mb-2 md:mb-5">
                                <div className="bg-red-400 rounded cursor-pointer p-1">Past Question</div>
                                <div className="bg-blue-400 rounded cursor-pointer p-1">Pathsala</div>
                            </div>

                            <Fragment >
                                <div className="bg-blueshade w-full md:w-5/6 h-20 rounded-xl mb-4 md:mb-10 flex justify-start items-center" id="quizQuestion">
                                    <h1 className="flex items-center text-lg md:text-2xl ml-5 font-bold cursor-pointer h-20">Q. {Questions[indexNumber].question} </h1>
                                </div>
                                <div className="w-full md:w-5/6 flex-1 rounded-xl mb-10  space-y-5 md:space-y-10" id="quizAnswers">
                                    <div className="flex flex-col md:flex-row md:space-y-0 space-y-3 md:space-x-6">
                                        <div className="bg-blueshade  text-lg md:text-2xl items-center flex p-5 font-medium rounded-xl hover:bg-hoverblue cursor-pointer w-full md:w-1/2 h-20">A. {Questions[indexNumber].answer[0].answerText}</div>
                                        <div className="bg-blueshade  text-lg md:text-2xl items-center flex p-5 font-medium rounded-xl hover:bg-hoverblue cursor-pointer w-full md:w-1/2 h-20">B. {Questions[indexNumber].answer[1].answerText}</div>
                                    </div>
                                    <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-6">
                                        <div className="bg-blueshade  text-lg md:text-2xl items-center flex p-5 font-medium rounded-xl hover:bg-hoverblue cursor-pointer  w-full md:w-1/2 h-20">C. {Questions[indexNumber].answer[2].answerText}</div>
                                        <div className="bg-blueshade  text-lg md:text-2xl items-center flex p-5 font-medium rounded-xl hover:bg-hoverblue cursor-pointer w-full md:w-1/2 h-20">D. {Questions[indexNumber].answer[3].answerText}</div>
                                    </div>
                                </div>
                                {indexNumber <= 2 ?
                                    <button className="bg-blueshade p-4 font-medium font-2xl w-full md:w-1/3 hover:bg-red-400 outline-none rounded-xl focus:outline-none" onClick={handleNext}>Next</button> :
                                    <Link to="/signup" className="bg-blue-800 p-4 text-center font-bold font-2xl w-1/3 hover:bg-darkerBlue outline-none rounded-xl focus:outline-none" onClick={handleNext}>Create Account</Link>
                                }
                            </Fragment>
                        </div>

                    </div>
                </div>
            </div>
            {/* Need to work here Sir */}
        </main>
    );
}

export default Hero;