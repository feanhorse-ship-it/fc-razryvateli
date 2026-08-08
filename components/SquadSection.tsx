import Image from "next/image";
import Link from "next/link";
import { players } from "@/data/players";

export default function SquadSection() {
  return (
    <section className="bg-[#071B3B] py-16 sm:py-20 lg:py-24">
      <div className="container px-4 sm:px-6 lg:px-8">

        {/* Заголовок */}

        <div className="mb-8 flex items-end justify-between gap-4 sm:mb-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400 sm:text-sm">
              Команда
            </p>

            <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
              СОСТАВ
            </h2>
          </div>

          <Link
            href="/squad"
            className="
              hidden
              rounded-xl
              border
              border-blue-500/40
              px-5
              py-3
              text-sm
              font-bold
              text-blue-300
              transition
              hover:bg-blue-500/10
              sm:block
            "
          >
            Весь состав →
          </Link>
        </div>

        {/* Игроки */}

        <div
          className="
            grid
            grid-cols-2
            gap-3
            sm:grid-cols-2
            sm:gap-5
            lg:grid-cols-4
            xl:grid-cols-5
          "
        >
          {players.map((player) => (
            <Link
              key={player.id}
              href={`/squad/${player.slug}`}
              className="
                group
                min-w-0
                overflow-hidden
                rounded-2xl
                border
                border-blue-500/20
                bg-[#0B2550]/60
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-400/60
                hover:bg-[#0B2550]
                hover:shadow-xl
                hover:shadow-blue-900/30
              "
            >
              {/* Фото */}

              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#0A2145]">
                <Image
                  src={player.photo}
                  alt={player.name}
                  fill
                  sizes="
                    (max-width: 639px) 50vw,
                    (max-width: 1023px) 50vw,
                    (max-width: 1279px) 25vw,
                    20vw
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
                    left-2
                    top-2
                    rounded-lg
                    bg-[#071B3B]/85
                    px-2
                    py-1
                    text-xs
                    font-black
                    text-blue-300
                    backdrop-blur-sm
                    sm:left-3
                    sm:top-3
                    sm:px-2.5
                    sm:text-sm
                  "
                >
                  №{player.number}
                </div>

                {/* Капитан */}

                {player.captain && (
                  <div
                    className="
                      absolute
                      right-2
                      top-2
                      rounded-lg
                      bg-blue-600
                      px-2
                      py-1
                      text-xs
                      font-black
                      text-white
                      sm:right-3
                      sm:top-3
                    "
                  >
                    C
                  </div>
                )}
              </div>

              {/* Информация */}

              <div className="min-w-0 p-3 sm:p-4">
                <h3 className="truncate text-sm font-black text-white sm:text-lg">
                  {player.name}
                </h3>

                <p className="mt-1 truncate text-xs text-blue-300 sm:text-sm">
                  {player.position}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Кнопка на телефоне */}

        <div className="mt-8 sm:hidden">
          <Link
            href="/squad"
            className="
              block
              rounded-xl
              border
              border-blue-500/40
              px-5
              py-4
              text-center
              font-bold
              text-blue-300
              transition
              hover:bg-blue-500/10
            "
          >
            Весь состав →
          </Link>
        </div>

      </div>
    </section>
  );
}