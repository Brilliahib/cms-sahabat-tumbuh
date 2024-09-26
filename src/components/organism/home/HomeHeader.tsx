import { Search } from "lucide-react";
import Image from "next/image";

export default function HomeHeader() {
  return (
    <>
      <div className="md:hidden flex justify-between items-center md:mb-8 mb-4">
        <div>
          <Image
            src={"/images/logo_full.png"}
            alt="Tumbuh Sahabat"
            width={1155}
            height={404}
            className="max-w-[100px]"
          />
        </div>
        <div className="p-2 rounded-full bg-primary text-white">
          <Search className="h-4 w-4" />
        </div>
      </div>
    </>
  );
}
