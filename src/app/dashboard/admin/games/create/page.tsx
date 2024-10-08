import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import GameCreateContent from "@/components/organism/admin/games/GameCreateContent";

export default function CreateGamesAdminPage() {
  return (
    <>
      <DashboardTitle title="Buat Games Baru" />
      <GameCreateContent />
    </>
  );
}
