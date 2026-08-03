import { Bell ,MoveRight,Leaf ,Users,Clock ,LayoutGrid,ShieldCheck} from 'lucide-react';
import wmachine from "../assets/ChatGPT Image Aug 1, 2026, 08_56_59 AM.png" 
import aboutImage from "../assets/WhatsApp Image 2026-08-01 at 12.30.47 PM.png"

import React from 'react'

const About = () => {
  return (
    <div>
         <div className='uper flex  w-full h-[45%]'>
           
            <div className=" z-10 right h-full w-3/5">
              <img  className =" h-full w-full  "src={aboutImage}  />
            </div>
             <div className="left w-3/5 h-full pt-25 pl-15 p-5 pl-10 flex flex-col gap-3">
               <div className=" flex heading items-center gap-2">
                   <div className='w-[70px] h-[4px] rounded-full bg-red-500 '></div>
                   <div className="text-red-500">ABOUT SPINGO</div>
                </div>
               <div className="main text-3xl font-extrabold">
                <h1 className='text-white'>WE CARE FOR CLOTHS,</h1><span className='text-red-600 '>SO YOU CAN CARE <br></br>FOR WHAT MATTERS.</span>
               </div>
               <div className="description text-white/50">At Spingo Laundry Expert, we make laundry simple, fast and<br></br> 
                                            hassle-free. With premium care, advanced techniques and<br></br> 
                                            customer-first approach, we deliver freshness and quality<br></br>
                                            in every wash.</div>
            </div>
          </div>
          <div className='midle h-[25%] p-9 w-full'>
            <div className="box pl-4  bg-white/10 flex justify-center gap-10 p-5  border rounded-2xl border-white/30 ">
              <div className='flex items-center gap-2  p-3 border-r-2 '>
                <div >< ShieldCheck color='red' strokeWidth={1} size={30}/></div>
                <div>
                  <div className="font-bold text-white">Quality First</div>
                  <div className="text-white/70">We use the best products and <br></br>follow high standards</div>
                </div>
              </div>
              <div className=' flex items-center gap-2  p-3 border-r-2'>
                <div >< Clock color='red' strokeWidth={1} size={30}/></div>
                <div>
                  <div className="font-bold text-white">On-Time Service</div>
                  <div className="text-white/70">We respect your time and <br></br>ensure timely delivery</div>
                </div>
              </div>
              <div className='  flex items-center gap-2 p-3  border-r-2'>
                <div >< Users color='red' strokeWidth={1} size={30}/></div>
                <div>
                  <div className="font-bold text-white">coustomer Focused </div>
                  <div className="text-white/70">Your satisfaction is our  <br></br>top-priority</div>
                </div>
              </div>
              <div className='flex items-center gap-2  '>
                <div >< Leaf color='red' strokeWidth={1} size={30}/></div>
                <div>
                  <div className="font-bold text-white">Eco-Friendly</div>
                  <div className="text-white/70">Safe for your Cloths and <br></br>better for the plants.</div>
                </div>
              </div>
            </div>
          </div>
          <div>

          </div>
    </div>
  )
}

export default About