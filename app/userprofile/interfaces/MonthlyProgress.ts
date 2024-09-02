export interface MonthlyProgress {
  month: number; // Månadens nummer (1-12)
  startWeight: number; // Vikt vid månadens början
  endWeight: number; // Vikt vid månadens slut
  goalWeight: number; // Målet för månaden
  achieved: boolean; // Om målet uppnåddes
}

export default MonthlyProgress;
