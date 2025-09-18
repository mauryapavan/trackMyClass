import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Routine = () => {
    let [data, setData] = useState({
        routine: [
            {
                time: "6:30 AM - 7:30 AM",
                activity: "Morning routine & exercise",
                reason: "Boost energy and improve focus to balance weakness in consistency"
            },
            {
                time: "7:30 AM - 8:00 AM",
                activity: "Breakfast & preparation",
                reason: "Healthy start for maintaining energy throughout college"
            },
            {
                time: "8:00 AM - 3:00 PM",
                activity: "College (7 hours)",
                reason: "Fixed schedule for lectures, labs, and group work"
            },
            {
                time: "3:30 PM - 4:30 PM",
                activity: "Rest / Refreshment",
                reason: "Recharge after college hours"
            },
            {
                time: "4:30 PM - 6:00 PM",
                activity: "Coding practice & problem solving",
                reason: "Work on goal: Improve coding skills, using strength in Problem Solving and Logical Thinking"
            },
            {
                time: "6:00 PM - 7:00 PM",
                activity: "Reading & preparation for exams",
                reason: "Focus on goal: Prepare for government exams while nurturing your interest in Reading"
            },
            {
                time: "7:00 PM - 8:00 PM",
                activity: "Public speaking / communication practice",
                reason: "Enhance communication skills and build confidence in Public Speaking"
            },
            {
                time: "8:00 PM - 8:30 PM",
                activity: "Dinner & family time",
                reason: "Relax and maintain healthy relationships"
            },
            {
                time: "8:30 PM - 9:30 PM",
                activity: "Skill development project",
                reason: "Apply coding and logical thinking to projects that align with your goals"
            },
            {
                time: "9:30 PM - 10:00 PM",
                activity: "Light reading / Reflection",
                reason: "Wind down while reinforcing exam preparation and communication improvement"
            },
            {
                time: "10:00 PM - 6:30 AM",
                activity: "Sleep",
                reason: "Rest to maintain health, focus, and productivity"
            }
        ]
    })


    return (
        <div className="m-5 p-5">
           <div className="flex  flex-col items-center " style={{color:"whitesmoke"}} >
                <div className="text-center h-15 w-3/4 bg-gray-900  ">
                    <i className="text-xl">Your daily Routine</i>
                </div>

                <div className="text-center rounded-md w-3/4 bg-gray-900  ">

                    <div className="flex flex-row ">
                        <div className="p-2 basis-1/3 " style={{ border: "3px solid #313e3fff" }}>
                            TIME
                        </div >
                        <div className=" p-2 basis-1/3 " style={{ borderTop: "3px solid #275053ff", borderBottom: "3px solid #275053ff", }}>
                            Activity
                        </div>
                        <div className="p-2 basis-1/3  " style={{ border: "3px solid #072f28ff" }}>
                            reason
                        </div>

                    </div>
                    {data.routine.map((el, ind) => {
                        return (
                            <div key={ind} className="flex flex-row">
                                <div className="p-2 w-1/3  timetable1" >
                                    {el.time}
                                </div >
                                <div className=" p-2 w-1/3 timetable2 ">
                                    {el.activity}
                                </div>
                                <div className="p-2 w-1/3  timetable3 ">
                                    {el.reason}
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>
        </div >
    )
}

export default Routine;