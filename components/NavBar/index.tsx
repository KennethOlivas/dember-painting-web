"use client";
import { Menu } from "@/constants/Menu";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
} from "@nextui-org/react";
import { FC, useState } from "react";
import NextLink from "next/link";
import Logo from "./Logo";


const NavBarHeader: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={(open) => setIsMenuOpen(open as boolean)}
      maxWidth="2xl"
      position="static"
    >
      <NavbarContent>
        <NavbarMenuToggle className="sm:hidden md:text-white" />
        <Logo />
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        {Menu.map((item, index) => (
          <NavbarItem key={`${item.name}-${index}`}>
            <Link
              as={NextLink}
              color="foreground" href={item.path}>
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={NextLink}
            color="primary"
            href="/#contact"
            variant="shadow"
            className="font-bold md:font-semibold">
            Contact Us
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-opacity-50 bg-black justify-center items-center space-y-8">
        {Menu.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              as={NextLink}
              onClick={() => setIsMenuOpen(false)}
              color="foreground"
              className="w-full text-white text-4xl text-center"
              href={item.path}
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
