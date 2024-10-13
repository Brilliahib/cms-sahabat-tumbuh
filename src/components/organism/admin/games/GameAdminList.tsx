"use client";

import DeleteGameDialog from "@/components/atoms/alert/AlertDeleteGame";
import { gameColumns } from "@/components/atoms/datacolumn/DataGameList";
import { DataTable } from "@/components/molecules/datatable/DataTable";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useDeleteGames } from "@/http/games/delete-games";
import { useGetGames } from "@/http/games/get-all-games";
import { Games } from "@/types/games/games";
import { useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function GameAdminList() {
  const { data: session, status } = useSession();
  const [selectedGamesType, setSelectedGamesType] = useState<Games | null>(
    null
  );
  const [openAlertDelete, setOpenAlertDelete] = useState<boolean>(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data, isPending } = useGetGames(session?.access_token as string, {
    enabled: status === "authenticated",
  });

  const { mutate: deleteQuestionBank, isPending: isDeletePending } =
    useDeleteGames({
      onSuccess: () => {
        setSelectedGamesType(null);
        toast({ title: "Berhasil menghapus tipe games!", variant: "success" });
        queryClient.invalidateQueries({
          queryKey: ["games-list"],
        });
      },
      onError: (error) => {
        toast({
          title: "Gagal menghapus tipe games!",
          variant: "destructive",
          description: error.response?.data.message,
        });
      },
    });

  const deleteGamesHandler = (data: Games) => {
    setSelectedGamesType(data);
    setOpenAlertDelete(true);
  };

  const handleDeleteGame = () => {
    if (selectedGamesType?.id) {
      deleteQuestionBank({
        id: selectedGamesType.id,
        token: session?.access_token as string,
      });
    }
  };
  return (
    <>
      <div className="py-8 space-y-8">
        <Link href={"/dashboard/admin/games/create"}>
          <Button>Tambah Games</Button>
        </Link>
        <DataTable
          columns={gameColumns}
          data={
            data?.data.map((site) => ({
              ...site,
              deleteGamesHandler: deleteGamesHandler,
            })) ?? []
          }
        />
      </div>
      <DeleteGameDialog
        open={openAlertDelete}
        setOpen={setOpenAlertDelete}
        confirmDelete={handleDeleteGame}
        data={selectedGamesType}
        isPending={isDeletePending}
      />
    </>
  );
}
