"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
} from "@nextui-org/react";
import { FC, useEffect, useState } from "react";

const menuItems = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Services",
    href: "#services",
  },
  {
    name: "Gallery",
    href: "/gallery",
  },
];

const NavBarHeader: FC = () => {
  // create state for navbar if mobile true is not mobile false
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // check if window width is less than 640px
    if (window.innerWidth < 640) {
      setIsMobile(true);
    }
    // add event listener to window resize
    window.addEventListener("resize", () => {
      // check if window width is less than 640px
      if (window.innerWidth < 640) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });
  }, []);

  return (
    <Navbar
      isBlurred={isMobile}
      className={isMobile ? "" : "bg-transparent"}
      position={isMobile ? "sticky" : "static"}>
      <NavbarContent>
        <NavbarMenuToggle className="sm:hidden md:text-white" />
        <NavbarBrand>
          <p className="font-bold text-inherit md:text-white">LOGO</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-8" justify="start">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item.name}-${index}`}>
            <Link color="foreground" className="text-white" href={item.href}>
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="#contact"
            variant="shadow"
            className="font-bold md:font-semibold">
            Contact Us
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-opacity-50 bg-black justify-center items-center space-y-8">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color="foreground"
              className="w-full text-white text-4xl text-center"
              href={item.href}
              size="lg">
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBarHeader;
