import HomeArticle from "@/components/molecules/home/HomeArticle";
import HomeGames from "@/components/molecules/home/HomeGames";

export default function HomeContent() {
  return (
    <>
      <div className="md:space-y-12 space-y-8">
        <HomeGames />
        <HomeArticle />
      </div>
    </>
  );
}
