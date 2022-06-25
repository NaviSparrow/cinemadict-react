import React from 'react';
import {CommentsListType, CommentType} from '../../types/comment-type';
import Comment from '../comment/comment';

type CommentsListProps = {
  commentsList: CommentsListType
}

function CommentsList({commentsList}:CommentsListProps) {
  return (
    <>
      <h3 className="film-details__comments-title">Comments <span className="film-details__comments-count">{commentsList && commentsList.length}</span></h3>
      <ul className="film-details__comments-list">
        {commentsList && commentsList.map((comment:CommentType) => <Comment key={comment.id} commentData={comment} />)}
      </ul>
    </>
  );
}

export default React.memo(CommentsList, (prevProps:CommentsListProps, nextProps:CommentsListProps) => prevProps.commentsList === nextProps.commentsList);
