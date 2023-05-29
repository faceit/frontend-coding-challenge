import { Action, combineReducers } from 'redux';
import tournaments from './tournaments';

export type ActionWithPayload<Payload> = Action & {
  payload: Payload;
};

const rootReducer = combineReducers({
  tournaments,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
