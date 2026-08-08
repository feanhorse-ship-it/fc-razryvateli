"use client";

import Image from "next/image";
import { useState } from "react";

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
  const [selected, setSelected] = useState<string | null>(null);

  const handleClick = (
    id: string,
    href: string,
    external: boolean
  ) => {
    // Первое нажатие — только выделяем карточку
    if (selected !== id) {
      setSelected(id);
      return;
    }

    // Второе нажатие — переход
    if (external) {
      window.open(href, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = href;
    }
  };

  return (
    <section className="bg-[#071B3B] py-20 sm:py-24">
      <div className="container px-4 sm:px-6 lg:px-8">

        {/* Заголовок */}

        <div className="mb-10 text-center sm:mb-14">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
            Нас поддерживают
          </p>

          <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
            ПАРТНЁРЫ
          </h2>
        </div>

        {/* Карточки */}

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">

          {partners.map((partner) => {
            const isSelected = selected === partner.id;

            return (
              <button
                key={partner.id}
                type="button"
                onClick={() =>
                  handleClick(
                    partner.id,
                    partner.href,
                    partner.external
                  )
                }
                className={`
                  group
                  relative
                  flex
                  min-h-[220px]
                  w-full
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-3xl
                  border
                  bg-[#0B2550]/60
                  p-8
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  ${
                    isSelected
                      ? "scale-[1.03] border-blue-400 shadow-2xl shadow-blue-900/40"
                      : "border-blue-500/20 hover:border-blue-400/50"
                  }
                `}
              >

                {/* Свечение */}

                <div
                  className={`
                    absolute
                    inset-0
                    bg-blue-500/10
                    opacity-0
                    transition-opacity
                    duration-300
                    ${
                      isSelected
                        ? "opacity-100"
                        : "group-hover:opacity-100"
                    }
                  `}
                />

                {/* Логотип */}

                <div className="relative z-10 flex flex-col items-center">

                  <div className="relative h-24 w-48 sm:h-28 sm:w-56">

                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      sizes="(max-width: 640px) 80vw, 300px"
                      className="
                        object-contain
                        transition-transform
                        duration-300
                        group-hover:scale-105
                      "
                    />

                  </div>

                  <p
                    className={`
                      mt-5
                      text-lg
                      font-bold
                      transition-colors
                      ${
                        isSelected
                          ? "text-blue-300"
                          : "text-white"
                      }
                    `}
                  >
                    {partner.name}
                  </p>

                  {isSelected && (
                    <p className="mt-2 text-xs text-slate-400">
                      Нажмите ещё раз для перехода
                    </p>
                  )}

                </div>

              </button>
            );
          })}

        </div>

      </div>
    </section>
  );
}