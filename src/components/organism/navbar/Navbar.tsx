"use client";

import { usePathname } from "next/navigation";

import NavButton from "@/components/atoms/navbar/NavButton";
import NavL from "@/components/atoms/navbar/NavL";
import NavLink from "@/components/atoms/navbar/NavLink";

export interface Link {
  href: string;
  label: string;
  active?: boolean;
}

export default function NavbarDesktop() {
  const pathname = usePathname();
  const links = [
    {
      href: "/tracking",
      label: "Tracking",
      active: pathname === "/tracking",
    },
    {
      href: "/games",
      label: "Games",
      active: pathname === "/games",
    },
    {
      href: "/article",
      label: "Article",
      active: pathname === "/article",
    },
  ];

  return (
    <div className="pad-x z-50 sticky top-0 flex md:mb-8 justify-between py-4 bg-white md:flex hidden">
      <NavL links={links} />
      <nav className="hidden items-start font-semibold md:flex">
        {links.map((link) => (
          <NavLink key={link.label} {...link} />
        ))}
      </nav>
      <NavButton links={links} />
    </div>
  );
}
