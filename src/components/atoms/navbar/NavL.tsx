import Image from "next/image";

import { Link as Navbar } from "@/components/organism/navbar/Navbar";

import NavLink from "./NavLink";
import Link from "next/link";

interface NavLProps {
  links: Navbar[];
}

export default function NavL({ links }: NavLProps) {
  return (
    <>
      <div className="flex items-center gap-4">
        <div className="flex items-center">
          <Link href={"/"}>
            <Image
              src={"/images/logo_full.png"}
              alt="Tumbuh Sahabat"
              width={1155}
              height={404}
              className="max-w-[100px]"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
