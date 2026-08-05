export default function MatchSection() {
  return (
    <section className="container py-20">

      <div className="rounded-3xl bg-gradient-to-r from-[#0C2855] to-[#15458E] p-12">

        <h2 className="text-4xl font-black mb-8">
          Следующий матч
        </h2>

        <div className="grid md:grid-cols-3 items-center text-center gap-8">

          <div>

            <h3 className="text-3xl font-bold">

              Разрыватели

            </h3>

          </div>

          <div>

            <p className="text-5xl font-black text-blue-400">
              VS
            </p>

            <p className="mt-5 text-slate-300">
              3 августа • 13:00
            </p>

            <p className="text-slate-400">
              Стадион «Петроградец»
            </p>

          </div>

          <div>

            <h3 className="text-3xl font-bold">
              Соперник
            </h3>

          </div>

        </div>

      </div>

    </section>
  );
}