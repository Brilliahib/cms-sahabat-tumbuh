import { BookOpen, ChartLine, ChartNoAxesCombined, Video } from "lucide-react";

export default function HomeFeature() {
  return (
    <>
      <div className="py-8 space-y-24">
        <div className="flex flex-col items-center justify-center">
          <div className="md:max-w-xl text-center space-y-2">
            <p className="font-medium">Fitur Utama</p>
            <h1 className="text-3xl font-bold text-primary">
              Membantu Anak Anda
            </h1>
            <p className="text-muted-foreground md:text-base text-sm">
              Tumbuh sahabat menyediakan berbagai fitur untuk memantau
              pertumbuhan melalui sebuah grafik dan permainan interaktif guna
              perkembangan anak.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 grid-cols-1 md:gap-8 gap-6">
          {/* Pemantauan Pertumbuhan */}
          <div className="space-y-4">
            <div className="p-4 bg-secondary w-fit rounded-xl">
              <ChartNoAxesCombined className="h-8 w-8 text-primary" />
            </div>
            <h1 className="font-bold text-xl">Pemantauan Pertumbuhan</h1>
            <p className="text-muted-foreground">
              Menyediakan pemantauan pertumbuhan menggunakan grafik untuk
              melihat secara detail pertumbuhan anak.
            </p>
          </div>

          {/* Video Interaktif */}
          <div className="space-y-4">
            <div className="p-4 bg-secondary w-fit rounded-xl">
              <Video className="h-8 w-8 text-primary" />
            </div>
            <h1 className="font-bold text-xl">Video Interaktif</h1>
            <p className="text-muted-foreground">
              Menyediakan video interaktif yang dirancang khusus untuk
              meningkatkan keterampilan dan kreativitas anak.
            </p>
          </div>

          {/* Pantau Perkembangan */}
          <div className="space-y-4">
            <div className="p-4 bg-secondary w-fit rounded-xl">
              <ChartLine className="h-8 w-8 text-primary" />
            </div>
            <h1 className="font-bold text-xl">Pantau Perkembangan</h1>
            <p className="text-muted-foreground">
              Melacak perkembangan anak secara menyeluruh, mulai dari
              keterampilan motorik hingga kemampuan sosial.
            </p>
          </div>

          {/* Pembelajaran Menarik */}
          <div className="space-y-4">
            <div className="p-4 bg-secondary w-fit rounded-xl">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
            <h1 className="font-bold text-xl">Pembelajaran Menarik</h1>
            <p className="text-muted-foreground">
              Menyediakan konten pembelajaran yang menarik untuk membantu anak
              belajar sambil bermain.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
