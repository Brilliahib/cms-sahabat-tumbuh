"use client";

import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import AddBabyForm from "@/components/organism/babies/BabyForm";
import DashboardWrapper from "@/components/organism/dashboard/DashboardWrapper";
import { useGetBaby } from "@/http/babies/get-babies";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    } else if (session?.user?.role === "admin") {
      router.push("/dashboard/admin");
    }
  }, [session, status, router]);

  const { data, isPending } = useGetBaby(session?.access_token as string, {
    enabled: status === "authenticated",
  });

  if (status === "loading") {
    return <p>Loading...</p>;
  }

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
