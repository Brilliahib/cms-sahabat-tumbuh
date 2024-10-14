import { Card, CardContent } from "@/components/ui/card";
import CardTrackingDevelopment from "./CardTrackingDevelopment";

export default function CardDevelopmentExample() {
  return (
    <div className="md:space-y-8 space-y-6">
      <Card className="shadow-md h-full">
        <CardContent className="p-6">
          <div className="mb-4">
            <h1 className="font-bold text-md">Tracking Perkembangan</h1>
          </div>
          <div>
            <CardTrackingDevelopment />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
