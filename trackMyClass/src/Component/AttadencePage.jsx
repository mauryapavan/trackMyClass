import React from "react";
import { useState } from "react";

const Myaatendance = () => {
    let [data, setdata] = useState([
     { date: "2025-09-01",Computer_Science: "Present", Science_biology: "Present", social_studies: "present", Science_physics: "absent", Mathmatics: "present" },
     { date: "2025-09-01",Computer_Science: "Present", Science_biology: "Present", social_studies: "present", Science_physics: "present", Mathmatics: "present" },
     {date:"2025-09-02",Computer_Science:"Present", Science_biology:"Present",social_studies:"Asent",Science_physics:"absent",Mathmatics:"present"},
     {date:"2025-09-03",Computer_Science:"Present", Science_biology:"Present",social_studies:"present",Science_physics:"present",Mathmatics:"present"}
    ,{date:"2025-09-04",Computer_Science:"Absent", Science_biology:"Absent",social_studies:"present",Science_physics:"absent",Mathmatics:"absent"}
    ,{date:"2025-09-05",Computer_Science:"Present", Science_biology:"Present",social_studies:"present",Science_physics:"present",Mathmatics:"present"}
    ,{date:"2025-09-06",Computer_Science:"Absent", Science_biology:"Present",social_studies:"Absent",Science_physics:"present",Mathmatics:"present"}
    ])


    return (
        <div className="m-5 p-5">
            <div className="flex flex-col items-center " style={{ color: "whitesmoke" }} >
                <div className="text-center h-15 w-3/4 bg-gray-900  ">
                    <i className="text-xl">Today Your Classes</i>
                </div>

                <div className="text-center rounded-md w-3/4 bg-gray-900 ">

                    <div className="flex flex-row ">
                        <div className="p-2 basis-1/3 " style={{ border: "3px solid #313e3fff" }}>
                            Date
                        </div >
                        <div className=" p-2 basis-1/3 " style={{ borderTop: "3px solid #275053ff", borderBottom: "3px solid #275053ff", }}>
                            Computer Science
                        </div>
                        <div className="p-2 basis-1/3  " style={{ border: "3px solid #072f28ff" }}>
                            Science (Biology)
                        </div>
                        <div className="p-2 basis-1/3  " style={{ border: "3px solid #072f28ff" }}>
                            Social Studies
                        </div>
                        <div className="p-2 basis-1/3  " style={{ border: "3px solid #072f28ff" }}>
                            Science (physics)
                        </div>
                        <div className="p-2 basis-1/3  " style={{ border: "3px solid #072f28ff" }}>
                            mathmatics
                        </div>



                    </div>
                    {data.map((el, ind) => {
                        return (
                            <div key={ind} className="flex flex-row  text-[black]">
                                <div className="p-2 basis-1/3 bg-[#b6effa]" >
                                    {el.date}
                                </div >
                                <div className=" p-2 basis-1/3 bg-[#b6effa] ">
                                    {el.Computer_Science}
                                </div>
                                <div className="p-2 basis-1/3  bg-[#b6effa] ">
                                    {el.Science_biology}
                                </div>
                             
                             
                                <div className="p-2 basis-1/3  bg-[#b6effa] ">
                                    {el.social_studies}
                                </div>
                                <div className="p-2 basis-1/3  bg-[#b6effa]">
                                    {el.Science_physics}
                                </div>
                                 <div className="p-2 basis-1/3  bg-[#b6effa]">
                                    {el.Mathmatics}
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Myaatendance;