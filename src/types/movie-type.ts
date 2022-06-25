export type MovieFromServerType = {
  id: number;
  comments: number[];
  film_info: {
    title: string;
    alternative_title: string;
    total_rating: number;
    poster: string;
    age_rating: number;
    director: string;
    writers: string[];
    actors: string[];
    release: {
      date: string;
      release_country: string;
    },
    runtime: number;
    genre: string[];
    description: string;
  },
  user_details: {
    watchlist: boolean;
    already_watched: boolean;
    watching_date: string;
    favorite: boolean;
  }
};

export type MoviesListFromServerType = MovieFromServerType[];

export type MovieType = {
  id: number;
  comments: number[];
  filmInfo: {
    title: string;
    alternativeTitle: string;
    totalRating: number;
    poster: string;
    ageRating: number;
    director: string;
    writers: string[];
    actors: string[];
    release: {
      date: string;
      releaseCountry: string;
    },
    runtime: number;
    genre: string[];
    description: string;
  },
  userDetails: {
    watchlist: boolean;
    alreadyWatched: boolean;
    watchingDate: string;
    favorite: boolean;
  }
};

export type MoviesListType = MovieType[];

export type adaptedMovieType = {
  id: number;
  comments: number[];
  film_info?: MovieFromServerType['film_info'];
  filmInfo: {
    title: string;
    alternativeTitle: string;
    totalRating: number;
    poster: string;
    ageRating: number;
    director: string;
    writers: string[];
    actors: string[];
    alternative_title?: string;
    age_rating?: number;
    total_rating?: number;
    release: {
      date: string;
      releaseCountry: string;
      release_country?: string;
    },
    runtime: number;
    genre: string[];
    description: string;
  },
  user_details?: MovieFromServerType['user_details'];
  userDetails: {
    watchlist: boolean;
    alreadyWatched: boolean;
    watchingDate: string;
    favorite: boolean;
    watch_list?: boolean;
    already_watched?: boolean;
    watching_date?: string;
  }
};

export type newUserDetailsType = {
  key: string,
  value: boolean,
};

