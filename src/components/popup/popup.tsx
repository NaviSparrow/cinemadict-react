import React, {useEffect} from 'react';
import {MovieType, newUserDetailsType} from '../../types/movie-type';
import {changeUserDetails} from '../../store/actions';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {FilterButton, formatReleaseDate, formatRunTime} from '../../service/const';
import useEscapeEventListener from '../../hooks/useEscapeEventListener';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';
import {fetchCommentsList} from '../../store/api-actions';
import Comments from '../comments/comments';

type PopupProps = {
  movieData: MovieType;
  onClose: () => void
}

function Popup({movieData, onClose}:PopupProps): JSX.Element {
  useEscapeEventListener(onClose);
  useLockBodyScroll();

  const {filmInfo, userDetails, id} = movieData;
  const {title, totalRating, poster, description, runtime, release, genre, ageRating, alternativeTitle, director, writers, actors} = filmInfo;
  const {favorite, watchlist, alreadyWatched} = userDetails;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCommentsList(id));
  }, []);

  const popUpControlButtonClickHandler = (newUserDetails:newUserDetailsType) => dispatch(changeUserDetails(newUserDetails));

  return (
    <section className="film-details">
      <form className="film-details__inner" action="" method="get">
        <div className="film-details__top-container">
          <div className="film-details__close">
            <button className="film-details__close-btn" type="button" onClick={onClose}>close</button>
          </div>
          <div className="film-details__info-wrap">
            <div className="film-details__poster">
              <img className="film-details__poster-img" src={poster} alt=""/>
              <p className="film-details__age">{`+${ageRating}`}</p>
            </div>
            <div className="film-details__info">
              <div className="film-details__info-head">
                <div className="film-details__title-wrap">
                  <h3 className="film-details__title">{title}</h3>
                  <p className="film-details__title-original">Original: {alternativeTitle}</p>
                </div>

                <div className="film-details__rating">
                  <p className="film-details__total-rating">{totalRating}</p>
                </div>
              </div>
              <table className="film-details__table">
                <tr className="film-details__row">
                  <td className="film-details__term">Director</td>
                  <td className="film-details__cell">{director}</td>
                </tr>
                <tr className="film-details__row">
                  <td className="film-details__term">Writers</td>
                  <td className="film-details__cell">{[...writers].join(', ')}</td>
                </tr>
                <tr className="film-details__row">
                  <td className="film-details__term">Actors</td>
                  <td className="film-details__cell">{[...actors].join(', ')}</td>
                </tr>
                <tr className="film-details__row">
                  <td className="film-details__term">Release Date</td>
                  <td className="film-details__cell">{formatReleaseDate(release.date)}</td>
                </tr>
                <tr className="film-details__row">
                  <td className="film-details__term">Runtime</td>
                  <td className="film-details__cell">{formatRunTime(runtime)}</td>
                </tr>
                <tr className="film-details__row">
                  <td className="film-details__term">Country</td>
                  <td className="film-details__cell">{release.releaseCountry}</td>
                </tr>
                <tr className="film-details__row">
                  <td className="film-details__term">Genres</td>
                  <td className="film-details__cell">
                    {genre.map((genreItem) => <span key={genreItem} className="film-details__genre">{genreItem}</span>)}
                  </td>
                </tr>
              </table>
              <p className="film-details__film-description">{description}</p>
            </div>
          </div>
          <section className="film-details__controls">
            <button type="button" className={ `film-details__control-button ${watchlist ? 'film-details__control-button--active' : ''} film-details__control-button--watchlist`}
              onClick={() => {
                popUpControlButtonClickHandler({id: id, key: FilterButton.watchlist, value: !watchlist});
              }}
              id="watchlist"
              name="watchlist"
            >Add to watchlist
            </button>
            <button type="button" className={`film-details__control-button ${alreadyWatched ? 'film-details__control-button--active' : ''} film-details__control-button--watched`}
              id="watched"
              name="watched"
              onClick={() => popUpControlButtonClickHandler({id: id, key: FilterButton.alreadyWatched, value: !alreadyWatched})}
            >Already watched
            </button>
            <button type="button" className={`film-details__control-button ${favorite ? 'film-details__control-button--active' : ''} film-details__control-button--favorite`}
              id="favorite"
              name="favorite"
              onClick={() => popUpControlButtonClickHandler({id: id, key: FilterButton.favorite, value: !favorite})}
            >Add to favorites
            </button>
          </section>
        </div>
        <Comments />
      </form>
    </section>
  );
}

export default Popup;
