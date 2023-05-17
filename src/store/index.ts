import { Store, applyMiddleware, createStore } from 'redux';

import rootReducer from '../reducers';
import thunk from 'redux-thunk';

const store: Store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type RootGetState = typeof store.getState;
export type RootDispatch = typeof store.dispatch;

export default store;
