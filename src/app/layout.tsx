import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/atoms/Navbar";

export const metadata: Metadata = {
  title: "Tumbuh Sahabat",
  description:
    "Tumbuh Sahabat adalah aplikasi berbasis web yang dirancang khusus untuk membantu anak-anak dengan Down syndrome dalam memantau asupan gizi mereka dan belajar melalui permainan edukatif.",
  icons: {
    icon: "/images/favicon.ico",
  },
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
        <main className="font-jakartasans mt-6 mx-auto overflow-hidden overflow-y-auto max-w-[430px]">
          <div className="md:px-0 px-4 mb-[100px]">{children}</div>
          <Navbar />
        </main>
      </body>
    </html>
  );
}
