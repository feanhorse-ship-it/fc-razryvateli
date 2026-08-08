import Image from "next/image";
import Link from "next/link";
import { players } from "@/data/players";

export default function Squad() {
  const goalkeepers = players.filter(
    (player) => player.position === "Вратарь"
  );

  const defenders = players.filter(
    (player) => player.position === "Защитник"
  );

  const midfielders = players.filter(
    (player) => player.position === "Полузащитник"
  );

  const forwards = players.filter(
    (player) => player.position === "Нападающий"
  );

  return (
    <main className="min-h-screen bg-[#071B3B] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">

      <div className="mx-auto max-w-7xl">

        {/* Заголовок */}

        <div className="mb-16">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
            ФК «Разрыватели»
          </p>

          <h1 className="mt-2 text-5xl font-black text-white sm:text-6xl lg:text-7xl">
            СОСТАВ
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Игроки ФК «Разрыватели» сезона 2026/27.
          </p>
        </div>

        {/* Вратари */}

        <PlayerGroup
          title="Вратари"
          players={goalkeepers}
        />

        {/* Защитники */}

        <PlayerGroup
          title="Защитники"
          players={defenders}
        />

        {/* Полузащитники */}

        <PlayerGroup
          title="Полузащитники"
          players={midfielders}
        />

        {/* Нападающие */}

        <PlayerGroup
          title="Нападающие"
          players={forwards}
        />

      </div>

    </main>
  );
}

function PlayerGroup({
  title,
  players,
}: {
  title: string;
  players: typeof import("@/data/players").players;
}) {
  if (players.length === 0) {
    return null;
  }

  return (
    <section className="mb-20 last:mb-0">

      {/* Название позиции */}

      <div className="mb-8 flex items-center gap-4">
        <div className="h-8 w-1 rounded-full bg-blue-500" />

        <h2 className="text-3xl font-black text-white sm:text-4xl">
          {title}
        </h2>
      </div>

      {/* Карточки */}

      <div
        className="
          grid
          grid-cols-2
          gap-4
          sm:grid-cols-2
          sm:gap-6
          lg:grid-cols-3
          xl:grid-cols-4
        "
      >
        {players.map((player) => (
          <Link
            key={player.id}
            href={`/squad/${player.slug}`}
            className="
              group
              overflow-hidden
              rounded-2xl
              border
              border-blue-500/20
              bg-[#0B2550]/70
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-blue-400/70
              hover:bg-[#0B2550]
              hover:shadow-2xl
              hover:shadow-blue-900/30
            "
          >

            {/* Фотография */}

            <div className="relative aspect-[3/4] overflow-hidden bg-[#0A2145]">

              <Image
                src={player.photo}
                alt={player.name}
                fill
                sizes="
                  (max-width: 639px) 50vw,
                  (max-width: 1023px) 50vw,
                  (max-width: 1279px) 33vw,
                  25vw
                "
                className="
                  object-cover
                  object-top
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
                unoptimized
              />

              {/* Номер */}

              <div
                className="
                  absolute
                  left-3
                  top-3
                  rounded-lg
                  bg-[#071B3B]/90
                  px-2.5
                  py-1
                  text-sm
                  font-black
                  text-blue-300
                  backdrop-blur-sm
                  sm:left-4
                  sm:top-4
                  sm:text-base
                "
              >
                №{player.number}
              </div>

              {/* Капитан */}

              {player.captain && (
                <div
                  className="
                    absolute
                    right-3
                    top-3
                    rounded-lg
                    bg-blue-600
                    px-2.5
                    py-1
                    text-xs
                    font-black
                    text-white
                    sm:right-4
                    sm:top-4
                  "
                >
                  C
                </div>
              )}

            </div>

            {/* Информация */}

            <div className="p-4 sm:p-5">

              <h3 className="text-base font-black text-white sm:text-xl">
                {player.name}
              </h3>

              <p className="mt-1 text-sm text-blue-300">
                {player.position}
              </p>

              <p className="mt-3 text-xs text-slate-500 sm:text-sm">
                {player.description}
              </p>

            </div>

          </Link>
        ))}
      </div>

    </section>
  );
}