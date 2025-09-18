import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";


const Suggestiontask = ({ data }) => {
  let navigate=useNavigate();
  let [loding, setloading] = useState(true);
  let [sugtask, setsugtask] = useState([{ task: "", practice: [] }])
  async function task() {
    let res = await axios.post("http://localhost:4444/suggest", { goals: data.goals.join(","), strengths: data.strengths.join(","), intrests: data.interests.join(","), weakness: data.weaknes.join(",") })
   console.log(res.data.data[0])
    setsugtask(res.data.data[0]);
    setloading(!loding);
  }
  useEffect(() => {
     task();
  }, [])
  return (

    <div className="flex flex-col m-5 p-5 items-center  w-[95%] rounded-xl suggesttask "  >
      
      <div className="w-200 p-5  m-5 text-center transition duration-300 hover:scale-105 hover:-translate-y-1" >
        {loding == true ? <h1 className="text-3xl" ><i style={{color:"black"}}> Please Wait few Seconds Your task's loading ....</i></h1> : <h1 className="text-3xl" style={{ color: "black" }}><i>Your task's</i></h1>}
        {sugtask.map((el1, ind1) => {
          return (
            <div className="w-190 p-5 min-h-5 m-5 text-start  rounded-xl" key={ind1} style={{ backgroundColor: "#13172b" }}>
              <h1 className="text-xl" style={{ color: "whitesmoke" }}><i>Task : {el1.task} </i> <input style={{
                transform: "scale(2)", // makes it big
                marginRight: "10px",
                accentColor: "#4cafef", // modern browsers support
              }} type="checkbox" name="highlight" value="yellow" /></h1>
              <div className="rounded-xl" style={{ backgroundColor: "#7991c9" }}>
                {
                  el1.practice.map((el2, ind2) => {
                    return (
                      <div key={ind2}><FontAwesomeIcon icon={faChevronRight} /> {el2}</div>
                    )
                  })
                }
              </div>
             

            </div>
          )
        })}
      </div>
       <button  onClick={()=>{navigate("/Dashboard")}} className="p-2 rounded-md bg-gray-900 pointer" style={{ color: "whitesmoke" }}> <i>Submit Task</i></button>
    </div>

  )
}

export default Suggestiontask;