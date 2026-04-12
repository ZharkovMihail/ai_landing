import type { Metadata, Viewport } from "next";
import { Manrope, Geologica } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600", "800"],
});

const geologica = Geologica({
  variable: "--font-geologica",
  subsets: ["latin", "cyrillic"],
  weight: ["800"],
});

export const viewport: Viewport = {
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "ToTheMoonTeam — AI-разработка для бизнеса",
  description:
    "Создаём приложения, сервисы и AI-инструменты для бизнеса. MVP за 2–4 недели.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${manrope.variable} ${geologica.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#f5f5f5] font-[family-name:var(--font-manrope)]">
        {children}
      </body>
    </html>
  );
}
