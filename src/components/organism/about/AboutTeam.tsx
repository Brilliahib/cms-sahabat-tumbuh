import Image from "next/image";

export default function AboutTeam() {
  return (
    <>
      <div className="py-8 space-y-16">
        <div className="flex flex-col items-center justify-center">
          <div className="md:max-w-xl text-center space-y-2">
            <p className="font-medium">Tentang Tim</p>
            <h1 className="text-3xl font-bold text-primary">Di Balik Layar</h1>
            <p className="text-muted-foreground md:text-base text-sm">
              Di balik Tumbuh Sahabat, terdapat tim yang berdedikasi untuk
              menciptakan solusi terbaik bagi aplikasi kami.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex md:flex-row flex-col gap-8">
            <div className="space-y-4 flex flex-col items-center justify-center">
              <Image
                src="/images/brilly.png"
                alt="Background"
                width={2069}
                height={1381}
                className="w-[200px] h-[200px] rounded-full object-cover grayscale"
              />
              <h1 className="font-bold">Muhammad Ahib Ibrilli</h1>
            </div>
            <div className="space-y-4 flex flex-col items-center justify-center">
              <Image
                src="/images/khila.jpg"
                alt="Background"
                width={2069}
                height={1381}
                className="w-[200px] h-[200px] rounded-full object-cover grayscale"
              />
              <h1 className="font-bold">Akhila Zahra</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
