import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { generateFallbackFromName } from "@/utils/misc";
import { Session } from "next-auth";

interface SettingsProfileContentProps {
  session: Session;
}

export default function SettingsProfileContent({
  session,
}: SettingsProfileContentProps) {
  return (
    <>
      <div className="mt-4">
        <Avatar className="aspect-square h-full max-h-32 max-w-32 md:max-h-64 w-full md:max-w-64 border border-muted">
          <AvatarFallback className="text-3xl font-bold md:text-6xl">
            {generateFallbackFromName(session.user.name)}
          </AvatarFallback>
        </Avatar>
      </div>
    </>
  );
}
