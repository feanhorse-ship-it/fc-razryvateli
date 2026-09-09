import Link from "next/link";
import Image from "next/image";

import { News } from "@/data/news";

export default function NewsCard({ item }: { item: News }) {
  return (
    <Link
      href={`/news/${item.slug}`}
      className="group overflow-hidden rounded-2xl border border-blue-500/20 bg-[#0B2550]/55 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-950/30"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-[#0A2145]">
        <Image
          src={item.cover}
          alt={item.title}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
          <span className="text-blue-400">{item.category}</span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-500">{item.date}</span>
        </div>

        <h2 className="mt-3 text-xl font-black leading-tight text-white transition-colors group-hover:text-blue-300">
          {item.title}
        </h2>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-400">
          {item.excerpt}
        </p>

        <p className="mt-5 text-sm font-bold text-blue-400">Читать далее →</p>
      </div>
    </Link>
  );
}
