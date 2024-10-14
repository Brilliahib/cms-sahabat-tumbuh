import { Card, CardContent } from "@/components/ui/card";

export default function CardScoreGames() {
  return (
    <>
      <Card className="shadow-md">
        <CardContent className="p-6">
          <div className="space-y-2">
            <p className="text-muted-foreground text-md">Score Games</p>
            <h1 className="text-3xl font-bold">80</h1>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
