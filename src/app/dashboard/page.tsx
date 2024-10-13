"use client";

import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import DashboardWrapper from "@/components/organism/dashboard/DashboardWrapper";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    router.push("/login");
    return null;
  }

  if (session.user.role === "admin") {
    router.push("/dashboard/admin");
    return null;
  }
  return (
    <>
      <DashboardTitle title="Dashboard" />
      <DashboardWrapper />
    </>
  );
}
