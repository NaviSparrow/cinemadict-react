import {useSelector} from 'react-redux';
import {getIsDataLoaded, getPopupMovie} from '../../store/main-data/main-data';
import {fetchMoviesList} from '../../store/api-actions';
import React, {useEffect, useState} from 'react';
import Header from '../header/header';
import MainNavigation from '../main-navigation/main-navigation';
import Sort from '../sort/sort';
import Footer from '../footer/footer';
import MoviesContent from '../movies-content/movies-content';
import Loader from '../loader/loader';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import Popup from '../popup/popup';

function MainPage():JSX.Element {
  const dispatch = useAppDispatch();
  const isDataLoaded = useSelector(getIsDataLoaded);
  const popupMovie = useSelector(getPopupMovie);
  const [isPopupShow, setIsPopupShow] = useState(false);

  const openPopup = () => setIsPopupShow(true);
  const closePopup = () => setIsPopupShow(false);
  const fetchMovies = () => {
    dispatch(fetchMoviesList());
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        <MainNavigation />
        <Sort />
        {isDataLoaded ? <MoviesContent onOpenPopup={openPopup}/> : <Loader />}
      </main>
      <Footer />
      {(isPopupShow && popupMovie) && <Popup movieData={popupMovie} onClose={closePopup}/>}
    </>
  );
}

export default MainPage;
