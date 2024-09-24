import { Search } from "lucide-react";

export default function HomeHeader() {
  return (
    <>
      <div className="flex justify-between items-center md:mb-8 mb-4">
        <div>
          <h1 className="font-semibold text-base">SahabatTumbuh</h1>
        </div>
        <div className="p-2 rounded-full bg-primary text-white">
          <Search className="h-4 w-4" />
        </div>
      </div>
    </>
  );
}
