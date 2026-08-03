import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Eye, User, AtSign } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios"


import Hero from "../assets/574c4b19-ee5c-40a2-8ac3-cb3159ae49a8.png";
import Logoimage from "../assets/ac863921-d31a-4d6d-9a62-42de3c19c350-removebg-preview.png";
import Line from "../assets/10b95558-27ef-4e20-9f00-dad5ea901f72.png";
import Features from "../assets/29b80080-73ca-4c53-afc3-6dabbd9c505d.png";

const Login = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [showMessage, setShowMessage] = useState(false)
 
  const submitHandler =  async (e) => {
    e.preventDefault();
    const data = {
     
      "email":email,
      "password":password
    }

    
   try{
    
    const response = await axios.post("http://localhost:4000/api/auth/login",data,{
      withCredentials:true,
    })

    navigate("/",{state:{
        message:response.data.message,
      }}) 
      
    setMessage(response.data.message)
    setShowMessage(true);

    setTimeout(()=>{
      setShowMessage(false);
      setMessage("")
    },2000)

    
    }catch(error){
     setMessage(error.response.data.message)
     setShowMessage(true);

    setTimeout(()=>{
      setShowMessage(false);
      setMessage("")
    },2000)
    }
  };

  return (
    <div
      className="h-screen w-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${Hero})` }}
    >
      <div className="flex h-[85%] w-[75%] overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
{showMessage && (
  <div className="fixed top-5 right-5 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg">
    {message}
  </div>
)}
        {/* Left Section */}
        <div className="relative flex w-1/2 flex-col items-center">
          <div className="h-30 w-full shrink-0">
            <img
              src={Logoimage}
              alt="Logo"
              className="ml-10 h-30"
            />
          </div>

          <img
            src={Line}
            alt="Decoration"
            className="relative w-full object-contain"
          />

          <img
            src={Features}
            alt="Features"
            className="absolute bottom-20 z-10 h-[190px]"
          />
        </div>

        {/* Right Section */}
        <div className="flex h-full w-1/2 flex-col pt-30 gap-5 pt-15">
          <h1 className="text-4xl font-extrabold text-white">
            Login <br />
            Your Account<span className="text-blue-600">.</span>
          </h1>

          <form
            onSubmit={submitHandler}
            className="flex h-[75%] w-4/5 flex-col items-center gap-5"
          >
            {/* Username */}
            

            {/* Email */}
            <div className="relative h-13 w-full rounded-xl bg-white/10 px-3 text-sm backdrop-blur-2xl transition-all duration-200 hover:scale-[1.03]">
              <div className="font-bold text-white/35">Email</div>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-4 w-full text-white focus:font-bold focus:outline-none"
              />

              <button
                type="button"
                className="absolute right-5 top-4 text-white/55 transition-all duration-300 hover:scale-[1.1] hover:text-white/80"
              >
                <AtSign />
              </button>
            </div>

            {/* Password */}
            <div className="relative h-13 w-full rounded-xl bg-white/10 px-3 text-sm backdrop-blur-2xl transition-all duration-200 hover:scale-[1.03]">
              <div className="font-bold text-white/35">Password</div>

              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-4 w-full text-white focus:font-bold focus:outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-5 top-4 text-white/55 transition-all duration-300 hover:scale-[1.1] hover:text-white/80"
              >
                <Eye />
              </button>
            </div>

            

            {/* Login */}
            <div className="flex w-full flex-col items-center">
              <div className="ml-30 text-white">
                New Member?{" "}
                <Link
                  to="/Signup"
                  className="whitespace-nowrap font-semibold text-purple-300 underline transition-all duration-300 hover:scale-[1.03]"
                >
                  Sign-up
                </Link>
              </div>

              <input
                type="submit"
                value="Login Account"
                className="w-full rounded-2xl bg-blue-500 p-2 text-white transition-all duration-300 hover:scale-[1.03] hover:bg-blue-400"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;