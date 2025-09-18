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
        // let res = await axios.post("https://trackmyclass-two5.onrender.com/sugCourse", { goals: data.goals.join(","), interests: data.interests.join(",")})
        // console.log(res.data.data[0])
        // setCourses(res.data.data[0]);
        // localStorage.setItem("courses",JSON.stringify(res.data.data[0]))
        // localStorage.setItem(EXPIRY_KEY, Date.now() + ONE_DAY); // expires in 1 day
        // setloading(!loading);
        setCourses([
{CourseName: 'Python for Everybody Specialization', CoursePrice: 'Free (audit track), Paid (certificate/full access via Coursera Plus subscription)', CourseLink: 'https://www.coursera.org/specializations/python', AboutCourse: 'Learn to program in Python and use it to analyze d…ses in Python, ideal for improving coding skills.'}
{CourseName: "CS50's Introduction to Computer Science", CoursePrice: 'Free (audit track), Paid (verified certificate, ~$199)', CourseLink: 'https://www.edx.org/course/cs50s-introduction-to-computer-science', AboutCourse: "Harvard University's popular introductory course t…languages, excellent for improving coding skills."}
{CourseName: 'The Complete 2024 Web Development Bootcamp', CoursePrice: 'Paid (Udemy often has sales, typically ~$15-25)', CourseLink: 'https://www.udemy.com/course/the-complete-web-development-bootcamp/', AboutCourse: 'Learn to code and become a full-stack web develope…ive course for hands-on coding skill improvement.'}
{CourseName: 'Algorithms Part I', CoursePrice: 'Free (audit track), Paid (certificate/full access via Coursera Plus subscription)', CourseLink: 'https://www.coursera.org/learn/algorithms-part1', AboutCourse: 'Offered by Princeton University, this course cover… deep understanding of computer science concepts.'}
{CourseName: 'General Studies (GS) Foundation for Government Exams', CoursePrice: 'Free (via YouTube channels and free online notes)', CourseLink: 'https://www.youtube.com/results?search_query=UPSC+SSC+General+Studies+Lectures', AboutCourse: "Access free lectures and study materials on YouTub…ses on 'Reading' and comprehension for exam prep."}
{CourseName: 'Quantitative Aptitude for Competitive Exams', CoursePrice: 'Paid (Udemy often has sales, typically ~$15-25) or Free (on YouTube)', CourseLink: 'https://www.udemy.com/topic/quantitative-aptitude/', AboutCourse: 'Develop problem-solving skills in areas like arith… free resources are available on YouTube as well.'}
{CourseName: 'English Grammar and Comprehension for Competitive Exams', CoursePrice: 'Free (various YouTube channels like Mahendras, Dear Sir, or free online resources)', CourseLink: 'https://www.youtube.com/results?search_query=English+for+SSC+CGL+Bank+Exams', AboutCourse: 'Improve your English language proficiency, includi… of English sections in various government exams.'}
]);
        setloading(!loading);
    }
    useEffect(() => {
        task();
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
