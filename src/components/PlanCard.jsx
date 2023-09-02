import React from "react";
import RibbonSvg from "./RibbonSvg";

const PlanCard = ({ plan }) => {
  const screenWidth = window.innerWidth;
  return (
    <div className=" cursor-pointer bg-gradient-to-t to-red-200 via-red-100 from-white flex flex-col md:flex-row md:justify-between md:items-center justify-center items-start p-4 gap-3 rounded-md md:mr-3 md:w-full min-w-[150px] mb-[5px]  border border-red-700">
      <div className="flex flex-col">
        <span className="text-2xl text-red-700 font-bold">
          {plan.plan_name}
        </span>
        <span className="text-gray-600">
          You will save{" "}
          {plan.discamt && (
            <span className="text-green-600 font-bold">₹{plan?.discamt}</span>
          )}{" "}
          if you purchase this plan
        </span>
      </div>
      {screenWidth >= 768 && (
        <div>
          <RibbonSvg />
        </div>
      )}

      <div>
        <span className="text-2xl font-bold">
          ₹{plan.prices[0]?.price?.amount}
        </span>
        <span>/ year</span>
      </div>
    </div>
  );
};

export default PlanCard;
