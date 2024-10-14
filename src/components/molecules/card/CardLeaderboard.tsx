"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetLeaderboard } from "@/http/games/get-leaderboard";
import { useGetRankUser } from "@/http/users/get-rank-user";
import { useSession } from "next-auth/react";

export default function CardLeaderboard() {
  const { data: session, status } = useSession();
  const { data, isPending } = useGetLeaderboard(
    session?.access_token as string,
    {
      enabled: status === "authenticated",
    }
  );
  const { data: rank } = useGetRankUser(session?.access_token as string, {
    enabled: status === "authenticated",
  });
  return (
    <>
      <Card className="shadow-lg border-0 rounded-xl">
        <CardContent className="p-6">
          <div className="space-y-4">
            <div>
              <p className="font-bold text-lg">Peringkat Score Games</p>
            </div>
            <div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Rank</TableHead>
                    <TableHead>Nama</TableHead>
                    <TableHead>Total Score</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data?.data.map((rank, index) => (
                    <TableRow key={rank.id}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{rank?.name}</TableCell>
                      <TableCell>{rank?.total_score}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                {rank && (
                  <TableFooter>
                    <TableRow key={rank?.data.id}>
                      <TableCell className="font-bold">
                        {rank?.data.rank}
                      </TableCell>
                      <TableCell className="font-bold">Anda</TableCell>
                      <TableCell className="font-bold">
                        {rank?.data.total_score}
                      </TableCell>
                    </TableRow>
                  </TableFooter>
                )}
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
