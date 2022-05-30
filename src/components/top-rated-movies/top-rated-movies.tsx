import React from 'react';
import {useSelector} from 'react-redux';
import {getMoviesList} from '../../store/main-data/main-data';
import MoviesCardsList from '../movies-cards-list/movies-cards-list';
import {MoviesListType, MovieType} from '../../types/movie-type';
import {TWO_CARDS} from '../../service/const';

function TopRatedMovies() {
  const moviesList = useSelector(getMoviesList);
  const compareFunction = (movieA: MovieType, movieB: MovieType) => movieB.filmInfo.totalRating - movieA.filmInfo.totalRating;
  const getTopRatedMovies = (): MoviesListType => moviesList.slice().sort(compareFunction).slice(0, TWO_CARDS);
  return (
    <section className="films-list films-list--extra">
      <h2 className="films-list__title">Top rated</h2>
      <MoviesCardsList moviesList={getTopRatedMovies()} />
    </section>
  );
}

export default TopRatedMovies;
