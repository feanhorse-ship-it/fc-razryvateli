import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">

      {/* Голубое свечение */}
      <div className="absolute left-1/2 top-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[180px]" />

      {/* Затемнение */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#071B3B]/30 to-[#071B3B]" />

      <div className="container relative z-10 flex flex-col items-center text-center">

        {/* Логотип */}

        <Image
          src="/images/logo.png"
          alt="ФК Разрыватели"
          width={220}
          height={220}
          priority
          className="
          w-32
          h-32
          sm:w-40
          sm:h-40
          md:w-48
          md:h-48
          lg:w-56
          lg:h-56
          logo-glow"
        />

        {/* Заголовок */}

        <h1
          className="
          mt-8
          text-4xl
          sm:text-5xl
          md:text-6xl
          lg:text-8xl
          font-black
          tracking-wide
          fade-up"
        >
          ФК РАЗРЫВАТЕЛИ
        </h1>

        {/* Подзаголовок */}

        <p
          className="
          mt-5
          text-base
          sm:text-lg
          md:text-xl
          text-blue-300"
        >
          Петроградский район • Санкт-Петербург
        </p>

        {/* Описание */}

        <p
          className="
          mt-8
          max-w-3xl
          text-sm
          sm:text-base
          md:text-lg
          lg:text-xl
          leading-8
          text-slate-300"
        >
          Молодой футбольный клуб, представляющий Петроградскую сторону.
          Мы объединяем игроков, болельщиков и жителей района,
          создавая собственную футбольную историю.
        </p>

        {/* Кнопки */}

        <div
          className="
          mt-12
          flex
          flex-col
          sm:flex-row
          gap-4
          w-full
          sm:w-auto"
        >

          <Link
            href="/matches"
            className="
            rounded-xl
            bg-blue-600
            px-8
            py-4
            font-bold
            hover:bg-blue-500
            transition
            text-center"
          >
            Следующий матч
          </Link>

          <Link
            href="/news"
            className="
            rounded-xl
            border
            border-blue-500
            px-8
            py-4
            font-bold
            hover:bg-blue-900/30
            transition
            text-center"
          >
            Новости клуба
          </Link>

        </div>

        {/* Стрелка */}

        <div
          className="
          absolute
          bottom-8
          animate-bounce
          text-3xl
          text-blue-400"
        >
          ↓
        </div>

      </div>

    </section>
  );
}