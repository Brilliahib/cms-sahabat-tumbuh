import Image from "next/image";

export default function HomeBanner() {
  return (
    <>
      <div className="py-8">
        <Image
          src="/images/asset-home.jpg"
          alt="Banner"
          width={1600}
          height={900}
          className="w-full max-h-[200px] object-cover rounded-xl"
        />
      </div>
    </>
  );
}
