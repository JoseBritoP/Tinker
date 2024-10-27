import Link from "next/link";
import React from "react";

const navbarLinks = [
  {
    label: "Features",
    href: "/features",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Enterprise",
    href: "/enterprise",
  },
  {
    label: "Careers",
    href: "/careers",
  },
];
export default function NavItem() {
  return (
    <ul className="hidden lg:flex justify-evenly items-center gap-x-10">
      {navbarLinks.map((link, i) => (
        <Link className="text-gray-600 font-semibold border-b-2 border-gray-10 hover:border-b-sky-600 transition-colors duration-150 ease-out " key={i} href={link.href}>{link.label}</Link>
      ))}
    </ul>
  );
}
