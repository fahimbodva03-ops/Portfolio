import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fahim Bodva | Aspiring Full-Stack Web Developer",
  description:
    "Aspiring Full-Stack Web Developer passionate about technology, problem-solving, and creating modern, meaningful digital experiences. Building ideas into digital experiences.",
  keywords: [
    "Fahim Bodva",
    "portfolio",
    "web development",
    "full-stack developer",
    "frontend",
    "backend",
    "JavaScript",
    "React",
  ],
  openGraph: {
    title: "Fahim Bodva | Aspiring Full-Stack Web Developer",
    description:
      "Building Ideas Into Digital Experiences. An aspiring Full-Stack Web Developer passionate about technology and problem-solving.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrains.variable} ${spaceGrotesk.variable} font-sans bg-[#020209] text-white antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
