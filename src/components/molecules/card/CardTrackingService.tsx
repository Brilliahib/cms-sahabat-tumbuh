import { Card, CardHeader } from "@/components/ui/card";
import {
  ChartColumnBig,
  ChartLine,
  MessageCircleMore,
  TriangleAlert,
} from "lucide-react";
import Link from "next/link";

export default function CardTrackingService() {
  return (
    <>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
        <Link href={"/dashboard/tracking/growth"}>
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
        </Link>
        <Link href={"/dashboard/tracking/development"}>
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
        </Link>
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
        <Link href={"/dashboard/tracking/indication"}>
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
        </Link>
      </div>
    </>
  );
}
