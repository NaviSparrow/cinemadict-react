import {MovieType, MoviesListType} from './movie-type';
import {CommentsListType} from './comment-type';

export type MainDataType = {
  movies: MoviesListType;
  comments: CommentsListType;
  popupMovie: MovieType | null;
  isDataLoaded: boolean;
};
