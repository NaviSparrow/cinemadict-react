import React from 'react';
import {MovieType, newUserDetailsType} from '../../types/movie-type';
import {BREAK_POINT_COUNT, FilterButton, formatRunTime, formatYear, getShortDescription} from '../../service/const';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {fillPopupMovie} from '../../store/actions';
import {changeUserData} from '../../store/api-actions';

type MovieCardProps = {
  movieCard: MovieType;
  onOpenPopup: () => void;
}

function MovieCard({movieCard, onOpenPopup}:MovieCardProps) {
  const dispatch = useAppDispatch();
  const {filmInfo, comments, userDetails} = movieCard;
  const {title, totalRating, poster, description, runtime, release, genre } = filmInfo;
  const {favorite, watchlist, alreadyWatched} = userDetails;

  const setupDescription = ():string => description.length < BREAK_POINT_COUNT ? description : getShortDescription(description);

  const movieControlButtonClickHandler = ({key, value}:newUserDetailsType) => {
    const newMovieCardData:MovieType= {
      ...movieCard,
      userDetails: {...userDetails, [key]: value}
    };
    dispatch(changeUserData(newMovieCardData));
  };

  const showDetailsClickHandler = () => {
    dispatch(fillPopupMovie(movieCard));
    onOpenPopup();
  };

  return (
    <article className="film-card">
      <h3 className="film-card__title" onClick={showDetailsClickHandler}>{title}</h3>
      <p className="film-card__rating">{totalRating}</p>
      <p className="film-card__info">
        <span className="film-card__year">{formatYear(release.date)}</span>
        <span className="film-card__duration">{formatRunTime(runtime)}</span>
        <span className="film-card__genre">{genre[0]}</span>
      </p>
      <img src={poster} alt="poster" className="film-card__poster" onClick={showDetailsClickHandler}/>
      <p className="film-card__description">{setupDescription()}</p>
      <a href={'/#'} className="film-card__comments">{comments.length} comments</a>
      <div className="film-card__controls ">
        <button className={`film-card__controls-item film-card__controls-item--add-to-watchlist ${watchlist ? 'film-card__controls-item--active' : ''}`} type="button"
          onClick={() => {
            movieControlButtonClickHandler({key: FilterButton.watchlist, value: !watchlist});
          }}
        >
          Add to watchlist
        </button>
        <button className={`film-card__controls-item film-card__controls-item--mark-as-watched ${alreadyWatched ? 'film-card__controls-item--active' : ''}`} type="button"
          onClick={() => {
            movieControlButtonClickHandler({key: FilterButton.alreadyWatched, value: !alreadyWatched});
          }}
        >
          Mark as watched
        </button>
        <button className={`film-card__controls-item film-card__controls-item--favorite ${favorite ? 'film-card__controls-item--active' : ''}`} type="button"
          onClick={() => {
            movieControlButtonClickHandler({key: FilterButton.favorite, value: !favorite});
          }}
        >
          Mark as favorite
        </button>
      </div>
    </article>
  );
}

export default React.memo(MovieCard, (prevProps:MovieCardProps, nextProps:MovieCardProps) => prevProps.movieCard.userDetails === nextProps.movieCard.userDetails );
