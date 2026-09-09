import Image from "next/image";
import Link from "next/link";
import { Send, MapPin, Mail } from "lucide-react";

const nav = [
  { href: "/", label: "Главная" },
  { href: "/news", label: "Новости" },
  { href: "/matches", label: "Матчи" },
  { href: "/squad", label: "Состав" },
  { href: "/about", label: "О клубе" },
];

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-blue-500/15 bg-[#04101F]/70 backdrop-blur-xl">
      <div className="container grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Клуб */}
        <div className="lg:col-span-2">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="ФК Разрыватели"
              width={52}
              height={52}
              className="h-12 w-12 rounded-full object-cover"
            />
            <span className="text-xl font-black">ФК РАЗРЫВАТЕЛИ</span>
          </Link>

          <p className="mt-5 max-w-md leading-7 text-slate-400">
            Молодой футбольный клуб Петроградского района Санкт-Петербурга.
            Одна команда. Одна цель.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://t.me/ilusuas"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-300 transition hover:border-blue-400 hover:bg-blue-500/20"
            >
              <Send size={18} />
            </a>
            <span className="text-sm text-slate-500">
              Наш канал в Telegram
            </span>
          </div>
        </div>

        {/* Навигация */}
        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-blue-300">
            Навигация
          </h3>
          <ul className="mt-5 space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-slate-300 transition hover:text-blue-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Контакты */}
        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-blue-300">
            Контакты
          </h3>
          <ul className="mt-5 space-y-4 text-slate-300">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-blue-400" />
              <span>
                Петроградский район,
                <br />
                Санкт-Петербург
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400">🏟</span>
              <span>Стадион «Петроградец»</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={18} className="mt-0.5 shrink-0 text-blue-400" />
              <a
                href="https://t.me/ilusuas"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-blue-300"
              >
                Написать нам
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Нижняя полоса */}
      <div className="border-t border-blue-500/10">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-sm text-slate-500 sm:flex-row">
          <p>© 2026 ФК «Разрыватели». Все права защищены.</p>
          <p>
            Санкт-Петербург · Основан в 2026 году
          </p>
        </div>
      </div>
    </footer>
  );
}
