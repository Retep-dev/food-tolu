"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react"; // Import useEffect and useState
import "./globals.css";
import Navbar from "./component/Navbar";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showNavbar, setShowNavbar] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      setIsLoading(false);
      return;
    }
    const currentPath = window.location.pathname;
    if (currentPath == "/" || currentPath == "signin") {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [isLoading]);

  return (
    <html lang="en">
      <body>
        {showNavbar && <Navbar />}
        {children}
      </body>
    </html>
  );
}
