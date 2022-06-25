import React from 'react';
import {useSelector} from 'react-redux';
import {getCommentsList} from '../../store/main-data/main-data';
import CommentsList from '../comments-list/comments-list';
import NewCommentForm from '../new-comment-form/new-comment-form';


function CommentsSection():JSX.Element {
  const commentsList = useSelector(getCommentsList);

  return (
    <div className="film-details__bottom-container">
      <section className="film-details__comments-wrap">
        <CommentsList commentsList={commentsList}/>
        <NewCommentForm />
      </section>
    </div>
  );
}

export default CommentsSection;
