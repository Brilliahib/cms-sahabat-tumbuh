import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
      <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
        <Link href={"/dashboard/tracking/growth"}>
          <Card className="shadow-md">
            <CardContent className="p-6">
              <div className="text-primary">
                <ChartLine className="h-8 w-8" />
              </div>
              <div>
                <h1>Pantau Pertumbuhan</h1>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link href={"/dashboard/tracking/development"}>
          <Card className="shadow-md">
            <CardContent className="p-6">
              <div className="text-primary">
                <ChartColumnBig className="h-8 w-8" />
              </div>
              <div>
                <h1>Pantau Perkembangan</h1>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link href={"/dashboard/tracking/indication"}>
          <Card className="shadow-md">
            <CardContent className="p-6">
              <div className="text-primary">
                <TriangleAlert className="h-8 w-8" />
              </div>
              <div>
                <h1>Kenali Gejala</h1>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </>
  );
}
