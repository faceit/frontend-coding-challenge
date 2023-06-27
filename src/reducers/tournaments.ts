import { ActionWithPayload } from '.';
import { ActionType } from '../actions/tournaments';
import { Tournament, TournamentsState } from '../components/Tournament/types';

const initialState: TournamentsState = {
  data: [],
  isLoading: true,
  error: '',
  guerry: '',
};

const createTournamentHandler = (
  state: TournamentsState,
  { payload: newTournament }: ActionWithPayload<Tournament>
): TournamentsState => {
  return {
    ...state,
    data: [...state.data, newTournament],
  };
};

const handlers: {
  [key: string]: {
    (state: TournamentsState, action: ActionWithPayload<any>): TournamentsState;
  };
} = {
  [ActionType.CREATE_TOURNAMENT]: createTournamentHandler,
};

const tournamentsReducer = (
  state: TournamentsState = initialState,
  action: ActionWithPayload<any>
) => (handlers[action.type] ? handlers[action.type](state, action) : state);

export default tournamentsReducer;
