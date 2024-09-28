import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";

export default function NavButton() {
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
    </>
  );
}
