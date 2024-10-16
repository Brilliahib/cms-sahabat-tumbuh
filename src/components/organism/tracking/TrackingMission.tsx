import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

export default function TrackingMission() {
  return (
    <>
      <div>
        <h1 className="font-bold text-base">Misi Harian</h1>
      </div>
      <div className="space-y-4">
        <Card className="bg-[#ffca1f]/20 border-0">
          <CardContent className="p-6">
            <div className="flex justify-between items-center px-4">
              <h1 className="font-semibold text-sm">
                Bunda memberikan makanan sehat untuk Si Kecil
              </h1>
              <Checkbox />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#ffca1f]/20 border-0">
          <CardContent className="p-6">
            <div className="flex justify-between items-center px-4">
              <h1 className="font-semibold text-sm">
                Bunda mengajak Si Kecil untuk bermain
              </h1>
              <Checkbox />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#ffca1f]/20 border-0">
          <CardContent className="p-6">
            <div className="flex justify-between items-center px-4">
              <h1 className="font-semibold text-sm">
                Bunda memperbarui data pertumbuhan Si Kecil
              </h1>
              <Checkbox />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#ffca1f]/20 border-0">
          <CardContent className="p-6">
            <div className="flex justify-between items-center px-4">
              <h1 className="font-semibold text-sm">
                Bunda membaca artikel untuk mendukung kesehatan Si Kecil
              </h1>
              <Checkbox />
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
