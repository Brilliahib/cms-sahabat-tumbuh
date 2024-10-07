"use client";

import DialogCreateDevelopment from "@/components/atoms/dialog/DialogCreateDevelopmentRecord";
import CardTrackingDevelopment from "@/components/molecules/card/CardTrackingDevelopment";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function TrackingDevelopmentContent() {
  const [dialogDevelopmentOpen, setDialogDevelopmentOpen] = useState(false);

  const handleDevelopmentDialogOpen = () => {
    setDialogDevelopmentOpen(true);
  };
  return (
    <>
      <div className="mt-4 ">
        <Button onClick={handleDevelopmentDialogOpen}>
          Tambah Perkembangan
        </Button>
        <DialogCreateDevelopment
          open={dialogDevelopmentOpen}
          setOpen={setDialogDevelopmentOpen}
        />
      </div>
      <div className="space-y-4">
        <CardTrackingDevelopment />
      </div>
    </>
  );
}
