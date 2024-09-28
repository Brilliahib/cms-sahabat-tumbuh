import type { Metadata } from "next";
import { Paytone_One, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/atoms/Navbar";
import NavbarDesktop from "@/components/organism/navbar/Navbar";
import GlobalProvider from "@/components/organism/GlobalProvider";
import { Toaster } from "@/components/ui/toaster";

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

const paytoneOne = Paytone_One({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-paytone-one",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${jakartaSans.variable} ${paytoneOne.variable}  antialiased`}
    >
      <body>
        <GlobalProvider>
          <main className="font-jakartasans">{children}</main>
          <Toaster />
        </GlobalProvider>
      </body>
    </html>
  );
}
