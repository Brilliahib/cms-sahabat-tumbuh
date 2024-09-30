import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import UserList from "@/components/organism/admin/users/UserList";

export default function DashboardAdminUserPage() {
  return (
    <>
      <DashboardTitle title="Pengguna" />
      <UserList />
    </>
  );
}
