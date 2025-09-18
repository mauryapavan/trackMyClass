import React from "react";


const Card = ({ data ,ind}) => {

    
   let image=["https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   ]


   async function goto() {
       return window.location.href=data.CourseLink
        
    }
    return (
        <div onClick={goto} className="m-5 rounded-t-lg card cursor-pointer" style={{ backgroundColor: "#d5e2f7", width: "300px" }} >
            <div>
                <img className="w-md h-55 rounded-t-lg" src={image[ind%4]} alt="" />
            </div>
            <div className="p-5 " >
                <h2 className="text-2xl mb-6 font-bold " style={{ color: "black" }}>{data.CourseName}</h2>
               
                <h4 className="text-xl mb-6 tracking-wide" style={{ color: "black" }}>₹ {data.CoursePrice}</h4>
                 <h4 className="text-sm mb-6 tracking-wide" style={{ color: "black" }}>{data.AboutCourse}</h4>
            </div>
            
        </div>
    )
}

export default Card;