import "./globals.css";
import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";

const syne = Syne({
    subsets: ["latin"],
    display: "block",
    weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://omarhafez.dev"),
    title: "Omar H, Software Engineer",
    description:
    "Experienced Network Engineer and Software Engineer, currently located in North Jersey.",
    generator: "Next.js",
    applicationName: "Omar Hafez, Software Engineer",
    keywords: [
        "Software Engineer",
        "Network Engineer",
        "Omar Hafez",
        "Hafez",
        "Omar",
        "developer",
        "freelance developer",
        "frontend",
        "nj",
        "new jersey",
        "react",
        "frontend developer",
        "frontend engineer",
        "creative",
        "creative developer",
        "creative engineer",
        "tech",
        "bergen county",
        "software",
        "software developer",
        "portfolio",
        "frontend developer portfolio",
        "creative developer portfolio",
        "creative engineer portfolio",
        "software developer portfolio",
        "frontend engineer portfolio",
    ],
    colorScheme: "dark",
    openGraph: {
        title: "Omar Hafez, Software Engineer",
        description:
      "Experienced Network Engineer and Software Engineer, currently located in North Jersey.",
        url: "https://omarhafez.dev",
        siteName: "omarhafez.dev",
        images: [
            {
                url: "./public/metadata.jpg",
                width: 1200,
                height: 630,
                alt: "Omar Hafez, Software Engineer",
            },
        ],
        locale: "en-US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Omar Hafez, Software Engineer",
        description:
      "Experienced Network Engineer and Software Engineer, currently located in North Jersey.",
        creator: "SeekVFX",
        creatorId: "0000000000",
        images: ["./public/metadata.jpg"],
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
                className={`${syne.className} scroll-smooth scrollbar-none scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
            >
                {children}
            </body>
        </html>
    );
}
