import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import BackgroundCanvas from '@/components/threejs/BackgroundCanvas';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Crit font family configuration
const critFont = localFont({
  src: [
    {
      path: "../../public/fonts/crit-font-family/Crit-Extralight-Trial.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/crit-font-family/Crit-Light-Trial.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/crit-font-family/Crit-Regular-Trial.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/crit-font-family/Crit-Medium-Trial.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/crit-font-family/Crit-Semibold-Trial.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/crit-font-family/Crit-Bold-Trial.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/crit-font-family/Crit-Extrabold-Trial.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/crit-font-family/Crit-Black-Trial.otf",
      weight: "900",
      style: "normal",
    },
    // Italic variants
    {
      path: "../../public/fonts/crit-font-family/Crit-Extralight-Italic-Trial.otf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../../public/fonts/crit-font-family/Crit-Light-Italic-Trial.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/crit-font-family/Crit-Italic-Trial.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/crit-font-family/Crit-Medium-Italic-Trial.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/crit-font-family/Crit-Semibold-Italic-Trial.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/crit-font-family/Crit-Bold-Italic-Trial.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/crit-font-family/Crit-Extrabold-Italic-Trial.otf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../../public/fonts/crit-font-family/Crit-Black-Italic-Trial.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-crit",
  display: "swap",
});

const squidboyFont = localFont({
  src: [
    {
      path: "../../public/fonts/squidBoy-font-family/SquidBoy-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/squidBoy-font-family/SquidBoy.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/squidBoy-font-family/SquidBoy-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-squidboy",
  display: "swap",
});

const stampOneFont = localFont({
  src: [
    {
      path: "../../public/fonts/Stamp-RSPK-font-family/Stamp RSPK One v1.010/StampRSPKOne-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/Stamp-RSPK-font-family/Stamp RSPK One v1.010/StampRSPKOne-ExtraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/Stamp-RSPK-font-family/Stamp RSPK One v1.010/StampRSPKOne-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Stamp-RSPK-font-family/Stamp RSPK One v1.010/StampRSPKOne-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Stamp-RSPK-font-family/Stamp RSPK One v1.010/StampRSPKOne-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Stamp-RSPK-font-family/Stamp RSPK One v1.010/StampRSPKOne-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Stamp-RSPK-font-family/Stamp RSPK One v1.010/StampRSPKOne-Heavy.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-stamp-one",
  display: "swap",
});

const stampTwoFont = localFont({
  src: [
    {
      path: "../../public/fonts/Stamp-RSPK-font-family/Stamp RSPK Two v1.010/StampRSPKTwo-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-stamp-two",
  display: "swap",
});

const stampThreeFont = localFont({
  src: [
    {
      path: "../../public/fonts/Stamp-RSPK-font-family/Stamp RSPK Three v1.010/StampRSPKThree-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-stamp-three",
  display: "swap",
});

const stampSmudgeFont = localFont({
  src: [
    {
      path: "../../public/fonts/Stamp-RSPK-font-family/Stamp RSPK Smudge v1.010/StampRSPKSmudge-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-stamp-smudge",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Michael Maddison",
  description: "Personal portfolio website",
  icons: {
    icon: "/aligator.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${critFont.variable} ${squidboyFont.variable} ${stampOneFont.variable} ${stampTwoFont.variable} ${stampThreeFont.variable} ${stampSmudgeFont.variable} antialiased`}
      >
        <BackgroundCanvas />
        {children}
      </body>
    </html>
  );
}
