import { combineReducers, createStore } from 'redux';

import paletteReducer from './paletteReducer';

const rootReducer = combineReducers({
  palette: paletteReducer,
});

export const store = createStore(rootReducer);
