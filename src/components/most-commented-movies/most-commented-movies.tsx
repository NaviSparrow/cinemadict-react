import React from 'react';
import MoviesCardsList from '../movies-cards-list/movies-cards-list';
import {useSelector} from 'react-redux';
import {getMoviesList} from '../../store/main-data/main-data';
import {MovieType} from '../../types/movie-type';
import {TWO_CARDS} from '../../service/const';

type MostCommentedMoviesProps = {
  onOpenPopup: () => void;
}

function MostCommentedMovies({onOpenPopup}:MostCommentedMoviesProps) {
  const moviesList = useSelector(getMoviesList);
  const compareFunction = (movieA: MovieType, movieB: MovieType) => movieB.comments.length - movieA.comments.length;
  const getMostCommentedMovies = () => moviesList.slice().sort(compareFunction).slice(0, TWO_CARDS);
  return (
    <section className="films-list films-list--extra">
      <h2 className="films-list__title">Most commented</h2>
      <MoviesCardsList moviesList={getMostCommentedMovies()} onOpenPopup={onOpenPopup} />
    </section>
  );
}

export default MostCommentedMovies;
