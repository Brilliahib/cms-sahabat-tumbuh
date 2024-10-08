"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2 } from "lucide-react";
import { useRouter } from "next/navigation";

interface NavHeaderProps {
  title: string;
}

export default function NavHeader({ title }: NavHeaderProps) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <>
      <div className="md:hidden flex justify-between items-center bg-white px-0 md:mb-8 mb-6 sticky top-0 z-50 md:py-3 py-2">
        <Button
          onClick={handleBack}
          className="bg-transparent p-0 text-black hover:bg-transparent"
        >
          <ArrowLeft />
        </Button>
        <h1 className="font-bold text-base">{title}</h1>
        <Share2 />
      </div>
    </>
  );
}
