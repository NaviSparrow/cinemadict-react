import React from 'react';
import {MovieType} from '../../types/movie-type';
import {BREAK_POINT_COUNT, formatRunTime, formatYear, getShortDescription} from '../../service/const';

type MovieCardProps = {
  movieCard: MovieType;
}

function MovieCard({movieCard}:MovieCardProps) {
  const {filmInfo, comments, userDetails} = movieCard;
  const {title, totalRating, poster, description, runtime, release, genre } = filmInfo;
  const {favorite, watchlist, alreadyWatched} = userDetails;

  const setupDescription = ():string => description.length < BREAK_POINT_COUNT ? description : getShortDescription(description);

  return (
    <article className="film-card">
      <h3 className="film-card__title">{title}</h3>
      <p className="film-card__rating">{totalRating}</p>
      <p className="film-card__info">
        <span className="film-card__year">{formatYear(release.date)}</span>
        <span className="film-card__duration">{formatRunTime(runtime)}</span>
        <span className="film-card__genre">{genre[0]}</span>
      </p>
      <img src={poster} alt="poster" className="film-card__poster"/>
      <p className="film-card__description fi">{setupDescription()}</p>
      <a href={'/#'} className="film-card__comments">{comments.length} comments</a>
      <div className="film-card__controls ">
        <button className={`film-card__controls-item film-card__controls-item--add-to-watchlist ${watchlist ? 'film-card__controls-item--active' : ''}`} type="button">
          Add to watchlist
        </button>
        <button className={`film-card__controls-item film-card__controls-item--mark-as-watched ${alreadyWatched ? 'film-card__controls-item--active' : ''}`} type="button">
          Mark as watched
        </button>
        <button className={`film-card__controls-item film-card__controls-item--favorite ${favorite ? 'film-card__controls-item--active' : ''}`} type="button">
          Mark as favorite
        </button>
      </div>
    </article>
  );
}

export default MovieCard;
