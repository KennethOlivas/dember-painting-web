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
import { FC } from "react";

const NavBarHeader: FC = () => {
  const menuItems = ["Home", "About"];
  return (
    <Navbar isBlurred={false} className="bg-transparent" position="static">
      <NavbarContent>
        <NavbarMenuToggle className="sm:hidden text-white" />
        <NavbarBrand>
          <p className="font-bold text-inherit text-white">LOGO</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-8" justify="start">
        <NavbarItem>
          <Link color="foreground" className="text-white" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" className="text-white" href="#services">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" className="text-white" href="#">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" className="text-white" href="#">
            Gallery
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="shadow">
            Contact Us
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-opacity-80 bg-black">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color="foreground"
              className="w-full text-white"
              href="#"
              size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBarHeader;
