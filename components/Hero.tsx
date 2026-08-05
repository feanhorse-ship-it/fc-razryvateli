import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">

      {/* Голубое свечение */}
      <div className="absolute top-0 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/15 blur-[180px]" />

      {/* Затемнение */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#071B3B]/20 to-[#071B3B]" />

      <div className="relative z-10 flex flex-col items-center text-center px-6">

        <Image
          src="/images/logo.png"
          alt="ФК Разрыватели"
          width={210}
          height={210}
          priority
          className="logo-glow fade-up"
        />

        <h1 className="mt-8 text-7xl md:text-8xl font-black tracking-wide fade-up">
          ФК РАЗРЫВАТЕЛИ
        </h1>

        <p className="mt-4 text-2xl text-blue-300">
          Петроградский район • Санкт-Петербург
        </p>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-300">
          Молодой футбольный клуб, объединяющий игроков,
          болельщиков и жителей Петроградской стороны.
          Мы строим историю вместе.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <Link
            href="/matches"
            className="rounded-xl bg-blue-600 px-8 py-4 text-lg font-bold transition hover:bg-blue-500 hover:scale-105"
          >
            Следующий матч
          </Link>

          <Link
            href="/news"
            className="rounded-xl border border-blue-500 px-8 py-4 text-lg font-bold transition hover:bg-blue-500/10 hover:scale-105"
          >
            Новости клуба
          </Link>

        </div>

        <div className="mt-24 animate-bounce text-blue-300">

          ↓

        </div>

      </div>

    </section>
  );
}