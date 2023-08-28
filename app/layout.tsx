import NavBar from "@/components/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";
import Footer from "@/components/Footer";
import { FC } from "react";

export const metadata: Metadata = {
  title: "Dember Painting I.N.C - Painting Service",
  description:
    "We are experts in high-quality painting services. Transforming your spaces into works of art.",
};

type LayoutProps = {
  children: React.ReactNode;
};

const RootLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
