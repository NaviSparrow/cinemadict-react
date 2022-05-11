import React from 'react';
import {useSelector} from 'react-redux';
import {getMoviesList} from '../../store/main-data/main-data';

function Footer():JSX.Element {
  const moviesCount = useSelector(getMoviesList);
  return (
    <footer className="footer">
      <section className="footer__logo logo logo--smaller">Cinemaddict</section>
      <section className="footer__statistics">
        <p>{moviesCount.length} movies inside</p>
      </section>
    </footer>
  );
}

export default Footer;
