import { Ticket } from "lucide-react";
import { nextMatch } from "@/data/nextMatch";

const TICKET_URL =
  "https://t.me/ilusuas?text=Здравствуйте!%20Хочу%20приобрести%20билет%20на%20матч%20ФК%20«Разрыватели».";

export default function MatchSection() {
  return (
    <section className="container px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-blue-500/20 bg-gradient-to-r from-[#0B2550] to-[#15458E] p-10 sm:p-12">
        <h2 className="text-3xl font-black sm:text-4xl">Следующий матч</h2>

        <div className="mt-8 grid items-center gap-8 text-center md:grid-cols-3">
          <div>
            <h3 className="text-3xl font-black">Разрыватели</h3>
          </div>

          <div>
            <p className="text-5xl font-black text-blue-300">VS</p>
            <p className="mt-4 font-semibold text-white">{nextMatch.opponent}</p>
            <p className="mt-2 text-slate-300">
              {nextMatch.date} • {nextMatch.time}
            </p>
            <p className="text-slate-400">{nextMatch.stadium}</p>
          </div>

          <div>
            <h3 className="text-3xl font-black">{nextMatch.opponent}</h3>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href={TICKET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <Ticket size={18} />
            Купить билет
          </a>
        </div>
      </div>
    </section>
  );
}
