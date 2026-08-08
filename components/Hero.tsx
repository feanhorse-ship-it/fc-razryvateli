import Image from "next/image";
import Link from "next/link";
import { nextMatch } from "@/data/nextMatch";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#071B3B]">

      {/* =========================
          ФОН ПЕТЕРБУРГА
      ========================== */}

      <div className="absolute inset-0">
        <Image
          src="/images/petersburg-outline.png"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-15"
        />
      </div>

      {/* Затемнение фона */}

      <div className="absolute inset-0 bg-gradient-to-b from-[#071B3B]/50 via-[#071B3B]/75 to-[#071B3B]" />

      {/* Голубое свечение */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-200px]
          h-[600px]
          w-[600px]
          -translate-x-1/2
          rounded-full
          bg-blue-500/20
          blur-[180px]
        "
      />

      {/* =========================
          ОСНОВНОЙ КОНТЕНТ
      ========================== */}

      <div
        className="
          container
          relative
          z-10
          flex
          min-h-screen
          items-center
          px-4
          py-24
          sm:px-6
          lg:px-8
        "
      >

        <div
          className="
            grid
            w-full
            grid-cols-1
            items-center
            gap-14
            lg:grid-cols-2
            lg:gap-20
          "
        >

          {/* =========================
              ЛЕВАЯ КОЛОНКА
          ========================== */}

          <div
            className="
              flex
              flex-col
              items-center
              text-center
              lg:items-start
              lg:text-left
            "
          >

            {/* Логотип */}

            <Image
              src="/images/logo.png"
              alt="ФК Разрыватели"
              width={180}
              height={180}
              priority
              className="
                h-auto
                w-32
                logo-glow
                sm:w-36
                lg:w-44
              "
            />

            {/* Заголовок */}

            <h1
              className="
                mt-8
                font-black
                leading-none
                tracking-tight
                text-4xl
                sm:text-5xl
                lg:text-7xl
              "
            >
              <span
                className="
                  block
                  text-2xl
                  uppercase
                  tracking-[0.3em]
                  text-blue-400
                  sm:text-3xl
                  lg:text-4xl
                "
              >
                ФК
              </span>

              <span className="mt-2 block">
                РАЗРЫВАТЕЛИ
              </span>
            </h1>

            {/* Район */}

            <p
              className="
                mt-6
                text-lg
                font-medium
                text-blue-300
                sm:text-xl
              "
            >
              Петроградский район • Санкт-Петербург
            </p>

            {/* Информация о клубе */}

            <div className="mt-7 space-y-3 text-base text-slate-300 sm:text-lg">

              <p>
                📍 Петроградский район
              </p>

              <p>
                🏟 Домашний стадион — Петроградец
              </p>

              <p>
                💙 Основан в 2026 году
              </p>

            </div>

            {/* Слоган */}

            <p
              className="
                mt-8
                text-xl
                font-semibold
                leading-relaxed
                text-white
                sm:text-2xl
              "
            >
              Петроградский район.
              <br />
              Одна команда.
              <br />
              Одна цель.
            </p>

            {/* Краткое описание */}

            <p
              className="
                mt-7
                max-w-xl
                text-base
                leading-7
                text-slate-400
                sm:text-lg
                sm:leading-8
              "
            >
              ФК «Разрыватели» — молодой футбольный клуб Санкт-Петербурга,
              объединяющий игроков, болельщиков и жителей Петроградской стороны.
            </p>

            {/* Кнопки */}

            <div
              className="
                mt-10
                flex
                w-full
                max-w-md
                flex-col
                gap-4
                sm:flex-row
                lg:max-w-none
              "
            >

              <a
                href="https://t.me/ilusuas?text=Здравствуйте!%20Хочу%20приобрести%20билет%20на%20матч%20ФК%20Разрыватели."
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-xl
                  bg-blue-600
                  px-8
                  py-4
                  text-center
                  font-bold
                  transition
                  hover:bg-blue-500
                  active:scale-95
                "
              >
                🎟 Купить билет
              </a>

              <Link
                href="/news"
                className="
                  rounded-xl
                  border
                  border-blue-500
                  px-8
                  py-4
                  text-center
                  font-bold
                  transition
                  hover:bg-blue-900/40
                  active:scale-95
                "
              >
                📰 Новости клуба
              </Link>

            </div>

          </div>

          {/* =========================
              ПРАВАЯ КОЛОНКА
          ========================== */}

          <div
            className="
              flex
              justify-center
              lg:justify-end
            "
          >

            <div
              className="
                w-full
                max-w-[430px]
                overflow-hidden
                rounded-[32px]
                border
                border-blue-400/20
                bg-[#0B2550]/60
                shadow-2xl
                backdrop-blur-xl
              "
            >

              {/* Постер */}

              <div className="relative aspect-[4/5]">

                <Image
                  src={nextMatch.poster}
                  alt={`Матч ФК Разрыватели — ${nextMatch.opponent}`}
                  fill
                  priority
                  className="object-cover"
                />

              </div>

              {/* Информация */}

              <div className="p-6 sm:p-7">

                <p
                  className="
                    text-center
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-blue-400
                  "
                >
                  Следующий матч
                </p>

                <h2
                  className="
                    mt-3
                    text-center
                    text-2xl
                    font-black
                    sm:text-3xl
                  "
                >
                  Разрыватели — {nextMatch.opponent}
                </h2>

                <div className="mt-5 space-y-2 text-center text-slate-300">

                  <p>
                    📅 {nextMatch.date}
                  </p>

                  <p>
                    🕐 {nextMatch.time}
                  </p>

                  <p>
                    🏟 {nextMatch.stadium}
                  </p>

                </div>

                {/* Покупка билета */}

                <a
                  href="https://t.me/ilusuas?text=Здравствуйте!%20Хочу%20приобрести%20билет%20на%20матч%20ФК%20Разрыватели."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-6
                    block
                    rounded-xl
                    bg-blue-600
                    px-6
                    py-4
                    text-center
                    font-bold
                    transition
                    hover:bg-blue-500
                    active:scale-[0.98]
                  "
                >
                  🎟 Купить билет
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}