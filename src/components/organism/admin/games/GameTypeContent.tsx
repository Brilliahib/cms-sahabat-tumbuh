"use client";

import DeleteGamesTypeDialog from "@/components/atoms/alert/AlertDeleteGameTypes";
import { typesGameTypeColumns } from "@/components/atoms/datacolumn/DataTypesGame";
import DialogCreateTypeGames from "@/components/atoms/dialog/DialogCreateTypeGame";
import { DataTable } from "@/components/molecules/datatable/DataTable";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useDeleteGamesType } from "@/http/games/delete-games-type";
import { useGetAllTypesGame } from "@/http/games/get-all-types-games";
import { GamesType } from "@/types/games/games";
import { useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function GameTypeContent() {
  const { data: session, status } = useSession();
  const [selectedGamesType, setSelectedGamesType] = useState<GamesType | null>(
    null
  );
  const [openAlertDelete, setOpenAlertDelete] = useState<boolean>(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data, isPending } = useGetAllTypesGame(
    session?.access_token as string,
    {
      enabled: status === "authenticated",
    }
  );

  const { mutate: deleteQuestionBank, isPending: isDeletePending } =
    useDeleteGamesType({
      onSuccess: () => {
        setSelectedGamesType(null);
        toast({ title: "Berhasil menghapus tipe games!", variant: "success" });
        queryClient.invalidateQueries({
          queryKey: ["type-games"],
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

  const [dialogCreateTypeGameOpen, setDialogCreateTypeGameOpen] =
    useState(false);

  const handleDialogTypeGameOpen = () => {
    setDialogCreateTypeGameOpen(true);
  };

  const deleteGamesTypeHandler = (data: GamesType) => {
    setSelectedGamesType(data);
    setOpenAlertDelete(true);
  };

  const handleDeleteGameTypes = () => {
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
        <Button onClick={handleDialogTypeGameOpen}>Tambah Tipe</Button>
        <DataTable
          columns={typesGameTypeColumns}
          data={
            data?.data.map((site) => ({
              ...site,
              deleteTypesGamesHandler: deleteGamesTypeHandler,
            })) ?? []
          }
        />
      </div>
      <DialogCreateTypeGames
        open={dialogCreateTypeGameOpen}
        setOpen={setDialogCreateTypeGameOpen}
      />
      <DeleteGamesTypeDialog
        open={openAlertDelete}
        setOpen={setOpenAlertDelete}
        confirmDelete={handleDeleteGameTypes}
        data={selectedGamesType}
        isPending={isDeletePending}
      />
    </>
  );
}
