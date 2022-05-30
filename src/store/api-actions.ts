import {AppThunkActionType} from '../types/thunk-action-type';
import {adaptMoviesListToClient, ApiRoute} from '../service/const';
import {changeIsDataLoaded, fillCommentsList, fillMoviesList} from './actions';
import {CommentPostDataType} from '../types/comment-type';

export const fetchMoviesList = ():AppThunkActionType =>
  async (dispatch, _getState, api) => {
    const {data} = await api.get(ApiRoute.Movies);
    const adaptedData = adaptMoviesListToClient(data);
    dispatch(fillMoviesList(adaptedData));
    dispatch(changeIsDataLoaded(true));
  };

export const fetchCommentsList = (id: number):AppThunkActionType =>
  async (dispatch, _getState, api) => {
    const {data} = await api.get(`${ApiRoute.Comments}/${id}`);
    dispatch(fillCommentsList(data));
  };

export const postNewComment = (id: number, newCommentData: CommentPostDataType):AppThunkActionType =>
  async (dispatch, _getState, api) => {
    const {data} = await api.post(`${ApiRoute.Comments}/${id}`, newCommentData);
    dispatch(fillCommentsList(data));
  };
