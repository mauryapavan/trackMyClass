import React from "react";
import ProgresGraph from "../graph/ProgressGraph";

const SubjectProgress=()=>{
    
    return (
        <div className="m-5 p-5 flex flex-col items-center">
            <div className="text-center w-2/3 h-100 ">
                  <ProgresGraph  data={[40, 55, 68, 75]} labels={["2025-01-10", "2025-02-05", "2025-03-02", "2025-04-01"]} name={"Your progress"} />
            </div>
            <div className="flex flex-wrap " style={{color:'red'}}>
               <div className="text-center w-1/3 h-100"> 
                     <h1 className="text-xl ">Chemestry</h1>
                <ProgresGraph data={[58, 65, 68, 95]} labels={["2025-01-10", "2025-02-05", "2025-03-02", "2025-04-01"]} name={"Chemstry"} /></div>
              <div className="text-center w-1/3  h-100">
                <h1 className="text-xl">Physics</h1>
                <ProgresGraph data={[40, 45, 98, 85]} labels={["2025-01-10", "2025-02-05", "2025-03-02", "2025-04-01"]} name={"Physics"} /></div>
               <div className="text-center w-1/3  h-100">
                <h1 className="text-xl">DSTL</h1>
                <ProgresGraph data={[80, 75, 88, 75]} labels={["2025-01-10", "2025-02-05", "2025-03-02", "2025-04-01"]} name={"DSTL"} /></div>
               <div className="text-center w-1/3  h-100">
                <h1 className="text-xl">Operating System</h1>
                 <ProgresGraph data={[70, 85, 38, 65]} labels={["2025-01-10", "2025-02-05", "2025-03-02", "2025-04-01"]} name={"Operating System"} /></div>
               <div className="text-center w-1/3  h-100">
                 <h1 className="text-xl">Computer NetWorking</h1> 
                <ProgresGraph data={[60, 55, 68, 55]} labels={["2025-01-10", "2025-02-05", "2025-03-02", "2025-04-01"]} name={"Computer networking"} /></div>
                 
            </div>
        </div>
    )
}

export default  SubjectProgress