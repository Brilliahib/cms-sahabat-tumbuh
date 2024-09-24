import Link from "next/link";
import CardArticle from "../card/CardArticle";

export default function HomeArticle() {
  return (
    <>
      <div className="space-y-4">
        <div className="w-full flex justify-between">
          <h1 className="font-semibold text-base">Artikel</h1>
          <Link
            href={"/article"}
            className="font-semibold text-primary text-base hover:underline"
          >
            Lihat semua
          </Link>
        </div>
        <div>
          <CardArticle />
        </div>
      </div>
    </>
  );
}
