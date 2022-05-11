import {Action, ThunkAction} from '@reduxjs/toolkit';
import {StateType} from './state-type';
import {AxiosInstance} from 'axios';

export type AppThunkActionType<ReturnType = void> = ThunkAction<ReturnType, StateType, AxiosInstance, Action>;
