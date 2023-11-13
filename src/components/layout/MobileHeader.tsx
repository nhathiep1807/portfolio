"use client";
import { NAV_LINKS } from "@/constants/nav-links";
import classcat from "classcat";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileHeader() {
  const path = usePathname();

  return (
    <div className="fixed inset-x-0 bottom-0 z-[99999] block px-4 pb-6 md:hidden">
      <div className="p-4 flex items-center justify-between backdrop-blur-md bg-[#18181D]/30 rounded-xl border border-solid border-[#27262C]">
        {NAV_LINKS.map((link, idx) => (
          <Link
            key={idx}
            href={link.path}
            className={classcat([
              "flex-1 rounded-xl flex justify-center items-center py-2",
              path === link.path ? "bg-[#FFFFFF]/10" : "",
            ])}
          >
            {link.icon}
          </Link>
        ))}
      </div>
    </div>
  );
}
