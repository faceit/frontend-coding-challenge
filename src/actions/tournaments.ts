import { RootGetState, RootState, RootThunkDispatch } from '../store';

import { API_TOURNAMENTS_URL } from '../constants/api';
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { Tournament } from '../types';

export type Thunk = ThunkAction<void, RootState, unknown, AnyAction>;

const fetchTournamentsStarted = () => ({
  type: 'tournaments/fetchStarted' as const,
});

const fetchTournamentsSuccess = (tournaments: Tournament[]) => ({
  type: 'tournaments/fetchSucceeded' as const,
  payload: tournaments,
});

const fetchTournamentsFailed = (error: unknown) => ({
  type: 'tournaments/fetchFailed' as const,
  error,
});

const fetchTournaments =
  (): Thunk => async (dispatch: RootThunkDispatch, getState: RootGetState) => {
    dispatch(fetchTournamentsStarted());

    try {
      const filter = getState().tournaments.filter;
      const url = filter
        ? `${API_TOURNAMENTS_URL}?q=${filter}`
        : API_TOURNAMENTS_URL;
      const response = await fetch(url);
      const tournaments = await response.json();
      dispatch(fetchTournamentsSuccess(tournaments));
    } catch (error) {
      dispatch(fetchTournamentsFailed(error));
    }
  };

const changeTournamentsFilter = (filter: string) => ({
  type: 'tournaments/changeFilter' as const,
  payload: filter,
});

const filterTournaments =
  (filter: string): Thunk =>
  async (dispatch: RootThunkDispatch) => {
    dispatch(changeTournamentsFilter(filter));
    dispatch(fetchTournaments());
  };

type Action =
  | ReturnType<typeof fetchTournamentsStarted>
  | ReturnType<typeof fetchTournamentsSuccess>
  | ReturnType<typeof fetchTournamentsFailed>
  | ReturnType<typeof changeTournamentsFilter>;

export type { Action };

export { fetchTournaments, changeTournamentsFilter, filterTournaments };
