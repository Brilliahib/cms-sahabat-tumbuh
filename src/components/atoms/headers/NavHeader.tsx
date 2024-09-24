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
      <div className="flex justify-between items-center bg-white px-0">
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
