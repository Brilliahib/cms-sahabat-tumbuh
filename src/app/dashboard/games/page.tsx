import NavHeader from "@/components/atoms/headers/NavHeader";
import GameList from "@/components/organism/games/GameList";
import GamePoint from "@/components/organism/games/GamePoint";

export default function GamesPage() {
  return (
    <>
      <NavHeader title="Game Edukasi" />
      <GamePoint />
      <GameList />
    </>
  );
}
