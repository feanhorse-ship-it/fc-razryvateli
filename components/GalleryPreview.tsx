import Image from "next/image";

const photos = [
  {
    src: "/images/match-poster.png",
    alt: "Афиша матча",
    caption: "Афиша матча",
  },
  {
    src: "/images/formation.png",
    alt: "Схема команды",
    caption: "Тактическая схема",
  },
  {
    src: "/news/news1.jpg",
    alt: "Новости клуба",
    caption: "Возвращение в команду",
  },
  {
    src: "/news/news2.jpg",
    alt: "Новости клуба",
    caption: "Новичок команды",
  },
  {
    src: "/news/news3.jpg",
    alt: "Новости клуба",
    caption: "Продление контракта",
  },
];

export default function GalleryPreview() {
  return (
    <section id="gallery" className="py-16 sm:py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="mb-8 sm:mb-12">
          <p className="eyebrow">Моменты клуба</p>
          <h2 className="section-title mt-2">ФОТОГАЛЕРЕЯ</h2>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {photos.map((photo, index) => (
            <figure
              key={index}
              className={`group relative overflow-hidden rounded-2xl border border-blue-500/20 bg-[#0B2550]/55 ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <div
                className={`relative w-full overflow-hidden ${
                  index === 0 ? "aspect-square" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Подпись */}
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-[#04101F] via-[#04101F]/70 to-transparent p-4 pt-10 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm font-bold text-white">{photo.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
