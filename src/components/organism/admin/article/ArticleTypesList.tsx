"use client";

import { typesArticleColumns } from "@/components/atoms/datacolumn/DataTypesArticle";
import DialogCreateTypeArticles from "@/components/atoms/dialog/DialogCreateTypeArticle";
import { DataTable } from "@/components/molecules/datatable/DataTable";
import { Button } from "@/components/ui/button";
import { useGetAllTypesArticle } from "@/http/article/get-all-types-article";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function ArticleTypeList() {
  const { data: session, status } = useSession();
  const { data, isPending } = useGetAllTypesArticle(
    session?.access_token as string,
    {
      enabled: status === "authenticated",
    }
  );

  const [dialogCreateTypeArticleOpen, setDialogCreateTypeArticleOpen] =
    useState(false);

  const handleDialogTypeArticleOpen = () => {
    setDialogCreateTypeArticleOpen(true);
  };
  return (
    <>
      <div className="py-8 space-y-8">
        <Button onClick={handleDialogTypeArticleOpen}>Tambah Tipe</Button>
        <DataTable columns={typesArticleColumns} data={data?.data || []} />
      </div>
      <DialogCreateTypeArticles
        open={dialogCreateTypeArticleOpen}
        setOpen={setDialogCreateTypeArticleOpen}
      />
    </>
  );
}
