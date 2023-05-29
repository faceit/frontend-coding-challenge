import { StoreTournaments } from '../components/Tournament/types';

export const getTournaments = (store: StoreTournaments) => {
  return store?.tournaments?.data;
};
