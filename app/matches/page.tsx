import { matches } from "@/data/matches";
import MatchCard from "@/components/MatchCard";
import NextMatchSection from "@/components/NextMatchSection";

export default function MatchesPage() {
  return (
    <>
      <section className="container px-4 pb-4 pt-32 sm:px-6 sm:pt-36 lg:px-8">
        {/* Заголовок */}
        <p className="eyebrow">Календарь</p>
        <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl lg:text-6xl">
          МАТЧИ
        </h1>
        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          Расписание и результаты матчей ФК «Разрыватели».
        </p>
      </section>

      {/* Следующий матч */}
      <NextMatchSection />

      {/* Список матчей */}
      <section className="container grid gap-6 px-4 pb-16 sm:px-6 md:grid-cols-2 lg:px-8">
        {matches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </section>
    </>
  );
}
