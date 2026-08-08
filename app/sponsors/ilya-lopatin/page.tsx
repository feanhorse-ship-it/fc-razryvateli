import Image from "next/image";
import Link from "next/link";
import { players } from "@/data/players";

export default function IlyaLopatinPage() {
  const player = players.find(
    (item) => item.slug === "ilya-lopatin"
  );

  if (!player) {
    return (
      <main className="min-h-screen bg-[#071B3B] px-4 py-24 text-center text-white">
        <h1 className="text-3xl font-black">
          Игрок не найден
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#071B3B] px-4 py-24">

      <div className="mx-auto max-w-5xl">

        <Link
          href="/"
          className="text-sm font-bold text-blue-400 hover:text-blue-300"
        >
          ← На главную
        </Link>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">

          {/* Фото */}

          <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-3xl border border-blue-500/20 bg-[#0B2550]">

            <Image
              src={player.photo}
              alt={player.name}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 450px"
              className="object-cover object-top"
            />

          </div>

          {/* Информация */}

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
              Партнёр клуба
            </p>

            <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl">
              {player.name}
            </h1>

            <p className="mt-4 text-xl text-blue-300">
              ФК «Разрыватели» • №{player.number}
            </p>

            <div className="mt-8 space-y-4 text-slate-300">

              <p>
                <strong className="text-white">
                  Позиция:
                </strong>{" "}
                {player.position}
              </p>

              <p>
                <strong className="text-white">
                  Возраст:
                </strong>{" "}
                {player.age} лет
              </p>

              <p>
                <strong className="text-white">
                  Рост:
                </strong>{" "}
                {player.height} см
              </p>

              <p>
                <strong className="text-white">
                  Вес:
                </strong>{" "}
                {player.weight} кг
              </p>

            </div>

            <p className="mt-8 max-w-xl leading-8 text-slate-400">
              {player.description}
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}