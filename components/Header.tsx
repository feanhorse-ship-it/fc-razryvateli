"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Ticket } from "lucide-react";

const TICKET_URL =
  "https://t.me/ilusuas?text=Здравствуйте!%20Хочу%20приобрести%20билет%20на%20матч%20ФК%20«Разрыватели».";

const links = [
  { href: "/", label: "Главная" },
  { href: "/news", label: "Новости" },
  { href: "/matches", label: "Матчи" },
  { href: "/squad", label: "Состав" },
  { href: "/about", label: "О клубе" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-blue-500/20 bg-[#050D1F]/70 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between">
        {/* Логотип */}
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.png"
            alt="ФК Разрыватели"
            width={52}
            height={52}
            className="logo-glow h-12 w-12 rounded-full object-cover"
          />
          <div className="hidden sm:block">
            <h2 className="text-lg font-black leading-tight">ФК Разрыватели</h2>
            <p className="text-sm text-blue-300">Санкт-Петербург</p>
          </div>
        </Link>

        {/* Навигация — ПК */}
        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-4 py-2 text-sm font-bold transition ${
                isActive(link.href)
                  ? "bg-blue-500/15 text-blue-300"
                  : "text-slate-200 hover:bg-blue-500/10 hover:text-blue-300"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Кнопка билета — ПК */}
        <a
          href={TICKET_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary hidden px-5 py-3 text-sm lg:inline-flex"
        >
          <Ticket size={16} />
          Купить билет
        </a>

        {/* Кнопка меню — телефон */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          className="rounded-lg p-2 text-slate-100 transition hover:bg-blue-500/10 lg:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Мобильное меню */}
      {open && (
        <div className="border-t border-blue-500/20 bg-[#050D1F]/95 backdrop-blur-xl lg:hidden">
          <nav className="container flex flex-col py-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-4 py-3.5 font-bold transition ${
                  isActive(link.href)
                    ? "bg-blue-500/15 text-blue-300"
                    : "text-slate-200 hover:bg-blue-500/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={TICKET_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn btn-primary mt-3 mb-1"
            >
              <Ticket size={16} />
              Купить билет
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
