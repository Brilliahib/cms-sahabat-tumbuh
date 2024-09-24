"use client";

import { cn } from "@/lib/utils";
import { ChartColumnBig, Gamepad, Home, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const navItems = [
    { href: "/", icon: Home },
    { href: "/tracking", icon: ChartColumnBig },
    { href: "/games", icon: Gamepad },
    { href: "/account", icon: User },
  ];

  return (
    <>
      <div className="fixed bottom-0 w-full z-50">
        <div className="flex bg-white justify-around items-center max-w-[430px] md:py-5 py-3 border-t-[1px] border-gray-200 text-muted-foreground">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <div key={index}>
                <Link href={item.href}>
                  <Icon className={cn(isActive ? "text-primary" : "")} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
