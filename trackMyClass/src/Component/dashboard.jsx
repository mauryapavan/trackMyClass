import { faCalendarWeek, faChalkboardTeacher, faChartLine, faChartSimple, faPencilAlt, faTrophy, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Progresline from "./progressline";


const DashBoard = () => {
    let navigate = useNavigate();


    const timetable = [
        { time: "9:00-9:50", subject: "Mathematics", teacher: "Mr. Sharma" },
        { time: "9:50-10:40", subject: "Free", teacher: "" },
        { time: "10:40-11:30", subject: "Science (Physics)", teacher: "Mr. Verma" },
        { time: "11:30-12:20", subject: "Social Studies", teacher: "Mrs. Iyer" },
        { time: "12:20-1:00", subject: "Lunch Break", teacher: null },
        { time: "1:00-1:50", subject: "Computer Science", teacher: "Mr. Khan" },
        { time: "1:50-2:40", subject: "Free", teacher: "" },
        { time: "2:40-3:30", subject: "Science (Biology)", teacher: "Dr. Sen" }
    ]


    async function task() {
        navigate("/task");
    }
    async function aatendance() {
        navigate("/attendance");
    }
    async function routine() {
        navigate("/Routine")
    }
    ;
    return (
        <div className="m-5 p-5 flex text-center flex-col  dashboard"  >
            <div className="flex  p-5  justify-center">

                <div onClick={routine} className="p-3 m-3 w-50 rounded-md transition bg-white border-2 border-solid  duration-300 hover:scale-110 hover:-translate-y-1 hover:cursor-pointer">
                    <div className="text-5xl "><FontAwesomeIcon icon={faChartSimple} color="#35d3f2" />
                    </div >
                    <i> Your Daily routine</i>
                </div>
                <div onClick={()=>{navigate("/Events")}} className="p-3 m-3 w-50  rounded-md transition bg-white border-2 border-solid  duration-300 hover:scale-110 hover:-translate-y-1 hover:cursor-pointer">
                    <div className="text-5xl "><FontAwesomeIcon icon={faCalendarWeek} color="#f52032" />
                    </div >
                    <i> Events</i>
                </div>
                <div onClick={()=>{navigate("/Results")}} className="p-3 m-3 w-50  rounded-md transition bg-white border-2 border-solid  duration-300 hover:scale-110 hover:-translate-y-1 hover:cursor-pointer">
                    <div className="text-5xl "><FontAwesomeIcon icon={faTrophy} color="#e35bf5" />
                    </div >
                    <i>Test Results</i>
                </div>
                <div onClick={()=>{navigate("/Upcomingtest")}} className="p-3 m-3 w-50  rounded-md transition bg-white border-2 border-solid  duration-300 hover:scale-110 hover:-translate-y-1 hover:cursor-pointer">
                    <div className="text-5xl "><FontAwesomeIcon icon={faPencilAlt} color="#FF9800" />
                    </div >
                    <i> Tests && Exam</i>
                </div>
                <div onClick={()=>{navigate("/Upskill")}} className="p-3 m-3 w-50  rounded-md transition bg-white border-2 border-solid  duration-300 hover:scale-110 hover:-translate-y-1 hover:cursor-pointer">
                    <div className="text-5xl "><FontAwesomeIcon icon={faUserGraduate} color="#4CAF50" />
                    </div >
                    <i> UpSkilss Courses</i>
                </div>

            </div>

            <div className="flex items-center" style={{ color: "whitesmoke" }} >


                <div className="text-center rounded-md w-2/3 bg-gray-900  ">
                    <div className="text-center h-15 w-3/4 bg-gray-900  ">
                        <i className="text-xl">Today Your Classes</i>
                    </div>

                    <div className="flex flex-row  transition duration-300 hover:scale-105 hover:-translate-y-1 ">
                        <div className="p-2 basis-1/3 " style={{ border: "3px solid #313e3fff" }}>
                            TIME
                        </div >
                        <div className=" p-2 basis-1/3 " style={{ borderTop: "3px solid #275053ff", borderBottom: "3px solid #275053ff", }}>
                            SUBJECT
                        </div>
                        <div className="p-2 basis-1/3  " style={{ border: "3px solid #072f28ff" }}>
                            TEACHER
                        </div>
                        <div className="p-2 basis-1/3  " style={{ border: "3px solid #072f28ff" }}>

                        </div>


                    </div>
                    {timetable.map((el, ind) => {
                        return (
                            <div key={ind} className="flex flex-row ">
                                <div className="p-2 basis-1/3 timetable1" >
                                    {el.time}
                                </div >
                                <div className=" p-2 basis-1/3 timetable2 ">
                                    {el.subject}
                                </div>
                                <div className="p-2 basis-1/3  timetable3 ">
                                    {el.teacher}
                                </div>
                                {el.subject == "Free" ?
                                    <div className="text-center rounded-md border-4 border-indigo-200 basis-1/3 transition duration-300 hover:scale-110 hover:-translate-y-1">
                                        <button onClick={task} className="p-2 rounded-md bg-gray-900 pointer" style={{ color: "whitesmoke" }}> <i>Complete your task</i></button>
                                    </div>
                                    :
                                    <div className="text-center rounded-md border-4 border-indigo-200 basis-1/3 transition duration-300 hover:scale-110 hover:-translate-y-1">
                                        <button onClick={aatendance} className=" p-2 rounded-md bg-gray-900 pointer " style={{ color: "whitesmoke" }}> <i>mark attendance</i></button>
                                    </div>

                                }

                            </div>
                        )
                    })}
                </div>
                <Progresline />
            </div>

            <ToastContainer></ToastContainer>
        </div>
    )
}

export default DashBoard;