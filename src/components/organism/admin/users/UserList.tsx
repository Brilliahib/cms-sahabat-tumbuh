"use client";

import { usersColumns } from "@/components/atoms/datacolumn/DataUsers";
import { DataTable } from "@/components/molecules/datatable/DataTable";
import { useGetAllUsers } from "@/http/users/get-all-users";
import { useSession } from "next-auth/react";

export default function UserList() {
  const { data: session, status } = useSession();
  const { data, isPending } = useGetAllUsers(session?.access_token as string, {
    enabled: status === "authenticated",
  });
  return (
    <>
      <div className="py-8">
        <DataTable columns={usersColumns} data={data?.data || []} />
      </div>
    </>
  );
}
