import React from 'react';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {useSelector} from 'react-redux';
import {getCurrentFilter} from '../../store/filters-data/filters-data';
import {AppFilter, getFilteredMovies} from '../../service/const';
import {changeFilter} from '../../store/actions';
import {getMoviesList} from '../../store/main-data/main-data';

function MainNavigation():JSX.Element {
  const dispatch = useAppDispatch();
  const currentAppFilter = useSelector(getCurrentFilter);
  const moviesList = useSelector(getMoviesList);

  const filterClickHandler = (filter:string) => dispatch(changeFilter(filter));
  const setFilterClassName = (filter: string) => `main-navigation__item ${currentAppFilter === filter ? 'main-navigation__item--active' : ''}`;

  return (
    <div>
      <nav className="main-navigation">
        <div className="main-navigation__items">
          <a href="/#" className={setFilterClassName(AppFilter.All)} onClick={() => filterClickHandler(AppFilter.All)}>
            {AppFilter.All}
          </a>
          <a href="/#" className={setFilterClassName(AppFilter.WatchList)} onClick={() => filterClickHandler(AppFilter.WatchList)}>
            {AppFilter.WatchList}
            <span className="main-navigation__item-count">{getFilteredMovies(moviesList, AppFilter.WatchList).length}</span>
          </a>
          <a href="/#" className={setFilterClassName(AppFilter.History)} onClick={() => filterClickHandler(AppFilter.History)}>
            {AppFilter.History}
            <span className="main-navigation__item-count">{getFilteredMovies(moviesList, AppFilter.History).length}</span>
          </a>
          <a href="/#" className={setFilterClassName(AppFilter.Favorites)} onClick={() => filterClickHandler(AppFilter.Favorites)}>
            {AppFilter.Favorites}
            <span className="main-navigation__item-count">{getFilteredMovies(moviesList, AppFilter.Favorites).length}</span>
          </a>
        </div>
        <a href="/#" className="main-navigation__additional">Stats</a>
      </nav>
    </div>
  );
}

export default MainNavigation;
