import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { news } from "@/data/news";

export default async function Article({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = news.find((n) => n.slug === slug);

  if (!article) return notFound();

  return (
    <article className="container max-w-4xl px-4 pb-16 pt-32 sm:px-6 sm:pt-36 lg:px-8">
      <Link
        href="/news"
        className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 transition hover:text-blue-300"
      >
        <ArrowLeft size={16} />
        Все новости
      </Link>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-blue-600/20 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-blue-300">
          {article.category}
        </span>
        <span className="text-sm text-slate-500">{article.date}</span>
      </div>

      <h1 className="mt-5 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
        {article.title}
      </h1>

      <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-3xl border border-blue-500/20">
        <Image
          src={article.cover}
          alt={article.title}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 896px"
          className="object-cover"
        />
      </div>

      <div className="mt-10 space-y-6 text-lg leading-8 text-slate-300">
        {article.content.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </article>
  );
}
