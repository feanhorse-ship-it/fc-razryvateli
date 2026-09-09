import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Clock, MapPin, Trophy } from "lucide-react";
import { notFound } from "next/navigation";
import { matches } from "@/data/matches";

export default async function MatchPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const match = matches.find((m) => m.slug === slug);

  if (!match) return notFound();

  return (
    <section className="container max-w-5xl px-4 pb-16 pt-32 sm:px-6 sm:pt-36 lg:px-8">
      <Link
        href="/matches"
        className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 transition hover:text-blue-300"
      >
        <ArrowLeft size={16} />
        Все матчи
      </Link>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-blue-600/20 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-blue-300">
          {match.home ? "Домашний матч" : "Выездной матч"}
        </span>
        <span
          className={`rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-wider ${
            match.played
              ? "bg-emerald-500/20 text-emerald-300"
              : "bg-amber-500/20 text-amber-300"
          }`}
        >
          {match.played ? "Завершён" : "Предстоящий"}
        </span>
      </div>

      <h1 className="mt-5 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
        Разрыватели — {match.opponent}
      </h1>

      <div className="mt-10 overflow-hidden rounded-3xl border border-blue-500/20">
        <div className="relative aspect-[16/9]">
          <Image
            src={match.poster}
            alt={`Разрыватели — ${match.opponent}`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
        </div>
      </div>

      {/* Счёт */}
      {match.played && (
        <div className="mt-8 flex items-center justify-center gap-6 rounded-3xl border border-blue-500/20 bg-[#0B2550]/55 p-8 backdrop-blur">
          <div className="text-center">
            <p className="text-2xl font-black text-white">Разрыватели</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-black tabular-nums text-blue-300 sm:text-6xl">
              {match.score}
            </p>
            <p className="mt-1 text-sm uppercase tracking-wider text-slate-400">
              {match.home ? "Дома" : "Выезд"}
            </p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-black text-white">{match.opponent}</p>
          </div>
        </div>
      )}

      {/* Детали */}
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="flex items-center gap-3 rounded-2xl border border-blue-500/20 bg-[#0B2550]/55 p-5">
          <CalendarDays size={20} className="shrink-0 text-blue-400" />
          <div>
            <p className="text-xs uppercase tracking-wider text-slate-500">
              Дата
            </p>
            <p className="font-bold text-white">{match.date}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-2xl border border-blue-500/20 bg-[#0B2550]/55 p-5">
          <Clock size={20} className="shrink-0 text-blue-400" />
          <div>
            <p className="text-xs uppercase tracking-wider text-slate-500">
              Время
            </p>
            <p className="font-bold text-white">{match.time}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-2xl border border-blue-500/20 bg-[#0B2550]/55 p-5">
          <MapPin size={20} className="shrink-0 text-blue-400" />
          <div>
            <p className="text-xs uppercase tracking-wider text-slate-500">
              Стадион
            </p>
            <p className="font-bold text-white">{match.stadium}</p>
          </div>
        </div>
      </div>

      {/* Описание */}
      <div className="mt-10 rounded-3xl border border-blue-500/20 bg-[#0B2550]/55 p-8 backdrop-blur">
        <h2 className="flex items-center gap-2 text-xl font-black text-white">
          <Trophy size={20} className="text-blue-300" />
          О матче
        </h2>
        <p className="mt-4 text-lg leading-8 text-slate-300">
          {match.description}
        </p>
      </div>
    </section>
  );
}
