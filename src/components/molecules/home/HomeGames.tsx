import Link from "next/link";
import CardGames from "../card/CardGames";

export default function HomeGames() {
  return (
    <>
      <div className="space-y-4">
        <div className="w-full flex justify-between">
          <h1 className="font-semibold text-base">Edukasi Games</h1>
          <Link
            href={"/games"}
            className="font-semibold text-primary md:text-base text-sm hover:underline"
          >
            Lihat semua
          </Link>
        </div>
        <div>
          <CardGames />
        </div>
      </div>
    </>
  );
}
