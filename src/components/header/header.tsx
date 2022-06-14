import React from 'react';
import {useSelector} from 'react-redux';
import {getMoviesList} from '../../store/main-data/main-data';
import {AppFilter, ELEVEN, getFilteredMovies, ONE, TEN, TWENTY, TWENTY_ONE} from '../../service/const';

function Header():JSX.Element {
  const movies = useSelector(getMoviesList);
  const watchedMovies = getFilteredMovies(movies, AppFilter.History);

  const getStatus = (moviesCount:number):string => {
    if (moviesCount >= ONE || moviesCount <= TEN) {
      return 'novice';
    }
    else if (moviesCount >= ELEVEN || moviesCount <= TWENTY) {
      return 'fan';
    }
    else if (moviesCount > TWENTY_ONE) {
      return 'movie buff';
    }
    else {
      return 'not a fan';
    }
  };

  // eslint-disable-next-line no-console
  console.log('render header');
  return (
    <header className="header">
      <h1 className="header__logo logo">Cinemaddict</h1>
      {watchedMovies.length === 0
        ? ''
        : (
          <section className="header__profile profile">
            <p className="profile__rating">{getStatus(watchedMovies.length)}</p>
            <img className="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35"/>
          </section>
        )}
    </header>
  );
}

export default React.memo(Header);
