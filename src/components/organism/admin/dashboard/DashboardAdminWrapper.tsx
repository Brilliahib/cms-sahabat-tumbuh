import CardArticleCount from "@/components/molecules/card/CardArticleCount";
import CardArticleTypeCount from "@/components/molecules/card/CardArticleTypeCount";
import CardGamesCount from "@/components/molecules/card/CardGamesCount";
import CardGamesTypeCount from "@/components/molecules/card/CardGamesTypeCount";
import CardListGames from "@/components/molecules/card/CardListGames";
import CardListUser from "@/components/molecules/card/CardListUser";

export default function DashboardAdminWrapper() {
  return (
    <>
      <div className="grid md:grid-cols-4 grid-cols-1 md:gap-6 gap-4 py-8">
        <CardArticleCount />
        <CardArticleTypeCount />
        <CardGamesCount />
        <CardGamesTypeCount />
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-4">
        <CardListUser />
        <CardListGames />
      </div>
    </>
  );
}
