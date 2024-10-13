"use client";

import { DataTable } from "@/components/molecules/datatable/DataTable";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useGetLeaderboard } from "@/http/games/get-leaderboard";
import { useSession } from "next-auth/react";
import { leaderboardColumns } from "../datacolumn/DataLeaderboard";
import { useGetTopThree } from "@/http/games/get-top-score";
import { Badge } from "@/components/ui/badge";

interface DialogLeaderboardProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function DialogLeaderboard({
  open,
  setOpen,
}: DialogLeaderboardProps) {
  const { data: session, status } = useSession();
  const { data, isPending } = useGetLeaderboard(
    session?.access_token as string,
    {
      enabled: status === "authenticated",
    }
  );
  const { data: top } = useGetTopThree(session?.access_token as string, {
    enabled: status === "authenticated",
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Peringkat Teratas</DialogTitle>
        </DialogHeader>
        <div className="flex justify-center gap-4">
          {top?.data && (
            <div className="flex items-end justify-center gap-6">
              <div className="flex flex-col items-center">
                <span className="text-center mb-2 text-sm font-bold">
                  {top.data[1]?.name}
                </span>
                <div
                  className="bg-gray-300 rounded-t-md w-16"
                  style={{ height: "120px" }}
                >
                  <div className="bg-yellow-500 h-full flex items-center justify-center rounded-t-md">
                    <span className="text-white font-bold">#2</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <span className="text-center mb-2 text-sm font-bold">
                  {top.data[0]?.name}
                </span>
                <div
                  className="bg-gray-300 rounded-t-md w-20"
                  style={{ height: "160px" }}
                >
                  <div className="bg-primary h-full flex items-center justify-center rounded-t-md">
                    <span className="text-white font-bold">#1</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <span className="text-center mb-2 text-sm font-bold">
                  {top.data[2]?.name}
                </span>
                <div
                  className="bg-gray-300 rounded-t-md w-16"
                  style={{ height: "100px" }}
                >
                  <div className="bg-red-500 h-full flex items-center justify-center rounded-t-md">
                    <span className="text-white font-bold">#3</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Tabel Peringkat Lainnya */}
        <div className="mt-8">
          <DataTable columns={leaderboardColumns} data={data?.data || []} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
