export type TournamentConfig = {
  tournament: Tournament;
};
export type TournamentsState = {
  data: Tournament[];
  isLoading: boolean;
  error: string;
  guerry: string;
};
export type StoreTournaments = { [key: string]: TournamentsState };
export type Tournament = {
  id: string;
  name: string;
  organizer: string;
  game: string;
  participants: {
    current: number;
    max: number;
  };
  startDate: string;
};
