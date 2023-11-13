import { NAV_LINKS, SOCIAL_LINKS } from "@/constants/nav-links";
import classcat from "classcat";
import Link from "next/link";

export default function DesktopHeader() {
  return (
    <div className="relative z-[999] hidden px-4 md:block">
      <div className="p-4 rounded-xl flex items-center justify-between mx-auto mt-8 h-16 w-full max-w-[1024px] backdrop-blur-md bg-[#18181D]/30">
        <div className="flex items-center [&>*:not(:last-of-type)]:mr-10">
          {NAV_LINKS.map((link, idx) => (
            <Link
              href={link.path}
              key={idx}
              className={classcat([
                "text-base font-medium hover:text-basic-gray-true",
                idx === 0 ? "text-basic-gray-true" : "text-basic-light-gray",
              ])}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center [&>*:not(:last-of-type)]:mr-6">
          {SOCIAL_LINKS.map((link, idx) => (
            <Link href={link.link} key={idx}>
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
