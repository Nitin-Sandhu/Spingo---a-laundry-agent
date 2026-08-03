import React from 'react'
import { Search ,ChevronDown ,BellRing ,Menu,LogOut  ,ClipboardList , Presentation,Route,MapPin,CreditCard,TicketPercent ,CircleQuestionMark , Settings } from 'lucide-react';
import { Link } from 'react-router-dom'
import { CircleUserRound } from 'lucide-react'; 

const ProfileDropdown = ({user,logout}) => {



    
  return (
    <div className="dropdown flex flex-col w-70 absolute top-10  bg-black border  border-white/20 rounded  right-0 ">
                        <div className="profile-info h-18 w-full  flex cursor-default">
                                <div className="profile w-full flex   pl-6 items-center gap-4">
                                        <div className="logo p-2 bg-white/5"><CircleUserRound size={40}/></div>
                                        <div className="data ">
                                               <b>Hello, {user.username} </b><br></br><span className='text-white/65' >welcome back</span>
                                        </div>
                                </div>
                                 
                        </div>
                        
                        <div className="options pt-6  w-full flex flex-col gap-3 items-center-safestretch text-lg">
                                <Link  className =" hover:scale-[1.03] flex gap-2 items-center pl-6 " to = "/my-order"> <ClipboardList /> My Orders</Link>
                                <Link className ="hover:scale-[1.03] flex gap-2 items-center pl-6" to = "/my-order"><Presentation /> Recent Orders</Link>
                                <Link className ="hover:scale-[1.03]   flex gap-2 items-center pl-6" to = "/track-laundry"> <Route /> Track Laundry</Link>
                                <Link className =" hover:scale-[1.03] flex gap-2 items-center  pl-6" to = "/Adress"><MapPin /> Saved-Adress</Link>
                                <Link className =" hover:scale-[1.03] flex gap-2 items-center  pl-6" to = "/payment"> <CreditCard /> Payment Methods</Link>
                                <Link className ="hover:scale-[1.03] flex gap-2 items-center  pl-6" to = "/Offers"><TicketPercent /> coupons & Offers</Link>
                                <Link className ="hover:scale-[1.03] flex gap-2 items-center  pl-6" to = "/setting"><Settings />Account Settings</Link>
                                <Link className ="hover:scale-[1.03] flex gap-2 items-center  pl-6" to = "/support">  <CircleQuestionMark /> Help & Support</Link>
                                
                        </div>
                        <div onClick = {logout}     className="logout hover:scale-[1.02]  flex  w-full">
                                 <div className= 'py-4 flex  flex-row hover:scale-[1.02] items-center   pl-6 text-red-500 text-xl '><LogOut /> Logout</div>
                        </div>
                   </div>
  )
}

export default ProfileDropdown