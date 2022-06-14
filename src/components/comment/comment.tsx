import React from 'react';
import {CommentType} from '../../types/comment-type';

type CommentProps = {
  commentData:CommentType
}

function Comment({commentData}:CommentProps) {
  const {comment, author, date, emotion} = commentData;
  return (
    <li className="film-details__comment">
      <span className="film-details__comment-emoji">
        <img src={`./images/emoji/${emotion}.png`} width="55" height="55" alt="emoji-smile"/>
      </span>
      <div>
        <p className="film-details__comment-text">{comment}</p>
        <p className="film-details__comment-info">
          <span className="film-details__comment-author">{author}</span>
          <span className="film-details__comment-day">{date}</span>
          <button className="film-details__comment-delete">Delete</button>
        </p>
      </div>
    </li>
  );
}

export default React.memo(Comment, (prevProps:CommentProps, nextProps:CommentProps) => prevProps.commentData === nextProps.commentData);
