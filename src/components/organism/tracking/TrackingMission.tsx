import { Card, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

export default function TrackingMission() {
  return (
    <>
      <div>
        <h1 className="font-bold text-base">Misi Harian</h1>
      </div>
      <div className="space-y-4">
        <Card className="bg-[#ffca1f]/20 border-0">
          <CardHeader>
            <div className="flex justify-between items-center px-4">
              <h1 className="font-semibold text-sm">
                Bunda memberikan makanan sehat untuk Si Kecil
              </h1>
              <Checkbox />
            </div>
          </CardHeader>
        </Card>
        <Card className="bg-[#ffca1f]/20 border-0">
          <CardHeader>
            <div className="flex justify-between items-center px-4">
              <h1 className="font-semibold text-sm">
                Bunda memberikan makanan sehat untuk Si Kecil
              </h1>
              <Checkbox />
            </div>
          </CardHeader>
        </Card>
        <Card className="bg-[#ffca1f]/20 border-0">
          <CardHeader>
            <div className="flex justify-between items-center px-4">
              <h1 className="font-semibold text-sm">
                Bunda memberikan makanan sehat untuk Si Kecil
              </h1>
              <Checkbox />
            </div>
          </CardHeader>
        </Card>
        <Card className="bg-[#ffca1f]/20 border-0">
          <CardHeader>
            <div className="flex justify-between items-center px-4">
              <h1 className="font-semibold text-sm">
                Bunda memberikan makanan sehat untuk Si Kecil
              </h1>
              <Checkbox />
            </div>
          </CardHeader>
        </Card>
      </div>
    </>
  );
}
