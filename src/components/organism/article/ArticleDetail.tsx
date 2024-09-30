"use client";

import { useGetDetailArticle } from "@/http/article/get-detail-article";
import { baseUrl } from "@/utils/app";
import { format } from "date-fns";
import { useSession } from "next-auth/react";
import Image from "next/image";

interface ArticleDetailProps {
  id: number;
}

export default function ArticleDetail({ id }: ArticleDetailProps) {
  const session = useSession();
  const { data, isPending } = useGetDetailArticle(
    {
      token: session.data?.access_token as string,
      id,
    },
    { enabled: session.status === "authenticated" }
  );

  const createdAt = data?.data.created_at
    ? format(new Date(data.data.created_at), "dd MMMM yyyy")
    : "";

  return (
    <>
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h1 className="font-paytone md:text-4xl text-2xl">
            {data?.data.title}
          </h1>
          <p className="text-muted-foreground">{createdAt}</p>
        </div>
        <div className="flex justify-center">
          <Image
            alt={data?.data.title ?? ""}
            src={`${baseUrl}/${data?.data.image}`}
            width={1000}
            height={1000}
            className="max-h-[600px] object-cover rounded-xl"
          />
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: data?.data.content ?? "" }}
          className="prose text-justify"
        />
      </div>
    </>
  );
}
