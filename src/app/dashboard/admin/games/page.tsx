import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import GameAdminList from "@/components/organism/admin/games/GameAdminList";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DashboardAdminGames() {
  return (
    <>
      <DashboardTitle title="Games" />
      <Link href={"/dashboard/admin/games/create"}>
        <Button>Tambah Games</Button>
      </Link>
      <GameAdminList />
    </>
  );
}
