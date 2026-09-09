import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  CalendarDays,
  Trophy,
  Heart,
  Users,
  Target,
  Ticket,
} from "lucide-react";

const TICKET_URL =
  "https://t.me/ilusuas?text=Здравствуйте!%20Хочу%20приобрести%20билет%20на%20матч%20ФК%20«Разрыватели».";

const values = [
  {
    icon: Heart,
    title: "Страсть",
    text: "Мы играем за район, за болельщиков и за любовь к футболу.",
  },
  {
    icon: Users,
    title: "Команда",
    text: "Один коллектив — от игроков до жителей Петроградской стороны.",
  },
  {
    icon: Target,
    title: "Цель",
    text: "Развиваться, побеждать и расти вместе с городом.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Заголовок */}
      <section className="container px-4 pb-8 pt-32 sm:px-6 sm:pt-36 lg:px-8">
        <p className="eyebrow">Наш клуб</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
          О КЛУБЕ
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
          ФК «Разрыватели» — молодой футбольный клуб Петроградского района
          Санкт-Петербурга, основанный в 2026 году.
        </p>
      </section>

      {/* Факты */}
      <section className="container px-4 pb-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="flex items-center gap-4 rounded-2xl border border-blue-500/20 bg-[#0B2550]/55 p-6 backdrop-blur">
            <CalendarDays size={26} className="shrink-0 text-blue-300" />
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Основание
              </p>
              <p className="text-lg font-black text-white">2026 год</p>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-2xl border border-blue-500/20 bg-[#0B2550]/55 p-6 backdrop-blur">
            <MapPin size={26} className="shrink-0 text-blue-300" />
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Район
              </p>
              <p className="text-lg font-black text-white">Петроградский</p>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-2xl border border-blue-500/20 bg-[#0B2550]/55 p-6 backdrop-blur">
            <Trophy size={26} className="shrink-0 text-blue-300" />
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Стадион
              </p>
              <p className="text-lg font-black text-white">Петроградец</p>
            </div>
          </div>
        </div>
      </section>

      {/* История */}
      <section className="container grid items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="eyebrow">Наша история</p>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
            Одна команда. Одна цель.
          </h2>
          <div className="mt-6 space-y-4 leading-8 text-slate-300">
            <p>
              «Разрыватели» появились в Петроградском районе в 2026 году —
              как команда, которая объединяет игроков, болельщиков и жителей
              района вокруг одной общей страсти к футболу.
            </p>
            <p>
              Мы делаем ставку на молодых и амбициозных футболистов,
              честную игру и поддержку трибун. Каждый матч для нас — не просто
              90 минут, а возможность показать, на что способна
              Петроградская сторона.
            </p>
            <p>
              Приходите на стадион «Петроградец», болейте за сине-золотых и
              становитесь частью нашей истории.
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-blue-500/20">
          <div className="relative aspect-[4/3]">
            <Image
              src="/images/formation.png"
              alt="Тактическая схема ФК Разрыватели"
              fill
              sizes="(max-width: 1024px) 100vw, 640px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Ценности */}
      <section className="container px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-blue-500/20 bg-[#0B2550]/55 p-8 backdrop-blur transition hover:-translate-y-1 hover:border-blue-400/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20 text-blue-300">
                <value.icon size={22} />
              </div>
              <h3 className="mt-5 text-xl font-black text-white">
                {value.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-400">{value.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="container px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] border border-blue-500/20 bg-gradient-to-r from-[#0B2550] to-[#12336F] p-10 text-center sm:p-14">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-[100px]" />
          <h2 className="text-3xl font-black text-white sm:text-4xl">
            Стань частью команды
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-300">
            Приходи на ближайший матч и поддержи «Разрывателей» с трибун
            стадиона «Петроградец».
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={TICKET_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <Ticket size={18} />
              Купить билет
            </a>
            <Link href="/squad" className="btn btn-outline">
              Познакомиться с составом
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
