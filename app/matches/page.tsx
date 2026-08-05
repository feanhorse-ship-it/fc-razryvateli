import { matches } from "@/data/matches";
import MatchCard from "@/components/MatchCard";

export default function MatchesPage() {
  return (
    <section className="container py-32">

      <h1 className="text-6xl font-black mb-12">

        Матчи

      </h1>

      <div className="grid lg:grid-cols-2 gap-10">

        {matches.map(match => (

          <MatchCard
            key={match.id}
            match={match}
          />

        ))}

      </div>

    </section>
  );
}