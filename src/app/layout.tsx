import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Koalas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className={inter.className}>
        <div className="min-h-screen grid grid-cols-app"> 
          <Sidebar />

          <main className="px-8 pb-12 pt-8">
        {children}
          </main>
        </div>
        
        </body>
    </html>
  );
}
