import LoginForm from "@/components/organism/auth/LoginForm";
import { defineMetadata } from "@/lib/metadata";

export const metadata = defineMetadata({
  title: "Login",
});

export default function LoginPage() {
  return (
    <main className="h-[70vh]">
      <div className="h-full w-full items-center">
        <LoginForm />
      </div>
    </main>
  );
}
