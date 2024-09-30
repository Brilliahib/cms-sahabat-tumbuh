"use client";

import { SearchInput } from "@/components/atoms/search/SearchInput";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetArticle } from "@/http/article/get-all-article";
import { baseUrl } from "@/utils/app";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { Clock } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ArticleList() {
  const { data: session, status } = useSession();
  const { data, isPending } = useGetArticle(session?.access_token as string, {
    enabled: status === "authenticated",
  });

  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = data?.data.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <SearchInput
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Cari Artikel..."
      />
      <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
        {isPending
          ? Array.from({ length: 3 }).map((_, index) => (
              <Card key={index} className="border-0 shadow-none p-0">
                <CardHeader className="p-0">
                  <Skeleton className="w-full h-[200px] rounded-xl" />
                </CardHeader>
                <CardContent className="space-y-3 mt-4 p-0">
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-4 w-full line-clamp-2" />
                  <CardFooter className="p-0 text-muted-foreground text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <Skeleton className="h-4 w-32" />
                    </div>
                  </CardFooter>
                </CardContent>
              </Card>
            ))
          : filteredArticles?.map((article) => (
              <Link key={article.id} href={`/dashboard/articles/${article.id}`}>
                <Card className="border-0 shadow-none p-0">
                  <CardHeader className="p-0">
                    <Image
                      alt={article.title}
                      src={`${baseUrl}/${article.image}`}
                      width={1000}
                      height={1000}
                      className="w-full h-[200px] object-cover rounded-xl"
                    />
                  </CardHeader>
                  <CardContent className="space-y-3 mt-4 p-0">
                    <CardTitle className="text-md font-bold">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      <div
                        dangerouslySetInnerHTML={{ __html: article.content }}
                        className="prose"
                      />
                    </CardDescription>
                    <CardFooter className="p-0 text-muted-foreground text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {format(article.created_at, "EEEE, d MMMM yyyy", {
                          locale: id,
                        })}
                      </div>
                    </CardFooter>
                  </CardContent>
                </Card>
              </Link>
            ))}
      </div>
    </>
  );
}
