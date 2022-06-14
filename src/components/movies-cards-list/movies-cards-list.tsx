import React from 'react';
import {MoviesListType} from '../../types/movie-type';
import MovieCard from '../movie-card/movie-card';

type MoviesListProps = {
  moviesList:MoviesListType;
  onOpenPopup: () => void;
}

function MoviesCardsList({moviesList, onOpenPopup}:MoviesListProps):JSX.Element {
  return (
    <div className="films-list__container">
      {moviesList.map((movie) => <MovieCard key={movie.id} movieCard={movie} onOpenPopup={onOpenPopup}/>)}
    </div>
  );
}

export default React.memo(MoviesCardsList, (prevProps:MoviesListProps, nextProps:MoviesListProps) => prevProps.moviesList === nextProps.moviesList);
