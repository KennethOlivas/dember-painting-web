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
import Image from "next/image";
import { FC, useEffect, useState } from "react";

const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/#about",
  },
  {
    name: "Services",
    href: "/#services",
  },
  {
    name: "FAQ's",
    href: "/#faq",
  },
  {
    name: "Gallery",
    href: "/gallery",
  },
];

const NavBarHeader: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      shouldHideOnScroll
      onMenuOpenChange={(open) => setIsMenuOpen(open as boolean)}
      className="max-w-full"
      maxWidth="2xl"
    >
      <NavbarContent>
        <li>
          <NavbarMenuToggle className="sm:hidden md:text-white" />
        </li>
        <li>
          <NavbarBrand>
            <Image src="/logo.png" alt="logo" width={200} height={200} className="mt-2" />
          </NavbarBrand>
        </li>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-8" justify="start">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item.name}-${index}`}>
            <Link color="foreground" href={item.href}>
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
            href="/#contact"
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
              onClick={() => setIsMenuOpen(false)}
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
