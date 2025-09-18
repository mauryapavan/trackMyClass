import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate=useNavigate();

  async function Prof() {
    navigate("/Profile");
  }
  return (
    // <nav className="bg-gradient-to-r from-indigo-900 via-purple-900 to-gray-900 text-white shadow-lg">
    <nav className="nav backdrop-blur-md h-20 mb-2 ">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
       <div className="flex items-center">
        <img
            src="https://res.cloudinary.com/dop3yq9to/image/upload/v1758135657/WhatsApp_Image_2025-09-17_at_22.08.27_b6edaa29_bkrdyd.jpg"
            alt="trackmyclass"
            className="h-20 w-20 rounded-full border-4 border-indigo-400 shadow-md"
          />
        {/* Logo & About */}
        <div>
          <h1 className="text-5xl font-bold text-black m-1">TrackMyClass</h1>
        </div>
        </div>
        
        {/* profile Section */}
        <div className="text-center transition duration-300 hover:scale-110 hover:-translate-y-1 hover:cursor-pointer" onClick={Prof}>
          <FontAwesomeIcon icon={faUser} className="text-3xl text-black" />
          <h3>Maurya Pawan</h3>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;