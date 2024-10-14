"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock, Gamepad2 } from "lucide-react";
import { useGetGames } from "@/http/games/get-all-games";
import { useSession } from "next-auth/react";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { useState } from "react";
import DialogStartGame from "@/components/atoms/dialog/DialogStartGame";
import { Skeleton } from "@/components/ui/skeleton"; // Import Skeleton dari shadcn/ui
import Image from "next/image";

export default function GameList() {
  const { data: session, status } = useSession();
  const { data, isPending } = useGetGames(session?.access_token as string, {
    enabled: status === "authenticated",
  });

  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedGameId, setSelectedGameId] = useState<number | null>(null);

  const handleGameClick = (id: number) => {
    setSelectedGameId(id);
    setDialogOpen(true);
  };

  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
      {isPending
        ? Array.from({ length: 3 }).map((_, index) => (
            <Card
              key={index}
              className="w-full border-0 border-muted shadow-transparent cursor-pointer"
            >
              <CardHeader className="p-0">
                <Skeleton className="w-full h-[180px]" />
              </CardHeader>
              <CardContent className="space-y-3 mt-4 p-0">
                <Skeleton className="h-6 w-3/4" />
                <div className="flex items-center gap-2">
                  <Skeleton className="h-4 w-1/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              </CardContent>
            </Card>
          ))
        : data?.data.map((game) => (
            <Card
              className="border-0 shadow-none p-0 cursor-pointer"
              onClick={() => handleGameClick(game.id)}
              key={game.id}
            >
              <CardHeader className="p-0">
                <div className="w-full h-[180px] bg-primary flex justify-center items-center rounded-xl">
                  <Gamepad2 className="h-16 w-16 text-white" />
                </div>
              </CardHeader>
              <CardContent className="space-y-3 mt-4 p-0">
                <CardTitle className="text-md font-bold">
                  {game.title}
                </CardTitle>
                <CardFooter className="p-0 text-muted-foreground text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {format(game.created_at, "EEEE, d MMMM yyyy", {
                      locale: id,
                    })}
                  </div>
                </CardFooter>
              </CardContent>
            </Card>
          ))}

      {selectedGameId && (
        <DialogStartGame
          open={dialogOpen}
          setOpen={setDialogOpen}
          id={selectedGameId}
        />
      )}
    </div>
  );
}
