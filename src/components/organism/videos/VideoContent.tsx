import Image from "next/image";
import Link from "next/link";

export default function VideoContent() {
  const data = [
    {
      id: 1,
      title: "Bermain di Hari Hujan",
      cover:
        "https://i.ytimg.com/vi/67Kfp2y_Emo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCuaoVYgMAZxqpI7FbyaQS-_OalYg",
      link: "https://www.youtube.com/embed/67Kfp2y_Emo?si=q_tfwmoZL4Rj2x3q",
    },
    {
      id: 2,
      title: "Kalau Kau Suka Hati Tepuk Tangan",
      cover:
        "https://i.ytimg.com/vi/IWcULPjXcnM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBEYXpT0rzMyxagRubd55xWK12jOg",
      link: "https://www.youtube.com/embed/IWcULPjXcnM?si=GBmSz50fZckw2avc",
    },
    {
      id: 3,
      title: "Cicak Cicak di Dinding",
      cover:
        "https://i.ytimg.com/vi/zRycnPpwzpE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDSyb98gssRPmArS6KqeItt50YjEw",
      link: "https://www.youtube.com/embed/zRycnPpwzpE?si=-UeNXVPFkdp_OZuo",
    },
    {
      id: 4,
      title: "Naik Delman Istimewa",
      cover:
        "https://i.ytimg.com/vi/ZFf6Uu0t7PY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBjiNh6s6N_nl6Roq2ZuCEjf2tDYw",
      link: "https://www.youtube.com/embed/ZFf6Uu0t7PY?si=GJa9xGTIBP8qZFrk",
    },
    {
      id: 5,
      title: "Kucingku Tiga Gemuk",
      cover:
        "https://i.ytimg.com/vi/Yj8vqxRyJpQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDTnYIUOiksKgGdX5tYYyoiz6YVmw",
      link: "https://www.youtube.com/embed/Yj8vqxRyJpQ?si=V6bep4FtaatnNa8Z",
    },
    {
      id: 6,
      title: "Pok Ame Ame Belalang Kupu - Kupu",
      cover:
        "https://i.ytimg.com/vi/C6-YwCkAziY/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDny7fKsKArpftt2XqX0DJk50aFAg",
      link: "https://www.youtube.com/embed/C6-YwCkAziY?si=yCcHP5GBGbSBuGXr",
    },
  ];

  return (
    <>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-8 py-6">
        {data.map((video) => (
          <Link
            href={`/dashboard/videos/${video.id}`}
            key={video.id}
            className="hover:underline"
          >
            <div className="space-y-2">
              <Image
                src={video.cover}
                alt={video.title}
                width={1000}
                height={1000}
                className="w-full max-h-[300px] object-cover rounded-xl"
              />
              <h1 className="font-bold line-clamp-2">{video.title}</h1>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
