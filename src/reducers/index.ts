import { combineReducers } from 'redux';
import tournaments from './tournaments';

const rootReducer = combineReducers({
  tournaments,
});

export default rootReducer;
