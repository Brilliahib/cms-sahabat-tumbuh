"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Leaderboard } from "@/types/games/leaderboard-games";

export const leaderboardColumns: ColumnDef<Leaderboard>[] = [
  {
    accessorKey: "index",
    header: "No",
    cell: ({ row }) => {
      return <p suppressHydrationWarning>{row.index + 1}</p>;
    },
  },
  {
    accessorKey: "name",
    header: "Nama",
  },
  {
    accessorKey: "total_score",
    header: "Total Skor",
  },
];
