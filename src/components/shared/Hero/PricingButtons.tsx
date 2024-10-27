"use client";
import { Button } from "@/components/ui/button";
import React from "react";

interface PricingButtonsProps {
  label: string;
  className: string;
}

export default function PricingButtons({
  label,
  className,
}: PricingButtonsProps) {
  return (
    <Button className={`${className}`} variant='menu'>
      {label}
    </Button>
  );
}
