import React from 'react';
import {MoviesListType} from '../../types/movie-type';
import MovieCard from '../movie-card/movie-card';

type MoviesListProps = {
  moviesList:MoviesListType;
}

function MoviesCardsList({moviesList}:MoviesListProps):JSX.Element {
  return (
    <div className="films-list__container">
      {moviesList.map((movie) => <MovieCard key={movie.id} movieCard={movie}/>)}
    </div>
  );
}

export default MoviesCardsList;
