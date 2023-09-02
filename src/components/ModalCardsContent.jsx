import React from "react";
import RedArrowSvg from "./RedArrowSvg";
import { CheckCircleIcon } from "@heroicons/react/solid";

const ModalCardsContent = ({ plan }) => {
  return (
    <div className=" cursor-pointer pt-3 bg-red-50 rounded-3xl shadow-md relative h-[320px] max-w-[320px]">
      <div className="flex items-center justify-between ">
        <RedArrowSvg title={plan?.plan_name} />
        <div className="mr-4 mb-5 text-red-500 flex flex-col justify-start items-end">
          <span className="text-3xl font-bold">
            ₹{plan.prices[0]?.price?.amount}
          </span>
          <span className="text-sm">Per Year</span>
        </div>
      </div>
      <ul className="ml-5 absolute top-[85px]">
        {plan?.terms?.map((term, i) => {
          return (
            <li key={i} className="flex items-center mb-3">
              <CheckCircleIcon className="w-5 h-5 text-red-300" />
              <span className="ml-2 text-sm text-gray-700">{term}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ModalCardsContent;
