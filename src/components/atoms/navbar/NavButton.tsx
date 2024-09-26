import { useState } from "react";

import Link from "next/link";

import { Menu } from "lucide-react";

import { Link as Navbar } from "@/components/organism/navbar/Navbar";
import { Button } from "@/components/ui/button";
import NavLink from "./NavLink";

interface NavLProps {
  links: Navbar[];
}

export default function NavButton({ links }: NavLProps) {
  const [openLoginDialog, setOpenLoginDialog] = useState<boolean>(false);
  return (
    <>
      <div className="hidden items-center gap-4 md:flex">
        <Button onClick={() => setOpenLoginDialog(true)}>Masuk</Button>
        <Button variant={"outline"}>
          <Link href={"/register"}>Daftar</Link>
        </Button>
      </div>
    </>
  );
}
