import React from "react";
import PricingButtons from "./PricingButtons";
import ImageComponent from "../Navbar/ImageComponent";

export default function Pricing() {
  return (
    <aside className="flex justify-center items-center py-10 gap-x-5">
      <div className="w-1/2 flex justify-end items-center">
        <PricingButtons
          label="Try for free"
          className="bg-[#4328eb] w-1/2 py-6 px-8 text-white rounded-lg hover:bg-[#513ecc] "
        />
      </div>
      <div className="flex justify-start items-center w-1/2">
        <PricingButtons
          label="View Pricing"
          className="w-1/2 text-[#523ed8] transition-colors duration-75 ease-in hover:bg-gray-10 font-semibold"
        />
        <ImageComponent
          src="/assets/blue-button.svg"
          alt="Pricing"
          height={40}
          width={40}
        />
      </div>
    </aside>
  );
}
