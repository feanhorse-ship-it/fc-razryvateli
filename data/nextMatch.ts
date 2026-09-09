export interface NextMatch {
  opponent: string;
  date: string;
  time: string;
  stadium: string;
  poster: string;
  /** Дата в ISO-формате для таймера обратного отсчёта */
  dateISO: string;
}

export const nextMatch: NextMatch = {
  opponent: "Динамо",
  date: "27 сентября 2026",
  time: "18:00",
  stadium: "Петроградец",
  poster: "/images/match-poster.png",
  dateISO: "2026-09-27T18:00:00",
};
