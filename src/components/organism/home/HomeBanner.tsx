import Image from "next/image";
import Link from "next/link";

export default function HomeBanner() {
  return (
    <>
      <div className="py-8 md:hidden flex">
        <Link href={"/tracking"}>
          <Image
            src="/images/banner.png"
            alt="Banner"
            width={8000}
            height={4500}
            className="w-full max-h-[200px] object-cover rounded-xl"
          />
        </Link>
      </div>
    </>
  );
}
