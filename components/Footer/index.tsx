"use client";
import { Menu } from "@/constants/Menu";
import { Link } from "@nextui-org/react";
import FooterListItems from "./FooterListItems";
import CopyRight from "@/constants/CopyRight";
import { directions, email, phone } from "@/constants/contact/ContactInfo"

const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <section className="grid row-gap-10 mb-8 lg:grid-cols-3">
          <div className="grid grid-cols-3 gap-4 md:gap-5 row-gap-8 lg:col-span-4 md:grid-cols-3">
            <FooterListItems items={Menu} title="Pages" />
            <div>
              <p className="font-medium tracking-wide text-white">Contact Us</p>
              <ul className="mt-2 space-y-2">
                <li className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200">
                  {phone}
                </li>
                <li className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200">
                  {directions}
                </li>
                <li className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200">
                  {email}
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium tracking-wide text-white">Open Hours</p>
              <ul className="mt-2 space-y-2">
                <li className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200">
                  M-F: 8am - 6pm
                </li>
                <li className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200">
                  S-S, 9am - 1pm
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
          <p className="text-sm text-white">{CopyRight}</p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <Link
              href="https://www.facebook.com/DemberPaintingInc"
              target="_blank"
              className="text-white transition-colors duration-300 hover:text-teal-accent-400">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </Link>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
