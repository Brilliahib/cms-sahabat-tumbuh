import HomeFooter from "../home/HomeFooter";
import NavbarDesktop from "../navbar/Navbar";
import AboutTeam from "./AboutTeam";

export default function AboutContent() {
  return (
    <>
      <NavbarDesktop />
      <div className="mx-auto px-4 max-w-[1400px]">
        <AboutTeam />
      </div>
      <HomeFooter />
    </>
  );
}
