"use client";

import DialogLeaderboard from "@/components/atoms/dialog/DialogLeaderboard";
import { Button } from "@/components/ui/button";
import { useGetScoreGames } from "@/http/games/get-score-games";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function GamePoint() {
  const { data: session, status } = useSession();
  const [dialogOpen, setDialogOpen] = useState(false);

  const { data, isPending } = useGetScoreGames(
    session?.access_token as string,
    {
      enabled: status === "authenticated",
    }
  );

  const handleDialogLeaderboardClick = () => {
    setDialogOpen(true);
  };
  return (
    <>
      <div className="bg-white shadow-md border mt-6 p-4 rounded-lg mb-4 flex flex-col justify-center items-center relative overflow-hidden">
        <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
          <div className="w-40 h-40 bg-primary rounded-full" />
        </div>
        <div className="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2">
          <div className="w-40 h-40 bg-primary rounded-full" />
        </div>
        <div className="text-white space-y-4 relative z-10">
          <h1 className="font-bold md:text-lg text-black text-center">
            Ayo semangat! <br />
            Poin bunda{" "}
            <span className="text-primary font-bold">
              {data?.data.total_score} pts
            </span>
          </h1>
          <Button
            onClick={handleDialogLeaderboardClick}
            className="bg-primary rounded-full w-full hover:bg-primary/80"
          >
            Lihat Peringkat
          </Button>
        </div>
      </div>
      <DialogLeaderboard open={dialogOpen} setOpen={setDialogOpen} />
    </>
  );
}
