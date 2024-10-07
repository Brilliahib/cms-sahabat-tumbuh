"use client";

import DialogCalculationGuide from "@/components/atoms/dialog/DialogCalculationGuide";
import DialogCreateGrowthRecord from "@/components/atoms/dialog/DialogCreateGrowthRecord";
import CardTrackingGrowth from "@/components/molecules/card/CardTrackingGrowth";
import { Button } from "@/components/ui/button";
import { CircleHelp } from "lucide-react";
import { useState } from "react";

export default function TrackingGrowthContent() {
  const [dialogGrowthOpen, setDialogGrowthOpen] = useState(false);
  const [dialogCalculationOpen, setDialogCalculationOpen] = useState(false);

  const handleGrowthDialogOpen = () => {
    setDialogGrowthOpen(true);
  };

  const handleCalculationDialogOpen = () => {
    setDialogCalculationOpen(true);
  };

  return (
    <>
      <div className="relative">
        <div className="space-y-6">
          <Button onClick={handleGrowthDialogOpen}>Tambahkan Data</Button>
          <CardTrackingGrowth />
        </div>
        <Button
          className="fixed md:right-8 bottom-4 right-4 border py-6 font-bold gap-2 bg-[#FEC91F] hover:bg-[#FEC91F] shadow-xl text-white"
          onClick={handleCalculationDialogOpen}
        >
          <CircleHelp />
          Panduan Perhitungan
        </Button>
        <DialogCreateGrowthRecord
          open={dialogGrowthOpen}
          setOpen={setDialogGrowthOpen}
        />
        <DialogCalculationGuide
          open={dialogCalculationOpen}
          setOpen={setDialogCalculationOpen}
        />
      </div>
    </>
  );
}
