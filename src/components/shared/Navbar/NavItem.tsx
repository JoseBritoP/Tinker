import { navbarLinks } from "@/constants";
import React from "react";

export default function NavItem() {
  // li remplace Link element
  return (
    <ul className="hidden lg:flex justify-evenly items-center gap-x-10">
      {navbarLinks.map((link, i) => (
        <li className="text-gray-600 font-semibold border-b-2 border-gray-10 hover:border-b-sky-600 transition-colors duration-150 ease-out cursor-pointer " key={i}>{link.label}</li>
      ))}
    </ul>
  );
}
