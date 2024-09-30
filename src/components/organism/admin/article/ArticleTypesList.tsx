"use client";

import { typesArticleColumns } from "@/components/atoms/datacolumn/DataTypesArticle";
import { DataTable } from "@/components/molecules/datatable/DataTable";
import { useGetAllTypesArticle } from "@/http/article/get-all-types-article";
import { useSession } from "next-auth/react";

export default function ArticleTypeList() {
  const { data: session, status } = useSession();
  const { data, isPending } = useGetAllTypesArticle(
    session?.access_token as string,
    {
      enabled: status === "authenticated",
    }
  );
  return (
    <>
      <div className="py-8">
        <DataTable columns={typesArticleColumns} data={data?.data || []} />
      </div>
    </>
  );
}
