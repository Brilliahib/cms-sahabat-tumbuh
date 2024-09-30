import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import GameAdminList from "@/components/organism/admin/games/GameAdminList";

export default function DashboardAdminGames() {
  return (
    <>
      <DashboardTitle title="Games" />
      <GameAdminList />
    </>
  );
}
