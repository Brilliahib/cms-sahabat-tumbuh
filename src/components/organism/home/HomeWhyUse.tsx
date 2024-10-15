import Image from "next/image";

export default function HomeWhyUse() {
  return (
    <>
      <div className="md:py-48 py-24">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 items-center">
          <div className="space-y-4">
            <h1 className="font-bold md:text-3xl text-2xl">
              Tumbuh Sahabat Hadir Untuk Indonesia
            </h1>
            <p className="text-muted-foreground md:flex hidden leading-7">
              Di Indonesia, anak-anak dengan Down Syndrome sering menghadapi
              tantangan perkembangan yang kompleks. Kondisi genetik ini
              memengaruhi banyak aspek dalam kehidupan mereka, mulai dari
              perkembangan fisik, kemampuan bicara dan bahasa, hingga
              kemandirian dan sosialisasi. Sayangnya, pemahaman yang terbatas
              dan kurangnya akses terhadap fasilitas pendukung sering membuat
              orang tua merasa kesulitan dalam membantu anak mereka berkembang
              secara optimal.
            </p>
            <p className="text-muted-foreground leading-7">
              Tumbuh Sahabat hadir sebagai aplikasi yang dirancang khusus untuk
              mendukung orang tua dan pengasuh dalam memantau perkembangan dan
              memberikan stimulasi yang tepat bagi anak-anak dengan Down
              Syndrome.
            </p>
          </div>
          <div>
            <div className="flex md:flex-row md:gap-8 gap-4">
              <div>
                <Image
                  src="/images/people-1.jpg"
                  alt="Background"
                  width={2069}
                  height={1381}
                  className="md:min-h-[480px] min-h-full object-cover grayscale"
                />
              </div>
              <div className="flex md:flex-col flex-col md:gap-8 gap-4">
                <Image
                  src="/images/background.jpg"
                  alt="Background"
                  width={2069}
                  height={1381}
                  className="md:h-full object-cover grayscale"
                />
                <Image
                  src="/images/people-2.jpg"
                  alt="Background"
                  width={2069}
                  height={1381}
                  className="md:h-full object-cover grayscale"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
