"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Главная" },
    { href: "/news", label: "Новости" },
    { href: "/matches", label: "Матчи" },
    { href: "/squad", label: "Состав" },
    { href: "/about", label: "О клубе" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#071B3B]/80 border-b border-blue-500/20">

      <div className="container flex items-center justify-between h-20">

        <Link href="/" className="flex items-center gap-3">

          <Image
            src="/images/logo.png"
            alt="ФК Разрыватели"
            width={56}
            height={56}
            className="rounded-full"
          />

          <div className="hidden sm:block">

            <h2 className="font-black text-xl">
              ФК Разрыватели
            </h2>

            <p className="text-blue-300 text-sm">
              Санкт-Петербург
            </p>

          </div>

        </Link>

        {/* ПК */}

        <nav className="hidden lg:flex items-center gap-8">

          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-semibold hover:text-blue-400 transition"
            >
              {link.label}
            </Link>
          ))}

        </nav>

        <a
  href="https://t.me/ilusuas?text=Здравствуйте!%20Хочу%20приобрести%20билет%20на%20матч%20ФК%20«Разрыватели»."
  target="_blank"
  rel="noopener noreferrer"
  className="hidden lg:block rounded-xl bg-blue-600 px-5 py-3 font-bold hover:bg-blue-500 transition"
>
  Купить билет
</a>

        {/* Телефон */}

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-4xl"
        >
          ☰
        </button>

      </div>

      {open && (

        <div className="lg:hidden bg-[#071B3B] border-t border-blue-500/20">

          <nav className="flex flex-col">

            {links.map((link) => (

              <Link
                key={link.href}
                href={link.href}
                className="px-8 py-5 border-b border-blue-500/10 hover:bg-blue-900/30"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>

            ))}

          </nav>

        </div>

      )}

    </header>
  );
}