import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DesktopHeader from "@/components/layout/DesktopHeader";
import MobileHeader from "@/components/layout/MobileHeader";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nhat Hiep Tran",
  description: "Fronted Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="p-0 transition duration-700 bg-black">
          <div className="absolute inset-x-0 top-0 select-none">
            <div className="relative h-[550px] w-full overflow-hidden">
              <img
                src="./images/bg-gradient-top.png"
                alt="bg-top"
                className="absolute left-1/2 top-0 z-[2] block h-[550px] w-[1440px] -translate-x-1/2 select-none object-cover"
              />
            </div>
          </div>
          <Link
            href="/"
            className="text-base font-semibold text-basic-gray-true md:hidden absolute left-1/2 top-4 inline-block -translate-x-1/2 opacity-50"
          >
            hiep.tran
          </Link>
          <DesktopHeader />
          <MobileHeader />
          {children}
        </div>
      </body>
    </html>
  );
}
