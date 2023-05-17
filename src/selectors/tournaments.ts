import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../store';
import { RootThunkDispatch } from '../store';
import { Tournaments } from '../types/tournaments';

export const useTournamentDispatch: () => RootThunkDispatch = useDispatch;
export const useTournamentSelector = (): Tournaments =>
  useSelector((state: RootState) => state.tournaments);
