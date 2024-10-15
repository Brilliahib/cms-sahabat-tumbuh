import HomeContent from "@/components/organism/home/HomeContent";
import HomeDesktop from "@/components/organism/home/HomeDesktop";
import NavbarDesktop from "@/components/organism/navbar/Navbar";

export default function Home() {
  return (
    <>
      <NavbarDesktop />
      <div className="mx-auto px-4 max-w-[1400px]">
        <HomeDesktop />
      </div>
      <HomeContent />
    </>
  );
}
