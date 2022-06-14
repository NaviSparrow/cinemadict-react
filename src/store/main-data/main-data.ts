import {MainDataType} from '../../types/main-data-type';
import {createReducer} from '@reduxjs/toolkit';
import {fillCommentsList, fillMoviesList, fillPopupMovie, changeIsDataLoaded, changeUserDetails} from '../actions';
import {StateType} from '../../types/state-type';
import {MovieType, MoviesListType} from '../../types/movie-type';
import {CommentsListType} from '../../types/comment-type';

const initialState: MainDataType = {
  movies: [],
  comments: [],
  popupMovie: null,
  isDataLoaded: false,
};

const mainData = createReducer(initialState, (builder) => {
  builder
    .addCase(fillMoviesList, (state, action) => {
      state.movies = action.payload;
    })
    .addCase(fillCommentsList, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(fillPopupMovie, (state, action) => {
      state.popupMovie = action.payload;
    })
    .addCase(changeIsDataLoaded, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(changeUserDetails, (state, action) => {
      const index = state.movies.findIndex((movie) => movie.id === action.payload.id);
      state.movies[index] = {
        ...state.movies[index],
        userDetails: {...state.movies[index].userDetails, [action.payload.key]: action.payload.value},
      };
      if (state.popupMovie && state.popupMovie.id === action.payload.id) {
        state.popupMovie = {
          ...state.popupMovie,
          userDetails: {...state.popupMovie.userDetails, [action.payload.key]: action.payload.value}
        };
      }
    });
});

export {mainData};

export const getMoviesList = (state:StateType):MoviesListType => state.main.movies;
export const getCommentsList = (state: StateType):CommentsListType => state.main.comments;
export const getPopupMovie = (state: StateType):MovieType | null => state.main.popupMovie;
export const getIsDataLoaded = (state: StateType):boolean => state.main.isDataLoaded;
