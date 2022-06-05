import React from 'react';
import {MovieType, newUserDetailsType} from '../../types/movie-type';
import {changeUserDetails} from '../../store/actions';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {FilterButton, formatReleaseDate, formatRunTime} from '../../service/const';
import useEscapeEventListener from '../../hooks/useEscapeEventListener';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';

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

  const popUpControlButtonClickHandler = (newUserDetails:newUserDetailsType) => dispatch(changeUserDetails(newUserDetails));
  const setButtonClassName = (isActive: boolean, buttonName:string):string => `film-details__control-button ${isActive ? 'film-details__control-button--active' : ''} film-details__control-button--${buttonName} `;

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
              <p className="film-details__age">{ageRating}</p>
            </div>
            <div className="film-details__info">
              <div className="film-details__info-head">
                <div className="film-details__title-wrap">
                  <h3 className="film-details__title">{title}</h3>
                  <p className="film-details__title-original">Original:{alternativeTitle}</p>
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
                  <td className="film-details__cell">{[...writers]}</td>
                </tr>
                <tr className="film-details__row">
                  <td className="film-details__term">Actors</td>
                  <td className="film-details__cell">{[...actors]}</td>
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
            <button type="button" className={setButtonClassName(alreadyWatched, 'watched')}
              id="watched"
              name="watched"
              onClick={() => popUpControlButtonClickHandler({id: id, key: FilterButton.alreadyWatched, value: !alreadyWatched})}
            >Already watched
            </button>
            <button type="button" className={setButtonClassName(favorite, 'favorite')}
              id="favorite"
              name="favorite"
              onClick={() => popUpControlButtonClickHandler({id: id, key: FilterButton.favorite, value: !favorite})}
            >Add to favorites
            </button>
          </section>
        </div>

        <div className="film-details__bottom-container">
          <section className="film-details__comments-wrap">
            <h3 className="film-details__comments-title">Comments <span className="film-details__comments-count">4</span></h3>

            <ul className="film-details__comments-list">
              <li className="film-details__comment">
                <span className="film-details__comment-emoji">
                  <img src="./images/emoji/smile.png" width="55" height="55" alt="emoji-smile"/>
                </span>
                <div>
                  <p className="film-details__comment-text">Interesting setting and a good cast</p>
                  <p className="film-details__comment-info">
                    <span className="film-details__comment-author">Tim Macoveev</span>
                    <span className="film-details__comment-day">2019/12/31 23:59</span>
                    <button className="film-details__comment-delete">Delete</button>
                  </p>
                </div>
              </li>
              <li className="film-details__comment">
                <span className="film-details__comment-emoji">
                  <img src="./images/emoji/sleeping.png" width="55" height="55" alt="emoji-sleeping"/>
                </span>
                <div>
                  <p className="film-details__comment-text">Booooooooooring</p>
                  <p className="film-details__comment-info">
                    <span className="film-details__comment-author">John Doe</span>
                    <span className="film-details__comment-day">2 days ago</span>
                    <button className="film-details__comment-delete">Delete</button>
                  </p>
                </div>
              </li>
              <li className="film-details__comment">
                <span className="film-details__comment-emoji">
                  <img src="./images/emoji/puke.png" width="55" height="55" alt="emoji-puke"/>
                </span>
                <div>
                  <p className="film-details__comment-text">Very very old. Meh</p>
                  <p className="film-details__comment-info">
                    <span className="film-details__comment-author">John Doe</span>
                    <span className="film-details__comment-day">2 days ago</span>
                    <button className="film-details__comment-delete">Delete</button>
                  </p>
                </div>
              </li>
              <li className="film-details__comment">
                <span className="film-details__comment-emoji">
                  <img src="./images/emoji/angry.png" width="55" height="55" alt="emoji-angry"/>
                </span>
                <div>
                  <p className="film-details__comment-text">Almost two hours? Seriously?</p>
                  <p className="film-details__comment-info">
                    <span className="film-details__comment-author">John Doe</span>
                    <span className="film-details__comment-day">Today</span>
                    <button className="film-details__comment-delete">Delete</button>
                  </p>
                </div>
              </li>
            </ul>

            <div className="film-details__new-comment">
              <div className="film-details__add-emoji-label"/>
              <label className="film-details__comment-label">
                <textarea className="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"/>
              </label>
              <div className="film-details__emoji-list">
                <input className="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile"/>
                <label className="film-details__emoji-label" htmlFor="emoji-smile">
                  <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji"/>
                </label>
                <input className="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping"/>
                <label className="film-details__emoji-label" htmlFor="emoji-sleeping">
                  <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji"/>
                </label>
                <input className="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke"/>
                <label className="film-details__emoji-label" htmlFor="emoji-puke">
                  <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji"/>
                </label>
                <input className="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry"/>
                <label className="film-details__emoji-label" htmlFor="emoji-angry">
                  <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji"/>
                </label>
              </div>
            </div>
          </section>
        </div>
      </form>
    </section>
  );
}

export default Popup;
