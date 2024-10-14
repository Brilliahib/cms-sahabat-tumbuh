import CardDevelopmentExample from "@/components/molecules/card/CardDevelopmentExample";
import CardGrowthExample from "@/components/molecules/card/CardGrowthExample";
import CardScoreGames from "@/components/molecules/card/CardScoreGames";
import TrackingGreetingCard from "@/components/molecules/card/CardTrackingGreeting";

export default function DashboardWrapper() {
  return (
    <>
      <div className="mt-4 md:space-y-6 space-y-4">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          <TrackingGreetingCard />
          <CardGrowthExample />
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
          <CardScoreGames />
          <CardScoreGames />
          <CardScoreGames />
        </div>
      </div>
    </>
  );
}
