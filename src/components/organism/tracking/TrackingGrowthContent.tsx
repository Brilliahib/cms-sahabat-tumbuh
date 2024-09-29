"use client";

import DialogCreateGrowthRecord from "@/components/atoms/dialog/DialogCreateGrowthRecord";
import CardTrackingGrowth from "@/components/molecules/card/CardTrackingGrowth";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function TrackingGrowthContent() {
  const [dialogGrowthOpen, setDialogGrowthOpen] = useState(false);

  const handleGrowthDialogOpen = () => {
    setDialogGrowthOpen(true);
  };

  return (
    <>
      <div className="space-y-4">
        <Button onClick={handleGrowthDialogOpen}>Tambahkan Data</Button>
        <CardTrackingGrowth />
      </div>
      <DialogCreateGrowthRecord
        open={dialogGrowthOpen}
        setOpen={setDialogGrowthOpen}
      />
    </>
  );
}
