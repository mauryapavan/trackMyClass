import React from "react";
import { useNavigate } from "react-router-dom";


const LandingPage = () => {
    let navigate=useNavigate();
    return (
        <div className="m-5 p-5 min-h-150 grid  grid-cols-1 items-center justify-items-center-safe text-center    backdrop-blur-md backdrop-brightness-110"  >
            <div className="p-5 flex ">
                <div className="m-5">
                    <button  className=" p-2  rounded-md bg-green-900 pointer " style={{ color: "whitesmoke" }}> <i><a href="">Teacher's Login</a></i></button>

                </div>
                <div className="m-5">
                   <button onClick={()=>{navigate("/Login")}} className=" p-2 rounded-md bg-gray-900 pointer " style={{ color: "whitesmoke" }}> <i>Student's login</i></button>

                </div>
            </div>
        </div>

    )
}

export default LandingPage;