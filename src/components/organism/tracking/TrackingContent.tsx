import TrackingGreetingCard from "@/components/molecules/card/CardTrackingGreeting";
import CardTrackingService from "@/components/molecules/card/CardTrackingService";
import TrackingMission from "./TrackingMission";

export default function TrackingContent() {
  return (
    <>
      <div className="space-y-6">
        <TrackingGreetingCard />
        <CardTrackingService />
        <TrackingMission />
      </div>
    </>
  );
}
