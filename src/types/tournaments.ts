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

export type Tournaments = {
  status: 'pending' | 'fulfilled' | 'rejected';
  filter: string;
  tournaments: Tournament[];
};
