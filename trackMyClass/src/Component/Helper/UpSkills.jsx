import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const UpSkills = ({data}) => {
    let [courses, setCourses] = useState([{CourseName:"", CoursePrice: "", CourseLink: "", AboutCourse: ""}]);
    let [loading,setloading]=useState(false);
      const STORAGE_KEY = "courses";
  const EXPIRY_KEY = "coursesExpiry";
  const ONE_DAY = 24 * 60 * 60 * 1000; // milliseconds


    async function task() {
        let res = await axios.post("https://trackmyclass-rl3p.onrender.com/sugCourse", { goals: data.goals.join(","), interests: data.interests.join(",")})
        console.log(res.data.data[0])
        setCourses(res.data.data[0]);
        localStorage.setItem("courses",JSON.stringify(res.data.data[0]))
        localStorage.setItem(EXPIRY_KEY, Date.now() + ONE_DAY); // expires in 1 day
        setloading(!loading);
    }
    useEffect(() => {
        const cached = localStorage.getItem("courses");
     if(!cached){
             task();
     }
     else{
         try {
        const parsed = JSON.parse(cached);
        console.log(parsed)
        setCourses(Array.isArray(parsed) ? parsed : [parsed]);
      } catch (e) {
        console.error("Failed to parse cached courses", e);
        task(); // fallback
      }
         setloading(!loading);
     }

        
    }, [])
    return (
        <div className="flex flex-wrap m-10 justify-center">
            {loading==true ?
             
                        courses.map((el, ind) => {
                            return (
                                <div key={ind} >
                                    <Card data={el} ind={ind}/>
                                </div>
                            )
        
                        })
                 
                    :
               (<h1><i> Please Wait few second Courses is loading....</i></h1>   )  
                }
                   
        
        </div>
    )
}

export default UpSkills
