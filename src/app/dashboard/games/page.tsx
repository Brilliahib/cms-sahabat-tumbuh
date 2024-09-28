import NavHeader from "@/components/atoms/headers/NavHeader";
import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import GameList from "@/components/organism/games/GameList";
import GamePoint from "@/components/organism/games/GamePoint";

export default function GamesPage() {
  return (
    <>
      <DashboardTitle title="Permainan" />
      <GamePoint />
      <GameList />
    </>
  );
}
