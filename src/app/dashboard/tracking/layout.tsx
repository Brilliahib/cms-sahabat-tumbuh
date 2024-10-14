"use client";

import { PropsWithChildren } from "react";
import { useSession } from "next-auth/react";
import { useGetBaby } from "@/http/babies/get-babies";
import AddBabyForm from "@/components/organism/babies/BabyForm";

export default function DashboardLayout({ children }: PropsWithChildren) {
  const { data: session, status } = useSession();

  const { data, isPending } = useGetBaby(session?.access_token as string, {
    enabled: status === "authenticated",
  });

  if (isPending) {
    return <div>loading..</div>;
  }

  if (!data || data?.data === null) {
    return <AddBabyForm />;
  }

  return <>{children}</>;
}
