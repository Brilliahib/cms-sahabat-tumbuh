"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Divide } from "lucide-react";
import Link from "next/link";
import { useGetGames } from "@/http/games/get-all-games";
import { useSession } from "next-auth/react";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { useState } from "react";
import DialogStartGame from "@/components/atoms/dialog/DialogStartGame";
import { Skeleton } from "@/components/ui/skeleton"; // Import Skeleton dari shadcn/ui

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
    <div className="grid grid-cols-1 space-y-4">
      {isPending
        ? Array.from({ length: 3 }).map((_, index) => (
            <Card
              key={index}
              className="w-full border-2 border-muted shadow-transparent cursor-pointer"
            >
              <CardHeader className="flex md:flex-row md:items-center md:justify-between p-4">
                <div className="flex gap-4">
                  <Skeleton className="h-16 w-16" />
                  <div className="space-y-1">
                    <Skeleton className="h-6 w-full" />{" "}
                    <Skeleton className="h-4 w-full" />{" "}
                    <Skeleton className="h-4 w-full" />{" "}
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))
        : data?.data.map((game) => (
            <div key={game.id} className="group block">
              <Card
                onClick={() => handleGameClick(game.id)}
                className="w-full border-2 border-muted shadow-transparent group-hover:bg-muted cursor-pointer"
              >
                <CardHeader className="flex md:flex-row md:items-center md:justify-between p-4">
                  <div className="flex gap-4">
                    <div className="flex justify-center items-center p-4 bg-primary text-white rounded-lg">
                      <Divide />
                    </div>
                    <div className="space-y-1">
                      <CardTitle className="font-bold text-base">
                        {game.title}
                      </CardTitle>
                      <CardDescription className="text-sm text-muted-foreground line-clamp-1">
                        Rilis pada{" "}
                        {format(game.created_at, "EEEE d MMMM yyyy", {
                          locale: id,
                        })}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
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
