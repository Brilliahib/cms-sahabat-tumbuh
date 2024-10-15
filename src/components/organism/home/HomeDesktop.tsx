import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HomeDesktop() {
  return (
    <>
      <div className="flex justify-center items-center min-h-[100vh] md:py-0 py-8 w-full">
        <div className="space-y-12">
          <div className="flex justify-center items-center text-center">
            <div className="space-y-6 md:max-w-xl">
              <h1 className="text-4xl font-bold ">
                Temukan Keceriaan dalam Setiap{" "}
                <span className="text-primary">Langkah Belajar</span>
              </h1>
              <p className="text-muted-foreground">
                Tumbuh Sahabat adalah aplikasi berbasis web yang dirancang
                khusus untuk membantu anak-anak dengan Down syndrome dalam
                memantau asupan gizi mereka dan belajar melalui permainan
                edukatif.
              </p>
              <div className="w-full">
                <Link href={"/login"}>
                  <Button>Coba Sekarang</Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center relative">
            <Image
              src={"/images/hero.png"}
              alt="Background"
              width={4000}
              height={2120}
              className="max-h-[480px] w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}
