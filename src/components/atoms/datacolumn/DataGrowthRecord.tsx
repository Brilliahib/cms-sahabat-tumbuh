"use client";

import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { Growth } from "@/types/tracking/growth";

export const growthRecordColumns: ColumnDef<Growth>[] = [
  {
    accessorKey: "index",
    header: "No",
    cell: ({ row }) => {
      return <p suppressHydrationWarning>{row.index + 1}</p>;
    },
  },
  {
    accessorKey: "weight",
    header: "Berat Badan (Kg)",
  },
  {
    accessorKey: "height",
    header: "Tinggi Badan (Cm)",
  },
  {
    accessorKey: "weight_status",
    header: "Status Berat Badan",
  },
  {
    accessorKey: "height_status",
    header: "Status Tinggi Badan",
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
];
