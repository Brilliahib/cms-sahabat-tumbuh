import TrackingDevelopmentDetail from "@/components/organism/tracking/TrackingDevelopmentDetail";

interface TrackingDevelopmentDetailProps {
  params: { id: number };
}

export default function TrackingDevelopmentDetailPage({
  params,
}: TrackingDevelopmentDetailProps) {
  return (
    <>
      <TrackingDevelopmentDetail id={params.id} />
    </>
  );
}
