import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#071B3B]/75 border-b border-blue-500/20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="ФК Разрыватели"
            width={52}
            height={52}
          />

          <div>
            <h2 className="text-xl font-black tracking-wide">
              ФК Разрыватели
            </h2>

            <p className="text-sm text-blue-300">
              Санкт-Петербург
            </p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-semibold">

          <Link href="/" className="hover:text-blue-400 transition">
            Главная
          </Link>

          <Link href="/news" className="hover:text-blue-400 transition">
            Новости
          </Link>

          <Link href="/matches" className="hover:text-blue-400 transition">
            Матчи
          </Link>

          <Link href="/squad" className="hover:text-blue-400 transition">
            Состав
          </Link>

          <Link href="/gallery" className="hover:text-blue-400 transition">
            Галерея
          </Link>

          <Link href="/about" className="hover:text-blue-400 transition">
            О клубе
          </Link>

        </nav>

        <Link
          href="/tickets"
          className="rounded-xl bg-blue-600 px-5 py-3 font-bold transition hover:bg-blue-500"
        >
          Купить билет
        </Link>

      </div>
    </header>
  );
}
