import { cn } from "@/lib/utils";
import { Divide, Image, MessagesSquare, Palette } from "lucide-react";
import Link from "next/link";

const gameData = [
  { icon: <Image />, label: "Tebak Gambar", color: "primary", tag: "pictures" },
  { icon: <Divide />, label: "Berhitung", color: "primary", tag: "operations" },
  { icon: <Palette />, label: "Pilih Warna", color: "primary", tag: "colors" },
  {
    icon: <MessagesSquare />,
    label: "Pesan Bunda",
    color: "primary",
    tag: "messages",
  },
];

export default function CardGames() {
  return (
    <div className="flex justify-between">
      {gameData.map((game, index) => (
        <Link
          href={`/games/${game.tag}`}
          key={index}
          className="text-center flex flex-col justify-center items-center space-y-2"
        >
          <div
            className={cn(
              "p-3 rounded-full w-fit",
              `bg-primary/20`,
              `text-${game.color}`
            )}
          >
            {game.icon}
          </div>
          <div className="text-center text-sm font-semibold">{game.label}</div>
        </Link>
      ))}
    </div>
  );
}
