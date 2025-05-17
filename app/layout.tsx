import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Poulastaa Das — Android Developer",
  description:
    "Android Developer and Backend Engineer Focused on interfaces and experiences, working remotely from Kolkata, India",
  generator: "Next.js",
  applicationName: "Poulastaa Das",
  keywords: [
    "freelance",
    "developer",
    "freelance developer",
    "frontend",
    "Kotlin",
    "Android",
    "Android developer",
    "frontend developer",
    "frontend engineer",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
    "india",
    "software",
    "software developer",
    "portfolio",
    "frontend developer portfolio",
    "creative developer portfolio",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Poulastaa Das — Android Developer",
    description: "Android Develpoer self learner, work from India.",
    url: "",
    siteName: "www.victorwilliams.me",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "Poulasta Das— Android Developer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Poulasta Das— Android Developer",
    description: "Android Developer self learner, work from India..",
    creator: "victorwill__",
    creatorId: "1243720976552144897",
    images: [""],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
