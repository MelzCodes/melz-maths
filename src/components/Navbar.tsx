import React from "react";
import Image from "next/image";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className="flex items-center justify-between p-4 z-10 bg-secondary containe w-full">
      <div className="flex items-center space-x-4">
        <Image src="/logo.png" alt="MathsHive" width={50} height={50} />
      </div>
      <div className="flex justify-end space-x-4">
        <ModeToggle />
        <Button>Sign In</Button>
      </div>
    </div>
  );
};

export default Navbar;
