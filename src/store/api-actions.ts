import {AppThunkActionType} from '../types/thunk-action-type';
import {adaptMoviesListToClient, ApiRoute} from '../service/const';
import {changeIsDataLoaded, fillCommentsList, fillMoviesList, replaceMovie} from './actions';
import {CommentPostDataType, CommentsListType} from '../types/comment-type';
import {MoviesListFromServerType, MovieType} from '../types/movie-type';
import {AxiosResponse} from 'axios';

export const fetchMoviesList = ():AppThunkActionType =>
  async (dispatch, _getState, api) => {
    const response:AxiosResponse<MoviesListFromServerType> = await api.get(ApiRoute.Movies);
    const adaptedData = adaptMoviesListToClient(response.data);
    dispatch(fillMoviesList(adaptedData));
    dispatch(changeIsDataLoaded(true));
  };

export const fetchCommentsList = (id: number):AppThunkActionType =>
  async (dispatch, _getState, api) => {
    const response:AxiosResponse<CommentsListType> = await api.get(`${ApiRoute.Comments}/${id}`);
    dispatch(fillCommentsList(response.data));
  };

export const postNewComment = (id: number, newCommentData: CommentPostDataType):AppThunkActionType =>
  async (dispatch, _getState, api) => {
    const {comments}:{movie: MovieType, comments: CommentsListType} = await api.post(`${ApiRoute.Comments}/${id}`, newCommentData);
    dispatch(fillCommentsList(comments));
  };

export const changeUserData = (newMovieData: MovieType):AppThunkActionType =>
  async (dispatch, _getState, api) => {
    // eslint-disable-next-line no-console
    console.log(newMovieData);
    const response:AxiosResponse<MovieType> = await api.put(`${ApiRoute.Movies}/${newMovieData.id}`, newMovieData);
    // eslint-disable-next-line no-console
    console.log(response.data);
    dispatch(replaceMovie(response.data));
  };
