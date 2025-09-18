import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from "chart.js";
import { useNavigate } from "react-router-dom";
// Register chart components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);


const AttendanceGraph = ({ data, labels }) => {
    let navigate=useNavigate();


      const data1 = {
        labels: labels,
        datasets: [
            {
                label: "Attandance Graph",
                data: data,
                fill: true,
                borderColor: "#182a2e",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                tension: 0.4, // smooth line
                pointRadius: 5,
            },
        ],
    };
    const options2 = { responsive: true, plugins: { legend: { position: "top" } } };
    return (
        <div className="h-1/2 m-1 bg-[white] hover:cursor-pointer" onClick={()=>{navigate("/allAttendance")}}>
            <Line data={data1} options={options2} />
        </div>
    )
}

export default AttendanceGraph;