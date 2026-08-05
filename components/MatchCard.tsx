import Link from "next/link";
import Image from "next/image";
import { Match } from "@/data/matches";

export default function MatchCard({ match }: { match: Match }) {
  return (
    <Link href={`/matches/${match.slug}`}>
      <article className="bg-[#0C2855] rounded-3xl overflow-hidden hover:scale-[1.02] transition">

        <Image
          src={match.poster}
          alt={match.opponent}
          width={800}
          height={1000}
          className="w-full h-72 object-cover"
        />

        <div className="p-6">

          <div className="flex justify-between">

            <h2 className="text-2xl font-bold">

              Разрыватели

            </h2>

            <span className="text-blue-400 font-bold">

              {match.home ? "Дома" : "Выезд"}

            </span>

          </div>

          <h3 className="mt-3 text-xl">

            vs {match.opponent}

          </h3>

          <p className="mt-4 text-slate-400">

            {match.date}

          </p>

          <p className="text-slate-400">

            {match.time}

          </p>

          <p className="text-slate-400">

            {match.stadium}

          </p>

          <div className="mt-6">

            {match.played ? (

              <span className="text-5xl font-black">

                {match.score}

              </span>

            ) : (

              <button className="bg-blue-600 px-5 py-3 rounded-xl font-bold">

                Скоро матч

              </button>

            )}

          </div>

        </div>

      </article>
    </Link>
  );
}