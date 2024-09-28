import HomeContent from "@/components/organism/home/HomeContent";
import HomeDesktop from "@/components/organism/home/HomeDesktop";
import NavbarDesktop from "@/components/organism/navbar/Navbar";

export default function Home() {
  return (
    <>
      <div className="mx-auto px-8 max-w-[1400px]">
        <NavbarDesktop />
        <HomeDesktop />
        <HomeContent />
      </div>
    </>
  );
}
