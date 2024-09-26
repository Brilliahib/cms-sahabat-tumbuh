import HomeBanner from "@/components/organism/home/HomeBanner";
import HomeContent from "@/components/organism/home/HomeContent";
import HomeDesktop from "@/components/organism/home/HomeDesktop";
import HomeGreeting from "@/components/organism/home/HomeGreeting";
import HomeHeader from "@/components/organism/home/HomeHeader";

export default function Home() {
  return (
    <>
      <HomeDesktop />
      <HomeHeader />
      <HomeGreeting />
      <HomeBanner />
      <HomeContent />
    </>
  );
}
