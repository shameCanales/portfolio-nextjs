import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/sections/NavBar";
import MobileNav from "@/components/sections/MobileNav";
import ReduxProvider from "@/lib/providers/ReduxProvider";
import TanstackProvider from "@/lib/providers/TanstackProvider";
import Footer from "@/components/sections/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Shame Canales Portfolio NEXTJS",
  description:
    "a personal portfolio built with Next.js by Mark Aron Shame Canales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="m-0 p-0">
      <body >
        <ReduxProvider>
          <TanstackProvider>
            <MobileNav />
            <NavBar />
            <div
              className={`${inter.className}  antialiased px-5 sm:px-8 md:px-12 lg:px-[72px] xl:px-[120px] 2xl:px-[200px] 3xl:px-[220px] 3xl:max-w-[1920px] 3xl:mx-auto py-4.5`}
            >
              {children}
            </div>
            <Footer />
          </TanstackProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
