import React from "react";
import ImageComponent from "./shared/ImageComponent";
import NavItem from "./shared/NavItem";
import NavMenu from "./shared/NavMenu";

export default function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto ">
      <ImageComponent
        src="/assets/logo.svg"
        alt="logo"
        width={40}
        height={40}
      />
      <NavItem />
      <NavMenu />
    </nav>
  );
}
