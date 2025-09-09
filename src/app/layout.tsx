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
      <body>
        <ReduxProvider>
          <TanstackProvider>
            <MobileNav />
            <NavBar />
            <div
              className={`${inter.className}  antialiased mx-5 sm:mx-8 md:mx-12 lg:mx-[72px] xl:mx-[120px] 2xl:mx-[200px] 3xl:mx-[220px]  py-4.5`}
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
