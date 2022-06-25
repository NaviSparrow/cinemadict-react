import {toast} from 'react-toastify';
import {
  adaptedMovieType,
  MovieType,
  MovieFromServerType,
  MoviesListFromServerType,
  MoviesListType
} from '../types/movie-type';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
dayjs.extend(duration);
dayjs.extend(relativeTime);

const HOUR = 60;
export const BREAK_POINT_COUNT = 140;
export const TWO_CARDS = 2;
export const ONE = 1;
export const TEN = 10;
export const ELEVEN = 11;
export const TWENTY = 20;
export const TWENTY_ONE = 21;
export const MOVIES_STEP_COUNT = 5;
export const ESCAPE = 'Escape';
export const ENTER = 'Enter';
export const Control = 'Enter';


export enum ApiRoute {
  Movies = '/movies',
  Comments = '/comments',
}

export enum AppRoute {
  Root = '/',
}

export const AppFilter = {
  All: 'All movies',
  WatchList: 'WatchList',
  History: 'History',
  Favorites: 'Favorites'
};

export const AppSort = {
  ByDefault: 'Sort by default',
  ByDate: 'Sort by date',
  ByRating:'Sort by rating',
};

export const FilterButton = {
  watchlist: 'watchlist',
  alreadyWatched: 'alreadyWatched',
  favorite: 'favorite',
};

export const adaptedToClientMovie = (movie:MovieFromServerType):adaptedMovieType => {
  const adaptedMovie: adaptedMovieType = Object.assign(
    {},
    movie,
    {
      filmInfo: Object.assign(
        {},
        movie.film_info,
        {
          alternativeTitle: movie['film_info']['alternative_title'],
          totalRating: movie['film_info']['total_rating'],
          ageRating: movie['film_info']['age_rating'],
          release: Object.assign(
            {},
            movie.film_info.release,
            {
              releaseCountry: movie['film_info']['release']['release_country'],
            })
        }),
      userDetails: Object.assign(
        {},
        movie.user_details,
        {
          alreadyWatched: movie['user_details']['already_watched'],
          watchingDate: movie['user_details']['watching_date'],
        }),
    });
  delete adaptedMovie['film_info'];
  delete adaptedMovie['user_details'];
  delete adaptedMovie['filmInfo']['alternative_title'];
  delete adaptedMovie['filmInfo']['total_rating'];
  delete adaptedMovie['filmInfo']['age_rating'];
  delete adaptedMovie['filmInfo']['release']['release_country'];
  delete adaptedMovie['userDetails']['already_watched'];
  delete adaptedMovie['userDetails']['watching_date'];

  return adaptedMovie as MovieType;
};

export const adaptMoviesListToClient = (moviesList: MoviesListFromServerType) => moviesList.map((movie) => adaptedToClientMovie(movie));

export const onUnauthorizedError = (): string |number => toast.error('Пожалуйста авторизуйтесь');

export const formatRunTime = (time: number): string => {
  const filmRunTime = dayjs.duration(time, 'm');
  if (time < HOUR) {
    return  filmRunTime.format('m[m]');
  } else {
    return filmRunTime.format('H[h] m[m]');
  }
};

export const formatYear = (date: string):string => dayjs(date).format('YYYY');

export const formatReleaseDate = (movieReleaseDate:string):string => dayjs(movieReleaseDate).format('DD MMMM YYYY');

export const getShortDescription = (description: string):string => `${description.slice(0, BREAK_POINT_COUNT)}...`;

export const getFilteredMovies = (moviesList: MoviesListType, filter:string):MoviesListType => {
  switch (filter) {
    case AppFilter.WatchList:
      return moviesList.filter((movie) => movie.userDetails.watchlist);
    case AppFilter.History:
      return moviesList.filter((movie) => movie.userDetails.alreadyWatched);
    case AppFilter.Favorites:
      return moviesList.filter((movie) => movie.userDetails.favorite);
    default:
      return moviesList;
  }
};
