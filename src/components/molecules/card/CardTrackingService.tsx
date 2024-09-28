import { Card, CardHeader } from "@/components/ui/card";
import {
  ChartColumnBig,
  ChartLine,
  MessageCircleMore,
  TriangleAlert,
} from "lucide-react";

export default function CardTrackingService() {
  return (
    <>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <div className="text-primary">
              <ChartLine className="h-8 w-8" />
            </div>
            <div>
              <h1>Pantau Pertumbuhan</h1>
            </div>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <div className="text-primary">
              <ChartColumnBig className="h-8 w-8" />
            </div>
            <div>
              <h1>Pantau Perkembangan</h1>
            </div>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <div className="text-primary">
              <MessageCircleMore className="h-8 w-8" />
            </div>
            <div>
              <h1>Tanyakan Ahli</h1>
            </div>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <div className="text-primary">
              <TriangleAlert className="h-8 w-8" />
            </div>
            <div>
              <h1>Kenali Gejala</h1>
            </div>
          </CardHeader>
        </Card>
      </div>
    </>
  );
}
