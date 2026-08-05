import { matches } from "@/data/matches";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function MatchPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const match = matches.find((m) => m.slug === slug);

  if (!match) return notFound();

  return (
    <section className="container py-32 max-w-5xl">

      <h1 className="text-6xl font-black">

        Разрыватели — {match.opponent}

      </h1>

      <p className="text-blue-400 mt-5">

        {match.date} • {match.time}

      </p>

      <Image
        src={match.poster}
        alt={match.opponent}
        width={1200}
        height={1600}
        className="rounded-3xl mt-10"
      />

      <div className="mt-10 space-y-4 text-xl">

        <p>🏟 Стадион: {match.stadium}</p>

        <p>📅 Дата: {match.date}</p>

        <p>⏰ Время: {match.time}</p>

        <p>📊 Счет: {match.score}</p>

      </div>

      <p className="mt-10 text-xl leading-9">

        {match.description}

      </p>

    </section>
  );
}
