import Image from "next/image";

export default function SquadPreview() {
  return (
    <section className="container py-20">

      <h2 className="text-4xl font-black mb-10">
        Стартовый состав
      </h2>

      <div className="bg-[#0C2855] rounded-3xl overflow-hidden">

        <Image
          src="/images/formation.png"
          alt="Состав"
          width={1600}
          height={900}
          className="w-full"
        />

      </div>

    </section>
  );
}