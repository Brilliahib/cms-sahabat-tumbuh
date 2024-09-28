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

  const babies = data?.data?.length ? data.data[0] : null;

  if (isPending) {
    return <div>loading..</div>;
  }

  if (!babies) {
    return <AddBabyForm />;
  }

  return <>{children}</>;
}
