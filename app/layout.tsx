import "./globals.css";

import "@fontsource-variable/manrope";
import "@fontsource-variable/unbounded";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Background from "@/components/Background";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "ФК «Разрыватели» — футбольный клуб Санкт-Петербурга",
    template: "%s — ФК «Разрыватели»",
  },
  description:
    "Официальный сайт футбольного клуба «Разрыватели». Петроградский район, Санкт-Петербург. Новости, матчи, состав и билеты.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <Background />

        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
