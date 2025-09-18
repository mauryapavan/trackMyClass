import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from "chart.js";
import { useNavigate } from "react-router-dom";
// Register chart components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);


const ProgresGraph = ({ data, labels ,name ,height}) => {
    let navigate=useNavigate();
    const data1 = {
        labels: labels,
        datasets: [
            {
                label: name,
                data: data,
                fill: true,
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                tension: 0.4, // smooth line
                pointRadius: 5,
            },
        ],
    };
    const options = { responsive: true, plugins: { legend: { position: "top" } } };
    return (
        <div className="h-1/2 m-1 bg-[white] hover:cursor-pointer" onClick={()=>{navigate("/Progress")}}>
            <Line data={data1} options={options} />
        </div>
    )
}

export default ProgresGraph;