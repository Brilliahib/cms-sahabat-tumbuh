import HomeFooter from "../home/HomeFooter";
import NavbarDesktop from "../navbar/Navbar";
import ContactHeading from "./ContactHeading";

export default function ContactContent() {
  return (
    <>
      <NavbarDesktop />
      <div className="mx-auto px-4 max-w-[1400px]">
        <ContactHeading />
      </div>
      <HomeFooter />
    </>
  );
}
