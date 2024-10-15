"use client";

import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import AddBabyForm from "@/components/organism/babies/BabyForm";
import DashboardWrapper from "@/components/organism/dashboard/DashboardWrapper";
import { useGetBaby } from "@/http/babies/get-babies";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (!session) {
    router.push("/login");
    return null;
  }

  if (session.user.role === "admin") {
    router.push("/dashboard/admin");
    return null;
  }

  const { data, isPending } = useGetBaby(session?.access_token as string, {
    enabled: status === "authenticated",
  });

  if (!data || data?.data === null) {
    return <AddBabyForm />;
  }
  return (
    <>
      <DashboardTitle title="Dashboard" />
      <DashboardWrapper />
    </>
  );
}
