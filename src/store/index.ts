import { AnyAction, Store, applyMiddleware, createStore } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';

import rootReducer from '../reducers';

const store: Store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type RootGetState = typeof store.getState;
export type RootDispatch = typeof store.dispatch;
export type RootThunkDispatch = ThunkDispatch<void, RootState, AnyAction>;

export default store;
