import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="container flex min-h-[70vh] flex-col items-center justify-center px-4 py-32 text-center">
      <p className="text-7xl font-black text-blue-300 sm:text-8xl">404</p>
      <h1 className="mt-6 text-3xl font-black text-white sm:text-4xl">
        Страница не найдена
      </h1>
      <p className="mt-4 max-w-md leading-7 text-slate-400">
        Похоже, мяч улетел за пределы поля. Такой страницы нет — но клуб на
        месте.
      </p>
      <Link href="/" className="btn btn-primary mt-8">
        <ArrowLeft size={18} />
        На главную
      </Link>
    </section>
  );
}
