import {createAction} from '@reduxjs/toolkit';
import {ActionType} from '../types/actions-type';
import {MovieType, MoviesListType} from '../types/movie-type';
import {CommentsListType} from '../types/comment-type';

export const fillMoviesList = createAction(
  ActionType.FillMoviesList,
  (moviesList: MoviesListType) => ({
    payload:moviesList,
  })
);

export const fillCommentsList = createAction(
  ActionType.FillCommentsList,
  (commentsList: CommentsListType) => ({
    payload: commentsList,
  })
);

export const fillPopupMovie = createAction(
  ActionType.FillPopupMovie,
  (movie:MovieType) => ({
    payload: movie,
  })
);

export const changeIsDataLoaded = createAction(
  ActionType.isDataLoaded,
  (isLoaded:boolean) => ({
    payload: isLoaded,
  })
);

export const changeFilter = createAction(
  ActionType.changeFilter,
  (filter:string) => ({
    payload: filter,
  })
);

export const changeSort = createAction(
  ActionType.changeSort,
  (sort:string) => ({
    payload: sort,
  })
);

export const replaceMovie = createAction(
  ActionType.replaceMovie,
  (movie: MovieType) => ({
    payload: movie,
  })
);
