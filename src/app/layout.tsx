import type { Metadata } from "next";
import { Inter, Roboto_Slab } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ScrollProvider } from "@/contexts/scrollContext";

const inter = Inter({ subsets: ["latin"] });
const robotoslab = Roboto_Slab({
  subsets: ["latin"],
  weight: "300"
});


export const metadata: Metadata = {
  title: "Chan Sarun",
  icons : "/logo.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robotoslab.className}>
        <ScrollProvider>
          <Navbar></Navbar>
          {children}
        </ScrollProvider>
      </body>
    </html>
  );
}
