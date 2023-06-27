import { Tournament } from '../components/Tournament/types';

export const enum ActionType {
  CREATE_TOURNAMENT = 'CREATE_TOURNAMENTS',
  DELETE_TOURNAMENT = 'DELETE_TOURNAMENTS',
}

export interface CreateTournamentAction {
  type: ActionType.CREATE_TOURNAMENT;
  payload: Tournament;
}
export function createTournament(
  tournament: Tournament
): CreateTournamentAction {
  return {
    type: ActionType.CREATE_TOURNAMENT,
    payload: tournament,
  };
}
