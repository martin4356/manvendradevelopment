import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manvendra Development | Websites, Apps & Digital Growth",
  description: "Creative website development, mobile apps, graphic design, SEO and digital marketing. Professional development with flexible pricing.",
  keywords: ["website development", "WordPress", "mobile app development", "SEO", "graphic design", "Ashoknagar"],
  openGraph: {
    title: "Manvendra Development",
    description: "We turn ambitious ideas into useful digital experiences.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
