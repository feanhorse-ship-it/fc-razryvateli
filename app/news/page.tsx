import { news } from "@/data/news";
import NewsCard from "@/components/NewsCard";

export default function NewsPage() {
  return (
    <section className="container px-4 pb-16 pt-32 sm:px-6 sm:pt-36 lg:px-8">
      {/* Заголовок */}
      <div className="mb-10">
        <p className="eyebrow">Последние события</p>
        <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl lg:text-6xl">
          НОВОСТИ КЛУБА
        </h1>
        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          Всё самое важное из жизни ФК «Разрыватели»: трансферы, матчи и
          события клуба.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {news.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
