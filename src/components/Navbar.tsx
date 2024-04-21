import React from "react";
import Image from "next/image";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import Link from "next/link";
import Container from "./ui/container";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const routes = [
    {
      href: "/resources",
      label: "Resources",
    },
    {
      href: "/about-me",
      label: "About",
    },
    {
      href: "/contact-me",
      label: "Contact",
    },
  ];

  return (
    <header className="sm:flex sm:justify-between py-3 px-4 border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger>
                <Menu className="h-6 md:hidden w-6" />
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  {routes.map((route, i) => (
                    <Link
                      key={i}
                      href={route.href}
                      className="block px-2 py-1 text-lg"
                    >
                      {route.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            <a href="/" className="ml-4 md:hidden">
              <Image
                src="/logo-full.png"
                alt="MathsHive"
                width={50}
                height={50}
              />
            </a>
            <a href="/" className="hidden ml-4 md:block lg:ml-0 cursor-pointer">
              <Image src="/logo.png" alt="MathsHive" width={50} height={50} />
            </a>
            <div className="hidden md:block pl-4 flex items-center justify-center text-lg uppercase font-bold">
              Maths Hive
            </div>
          </div>
          <nav className="hidden mx-6 flex items-center space-x-4 lg:space-x-6 md:block">
            {routes.map((route, i) => (
              <Button key={i} asChild variant="ghost">
                <Link
                  key={i}
                  href={route.href}
                  className="text-sm font-medium transition-colors"
                >
                  {route.label}
                </Link>
              </Button>
            ))}
          </nav>
          <div className="flex items-center space-x-4 lg:space-x-6">
            <ModeToggle />
            <Button>Sign In</Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
