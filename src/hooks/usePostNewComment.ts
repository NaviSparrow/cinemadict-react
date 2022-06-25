import {CommentPostDataType} from '../types/comment-type';
import {postNewComment} from '../store/api-actions';
import {useAppDispatch} from './useAppDispatch';
import React from 'react';
import {ENTER} from '../service/const';

export const usePostNewComment = (id: number | null, data: CommentPostDataType) => {
  const dispatch = useAppDispatch();

  const postComment = ({key, ctrlKey}:React.KeyboardEvent<HTMLTextAreaElement>): void => {
    if (key === ENTER && ctrlKey) {
      if (data.emotion !== null && id !== null) {
        dispatch(postNewComment(id, data));
      }}
  };

  return {postComment};
};

