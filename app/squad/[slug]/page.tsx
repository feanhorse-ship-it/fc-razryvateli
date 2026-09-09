import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import { notFound } from "next/navigation";
import { players } from "@/data/players";

export default async function PlayerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const player = players.find((p) => p.slug === slug);

  if (!player) return notFound();

  const stats = [
    { label: "Позиция", value: player.position },
    { label: "Возраст", value: `${player.age} лет` },
    { label: "Рост", value: `${player.height} см` },
    { label: "Вес", value: `${player.weight} кг` },
  ];

  return (
    <section className="container px-4 pb-16 pt-32 sm:px-6 sm:pt-36 lg:px-8">
      <Link
        href="/squad"
        className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 transition hover:text-blue-300"
      >
        <ArrowLeft size={16} />
        Весь состав
      </Link>

      <div className="mt-8 grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Фото */}
        <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-3xl border border-blue-500/20 bg-[#0B2550]">
          <Image
            src={player.photo}
            alt={player.name}
            fill
            priority
            sizes="(max-width: 1024px) 90vw, 450px"
            className="object-cover object-top"
            unoptimized
          />

          <div className="absolute left-4 top-4 rounded-xl bg-[#071B3B]/85 px-4 py-2 text-2xl font-black text-blue-300 backdrop-blur-sm">
            №{player.number}
          </div>

          {player.captain && (
            <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-xl bg-blue-600 px-3 py-2 text-sm font-black text-white">
              <Shield size={16} />
              Капитан
            </div>
          )}
        </div>

        {/* Инфо */}
        <div>
          <p className="eyebrow">ФК «Разрыватели»</p>
          <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl">
            {player.name}
          </h1>
          <p className="mt-3 text-2xl font-black text-blue-300">#{player.number}</p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-blue-500/20 bg-[#0B2550]/55 p-5"
              >
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  {stat.label}
                </p>
                <p className="mt-1 text-lg font-black text-white">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-blue-500/20 bg-[#0B2550]/55 p-6">
            <p className="text-xs uppercase tracking-wider text-slate-500">
              О игроке
            </p>
            <p className="mt-2 text-lg leading-8 text-slate-300">
              {player.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
