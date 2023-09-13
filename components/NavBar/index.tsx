"use client";
import { Menu } from "@/constants/Menu";
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
import { FC, useState } from "react";
import NextLink from "next/link";


const NavBarHeader: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      shouldHideOnScroll
      onMenuOpenChange={(open) => setIsMenuOpen(open as boolean)}
      maxWidth="2xl"
    >
      <NavbarContent>
        <li>
          <NavbarMenuToggle className="sm:hidden md:text-white" />
        </li>
        <li>
          <NextLink href="/" className="hover:cursor-pointer">
            <NavbarBrand >
              <Image src="/logo.png" alt="logo" width={200} height={200} className="mt-2" priority/>
            </NavbarBrand>
          </NextLink>
        </li>
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
