import {combineReducers} from '@reduxjs/toolkit';
import {mainData} from './main-data/main-data';
import {filtersData} from './filters-data/filters-data';

export const rootReducer = combineReducers({
  main: mainData,
  filters: filtersData,
});

export type RootState = ReturnType<typeof rootReducer>;
