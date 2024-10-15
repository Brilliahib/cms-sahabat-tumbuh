import VideoDetail from "@/components/organism/videos/VideoDetail";

interface VideoDetailProps {
  params: { id: string };
}

export default function DashboardVideoDetail({ params }: VideoDetailProps) {
  const videoId = parseInt(params.id, 10);

  if (isNaN(videoId)) {
    return <p>Invalid video ID</p>;
  }

  return (
    <>
      <VideoDetail id={videoId} />
    </>
  );
}
