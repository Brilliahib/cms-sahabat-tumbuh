"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { useGetArticle } from "@/http/article/get-all-article";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Clock } from "lucide-react";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { baseUrl } from "@/utils/app";

export default function HomeArticle() {
  const { data: session, status } = useSession();
  const { data, isPending } = useGetArticle(session?.access_token as string, {
    enabled: status === "authenticated",
  });
  return (
    <>
      <div className="space-y-4">
        <div className="w-full flex justify-between">
          <h1 className="font-semibold text-base">Artikel</h1>
          <Link
            href={"/article"}
            className="font-semibold text-primary md:text-base text-sm hover:underline"
          >
            Lihat semua
          </Link>
        </div>
        <div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            {data?.data.map((article) => (
              <Link key={article.id} href={`/article/${article.id}`}>
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
                      {article.content}
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
        </div>
      </div>
    </>
  );
}
