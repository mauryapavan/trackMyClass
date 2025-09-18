import React from "react";
import { useNavigate } from "react-router-dom";

const Profile=()=>{
    let navigate=useNavigate();
  let [student,setStudent]=[{name:"Pawan kumar Maurya",father:"Santosh kumar Maurya",roll_no:"CS09",class:"B.TECH CS 3rd Sem",email:"kumar8000233@gmail.com"}]
    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center m-5">
     
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl text-black">
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/20">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <img
                src={`https://api.dicebear.com/8.x/avataaars/svg?seed=${student.name}`}
                alt={student.name}
                className="w-40 h-40 rounded-full border-4 border-indigo-400 shadow-md"
              />
            </div>
            {/* Info */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-2">{student.name}</h2>
              <p className="mb-6">
                Roll No:{" "}
                <span className="font-semibold">{student.roll_no}</span>
              </p>
              <p className=" mb-6">
                Class: <span className="font-semibold">{student.class}</span>
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                  <h3 className="text-sm font-semibold text-gray-300">
                    Father's Name
                  </h3>
                  <p className="text-lg">{student.father}</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                  <h3 className="text-sm font-semibold text-gray-300">Email</h3>
                  <p className="text-lg">{student.email || "N/A"}</p>
                </div>
                <div onClick={()=>{navigate("/myattendance")}} className="bg-white/10 p-4 rounded-lg border border-white/20 hover:cursor-pointer">
                  
                  <p className="text-lg">myAttendance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Profile;