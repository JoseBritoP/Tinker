"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import ImageComponent from "../Navbar/ImageComponent";

interface PricingButtonsProps {
  label: string;
  className: string;
  icon?: true;
}

export default function PricingButtons({
  label,
  className,
  icon,
}: PricingButtonsProps) {
  return (
    <>
      <Button className={`${className} ${icon && 'flex justify-between items-center py-4 hover:bg-sky-50'}`} variant="menu">
        {label}
        {icon && (
          <ImageComponent
            src="/assets/blue-button.svg"
            alt="Pricing"
            height={40}
            width={40}
          />
        )}
      </Button>
    </>
  );
}
