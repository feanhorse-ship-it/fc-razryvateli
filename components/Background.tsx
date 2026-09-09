import Image from "next/image";

/**
 * Глобальный декоративный фон: градиент, сетка, светящиеся пятна
 * и силуэт Санкт-Петербурга. Рендерится один раз в корневом layout.
 */
export default function Background() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 overflow-hidden bg-[#050D1F]"
    >
      {/* Базовый градиент */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1E42] via-[#071B3B] to-[#04101F]" />

      {/* Сетка */}
      <div className="bg-grid absolute inset-0 opacity-60" />

      {/* Светящиеся пятна */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Силуэт города */}
      <div className="bg-skyline">
        <Image
          src="/images/spb-outline.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-bottom"
        />
      </div>

      {/* Затемнение по краям */}
      <div className="bg-vignette absolute inset-0" />
    </div>
  );
}
