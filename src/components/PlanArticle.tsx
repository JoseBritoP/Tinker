import { CheckIcon } from "@radix-ui/react-icons";
import React from "react";
type PlanType = {
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

interface PlanArticle {
  item: PlanType;
}
export default function PlanArticle({ item }: PlanArticle) {
  return (
    <article className={`${item.bgClass} w-full rounded-[8px] p-6 flex flex-col lg:justify-between pb-8`}>
      <div className="mb-4">
        <h3 className={`${item.textPrimary} "font-medium text-[18px] lg:text-xl"`}>
          {item.title}
        </h3>
        <p className={`pt-[12px] text-[#36485C] lg:text-[18px ${item.textSecundary}`}>
          {item.description}
        </p>

        <h2 className={`pt-4 text-2xl font-medium lg:text-[32px] ${item.priceClass}`}>
          {item.price}
        </h2>

        <ul className="flex flex-col gap-y-2 pt-4 text-[#5F7896]">
          {item.features &&
            item.features.map((feat, i) => (
              <li key={i} className={`flex items-center gap-x-2 ${item.textSecundary}`}>
                <span>
                 <CheckIcon/>
                </span>
                {feat.label}
              </li>
            ))}
          {item.details &&
            item.details.map((detail, i) => (
              <p key={i} className="pt-4 text-[16px] after:pt-2 text-[#36485C]">
                {detail.text}
              </p>
            ))}
        </ul>
      </div>
      <button className={`"mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium"`}>
        {item.buttonLabel}
      </button>
    </article>
  );
}
