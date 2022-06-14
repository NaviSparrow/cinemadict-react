import React from 'react';
import {AppSort} from '../../service/const';
import {useSelector} from 'react-redux';
import {getCurrentSort} from '../../store/filters-data/filters-data';
import {changeSort} from '../../store/actions';
import {useAppDispatch} from '../../hooks/useAppDispatch';

function Sort():JSX.Element {
  const dispatch = useAppDispatch();
  const currentAppSort = useSelector(getCurrentSort);
  const buttonClickHandler = (sortName: string) =>  dispatch(changeSort(sortName));

  return (
    <ul className="sort">
      {Object.values(AppSort).map((sortItem) => (
        <li key={sortItem}>
          <a href="/#" className={`sort__button ${currentAppSort === sortItem ? 'sort__button--active' : ''}`} onClick={() => buttonClickHandler(sortItem)}>{sortItem}</a>
        </li>))}
    </ul>
  );
}

export default React.memo(Sort);
