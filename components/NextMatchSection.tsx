"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Ticket, CalendarDays, Clock, MapPin } from "lucide-react";
import { nextMatch } from "@/data/nextMatch";

const TICKET_URL =
  "https://t.me/ilusuas?text=Здравствуйте!%20Хочу%20приобрести%20билет%20на%20матч%20ФК%20«Разрыватели».";

function getTimeLeft(target: string) {
  const diff = new Date(target).getTime() - Date.now();
  if (diff <= 0) return null;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
}

export default function NextMatchSection() {
  const [timeLeft, setTimeLeft] = useState<ReturnType<
    typeof getTimeLeft
  > | null>(null);

  useEffect(() => {
    const tick = () => setTimeLeft(getTimeLeft(nextMatch.dateISO));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { v: timeLeft?.days ?? null, l: "дней" },
    { v: timeLeft?.hours ?? null, l: "часов" },
    { v: timeLeft?.minutes ?? null, l: "минут" },
    { v: timeLeft?.seconds ?? null, l: "секунд" },
  ];

  return (
    <section id="next-match" className="py-16 sm:py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] border border-blue-500/20 bg-gradient-to-r from-[#0B2550] to-[#12336F] p-8 sm:p-12 lg:p-16">
          {/* Декоративное свечение */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-sky-400/10 blur-[100px]" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr]">
            {/* Команда хозяев */}
            <div className="text-center lg:text-right">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-blue-400/30 bg-[#071B3B] text-3xl font-black lg:ml-auto lg:mr-0">
                ФК
              </div>
              <h3 className="mt-4 text-2xl font-black sm:text-3xl">Разрыватели</h3>
              <p className="mt-1 text-sm uppercase tracking-widest text-blue-300">
                Дома
              </p>
            </div>

            {/* Центр: VS и дата */}
            <div className="text-center">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-blue-400">
                Следующий матч
              </p>
              <p className="mt-3 text-5xl font-black text-blue-300 sm:text-6xl">
                VS
              </p>
              <p className="mt-4 text-lg font-semibold text-slate-300">
                {nextMatch.opponent}
              </p>

              {/* Таймер */}
              <div className="mt-6 flex justify-center gap-3">
                {units.map((unit) => (
                  <div
                    key={unit.l}
                    className="min-w-[70px] rounded-2xl border border-blue-500/25 bg-[#071B3B]/60 px-3 py-3 backdrop-blur"
                  >
                    <p className="text-2xl font-black tabular-nums text-white sm:text-3xl">
                      {unit.v === null ? "–" : String(unit.v).padStart(2, "0")}
                    </p>
                    <p className="mt-1 text-[11px] uppercase tracking-wide text-slate-400">
                      {unit.l}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-1.5 text-sm text-slate-300">
                <p className="flex items-center justify-center gap-2">
                  <CalendarDays size={15} className="text-blue-400" />
                  {nextMatch.date}
                </p>
                <p className="flex items-center justify-center gap-2">
                  <Clock size={15} className="text-blue-400" />
                  {nextMatch.time}
                </p>
                <p className="flex items-center justify-center gap-2">
                  <MapPin size={15} className="text-blue-400" />
                  {nextMatch.stadium}
                </p>
              </div>

              <a
                href={TICKET_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-7"
              >
                <Ticket size={18} />
                Купить билет
              </a>
            </div>

            {/* Соперник */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <Image
                src={nextMatch.poster}
                alt={nextMatch.opponent}
                width={160}
                height={200}
                className="h-24 w-24 rounded-2xl border border-blue-400/30 object-cover shadow-lg lg:h-28 lg:w-28"
              />
              <h3 className="mt-4 text-2xl font-black sm:text-3xl">
                {nextMatch.opponent}
              </h3>
              <p className="mt-1 text-sm uppercase tracking-widest text-slate-400">
                Соперник
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
