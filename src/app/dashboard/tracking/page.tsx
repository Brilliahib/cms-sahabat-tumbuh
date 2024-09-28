import NavHeader from "@/components/atoms/headers/NavHeader";
import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import TrackingContent from "@/components/organism/tracking/TrackingContent";

export default function TrackingPage() {
  return (
    <>
      <DashboardTitle title="Tracking" />
      <TrackingContent />
    </>
  );
}
