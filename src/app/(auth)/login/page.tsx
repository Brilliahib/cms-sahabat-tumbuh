import LoginForm from "@/components/organism/auth/LoginForm";
import { defineMetadata } from "@/lib/metadata";
import Image from "next/image";

export const metadata = defineMetadata({
  title: "Login",
});

export default function LoginPage() {
  return (
    <main className="min-h-screen grid md:grid-cols-2 grid-cols-1 flex items-center justify-center">
      <Image
        src="/images/background-login.jpg"
        alt="Background Login"
        width={2069}
        height={1381}
        className="h-full object-cover grayscale"
      />
      <LoginForm />
    </main>
  );
}
