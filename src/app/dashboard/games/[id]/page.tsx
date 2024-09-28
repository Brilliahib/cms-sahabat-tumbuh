import GameDetail from "@/components/organism/games/GameDetail";

interface GameDetialProps {
  params: { id: number };
}

export default function GameDetailPage({ params }: GameDetialProps) {
  return (
    <>
      <GameDetail id={params.id} />
    </>
  );
}
