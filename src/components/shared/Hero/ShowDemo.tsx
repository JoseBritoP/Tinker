import Image from "next/image";
import React from "react";

export default function ShowDemo() {
  // TODO: Gradiant bg
  return (
    <div className="relative flex h-full w-full justify-center">
      <Image
        src="/assets/Gradient.svg"
        alt="gradient"
        className="min-h-[500px] w-auto object-contain"
        width={500}
        height={500}
      />

      <div className="absolute bottom-6 flex w-full flex-col items-center justify-center">
        <Image src="/assets/Image.svg" alt="show" width={500} height={500} className="-ml-5 
         sm:-mb-20 sm:h-[400px] lg:-mb-20 lg:h-auto xl:w-[70%]
        " 
        />
        <div className="flex w-full flex-col items-center lg:container lg:flex-row lg:justify-between lg:items-center">
          <p className="text-white text-lg lg:text-xl font-semibold">Trusted by these companies</p>
          <div className="grid grid-cols-3 gap-x-5 items-center justify-center justify-items-center px-[20px] align-middle lg:grid-cols-5">
            <Image src='/assets/Google.svg' alt="google" width={40} height={40}/>
            <Image src='/assets/Slack.svg' alt="slack" width={40} height={40}/>
            <Image src='/assets/Trustpilot.svg' alt="truest_pilot" width={60} height={60}/>
            <Image src='/assets/CNN.svg' alt="cnn" width={40} height={40}/>
            <Image src='/assets/Clutch.svg' alt="Clutch" width={40} height={40}/>
          </div>
        </div>
      </div>
    </div>
  );
}
