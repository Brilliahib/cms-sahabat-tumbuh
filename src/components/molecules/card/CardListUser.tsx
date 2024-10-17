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
import { useGetAllUsers } from "@/http/users/get-all-users";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function CardListUser() {
  const { data: session, status } = useSession();
  const { data, isPending } = useGetAllUsers(session?.access_token as string, {
    enabled: status === "authenticated",
  });
  return (
    <>
      <Card className="shadow-md">
        <CardContent className="p-6">
          <div className="space-y-2">
            <div className="flex justify-between mb-4">
              <h1 className="font-bold">Daftar Pengguna</h1>
              <div>
                <Link
                  href={"/dashboard/admin/users"}
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
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data?.data.slice(0, 4).map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>{user?.name}</TableCell>
                      <TableCell>{user?.email}</TableCell>
                      <TableCell>{user?.role}</TableCell>
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
