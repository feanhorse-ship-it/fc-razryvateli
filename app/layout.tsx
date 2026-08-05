import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ФК Разрыватели",
  description: "Официальный сайт футбольного клуба Разрыватели",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>

        <Header />

        <main>

          {children}

        </main>

        <Footer />

      </body>
    </html>
  );
}