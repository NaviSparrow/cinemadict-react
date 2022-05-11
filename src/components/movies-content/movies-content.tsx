import React, {useState} from 'react';
import MoviesCardsList from '../movies-cards-list/movies-cards-list';
import {useSelector} from 'react-redux';
import {getMoviesList} from '../../store/main-data/main-data';

const MOVIES_STEP_COUNT = 5;


function MoviesContent(): JSX.Element {
  const [numberToShow, setNumberToShow] = useState(MOVIES_STEP_COUNT);
  const moviesList = useSelector(getMoviesList);

  const showMoreClickHandler = () => setNumberToShow(numberToShow + MOVIES_STEP_COUNT);

  return (
    <section className="films">
      <section className="films-list">
        <h2 className="films-list__title visually-hidden">All movies. Upcoming</h2>
        <MoviesCardsList moviesList={moviesList.slice(0, numberToShow)} />
      </section>
      <button
        className={`films-list__show-more ${numberToShow === moviesList.length ? 'visually-hidden' : ''}`}
        onClick={showMoreClickHandler}
      >
        Show more
      </button>
    </section>
  );
}

export default MoviesContent;
