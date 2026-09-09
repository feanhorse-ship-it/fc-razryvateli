import Link from "next/link";
import Image from "next/image";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import { Match } from "@/data/matches";

export default function MatchCard({ match }: { match: Match }) {
  return (
    <Link
      href={`/matches/${match.slug}`}
      className="group overflow-hidden rounded-3xl border border-blue-500/20 bg-[#0B2550]/55 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-950/40"
    >
      {/* Постер */}
      <div className="relative aspect-[16/9] overflow-hidden bg-[#0A2145]">
        <Image
          src={match.poster}
          alt={`Разрыватели — ${match.opponent}`}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Статус матча */}
        <div className="absolute left-4 top-4 rounded-lg bg-[#071B3B]/85 px-3 py-1.5 text-xs font-black uppercase tracking-wider backdrop-blur-sm">
          {match.played ? (
            <span className="text-emerald-400">Завершён</span>
          ) : (
            <span className="text-blue-300">Скоро</span>
          )}
        </div>

        <div className="absolute right-4 top-4 rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-black uppercase tracking-wider">
          {match.home ? "Дома" : "Выезд"}
        </div>
      </div>

      {/* Контент */}
      <div className="p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-xl font-black text-white">Разрыватели</h3>
          {match.played ? (
            <span className="text-3xl font-black tabular-nums text-blue-300">
              {match.score}
            </span>
          ) : (
            <span className="text-lg font-black text-slate-500">VS</span>
          )}
        </div>

        <p className="mt-1 text-lg font-semibold text-blue-300">
          {match.opponent}
        </p>

        <div className="mt-4 space-y-1.5 text-sm text-slate-400">
          <p className="flex items-center gap-2">
            <CalendarDays size={14} className="text-blue-400" />
            {match.date}
          </p>
          <p className="flex items-center gap-2">
            <Clock size={14} className="text-blue-400" />
            {match.time}
          </p>
          <p className="flex items-center gap-2">
            <MapPin size={14} className="text-blue-400" />
            {match.stadium}
          </p>
        </div>

        <div className="mt-6">
          {match.played ? (
            <span className="inline-block rounded-xl border border-blue-500/30 px-5 py-2.5 text-sm font-bold text-blue-300 transition group-hover:bg-blue-500/10">
              Отчёт о матче →
            </span>
          ) : (
            <span className="inline-block rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-bold text-white transition group-hover:bg-blue-500">
              Подробнее о матче →
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
