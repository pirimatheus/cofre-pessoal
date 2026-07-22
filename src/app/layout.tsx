import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ConfigProvider } from "@/context/config-context";
import IAChat from "@/components/ia-chat";
import { RegisterSW } from "@/components/register-sw";
import { InstallBanner } from "@/components/install-banner";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cofre Pessoal",
  description: "App de controle financeiro",
  manifest: "/manifest.json",
  themeColor: "#0f0f0f",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#7c3aed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <ConfigProvider>
          {children}
          <IAChat />
          <RegisterSW />
          <InstallBanner />
        </ConfigProvider>
        <Script src="https://cdn.pluggy.ai/pluggy-connect/v2.8.2/pluggy-connect.js" strategy="afterInteractive" />      
      </body>
    </html>
  );
}