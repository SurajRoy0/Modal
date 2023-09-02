import React from "react";
import ModalCardsContent from "./ModalCardsContent";
import PlanCard from "./PlanCard";

const plans = [
  {
    promoid: 0,
    disc: 0.0,
    pcode: "",
    cn: "",
    sd: "",
    chargeconv: 0,
    planid: "63a54f2e749c90341cd49132",
    per: 0.0,
    discamt: 250.0,
    plan_name: "Red",
    terms: [
      "Watch unlimited travel shows in HD Quality",
      "7% Off on Hotel Bookings",
      "15% Off on Holidays",
      "No convenience fees on flights",
      "24/7 Concierge",
      "3 User Pass",
    ],
    prices: [
      {
        validity: 365,
        price: {
          amount: 999.0,
          currency: "INR",
          countries: "IN",
          disc_amount: 0.0,
        },
      },
    ],
  },
  {
    promoid: 0,
    disc: 0.0,
    pcode: "",
    cn: "",
    sd: "",
    chargeconv: 0,
    planid: "63a55320749c90341cd49133",
    per: 0.0,
    discamt: 489.0,
    plan_name: "Red Plus",
    terms: [
      "Watch unlimited travel shows in 4k Quality",
      "10% Off on Hotel Bookings",
      "20% Off on Holidays",
      "No convenience fees on flights + Flat 5% Off",
      "24/7 Concierge",
      "5 user pass",
    ],
    prices: [
      {
        validity: 365,
        price: {
          amount: 1999.0,
          currency: "INR",
          countries: "IN",
          disc_amount: 0.0,
        },
      },
    ],
  },
  {
    promoid: 0,
    disc: 0.0,
    pcode: "",
    cn: "",
    sd: "",
    chargeconv: 1,
    planid: "63edd666c91c2f4666371985",
    per: 0.0,
    discamt: 0.0,
    plan_name: "RED Discover",
    terms: [
      "Premium Travel shows",
      "1000+ hours of travel stories",
      "Add up to 3 user",
      "4k Ultra-HD precision ",
      "Stream on TVs, Tablets and Phones",
      "Watch shows in 10+ Languages",
    ],
    prices: [
      {
        validity: 365,
        price: {
          amount: 699.0,
          currency: "INR",
          countries: "IN",
          disc_amount: 0.0,
        },
      },
    ],
  },
];

const ModalContent = () => {
  return (
    <div className="mb-2">
      <div className="flex flex-col  md:items-start items-center gap-3 justify-center">
        <h1 className="md:text-2xl text-lg font-semibold">Introducing Red</h1>
        <span className="text-base text-center md:text-start text-gray-600">
          Watch unlimited travel shows in HD Quality & Exclusive discounts on
          Flight, Hotels & Holidays
        </span>
      </div>

      <div className=" p-6 pb-1 flex gap-6 overflow-y-scroll overflow-auto customScroll-y">
        {plans?.map((plan) => (
          <ModalCardsContent key={plan.plan_name} plan={plan} />
        ))}
      </div>

      <div className="flex flex-col  md:items-start items-center justify-center">
        <h1 className="md:text-2xl text-lg font-semibold mb-4">
          Add Plan and Save Big
        </h1>
      </div>

      <div className=" flex flex-row md:flex-col overflow-auto overflow-y-scroll md:overflow-visible gap-1 customScroll-y">
        {plans?.map((plan) => (
          <PlanCard key={plan.plan_name} plan={plan} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-3">
        <button className="bg-red-700 border-none text-white w-[90%] pt-2 pb-2 rounded-md">
          Add Red Discover
        </button>
      </div>
    </div>
  );
};

export default ModalContent;
