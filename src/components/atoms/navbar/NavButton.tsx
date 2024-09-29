import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import NavLink from "./NavLink";
import { Link as NavbarLink } from "@/components/organism/side/SideNav";

interface NavHeaderProps {
  links: NavbarLink[];
}

export default function NavButton({ links }: NavHeaderProps) {
  const { data: session } = useSession();
  return (
    <>
      <div className="hidden items-center gap-4 md:flex">
        <div className="hidden items-center gap-4 md:flex">
          {session ? (
            <Button>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          ) : (
            <>
              <Button>
                <Link href="/login">Masuk</Link>
              </Button>
              <Button variant="outline">
                <Link href="/register">Daftar</Link>
              </Button>
            </>
          )}
        </div>
      </div>
      <div className="md:hidden flex">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent className="flex flex-col">
            <div className="mx-auto my-8">
              <Link
                href="/"
                className="flex text-left justify-center items-center gap-2 font-semibold"
              >
                <Image
                  src="/images/logo_full.png"
                  alt="Tumbuh Sahabat"
                  width={100}
                  height={100}
                />
              </Link>
            </div>
            <nav className="grid-gap-2 space-y-4 font-poppins">
              {links.map((link) => (
                <NavLink key={link.label} {...link} />
              ))}
              {session ? (
                <Button>
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
              ) : (
                <>
                  <div className="flex flex-col space-y-4">
                    <Button>
                      <Link href="/login">Masuk</Link>
                    </Button>
                    <Button variant="outline">
                      <Link href="/register">Daftar</Link>
                    </Button>
                  </div>
                </>
              )}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
