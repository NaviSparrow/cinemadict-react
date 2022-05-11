import {useDispatch} from 'react-redux';
import {store} from '../index';

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
