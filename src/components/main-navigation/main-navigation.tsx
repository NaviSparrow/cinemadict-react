import React from 'react';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {useSelector} from 'react-redux';
import {getCurrentFilter} from '../../store/filters-data/filters-data';
import {AppFilter} from '../../service/const';
import {changeFilter} from '../../store/actions';
import {getMoviesList} from '../../store/main-data/main-data';

function MainNavigation():JSX.Element {
  const dispatch = useAppDispatch();
  const currentAppFilter = useSelector(getCurrentFilter);
  const moviesList = useSelector(getMoviesList);

  const filterClickHandler = (filter:string) => dispatch(changeFilter(filter));
  const setFilterClassName = (filter: string) => `main-navigation__item ${currentAppFilter === filter ? 'main-navigation__item--active' : ''}`;
  const getFilterCount = (filter:string):number => {
    switch (filter) {
      case AppFilter.WatchList:
        return moviesList.filter((movie) => movie.userDetails.watchlist).length;
      case AppFilter.History:
        return moviesList.filter((movie) => movie.userDetails.alreadyWatched).length;
      case AppFilter.Favorites:
        return moviesList.filter((movie) => movie.userDetails.favorite).length;
      default: return moviesList.length;
    }
  };

  return (
    <div>
      <nav className="main-navigation">
        <div className="main-navigation__items">
          <a href="#all" className={setFilterClassName(AppFilter.All)} onClick={() => filterClickHandler(AppFilter.All)}>
            {AppFilter.All}
          </a>
          <a href="#watchlist" className={setFilterClassName(AppFilter.WatchList)} onClick={() => filterClickHandler(AppFilter.WatchList)}>
            {AppFilter.WatchList}
            <span className="main-navigation__item-count">{getFilterCount(AppFilter.WatchList)}</span>
          </a>
          <a href="#history" className={setFilterClassName(AppFilter.History)} onClick={() => filterClickHandler(AppFilter.History)}>
            {AppFilter.History}
            <span className="main-navigation__item-count">{getFilterCount(AppFilter.History)}</span>
          </a>
          <a href="#favorites" className={setFilterClassName(AppFilter.Favorites)} onClick={() => filterClickHandler(AppFilter.Favorites)}>
            {AppFilter.Favorites}
            <span className="main-navigation__item-count">{getFilterCount(AppFilter.Favorites)}</span>
          </a>
        </div>
        <a href="#stats" className="main-navigation__additional">Stats</a>
      </nav>
    </div>
  );
}

export default MainNavigation;
