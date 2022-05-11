import {useSelector} from 'react-redux';
import {getIsDataLoaded} from '../../store/main-data/main-data';
import {fetchMoviesList} from '../../store/api-actions';
import {useEffect} from 'react';
import Header from '../header/header';
import MainNavigation from '../main-navigation/main-navigation';
import Sort from '../sort/sort';
import Footer from '../footer/footer';
import MoviesContent from '../movies-content/movies-content';
import Loader from '../loader/loader';
import {useAppDispatch} from '../../hooks/useAppDispatch';

function MainPage():JSX.Element {
  const dispatch = useAppDispatch();
  const isDataLoaded = useSelector(getIsDataLoaded);
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
        {isDataLoaded ? <MoviesContent/> : <Loader />}
      </main>
      <Footer />
    </>
  );
}

export default MainPage;
