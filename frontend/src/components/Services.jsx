import React from 'react'
import { WashingMachine,Shirt,Sparkles,Layers,Webhook,Bike,ArrowRight,BadgeCheck,Headphones,ShieldCheck,Leaf} from "lucide-react";
import hangerImage from "../assets/ChatGPT Image Aug 3, 2026, 09_36_06 AM.png";
import washimage from "../assets/ChatGPT Image Aug 3, 2026, 09_33_35 AM.png";



  const services = [
  {
    icon: WashingMachine,
    title: "Iron Dry Cleaning",
    desc: "Professional dry cleaning for delicate fabrics and formal attire with advanced care.",
  },
  {
    icon: Shirt,
    title: "Ironing Services",
    desc: "Perfectly pressed clothes for a sharp, clean and confident look.",
  },
  {
    icon: Sparkles,
    title: "Stain Removal",
    desc: "Tough stain? We remove it gently and effectively without damaging fabric.",
  },
  {
    icon: Layers,
    title: "Wash & Fold",
    desc: "We wash, carefully fold and pack your clothes fresh and neat.",
  },
  {
    icon: Webhook  ,
    title: "Premium Care",
    desc: "Special care for your suits, ethnic wear and other premium garments.",
  },
  {
    icon: Bike,
    title: "Pickup & Delivery",
    desc: "We pick up, clean and deliver your clothes right to your doorstep.",
  },
];

const trustPoints = [
  {
    icon: BadgeCheck,
    title: "Trusted Care",
    desc: "Professional and reliable service.",
  },
  {
    icon: Leaf,
    title: "Eco Friendly",
    desc: "Environment safe cleaning solutions.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Secure",
    desc: "Your clothes are in safe hands.",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    desc: "We're here to help you anytime.",
  },
]; 

const Services = () => {
    return(
  
  < div className="flex flex-col">
        
           
  
        
      <section>
        <div className="relative mx-auto grid max-w-7xl grid-cols-1   items-center  md:grid-cols-2">
         
          <div className='ml-9'>
            <p className="mb-3 text-sm font-semibold tracking-widest text-red-500">
              OUR SERVICES
            </p>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
              Fresh Clothes,
              <br />
              <span className="text-red-500">Better</span> Days.
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-neutral-400 sm:text-base">
              At Spingo, we provide professional laundry and dry cleaning
              services with care, precision and premium quality.
            </p>
            <button className="mt-8 inline-flex items-center gap-2 rounded-md bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-500">
              Book a Service
              <ArrowRight size={16} />
            </button>
          </div>

          
          <div className="relative">
            <img
              src={washimage}
              alt="Spingo washer and dryer with a laundry basket and folded towels"
              className="w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

     
      <section className=" bg-black  text-white px-6 md:px-16 pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold tracking-widest text-red-500">
              WHAT WE OFFER
            </p>
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Our Laundry Services
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-neutral-400 sm:text-base">
              From everyday laundry to special care &ndash; we&apos;ve got every
              fabric covered.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group rounded-xl border border-white/5 bg-neutral-950 p-8 transition hover:border-red-600/30"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-red-600">
                  <Icon size={26} className="text-white" strokeWidth={1.8} />
                </div>
                <h3 className="mb-2 text-lg font-bold">{title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-neutral-400">
                  {desc}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-red-500 transition group-hover:gap-2"
                >
                  Learn More
                  <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>

          
          <div className="mt-14  text-white  grid grid-cols-1 gap-8 rounded-xl border border-white/5 bg-neutral-950 p-8 md:grid-cols-[1.1fr_1fr_auto] md:items-center md:p-10">
            <div className="flex items-center  border-r-2-white/20   justify-center  gap-4">
              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-red-600">
                <WashingMachine size={22} className="text-white" strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="text-xl font-bold sm:text-2xl">
                  Ready to experience the Spingo care?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  Book your service today and let us take care of your
                  clothes.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 text-sm">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-red-500" />
                <span>
                  <span className="font-semibold">Quality Assured</span>{" "}
                  <span className="text-neutral-500">
                    &ndash; Best care for every fabric.
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck size={16} className="text-red-500" />
                <span>
                  <span className="font-semibold">On-Time Delivery</span>{" "}
                  <span className="text-neutral-500">
                    &ndash; Always on time, every time.
                  </span>
                </span>
              </div>
            </div>

            <img
              src={hangerImage}
              alt="Folded clothes next to a Spingo laundry bag"
              className="h-32 w-full rounded-lg object-cover md:h-28 md:w-52"
            />
          </div>
        </div>
      </section>

      
      <section className="border-t bg-black text-white border-white/5 px-6 py-10 md:px-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 sm:grid-cols-4">
          {trustPoints.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-start gap-3">
              <Icon size={20} className="mt-0.5 flex-none text-red-500" strokeWidth={1.8} />
              <div>
                <p className="text-sm font-semibold">{title}</p>
                <p className="text-xs text-neutral-500">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

</div>

)}

export default Services;