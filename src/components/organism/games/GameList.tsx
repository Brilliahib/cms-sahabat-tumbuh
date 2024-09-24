import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Divide, Image, MessagesSquare, Palette } from "lucide-react";
import Link from "next/link";

export default function GameList() {
  const gameData = [
    {
      icon: <Image />,
      label: "Tebak Gambar",
      description: "Tebak gambar yang ditampilkan.",
      color: "primary",
      tag: "pictures",
    },
    {
      icon: <Divide />,
      label: "Berhitung",
      description: "Asah kemampuan berhitungmu.",
      color: "primary",
      tag: "operations",
    },
    {
      icon: <Palette />,
      label: "Pilih Warna",
      description: "Pilih warna yang sesuai.",
      color: "primary",
      tag: "colors",
    },
    {
      icon: <MessagesSquare />,
      label: "Pesan Bunda",
      description: "Kirim pesan untuk Bunda.",
      color: "primary",
      tag: "messages",
    },
    {
      icon: <Image />,
      label: "Tebak Gambar",
      description: "Tebak gambar yang ditampilkan.",
      color: "primary",
      tag: "pictures",
    },
    {
      icon: <Divide />,
      label: "Berhitung",
      description: "Asah kemampuan berhitungmu.",
      color: "primary",
      tag: "operations",
    },
    {
      icon: <Palette />,
      label: "Pilih Warna",
      description: "Pilih warna yang sesuai.",
      color: "primary",
      tag: "colors",
    },
    {
      icon: <MessagesSquare />,
      label: "Pesan Bunda",
      description: "Kirim pesan untuk Bunda.",
      color: "primary",
      tag: "messages",
    },
  ];

  return (
    <div className="grid grid-cols-1 space-y-4">
      {gameData.map((game, index) => (
        <Link href={`games/${game.tag}`} key={index} className="group block">
          <Card className="w-full border-2 border-muted shadow-transparent group-hover:bg-muted">
            <CardHeader className="flex md:flex-row md:items-center md:justify-between p-4">
              <div className="flex gap-4">
                <div className="flex justify-center items-center p-4 bg-primary text-white rounded-lg">
                  {game.icon}
                </div>
                <div className="space-y-1">
                  <CardTitle className="font-bold text-base">
                    {game.label}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground line-clamp-1">
                    {game.description}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  );
}
