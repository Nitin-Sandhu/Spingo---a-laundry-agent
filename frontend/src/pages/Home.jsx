import React, { useEffect, useState } from 'react'
import { data, Link, useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import {Bell} from "lucide-react"


import Services from '../components/Services'
import About from '../components/About'
import HomeComponent from '../components/HomeComponent'
import Pricing from '../components/Pricing'
import Enquiry from '../components/Enquiry'





const Home = () => {



  
  const [user, setuser] = useState(null)
  const logout = async()=> {
        try{
            const response = await axios.post("http://localhost:4000/api/auth/logout",{},
                {
                    withCredentials:true
                }
            )
            setmessage(response.data.message)
            setuser(null)

            
        }catch(error){
          console.log(error)
        }
    }

  useEffect(() => {
     const getUser = async ()=>{
      try{
        const response = await axios.get("http://localhost:4000/api/auth/me",{
        withCredentials:true
        })
        setuser(response.data)
        
    } catch(error){
      setuser(null)
     }
    }
    getUser()

  },[])


  const location = useLocation()
  const navigate = useNavigate()
  const [message, setmessage] = useState("")

  useEffect(() => {
  if (location.state?.message) {
    setmessage(location.state.message);

    navigate(location.pathname,{
      replace:true,
      state:null
    })
  }
}, [location.state]);

  useEffect(()=>{
    if(!message)return;
    const timer = setTimeout(()=>{
      setmessage("")
    } ,3000);

    return ()=> clearTimeout(timer);


    },
  [message])

  
  
  return (
    
     
    <div>
      {message && (
      <div className="fixed  flex  justify-center items-center  gap-2  z-22 top-6 right-8 bg-black text-xl text-white/70 border border-white/35 text-black px-4 py-2 rounded-lg shadow-lg">
      <Bell size={20} color='red'/>{message}
      </div>)}
      
      
      < Navbar user = {user} logout = {logout}/>
       
      <section id='home' className="text-white  relative  flex justify-center   bg-black  min-h-screen pt-22 w-100vh">
        < HomeComponent />
      </section>
      <section id='about' className="  pt-10 scroll-mt-21   div  flex flex-col  justify-center     border-white bg-black  w-full ">
        < About /> 
      </section>
      <section id='services' className="  scroll-mt-21   div  flex  items-center justify-center    bg-black  text-white w-full ">
        < Services />
      </section>
      <section id='pricing' className="  pt-5 scroll-mt-21   div  flex  items-center justify-center    bg-black  w-full">
        < Pricing />  
      </section>
      <section id='enquiry' className="  scroll-mt-21  div  flex  items-center justify-center     bg-black  w-full py-10home">
        < Enquiry />
      </section>
      <Footer />
      

        

    </div>   
    
  )}


export default Home