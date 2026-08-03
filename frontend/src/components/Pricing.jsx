import React from 'react'
import {Shirt,Zap,Sun,Sparkles,Footprints,Briefcase,Percent,MapPin,Check} from "lucide-react";

const Pricing = () => {
    const plans = [
  {
    name: "Wash & Fold",
    tagline: "Everyday Laundry",
    price: "₹49",
    unit: "/kg",
    icon: Shirt,
    popular: false,
    features: [
      "Wash & Fold",
      "Premium Detergent",
      "Steam Freshening",
      "48 hrs Delivery",
    ],
  },
  {
    name: "Wash & Iron",
    tagline: "Clean & Crisp",
    price: "₹69",
    unit: "/kg",
    icon: Sparkles,
    popular: true,
    features: [
      "Wash & Iron",
      "Premium Detergent",
      "Steam Ironing",
      "48 hrs Delivery",
    ],
  },
  {
    name: "Dry Cleaning",
    tagline: "Special Care",
    price: "₹149",
    unit: "/pc",
    icon: Briefcase,
    popular: false,
    features: [
      "Premium Dry Cleaning",
      "Stain Removal",
      "Fabric Protection",
      "3-4 Days Delivery",
    ],
  },
  {
    name: "Premium Care",
    tagline: "Delicate & Luxury",
    price: "₹199",
    unit: "/pc",
    icon: Briefcase,
    popular: false,
    features: [
      "Premium Dry Cleaning",
      "Hand Finishing",
      "Fabric Protection",
      "2-3 Days Delivery",
    ],
  },
];
const priceList = [
  { item: "Shirt", fold: "₹49", iron: "₹69", dry: "₹149" },
  { item: "T-Shirt", fold: "₹39", iron: "₹59", dry: "₹129" },
  { item: "Jeans", fold: "₹59", iron: "₹79", dry: "₹149" },
  { item: "Trousers", fold: "₹59", iron: "₹79", dry: "₹149" },
  { item: "Kurta", fold: "₹59", iron: "₹89", dry: "₹149" },
  { item: "Blazer", fold: "-", iron: "-", dry: "₹249" },
  { item: "Saree", fold: "-", iron: "-", dry: "₹249" },
  { item: "Bedsheet (Double)", fold: "₹119", iron: "₹149", dry: "₹249" },
];
const addOns = [
  { label: "Express Delivery (24 hrs)", price: "+ ₹49", icon: Zap },
  { label: "Stain Removal", price: "+ ₹49", icon: Sun },
  { label: "Steam Press", price: "+ ₹49", icon: Sparkles },
  { label: "Shoe Cleaning", price: "+ ₹149", icon: Footprints },
  { label: "Bag & Leather Cleaning", price: "+ ₹199", icon: Briefcase },
];

const areas = [
  "Roorkee",
  "Haridwar",
  "Bhagwanpur",
  "Jhabrera",
  "Laksar",
  "Kankhal",
  "Bahadarabad",
  "Shyampur",
  "Piran Kaliyar",
  "Manglore",
];
  return (
     <div className="max-w-6xl text-white mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-red-500 text-sm font-semibold tracking-widest mb-3">
            CHOOSE YOUR PLAN
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-3">
            Our Pricing Plans
          </h2>
          <p className="text-gray-400">Quality service at affordable prices.</p>
        </div>

        {/* Location banner */}
        <div className="border border-white/10 rounded-xl p-6 mb-10 flex items-center justify-between gap-6 overflow-hidden">
          <div>
            <div className="flex items-center gap-2 text-red-500 font-semibold mb-2">
              <MapPin className="w-5 h-5" />
              <span>ROORKEE, HARIDWAR</span>
            </div>
            <p className="text-gray-300">
              Fast <span className="underline">pickup</span> &amp; delivery across
              all areas in Roorkee and Haridwar.
            </p>
          </div>
          <svg
            viewBox="0 0 200 80"
            className="hidden sm:block w-48 h-20 text-gray-600 shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path d="M10 60 L190 60" />
            <path d="M30 60 V30 M30 30 H50 M40 30 V15 M20 30 H60" />
            <path d="M130 60 V20 M120 20 H140 M125 20 V10 M135 20 V10 M115 30 H145" />
            <circle cx="130" cy="8" r="2" />
            <path d="M10 60 Q100 40 190 60" strokeDasharray="2 2" />
          </svg>
        </div>

        {/* Plan cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.name}
                className={`relative  hover:border-white/60 rounded-xl border p-6 flex flex-col ${
                  plan.popular
                    ? "border-red-500"
                    : "border-white/10"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide">
                    MOST POPULAR
                  </span>
                )}

                <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center mb-4 mx-auto">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-lg font-bold text-center">{plan.name}</h3>
                <p className="text-gray-400 text-sm text-center mb-4">
                  {plan.tagline}
                </p>

                <div className="border-t border-red-600/40 w-10 mx-auto mb-4" />

                <div className="text-center mb-5">
                  <span className="text-3xl font-extrabold text-red-500">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 text-sm">{plan.unit}</span>
                </div>

                <ul className="space-y-2 mb-6 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-200">
                      <Check className="w-4 h-4 text-red-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-2.5 rounded-md font-semibold text-sm border transition-colors ${
                    plan.popular
                      ? "bg-red-600 border-red-600 hover:bg-red-700"
                      : "border-red-500 text-white hover:bg-red-600 hover:border-red-600"
                  }`}
                >
                  Book Now
                </button>
              </div>
            );
          })}
        </div>

        {/* Price list + Add-ons */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Price list */}
          <div className="border border-white/10 rounded-xl p-6">
            <h3 className="font-bold tracking-wide mb-4">
              PRICE LIST FOR COMMON ITEMS
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-xs text-gray-400">
                    <th className="pb-3 font-medium">ITEM</th>
                    <th className="pb-3 font-medium text-red-500 text-right">
                      WASH &amp; FOLD
                    </th>
                    <th className="pb-3 font-medium text-red-500 text-right">
                      WASH &amp; IRON
                    </th>
                    <th className="pb-3 font-medium text-red-500 text-right">
                      DRY CLEAN
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {priceList.map((row, i) => (
                    <tr
                      key={row.item}
                      className={i !== priceList.length - 1 ? "border-b border-white/5" : ""}
                    >
                      <td className="py-2.5 text-gray-200">{row.item}</td>
                      <td className="py-2.5 text-right text-gray-300">{row.fold}</td>
                      <td className="py-2.5 text-right text-gray-300">{row.iron}</td>
                      <td className="py-2.5 text-right text-gray-300">{row.dry}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              * Prices may vary based on fabric &amp; stains.
            </p>
          </div>

          {/* Add-ons + promo */}
          <div className="flex flex-col gap-5">
            <div className="border border-white/10 rounded-xl p-6">
              <h3 className="font-bold tracking-wide mb-4">ADD-ON SERVICES</h3>
              <ul className="divide-y divide-white/5">
                {addOns.map(({ label, price, icon: Icon }) => (
                  <li key={label} className="flex items-center justify-between py-3">
                    <span className="flex items-center gap-3 text-gray-200 text-sm">
                      <Icon className="w-4 h-4 text-red-500" />
                      {label}
                    </span>
                    <span className="text-red-500 font-semibold text-sm">{price}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-white/10 rounded-xl p-6 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Percent className="w-8 h-8 text-red-500 shrink-0" />
                <p className="text-sm text-gray-200">
                  <span className="font-bold block">First Order?</span>
                  Use code{" "}
                  <span className="text-red-500 font-semibold">ROORKEE10</span>{" "}
                  and get 10% OFF
                </p>
              </div>
              <span className="border border-red-500 text-red-500 font-bold text-xs px-3 py-2 rounded-md whitespace-nowrap">
                ROORKEE10
              </span>
            </div>
          </div>
        </div>

        {/* Coverage footer */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <div className="flex items-center justify-center gap-2 text-red-500 font-semibold mb-3">
            <MapPin className="w-4 h-4" />
            SERVING ALL AREAS OF ROORKEE &amp; HARIDWAR
          </div>
          <p className="text-gray-400 text-sm">
            {areas.map((area, i) => (
              <React.Fragment key={area}>
                {area}
                {i !== areas.length - 1 && <span className="mx-2 text-gray-700">|</span>}
              </React.Fragment>
            ))}
            <span className="block mt-1 text-gray-500">and surrounding areas</span>
          </p>
        </div>
      </div>
  )
}

export default Pricing