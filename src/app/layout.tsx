import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { SessionProvider } from "next-auth/react";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <SessionProvider>
        <html lang="en">
          <body className="bg-white">
            <Navbar/>
            <div className="h-16"></div>
            {children}
          </body>
        </html>
    </SessionProvider>
    
  );
}
