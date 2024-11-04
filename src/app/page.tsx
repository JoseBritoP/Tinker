import { Cta } from "@/components/Cta";
import FaQ from "@/components/FaQ";
import Features from "@/components/Features";
import { Footer } from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Plans from "@/components/Plans";
import React from "react";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="px-[20px] lg:container lg:px-20 mx-auto">
        <Features />
        <FaQ />
        <Plans />
        <Cta/>
      </div>
      <Footer/>
    </>
  );
}
