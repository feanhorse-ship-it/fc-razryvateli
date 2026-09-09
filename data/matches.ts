export interface Match {
  id: number;
  slug: string;
  opponent: string;
  date: string;
  time: string;
  stadium: string;
  home: boolean;
  played: boolean;
  score: string;
  poster: string;
  description: string;
}

export const matches: Match[] = [
  {
    id: 1,
    slug: "zenit",
    opponent: "СШОР Зенит",
    date: "3 августа 2026",
    time: "17:00",
    stadium: "Петроградец",
    home: true,
    played: true,
    score: "4:1",
    poster: "/images/match-poster.png",
    description: "Уверенная победа нашей команды со счетом 4:1.",
  },
  {
    id: 2,
    slug: "dynamo",
    opponent: "Динамо",
    date: "27 сентября 2026",
    time: "18:00",
    stadium: "Петроградец",
    home: true,
    played: false,
    score: "-",
    poster: "/images/formation.png",
    description: "Следующий матч команды. Ждём всех на стадионе «Петроградец»!",
  },
];
