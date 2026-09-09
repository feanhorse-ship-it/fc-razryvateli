import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const partners = [
  {
    id: "rostics",
    name: "Rostic's",
    logo: "/partners/rostics.png",
    href: "https://rostics.ru/",
    external: true,
  },
  {
    id: "ilya",
    name: "Илья Лопатин",
    logo: "/partners/ilya-lopatin.png",
    href: "/sponsors/ilya-lopatin",
    external: false,
  },
];

export default function PartnersSection() {
  return (
    <section id="partners" className="py-16 sm:py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="mb-10 text-center sm:mb-14">
          <p className="eyebrow">Нас поддерживают</p>
          <h2 className="section-title mt-2">ПАРТНЁРЫ</h2>
        </div>

        {/* Карточки */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
          {partners.map((partner) => {
            const inner = (
              <>
                <div className="pointer-events-none absolute inset-0 bg-blue-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative h-24 w-48 sm:h-28 sm:w-56">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      sizes="(max-width: 640px) 80vw, 300px"
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <p className="mt-5 text-lg font-bold text-white transition-colors group-hover:text-blue-300">
                    {partner.name}
                  </p>

                  <p className="mt-2 flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-slate-500 transition-colors group-hover:text-blue-400">
                    Перейти
                    <ArrowUpRight size={14} />
                  </p>
                </div>
              </>
            );

            const className =
              "group relative flex min-h-[220px] w-full items-center justify-center overflow-hidden rounded-3xl border border-blue-500/20 bg-[#0B2550]/55 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/60 hover:shadow-2xl hover:shadow-blue-950/40";

            return partner.external ? (
              <a
                key={partner.id}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                {inner}
              </a>
            ) : (
              <Link key={partner.id} href={partner.href} className={className}>
                {inner}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
