import { Button } from "@/components/ui/button";

export default function GamePoint() {
  return (
    <>
      <div className="bg-primary p-4 rounded-lg md:mb-8 mb-6 flex flex-col justify-center items-center relative overflow-hidden">
        <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
          <div className="w-36 h-36 bg-white/20 rounded-full" />
        </div>
        <div className="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2">
          <div className="w-36 h-36 bg-white/20 rounded-full" />
        </div>

        <div className="text-white space-y-4 relative z-10">
          <h1 className="font-bold md:text-lg text-center">
            Ayo semangat! <br />
            Poin bunda 1500pts
          </h1>
          <Button className="bg-white/20 rounded-full w-full hover:bg-white/40">
            Tukar Point
          </Button>
        </div>
      </div>
    </>
  );
}
