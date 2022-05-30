import React, {useState} from 'react';
import MoviesCardsList from '../movies-cards-list/movies-cards-list';
import {useSelector} from 'react-redux';
import {getMoviesList} from '../../store/main-data/main-data';
import {getCurrentFilter, getCurrentSort} from '../../store/filters-data/filters-data';
import {AppSort, getFilteredMovies} from '../../service/const';
import {MoviesListType, MovieType} from '../../types/movie-type';
import dayjs from 'dayjs';
import TopRatedMovies from '../top-rated-movies/top-rated-movies';
import MostCommentedMovies from '../most-commented-movies/most-commented-movies';

const MOVIES_STEP_COUNT = 5;

function MoviesContent(): JSX.Element {
  const [numberToShow, setNumberToShow] = useState(MOVIES_STEP_COUNT);
  const moviesList = useSelector(getMoviesList);
  const currentFilter = useSelector(getCurrentFilter);
  const currentSort = useSelector(getCurrentSort);

  const showMoreClickHandler = () => setNumberToShow(numberToShow + MOVIES_STEP_COUNT);

  const compareFunction = (movieA:MovieType, movieB: MovieType) => {
    if (currentSort === AppSort.ByRating) {
      return movieB.filmInfo.totalRating - movieA.filmInfo.totalRating;
    } else if (currentSort === AppSort.ByDate) {
      const releaseDateMovieA = dayjs(movieA.filmInfo.release.date);
      const releaseDateMovieB = dayjs(movieB.filmInfo.release.date);
      return releaseDateMovieB.diff(releaseDateMovieA, 'year');
    }
    else {return 0;}
  };

  const getCurrentMoviesList = (): MoviesListType =>
    getFilteredMovies(moviesList, currentFilter)
      .slice()
      .sort(compareFunction)
      .slice(0, numberToShow);

  return (
    <section className="films">
      <section className="films-list">
        <h2 className="films-list__title visually-hidden">All movies. Upcoming</h2>
        <MoviesCardsList moviesList={getCurrentMoviesList()} />
      </section>
      <button
        className={`films-list__show-more ${numberToShow === moviesList.length ? 'visually-hidden' : ''}`}
        onClick={showMoreClickHandler}
      >
        Show more
      </button>
      <TopRatedMovies />
      <MostCommentedMovies />
    </section>
  );
}

export default MoviesContent;
