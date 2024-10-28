import Image from "next/image";
import React from "react";

interface FeatureCardProps {
  title: string;
  subTitle: string;
  description: string;
  reverse: boolean;
  featuresList: boolean;
  featuresListText?: {
    label: string;
  }[];
  featureSrcImage: string;
  TagP: string;
  primaryColor: string;
}
export default function FeatureCard({
  title,
  subTitle,
  reverse,
  featuresList,
  primaryColor,
  description,
  featureSrcImage,
  featuresListText,
  TagP,
}: FeatureCardProps) {
  const button =
    primaryColor === "blue"
      ? "blue"
      : primaryColor === "green"
      ? "green"
      : "pink";

  return (
    <article
      className={`flex flex-col gap-x-6 
      ${reverse === true ? "sm:flex-row-reverse" : "sm:flex-row"}
      `}
    >
      <Image
        src={featureSrcImage}
        alt="feature 1"
        height={20}
        width={20}
        className="hidden w-1/2 sm:block"
      />
      <div
        className={`sm:w-1/2 lg:py-[56px] ${
          reverse === true ? "lg:pr-[56px]" : "lg:pl-[56px]"
        }`}
      >
        <p
          about="description"
          className={`font-medium
            ${primaryColor === "blue" && `text-[#0085FF]`}
            ${primaryColor === "green" && `text-[#00A424]`}
            ${primaryColor === "pink" && `text-[#EB2891]`}
            lg:text-[18px]`}
        >
          {subTitle}
        </p>
        <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
          {title}
        </h1>
        <Image
          src={`${featureSrcImage}`}
          alt={`feature image`}
          width={500}
          height={500}
          className="pt-[24px} sm:hidden"
        />
        <p className="py-[24px] text-[#36485C] lg:text-[18px]">{description}</p>
        {featuresList === true ? (
          <ul className="flex flex-col gap-y-3">
            {featuresListText &&
              featuresListText.map((feat, i) => (
                <li
                  key={i}
                  className="flex items-center gap-x-2 text-[#36485c]"
                >
                  <span>
                    <Image
                      src="/assets/check.svg"
                      alt="check"
                      height={20}
                      width={20}
                    />
                  </span>
                  <p className="lg:text-[18px]">{feat.label}</p>
                </li>
              ))}
          </ul>
        ) : (
          <div className="flex w-full gap-x-[24px] pt-[24px]">
            <div className="w-1/2 flex flex-col gap-y-3">
              <h3 className="text-[20px] font-medium text-[#172026]">100+</h3>
              <p className="text-[#36485c]">Lorem impsu dolor sit</p>
            </div>
            <div className="w-1/2 flex flex-col gap-y-3">
              <h3 className="text-[20px] font-medium text-[#172026]">800+</h3>
              <p className="text-[#36485c]">Conse adipsiscing elit</p>
            </div>
          </div>
        )}
        <p
          className={`flex items-center gap-x-2 pt-[24px] font-medium 
            ${primaryColor === "blue" && `text-[#0085FF]`}
            ${primaryColor === "green" && `text-[#00A424]`}
            ${primaryColor === "pink" && `text-[#EB2891]`}
            text-[18px]
          `}
        >
          {TagP + " "}
          <span>
            <Image
              src={`/assets/${button}-button.svg`}
              alt="button"
              height={40}
              width={40}
            />
          </span>
        </p>
      </div>
    </article>
  );
}
