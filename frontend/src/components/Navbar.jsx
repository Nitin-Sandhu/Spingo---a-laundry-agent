import React, { useState } from 'react'
import Logoimage from "../assets/ac863921-d31a-4d6d-9a62-42de3c19c350-removebg-preview.png"
import { Link } from 'react-router-dom'
import { CircleUserRound } from 'lucide-react';         
import { Search ,ChevronDown ,BellRing ,Menu,LogOut  ,ClipboardList , Presentation,Route,MapPin,CreditCard,TicketPercent ,CircleQuestionMark , Settings } from 'lucide-react';
import ProfileDropdown from './ProfileDropdown';

const Navbar = ({user,logout}) => {

const [dropdown, setdropdown] = useState(false)

 const   dropdownHandler = ()=>{
        setdropdown(!dropdown)
   }
  return (
   <div className="navbar z-19 fixed top-0 left-0 w-full bg-black ">
     <div className=  'h-22  justify-between flex items-center   mr-10' >
        <div className="logo shrink-0"><img  className =" object-contain h-35 " src={Logoimage} alt="" /></div>
        
        <div className="page hidden md:block  lg:flex  text-white gap-9">
                <a href='#home' className=" hover:text-red-500 flex items-center cursor-pointer relative pb-0.5 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:transition-all duration-200 hover:after:w-full hover:after:bg-red-500 after:bg-white" to="/#">Home </a>
                <a href='#about' className=" hover:text-red-500 flex items-center cursor-pointer relative pb-0.5 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:transition-all duration-200 hover:after:w-full  hover:after:bg-red-500 after:bg-white" to="/#">About</a>
                <a href='#services' className=" hover:text-red-500 flex items-center cursor-pointer relative pb-0.5 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:transition-all duration-200 hover:after:w-full  hover:after:bg-red-500 after:bg-white" to="/#">Services </a> 
                <a href='#pricing' className="hover:text-red-500 flex items-center cursor-pointer relative pb-0.5 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:transition-all duration-200 hover:after:w-full  hover:after:bg-red-500 after:bg-white" to="/#">Pricing </a>
                <a href='#enquiry' className="hover:text-red-500 flex items-center cursor-pointer relative pb-0.5 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:transition-all duration-200 hover:after:w-full  hover:after:bg-red-500 after:bg-white" to="/#">Enquiry</a>
        </div>
        <div className="gap-6 hidden md-block text-white features lg:flex justify-center items-center   ">
                <div className="notification transition-all duration-150 hover:scale-105 cursor-pointer  hover:text-red-500"> <BellRing /></div>
               {user? <div  onClick={dropdownHandler} className='text-white relative transition-all duration-100 active:bg-white/30   flex gap-2  cursor-pointer bg-white/20  px-4 py-2 rounded-xl '> 
                   <CircleUserRound /> {user.username} <ChevronDown /> {dropdown && < ProfileDropdown  user = {user}  logout = {logout} /> }
                </div> : 
               <div className="user flex gap-3 ">
                   <Link  className="   border   border-white/10  bg-white/10 backdrop-blur-md  transition-all inline-block duration-150 active:scale-105 hover:bg-white/15 px-2  cursor-pointer py-1 rounded-xl whitespace-nowrap" to="/signup">Sign-up</Link>
                   <Link  className=" border border-white/10  bg-white/10 backdrop-blur-md transition-all inline-block duration-150 active:scale-105  hover:bg-white/15  px-2  cursor-pointer py-1 rounded-xl "to="/login">Login</Link>
                </div>}
        </div>
        <div className="menuButton lg:hidden text-white border p-1 rounded  border-white/10  bg-white/10 backdrop-blur-md transition-all duration-150 hover:scale-105 cursor-pointer "> <Menu /></div>
        
    </div>
    <div className="h-1 w-full bg-gradient-to-b from-red-500 to-transparent"></div>
   </div>
  )
}

export default Navbar