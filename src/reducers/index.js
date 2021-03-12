import { combineReducers, createStore } from 'redux';

import paletteReducer from './paletteReducer';
import themeReducer from './themeReducer';

const rootReducer = combineReducers({
  palette: paletteReducer,
  theme: themeReducer
});

export const store = createStore(rootReducer);
