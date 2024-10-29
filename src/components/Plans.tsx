import React from "react";
import PlanArticle from "./PlanArticle";

type PlansType = {
  title: string;
  bgClass: string;
  description: string;
  textPrimary: string;
  textSecundary: string;
  price: string;
  priceClass: string;
  features?: {
    label: string;
  }[];
  details?: {
    text: string;
  }[];
  buttonLabel: string;
};

const plans: PlansType[] = [
  {
    title: "Free Trial",
    bgClass: "bg-[#f5f4ff]",
    description: "Perfect for testing the waters",
    textPrimary: "text-[#4328EB] text-[20px]",
    textSecundary: "text-[#36485C] text-[18px]",
    price: "$0/mo",
    priceClass: "pt-4 text-2xl font-medium lg:text-[32px] text-gray-800",
    features: [
      {
        label: "Lorem impsu dolor sit amet",
      },
      {
        label: "Sed do eiusmod tempor incididunt",
      },
      {
        label: "Consectetur adipiscing elit",
      },
    ],
    buttonLabel: "Star trial",
  },
  {
    title: "Business",
    bgClass: "bg-[#4328EB]",
    description: "Perfect for small businesses",
    textPrimary: "text-white text-[20px]",
    textSecundary: "text-[#F4f8fA] text-[18px]",
    price: "$500/mo",
    priceClass: "text-white pt-4 text-2xl font-medium lg:text-[32px]",
    features: [
      {
        label: "Lorem impsu dolor sit amet",
      },
      {
        label: "Sed do eiusmod tempor incididunt",
      },
      {
        label: "Consectetur adipiscing elit",
      },
      {
        label: "Lorem impsu dolor sit amet",
      },
      {
        label: "Consectetur adipiscing elit",
      },
    ],
    buttonLabel: "Get Started",
  },
  {
    title: "Enterprise",
    bgClass: "bg-[#f5f4ff]",
    description: "Perfect for big companies",
    textPrimary: "text-[#4328EB] text-[20px]",
    textSecundary: "text-[#36485C] text-[18px]",
    price: "Custom",
    priceClass: "text-gray-800 pt-4 text-2xl font-medium lg:text-[32px]",
    details: [
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. ",
      },
      {
        text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
    buttonLabel: "Contact Us",
  },
];

export default function Plans() {
  return (
    <section className="py-[48px] lg:py-[60px]">
      <div>
      <h1 className="text-[#172026] text-center font-medium  text-2xl lg:text-[42px]">
          Flexible plans for you
        </h1>
        <p className="pt-[16px] pb-[40px] text-center text-[#36485C] lg:text-[18px]">
        No hidden fees!
      </p>      </div>
      <div className="flex flex-col gap-y-6 gap-x-[24px] lg:flex-row">
        {plans.map((plan,i)=>(
          <PlanArticle
            key={i}
            item={plan}
          />
        ))}
      </div>
    </section>
  );
}
