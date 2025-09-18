import { faCalendarPlus, faCheckCircle, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";


const Events=()=>{
    const events = [
  {
    id: 1,
    name: "Science Fair 2025",
    date: "2025-09-25",
    time: "10:00 AM – 4:00 PM",
    location: "Auditorium Hall",
    organizer: "Science Department",
    category: "Education",
    status: "Completed"   // ✅ Already done
  },
  {
    id: 2,
    name: "Annual Sports Day",
    date: "2025-10-10",
    time: "9:00 AM – 6:00 PM",
    location: "Main Playground",
    organizer: "Physical Education Dept.",
    category: "Sports",
    status: "Completed"   // ✅ Already done
  },
  {
    id: 3,
    name: "Coding Hackathon",
    date: "2025-11-05",
    time: "8:00 AM – 8:00 AM",
    location: "Computer Lab",
    organizer: "Tech Club",
    category: "Technology",
    status: "Upcoming"
  },
  {
    id: 4,
    name: "Cultural Fest",
    date: "2025-12-15",
    time: "5:00 PM – 10:00 PM",
    location: "Open Air Theatre",
    organizer: "Cultural Committee",
    category: "Entertainment",
    status: "Upcoming"
  },
  {
    id: 5,
    name: "Parent-Teacher Meeting",
    date: "2025-09-22",
    time: "2:00 PM – 5:00 PM",
    location: "Conference Room",
    organizer: "School Administration",
    category: "Meeting",
    status: "Upcoming"
  },
  {
    id: 6,
    name: "Art & Craft Workshop",
    date: "2025-10-03",
    time: "11:00 AM – 2:00 PM",
    location: "Art Room",
    organizer: "Fine Arts Department",
    category: "Workshop",
    status: "Upcoming"
  },
  {
    id: 7,
    name: "Career Guidance Talk",
    date: "2025-10-12",
    time: "3:00 PM – 5:00 PM",
    location: "Seminar Hall",
    organizer: "Placement Cell",
    category: "Education",
    status: "Upcoming"
  },
  {
    id: 8,
    name: "Music Concert Night",
    date: "2025-11-20",
    time: "6:00 PM – 9:00 PM",
    location: "Central Lawn",
    organizer: "Music Club",
    category: "Entertainment",
    status: "Upcoming"
  },
  {
    id: 9,
    name: "Alumni Meet",
    date: "2025-11-30",
    time: "4:00 PM – 8:00 PM",
    location: "Auditorium Hall",
    organizer: "Alumni Association",
    category: "Networking",
    status: "Upcoming"
  },
  {
    id: 10,
    name: "Blood Donation Camp",
    date: "2025-12-18",
    time: "9:00 AM – 1:00 PM",
    location: "Health Centre",
    organizer: "NSS Unit",
    category: "Social Welfare",
    status: "Upcoming"
  }
];
    return (
        <div className=" m-5 text-white flex flex-col items-center">
            <div className="m-5 w-250 p-5 min-h-5 text-start  rounded-xl " style={{ backgroundColor: "#13172b" }}>
                 <div className="rounded-xl flex" style={{ backgroundColor: "#7991c9" }}>
                     <div className="p-2 basis-1/3 " style={{ border: "3px solid #020a0aff" }}>
                            DATE
                        </div >
                        <div className=" p-2 basis-1/3 " style={{ borderTop: "3px solid #020a0aff", borderBottom: "3px solid #275053ff", }}>
                            LOCATION
                        </div>
                        <div className="p-2 basis-1/3  " style={{ border: "3px solid #020a0aff" }}>
                           Organizer
                        </div>
                        <div className="p-2 basis-1/3  " style={{ border: "3px solid #020a0aff" }}>
                            Category
                        </div>
                        <div className="p-2 basis-1/3  " style={{ border: "3px solid #020a0aff" }}>
                            Time
                        </div>
                        <div className="p-2 basis-1/3  " style={{ border: "3px solid #020a0aff" }}>
                            Status
                        </div>
                 </div>
                {events.map((el,ind)=>{
                    return(
                        <div className="rounded-xl flex" key={ind} style={{ backgroundColor: "#b2728eff" }}>
                     <div className="p-2 basis-1/3 " style={{ border: "3px solid #020a0aff" }}>
                            {el.date}
                        </div >
                        <div className=" p-2 basis-1/3 " style={{ borderTop: "3px solid #020a0aff", borderBottom: "3px solid #275053ff", }}>
                            {el.location}
                        </div>
                        <div className="p-2 basis-1/3  " style={{ border: "3px solid #020a0aff" }}>
                         {  el.organizer}
                        </div>
                        <div className="p-2 basis-1/3  " style={{ border: "3px solid #020a0aff" }}>
                            {el.category}
                        </div>
                        <div className="p-2 basis-1/3  " style={{ border: "3px solid #020a0aff" }}>
                            {el.time}
                        </div>
                        {el.status=="Completed" ? 
                        (<div className="p-2 basis-1/3  " style={{ border: "3px solid #020a0aff" }}>
                            <i>Completed :</i> <FontAwesomeIcon icon={faCheckCircle} color="green" size="2x"/>
                        </div>):
                        (<div className="p-2 basis-1/3  " style={{ border: "3px solid #020a0aff" }}>
                            <i>Upcoming :</i> <FontAwesomeIcon icon={faClock} color="red" size="2x" />
                        </div>)
                        }
                 </div>
                    )
                })}
          
            </div>
            
        </div>
    )
}

export default Events;