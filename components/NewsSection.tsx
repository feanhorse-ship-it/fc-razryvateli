import Image from "next/image";
import Link from "next/link";
import { news } from "@/data/news";

export default function NewsSection() {
  const latestNews = news.slice(0, 3);

  return (
    <section className="bg-[#071B3B] py-20 sm:py-24">
      <div className="container px-4 sm:px-6 lg:px-8">

        {/* Заголовок */}

        <div className="mb-10 flex items-end justify-between gap-4 sm:mb-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
              Последние события
            </p>

            <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
              НОВОСТИ
            </h2>
          </div>

          <Link
            href="/news"
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
            Все новости →
          </Link>
        </div>

        {/* Новости */}

        <div
          className="
            grid
            grid-cols-1
            gap-6
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {latestNews.map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.slug}`}
              className="
                group
                overflow-hidden
                rounded-2xl
                border
                border-blue-500/20
                bg-[#0B2550]/60
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-400/50
                hover:shadow-xl
                hover:shadow-blue-900/20
              "
            >

              {/* Изображение */}

              <div className="relative aspect-[16/9] overflow-hidden bg-[#0A2145]">
                <Image
                  src={item.cover}
                  alt={item.title}
                  fill
                  sizes="
                    (max-width: 640px) 100vw,
                    (max-width: 1024px) 50vw,
                    33vw
                  "
                  className="
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Текст */}

              <div className="p-5 sm:p-6">

                {/* Категория и дата */}

                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                  <span className="text-blue-400">
                    {item.category}
                  </span>

                  <span className="text-slate-600">
                    •
                  </span>

                  <span className="text-slate-500">
                    {item.date}
                  </span>
                </div>

                {/* Заголовок */}

                <h3
                  className="
                    mt-3
                    text-xl
                    font-black
                    leading-tight
                    text-white
                    transition-colors
                    group-hover:text-blue-300
                  "
                >
                  {item.title}
                </h3>

                {/* Подпись */}

                <p
                  className="
                    mt-3
                    line-clamp-2
                    text-sm
                    leading-6
                    text-slate-400
                  "
                >
                  {item.excerpt}
                </p>

                {/* Подробнее */}

                <div className="mt-5 text-sm font-bold text-blue-400">
                  Читать далее →
                </div>

              </div>
            </Link>
          ))}
        </div>

        {/* Кнопка для телефона */}

        <div className="mt-8 sm:hidden">
          <Link
            href="/news"
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
            Все новости →
          </Link>
        </div>

      </div>
    </section>
  );
}
