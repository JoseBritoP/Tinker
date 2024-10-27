import React from "react";
import ImageComponent from "./ImageComponent";
import { DropdownMenuComponent } from "./DropMenuComponent";
import { Button } from "../ui/button";

export default function NavMenu() {
  return (
    <div className="flex justify-between items-center gap-x-10">
      <Button className="bg-background text-gray-800 shadow-sm px-2" variant='primary'>Open an Account</Button>
      <ImageComponent
        className="flex items-center gap-x-2"
        subClassName="hidden font-medium text-[#36475C] lg:block"
        src="/assets/user.svg"
        alt="user_profile"
        span="Sign In"
        width={40}
        height={40}
      />
      <DropdownMenuComponent />
    </div>
  );
}
