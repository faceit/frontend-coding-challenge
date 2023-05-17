import { Action } from '../actions/tournaments';
import { Tournaments } from '../types';

const initialState: Tournaments = {
  status: 'pending',
  filter: '',
  tournaments: [],
};

export default function tournaments(
  state: Tournaments = initialState,
  action: Action
) {
  switch (action.type) {
    case 'tournaments/fetchStarted':
      return { ...state, status: 'pending' };
    case 'tournaments/fetchSucceeded':
      return { ...state, status: 'fulfilled', tournaments: action.payload };
    case 'tournaments/fetchFailed':
      return { ...state, status: 'rejected' };
    case 'tournaments/changeFilter':
      return { ...state, filter: action.payload };
  }
  return state;
}
