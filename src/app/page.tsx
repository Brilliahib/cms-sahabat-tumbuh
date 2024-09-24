import HomeBanner from "@/components/organism/home/HomeBanner";
import HomeContent from "@/components/organism/home/HomeContent";
import HomeGreeting from "@/components/organism/home/HomeGreeting";
import HomeHeader from "@/components/organism/home/HomeHeader";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <HomeGreeting />
      <HomeBanner />
      <HomeContent />
    </>
  );
}
