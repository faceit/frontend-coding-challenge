import { RootDispatch, RootGetState, RootState } from '../store';

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
  (): Thunk => async (dispatch: RootDispatch, getState: RootGetState) => {
    dispatch(fetchTournamentsStarted());

    // The search here may return unexpected tournaments because it searches _all_ fields.
    // This includes the ISO start date and id fields at the time of writing.
    // It appears that the backend doesn't support searching specific fields. (filters are exact matches only)

    try {
      const base = API_TOURNAMENTS_URL;
      const search = getState().tournaments.search;
      const url = search ? `${base}?q=${search}` : base;
      const response = await fetch(url);
      const tournaments = await response.json();
      dispatch(fetchTournamentsSuccess(tournaments));
    } catch (error) {
      dispatch(fetchTournamentsFailed(error));
    }
  };

type Action =
  | ReturnType<typeof fetchTournamentsStarted>
  | ReturnType<typeof fetchTournamentsSuccess>
  | ReturnType<typeof fetchTournamentsFailed>;

export type { Action };

export { fetchTournaments };
