import { useState } from 'react'

import './App.css'
import Navbar from './Component/Navabar,'
import DashBoard from './Component/dashboard'
import Footer from './Component/footer'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Suggestiontask from './Component/suggestiontask'
import Attendance from './Component/Attendance'
import Profile from './Component/Profile.jsx'
import Routine from './Component/Routine.jsx'
import { Login } from './Component/Loginpage.jsx'
import LandingPage from './Component/Landingpage.jsx'
import Myaatendance from './Component/AttadencePage.jsx'
import Events from './Component/Helper/Event.jsx'
import Result from './Component/Helper/Results.jsx'
import UpcomingTests from './Component/Helper/UpcomingTests.jsx'
import UpSkills from './Component/Helper/UpSkills.jsx'
import SubjectProgress from './Component/Helper/SubjectProgress.jsx'
import AllAtandance from './Component/Helper/Allatandance.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <><div>
      <BrowserRouter>
      <Navbar/>
      <div className='min-h-[550px] user mt-2'>
        <Routes>
          <Route path="/" element={<LandingPage/>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/Dashboard" element={<DashBoard />}></Route>
          <Route path="/task" element={<Suggestiontask data={{  interests: ["Coding", "Reading", "Public Speaking"],strengths: ["Problem Solving", "Logical Thinking"],weaknes:["Improve coding skills", "Prepare for government exams", "Enhance communication"],goals:["Improve coding skills", "Prepare for government exams", "Enhance communication"]}} />}></Route>
          <Route path="/attendance" element={<Attendance/>}></Route>
          <Route path="/Profile" element={<Profile/>}></Route>
          <Route path="/Routine" element={<Routine/>}></Route>
          <Route path="/myattendance" element={<Myaatendance/>}></Route>
          <Route path="/Events" element={<Events/>}></Route>
          <Route path="/Results" element={<Result/>}></Route>
          <Route path="/Upcomingtest" element={<UpcomingTests/>}></Route>
          <Route path="/Upskill" element={<UpSkills data={{  interests: ["Coding", "Reading", "Public Speaking"],goals:["Improve coding skills", "Prepare for government exams", "Enhance communication"]}}/>}></Route>
          <Route path="/Progress" element={<SubjectProgress/>}></Route>
          <Route path="/allAttendance" element={<AllAtandance/>}></Route>
        </Routes>
      </div>
      
        <Footer/>
      </BrowserRouter>  
       </div> 
    </>
  )
}

export default App
