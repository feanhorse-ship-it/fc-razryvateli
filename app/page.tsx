import Hero from "@/components/Hero";
import NewsSection from "@/components/NewsSection";
import NextMatchSection from "@/components/NextMatchSection";
import SquadPreview from "@/components/SquadPreview";
import GalleryPreview from "@/components/GalleryPreview";
import PartnersSection from "@/components/PartnersSection";

export default function Home() {
  return (
    <main className="bg-[#071B3B] text-white">

      <Hero />

      <NewsSection />

      <NextMatchSection />

      <SquadPreview />

      <GalleryPreview />

      <PartnersSection />

    </main>
  );
}
