import Image from "next/image";
import Link from "next/link";
import { Ticket, Newspaper, MapPin, CalendarDays, ArrowDown } from "lucide-react";
import { nextMatch } from "@/data/nextMatch";

const TICKET_URL =
  "https://t.me/ilusuas?text=Здравствуйте!%20Хочу%20приобрести%20билет%20на%20матч%20ФК%20«Разрыватели».";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      {/* Голубое свечение за контентом */}
      <div className="pointer-events-none absolute left-1/2 top-[-200px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/15 blur-[180px]" />

      <div className="container relative z-10 flex min-h-[calc(100vh-7rem)] items-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid w-full grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* ================= ЛЕВАЯ КОЛОНКА ================= */}
          <div className="fade-up flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* Логотип */}
            <Image
              src="/images/logo.png"
              alt="ФК Разрыватели"
              width={180}
              height={180}
              priority
              className="logo-glow h-auto w-32 object-cover sm:w-36 lg:w-44"
            />

            {/* Заголовок */}
            <h1 className="mt-8 font-black leading-none tracking-tight text-4xl sm:text-5xl lg:text-7xl">
              <span className="block text-2xl uppercase tracking-[0.3em] text-blue-400 sm:text-3xl lg:text-4xl">
                ФК
              </span>
              <span className="mt-2 block">РАЗРЫВАТЕЛИ</span>
            </h1>

            {/* Район */}
            <p className="mt-6 flex items-center gap-2 text-lg font-semibold text-blue-300 sm:text-xl">
              <MapPin size={20} className="shrink-0" />
              Петроградский район • Санкт-Петербург
            </p>

            {/* Слоган */}
            <p className="mt-6 text-xl font-semibold leading-relaxed text-white sm:text-2xl">
              Петроградский район.
              <br />
              Одна команда.
              <br />
              Одна цель.
            </p>

            {/* Краткое описание */}
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              ФК «Разрыватели» — молодой футбольный клуб Санкт-Петербурга,
              объединяющий игроков, болельщиков и жителей Петроградской
              стороны.
            </p>

            {/* Кнопки */}
            <div className="mt-10 flex w-full max-w-md flex-col gap-4 sm:flex-row lg:max-w-none">
              <a
                href={TICKET_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <Ticket size={18} />
                Купить билет
              </a>
              <Link href="/news" className="btn btn-outline">
                <Newspaper size={18} />
                Новости клуба
              </Link>
            </div>

            {/* Мини-факты */}
            <div className="mt-10 grid w-full max-w-md grid-cols-3 gap-3 lg:max-w-none">
              <div className="rounded-2xl border border-blue-500/20 bg-[#0B2550]/40 px-4 py-4 backdrop-blur">
                <p className="text-2xl font-black text-blue-300">2026</p>
                <p className="mt-1 text-xs text-slate-400">Основание</p>
              </div>
              <div className="rounded-2xl border border-blue-500/20 bg-[#0B2550]/40 px-4 py-4 backdrop-blur">
                <p className="text-2xl font-black text-blue-300">⚽</p>
                <p className="mt-1 text-xs text-slate-400">Петроградец</p>
              </div>
              <div className="rounded-2xl border border-blue-500/20 bg-[#0B2550]/40 px-4 py-4 backdrop-blur">
                <p className="text-2xl font-black text-blue-300">💙</p>
                <p className="mt-1 text-xs text-slate-400">Сине-золотые</p>
              </div>
            </div>
          </div>

          {/* ================= ПРАВАЯ КОЛОНКА ================= */}
          <div className="fade-up flex justify-center lg:justify-end">
            <div className="w-full max-w-[430px] overflow-hidden rounded-[32px] border border-blue-400/20 bg-[#0B2550]/50 shadow-2xl shadow-blue-950/40 backdrop-blur-xl">
              {/* Постер */}
              <div className="relative aspect-[4/5]">
                <Image
                  src={nextMatch.poster}
                  alt={`Матч ФК Разрыватели — ${nextMatch.opponent}`}
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0B2550] to-transparent" />
              </div>

              {/* Информация */}
              <div className="p-6 sm:p-7">
                <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
                  Следующий матч
                </p>

                <h2 className="mt-3 text-center text-2xl font-black sm:text-3xl">
                  Разрыватели — {nextMatch.opponent}
                </h2>

                <div className="mt-5 space-y-2 text-center text-slate-300">
                  <p className="flex items-center justify-center gap-2">
                    <CalendarDays size={16} className="text-blue-400" />
                    {nextMatch.date}
                  </p>
                  <p>🕐 {nextMatch.time}</p>
                  <p>🏟 {nextMatch.stadium}</p>
                </div>

                <a
                  href={TICKET_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mt-6 w-full"
                >
                  <Ticket size={18} />
                  Купить билет
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Индикатор прокрутки */}
      <div className="relative z-10 mb-6 flex justify-center">
        <a
          href="#news"
          aria-label="Прокрутить вниз"
          className="animate-float flex h-11 w-11 items-center justify-center rounded-full border border-blue-500/30 text-blue-300 transition hover:bg-blue-500/10"
        >
          <ArrowDown size={18} />
        </a>
      </div>
    </section>
  );
}
