import {FiltersDataType} from '../../types/filters-data-type';
import {AppFilter, AppSort} from '../../service/const';
import {createReducer} from '@reduxjs/toolkit';
import {changeFilter, changeSort} from '../actions';
import {StateType} from '../../types/state-type';

const initialState: FiltersDataType = {
  filter: AppFilter.All,
  sort: AppSort.ByDefault
};

const filtersData = createReducer(initialState, (builder) => {
  builder
    .addCase(changeFilter, (state, action) => {
      state.filter = action.payload;
    })
    .addCase(changeSort, (state, action) => {
      state.sort = action.payload;
    });
});

export {filtersData};

export const getCurrentFilter = (state: StateType):string => state.filters.filter;
export const getCurrentSort = (state: StateType):string => state.filters.sort;
