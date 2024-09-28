import NavHeader from "@/components/atoms/headers/NavHeader";
import { useGetBaby } from "@/http/babies/get-babies";
import { useSession } from "next-auth/react";

export default function BabiesNewPage() {
  return (
    <>
      <NavHeader title="Tambah Data" />
    </>
  );
}
