import React, { useState } from "react";

import { ToastContainer, toast } from "react-toastify";

import { useNavigate } from "react-router-dom";

export function Login() {
    let navigate = useNavigate();


    let [input, setinput] = useState({ email: "", password: "" })
    const handleinput = (e) => {
        let { name, value } = e.target
        setinput({
            ...input,
            [name]: value,
        });
    };

    //  toastcontainer
    const handleError = (err) =>
        toast.error(err, {
            position: "bottom-left",
        });
    const handleSuccess = (msg) =>
        toast.success(msg, {
            position: "bottom-right",
        })

    async function login(e) {
        e.preventDefault();
        
        handleSuccess("Focus on your classes");
        setTimeout(() => {
            navigate("/DashBoard");
        }, 1000);
         setinput({
        ...input,
        email: "",
        password: "",
      })


    }
   




return (
    <div className="flex-col justify-self-center m-5 p-5  "  >
        <div className=" flex-col justify-items-center align-items-center p-3 m-3 sm:p-5 sm:m-5 backdrop-blur-md backdrop-brightness-110 " style={{color:"black"}}>
            <div className="sm:p-3 sm:m-5 p-2 m-2">
                <h1 className="font-serif text-4xl">Login</h1>
            </div>
            <form action="" onSubmit={login}>
                <div className="sm:p-5 sm:m-5 p-2 m-2">
                    <label for="email-address" class="sr-only">School id</label>
                    
                    <input id="email-address" onChange={handleinput} value={input.email} name="email" type="text" required className="w-50 sm:w- text-black h-10  p-2 sm:p-3.5 text-xl" placeholder="School_id" />

                </div>
                <div className="sm:p-5 sm:m-5 p-2 m-2">
                    <label for="password" class="sr-only">password</label>
                    <input  id="password" onChange={handleinput} value={input.password} name="password" type="password" required className="w-50 sm:w-90 text-black h-10   p-2 sm:p-3.5 text-xl" placeholder="Enter your password" />

                </div>
                <div className="sm:p-5 sm:m-5 p-2 m-2 text-center">
                   <button type="submit" class="w-45 sm:w-60 flex-none sm:px-3.5 rounded-md bg-indigo-500 px-1.5 py-2.5 text-sm  text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Log in</button>
                </div>
            </form>


        </div>

    </div>
)
}