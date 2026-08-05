import Link from "next/link";

export default function NextMatchSection() {
  return (
    <section className="py-20">

      <div className="container">

        <div className="rounded-3xl bg-gradient-to-r from-[#0B2550] to-[#133B7A] p-10">

          <h2 className="text-4xl font-black">
            Следующий матч
          </h2>

          <p className="mt-4 text-xl text-blue-300">
            ФК Разрыватели — Динамо
          </p>

          <p className="mt-2 text-slate-300">
            10 августа • 18:00 • Стадион «Петроградец»
          </p>

          <div className="mt-8">
            <a
              href="https://t.me/ilusuas?text=Здравствуйте!%20Хочу%20приобрести%20билет%20на%20матч%20ФК%20Разрыватели."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-xl bg-blue-600 px-8 py-4 font-bold hover:bg-blue-500 transition"
            >
              🎟 Купить билет
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}