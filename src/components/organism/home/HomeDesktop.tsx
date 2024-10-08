import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HomeDesktop() {
  return (
    <>
      <div className="flex items-center min-h-[80vh] md:py-0 py-8">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
          <div className="flex items-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold">
                Temukan Keceriaan dalam Setiap{" "}
                <span className="text-primary">Langkah Belajar</span>
              </h1>
              <p className="text-muted-foreground">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Placeat aliquid voluptas, facilis exercitationem iusto maiores
                assumenda molestias qui! Ipsum aperiam laudantium temporibus
                doloribus deleniti, ex enim vel eius ipsa hic.
              </p>
              <div className="w-full">
                <Link href={"/login"}>
                  <Button>Coba Sekarang</Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src={"/images/background.jpg"}
              alt="Bakcground"
              width={2069}
              height={1381}
              className="w-[400px] md:h-[400px] h-[320px] object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}
