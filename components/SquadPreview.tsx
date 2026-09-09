import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { players } from "@/data/players";

export default function SquadPreview() {
  const featured = players.slice(0, 5);

  return (
    <section id="squad" className="py-16 sm:py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="mb-8 flex items-end justify-between gap-4 sm:mb-12">
          <div>
            <p className="eyebrow">Команда</p>
            <h2 className="section-title mt-2">СОСТАВ</h2>
          </div>
          <Link href="/squad" className="btn btn-outline hidden sm:inline-flex">
            Весь состав
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Игроки */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-5">
          {featured.map((player) => (
            <Link
              key={player.id}
              href={`/squad/${player.slug}`}
              className="group min-w-0 overflow-hidden rounded-2xl border border-blue-500/20 bg-[#0B2550]/55 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-400/60 hover:shadow-xl hover:shadow-blue-950/40"
            >
              {/* Фото */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#0A2145]">
                <Image
                  src={player.photo}
                  alt={player.name}
                  fill
                  sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 20vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />

                <div className="absolute left-2 top-2 rounded-lg bg-[#071B3B]/85 px-2 py-1 text-xs font-black text-blue-300 backdrop-blur-sm sm:left-3 sm:top-3">
                  №{player.number}
                </div>

                {player.captain && (
                  <div className="absolute right-2 top-2 rounded-lg bg-blue-600 px-2 py-1 text-xs font-black text-white sm:right-3 sm:top-3">
                    C
                  </div>
                )}
              </div>

              {/* Инфо */}
              <div className="min-w-0 p-3 sm:p-4">
                <h3 className="truncate text-sm font-black sm:text-base">
                  {player.name}
                </h3>
                <p className="mt-1 truncate text-xs text-blue-300 sm:text-sm">
                  {player.position}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Кнопка — телефон */}
        <div className="mt-8 sm:hidden">
          <Link href="/squad" className="btn btn-outline w-full">
            Весь состав
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
