"use client";

import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { Games } from "@/types/games/games";
import ActionButton from "@/components/molecules/datatable/ActionButton";
import {
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Eye, SquarePen, Trash2 } from "lucide-react";

interface GamesRowProps extends Games {
  deleteGamesHandler: (data: Games) => void;
}

export const gameColumns: ColumnDef<GamesRowProps>[] = [
  {
    accessorKey: "index",
    header: "No",
    cell: ({ row }) => {
      return <p suppressHydrationWarning>{row.index + 1}</p>;
    },
  },
  {
    accessorKey: "title",
    header: "Judul",
  },
  {
    accessorKey: "type_id",
    header: "Tipe Id",
  },
  {
    accessorKey: "created_at",
    header: "Tanggal",
    cell: ({ row }) => {
      const data = row.original;
      return (
        <p suppressHydrationWarning>
          {format(new Date(data.created_at), "EEEE, d MMMM yyyy", {
            locale: id,
          })}
        </p>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const data = row.original;

      return (
        <ActionButton>
          <DropdownMenuLabel>Aksi</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link
              href={`/dashboard/admin/games/${data.id}/edit`}
              className="flex items-center text-gray-700  "
            >
              <SquarePen className="h-4 w-4" />
              <span className="ml-2">Edit</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href={`/dashboard/admin/games/${data.id}`}
              className="flex items-center text-gray-700 "
            >
              <Eye className="h-4 w-4" />
              <span className="ml-2">Detail</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => data.deleteGamesHandler(data)}
            className="cursor-pointer text-red-500 focus:text-red-700"
          >
            <Trash2 className="h-4 w-4" />
            <span className="ml-2">Hapus</span>
          </DropdownMenuItem>
        </ActionButton>
      );
    },
  },
];
