import Image from "next/image";
import Link from "next/link";
import { news } from "@/data/news";

export default function NewsSection() {
  // Показываем только три последние новости
  const latestNews = news.slice(0, 3);

  return (
    <section className="py-20">
      <div className="container">

        <div className="flex items-center justify-between mb-10">
          <h2 className="section-title">Новости клуба</h2>

          <Link
            href="/news"
            className="text-blue-400 hover:text-blue-300 transition font-semibold"
          >
            Все новости →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {latestNews.map((item) => (

            <article
              key={item.id}
              className="card overflow-hidden hover:scale-[1.02] transition duration-300"
            >

              <div className="relative aspect-[16/9]">

               <Image
  src={item.cover}
  alt={item.title}
  fill
  className="object-cover"
/>


             <p className="text-blue-400 text-sm mb-2">
  {item.date}
</p>

<h3 className="text-2xl font-bold">
  {item.title}
</h3>

<p className="mt-4 text-slate-400 line-clamp-3">
  {item.excerpt}
</p>

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}
