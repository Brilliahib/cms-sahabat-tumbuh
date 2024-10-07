"use client";

import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { Growth } from "@/types/tracking/growth";
import { Badge } from "@/components/ui/badge";

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
    cell: ({ row }) => {
      const status = row.original.weight_status;
      const isDestructive =
        status === "Underweight" ||
        status === "Obese" ||
        status === "Overweight";
      return (
        <Badge variant={isDestructive ? "destructive" : "success"}>
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "height_status",
    header: "Status Tinggi Badan",
    cell: ({ row }) => {
      const status = row.original.height_status;
      const isDestructive = status === "Short";
      return (
        <Badge variant={isDestructive ? "destructive" : "success"}>
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "created_at",
    header: "Tanggal Update",
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
