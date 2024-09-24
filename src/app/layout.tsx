import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/atoms/Navbar";

export const metadata: Metadata = {
  title: "Sahabat Tumbuh",
  description:
    "Computer Engineering Research Club adalah sebuah wadah atau komunitas yang dirancang khusus untuk mahasiswa teknik komputer guna mendalami dan mengeksplorasi minat serta keahlian mereka.",
};

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jakartasans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${jakartaSans.variable}  antialiased`}>
      <body>
        <main className="font-jakartasans mt-6 mx-auto overflow-hidden overflow-y-auto mb-[30px] max-w-[430px]">
          <div className="md:px-0 px-4">{children}</div>
          <Navbar />
        </main>
      </body>
    </html>
  );
}
