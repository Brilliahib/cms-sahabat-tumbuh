import { Mail, MapPin } from "lucide-react";

export default function ContactHeading() {
  return (
    <>
      <div className="py-8 space-y-16">
        <div className="flex flex-col items-center justify-center">
          <div className="md:max-w-xl text-center space-y-2">
            <p className="font-medium">Kontak Kami</p>
            <h1 className="text-3xl font-bold text-primary">
              Kami Terbuka Untuk Anda
            </h1>
            <p className="text-muted-foreground md:text-base text-sm">
              Kami siap mendengar masukan atau mendiskusikan ide-ide baru dengan
              Anda. Jangan ragu untuk menghubungi kami kapan saja.
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-12 justify-center">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="bg-secondary p-4 text-center w-fit rounded-xl">
              <MapPin className="w-12 h-12 text-primary" />
            </div>
            <h1>Semarang, Indonesia</h1>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="bg-secondary p-4 text-center w-fit rounded-xl">
              <Mail className="w-12 h-12 text-primary" />
            </div>
            <h1>tumbuhsahabat@gmail.com</h1>
          </div>
        </div>
      </div>
    </>
  );
}
