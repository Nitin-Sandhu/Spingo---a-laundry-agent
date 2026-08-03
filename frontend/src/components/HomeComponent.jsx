import React from 'react'
import wmachine from "../assets/ChatGPT Image Aug 1, 2026, 08_56_59 AM.png" 
import {MoveRight,LayoutGrid} from "lucide-react"

const HomeComponent = () => {
  return (
    <div>
      <div className="background  absolute w-[650px] h-[650px]  right-2 bg-red-500/20  blur-[80px]"></div>
      <div className="background  absolute w-[400px] h-[90px]   bottom-21 right-22 bg-red-600/50 rounded-full  blur-[35px]"></div>

         <div className="hero w-full flex gap-40 ">
          <div className="left flex flex-col  pt-26 p-20 gap-4  w-4/7  h-full">
            <div className="heading flex  gap-3 items-center  ">
              <div className='w-[70px] h-[4px] rounded-full bg-red-500 '></div>
              <div className="text-red-500">Premium Laundry Service</div>
            </div>
            <div className="main-heading text-7xl flex flex-col">
              <h1 className='font-extrabold'>CLEAN CLOTHS,</h1>
              <span className = "text-red-600">HAPPY YOU.</span>
            </div>
            <div className="discription">
              <h1 className='text-white/60'>Experience affordable and professional laundry<br></br>service at your doorstep</h1>
            </div>
            <div className="button  gap-5 flex mt-4">
              <button className=' transition-all   duration-300 hover:scale-[1.04] hover:bg-red-500/70  bg-red-600  px-5 py-3 flex gap-2 justify-center items-center rounded  font-bold'>Order Now   <MoveRight strokeWidth={3} /></button>
              <button className=' transition-all   duration-300 hover:scale-[1.04] hover:bg-red-500/70 bg-red-600  px-5 py-3 flex gap-2 justify-center items-center rounded  font-bold ' > View Services <LayoutGrid/> </button>
            </div>
          </div>
          <div className=" right flex z-10 items-end">
            <img className =" relative bottom-1 right-20  w-100 h-100"src={wmachine}  />
          </div>
         </div>
    </div>
  )
}

export default HomeComponent