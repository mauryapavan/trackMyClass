import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from "chart.js";
import ProgresGraph from "./graph/ProgressGraph";
import AttendanceGraph from "./graph/AttendanceGraph";
// Register chart components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const Progresline = () => {
    
   
    return (
        <div className="flex flex-col w-1/3 m-1 h-126">
           
            <ProgresGraph data={[40, 55, 68, 75]} labels={["2025-01-10", "2025-02-05", "2025-03-02", "2025-04-01"]} name={"Your progress"}/>
           
            <AttendanceGraph data={[90, 85, 95, 88,100]} labels={ ["Jan", "Feb", "Mar", "Apr","May"]}/>
        </div>
    )
}

export default Progresline;