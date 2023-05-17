import { useDispatch, useSelector } from 'react-redux';

import { RootDispatch } from '../store';
import { RootState } from '../store';
import { Tournaments } from '../types/tournaments';

export const useTournamentDispatch: () => RootDispatch = useDispatch;
export const useTournamentSelector = (): Tournaments =>
  useSelector((state: RootState) => state.tournaments);
