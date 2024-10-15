import HomeCta from "./HomeCta";
import HomeFeature from "./HomeFeature";
import HomeFooter from "./HomeFooter";
import HomeWhyUse from "./HomeWhyUse";

export default function HomeContent() {
  return (
    <>
      <div className="mx-auto px-4 max-w-[1400px]">
        <HomeFeature />
        <HomeWhyUse />
        <HomeCta />
      </div>
      <HomeFooter />
    </>
  );
}
