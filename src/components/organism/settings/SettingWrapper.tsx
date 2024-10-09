import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import SettingsProfileContent from "./SettingProfileContent";
import SettingsContent from "./SettingsContent";
import SettingsBabiesContent from "./SettingBabiesContent";

export default async function SettingWrapper() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <div className="md:flex gap-12">
        <SettingsProfileContent session={session!} />
        <div className="w-full space-y-8">
          <SettingsContent session={session!} />
          <SettingsBabiesContent />
        </div>
      </div>
    </>
  );
}
