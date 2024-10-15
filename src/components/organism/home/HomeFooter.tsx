import Image from "next/image";
import Link from "next/link";

export default function HomeFooter() {
  return (
    <>
      <div className="bg-secondary z-50">
        <div className="md:mt-36 mt-24 py-6 md:py-8 mx-auto px-4 max-w-[1400px]">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
            <div className="space-y-4">
              <Image
                src="/images/logo_full.png"
                alt="Background"
                width={1000}
                height={1000}
                className="md:w-[150px] w-[100px]"
                loading="lazy"
              />
            </div>
            <div className="space-y-4">
              <h1 className="font-bold">Fitur Kami</h1>
              <ul className="space-y-2 font-medium text-muted-foreground md:text-base text-sm">
                <li>
                  <Link
                    href={"/dashboard/tracking/growth"}
                    className="hover:text-primary hover:underline"
                  >
                    Pantau Pertumbuhan
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/dashboard/games"}
                    className="hover:text-primary hover:underline"
                  >
                    Games dan Belajar
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/dashboard/tracking/development"}
                    className="hover:text-primary hover:underline"
                  >
                    Pantau Pertumbuhan
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/dashboard/videos"}
                    className="hover:text-primary hover:underline"
                  >
                    Video Interaktif
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h1 className="font-bold">Lokasi</h1>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31678.879472969933!2d110.41488831240736!3d-7.025745306889243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708c02787187c9%3A0x29bcf60b2c20aec!2sDiponegoro%20University!5e0!3m2!1sen!2sid!4v1729006654543!5m2!1sen!2sid"
                width="400"
                height="300"
                loading="lazy"
                className="rounded-xl border shadow-md md:w-[400px] md:h-[300px] w-full"
              ></iframe>
            </div>
          </div>
          <div className="text-center mt-8 space-y-8">
            <hr />
            <p className="text-muted-foreground text-sm">
              © 2024 Tumbuh Sahabat
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
