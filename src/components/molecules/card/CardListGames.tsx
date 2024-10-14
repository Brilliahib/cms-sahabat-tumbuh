"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetGames } from "@/http/games/get-all-games";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function CardListGames() {
  const { data: session, status } = useSession();
  const { data, isPending } = useGetGames(session?.access_token as string, {
    enabled: status === "authenticated",
  });
  return (
    <>
      <Card className="shadow-md">
        <CardContent className="p-6">
          <div className="space-y-2">
            <div className="flex justify-between mb-4">
              <h1 className="font-bold">Daftar Games</h1>
              <div>
                <Link
                  href={"/dashboard/admin/games"}
                  className="text-primary hover:underline font-bold text-sm"
                >
                  Lihat semua
                </Link>
              </div>
            </div>
            <div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nama</TableHead>
                    <TableHead>Tanggal Rilis</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data?.data.map((games) => (
                    <TableRow key={games.id}>
                      <TableCell>{games.title}</TableCell>
                      <TableCell>
                        {format(
                          new Date(games.created_at),
                          "EEEE, d MMMM yyyy",
                          {
                            locale: id,
                          }
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
